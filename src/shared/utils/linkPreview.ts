import { LinkCardMetadata } from '@/shared/types';
import { ensureHostPermission } from './hostPermission';
import { normalizeUrl } from './url';

const FETCH_TIMEOUT_MS = 5000;

const getHostname = (url: string): string => {
    try {
        return new URL(url).hostname.replace(/^www\./i, '');
    } catch {
        return url;
    }
};

const fallbackPreview = (url: string): LinkCardMetadata => {
    const normalizedUrl = normalizeUrl(url);
    const host = getHostname(normalizedUrl);

    return {
        url: normalizedUrl,
        title: host,
        subtitle: normalizedUrl,
        siteName: host,
    };
};

const getMetaContent = (doc: Document, selectors: string[]): string => {
    for (const selector of selectors) {
        const content = doc.querySelector<HTMLMetaElement>(selector)?.content?.trim();
        if (content) return content;
    }
    return '';
};

const resolveUrl = (rawUrl: string, baseUrl: string): string | undefined => {
    if (!rawUrl.trim()) return undefined;

    try {
        return new URL(rawUrl, baseUrl).toString();
    } catch {
        return undefined;
    }
};

export async function fetchLinkPreview(rawUrl: string): Promise<LinkCardMetadata> {
    const url = normalizeUrl(rawUrl);
    const fallback = fallbackPreview(url);
    const permitted = await ensureHostPermission();

    if (!permitted) {
        return fallback;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
        const response = await fetch(url, {
            signal: controller.signal,
            credentials: 'omit',
            redirect: 'follow',
        });

        if (!response.ok) {
            return fallback;
        }

        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');

        const title = getMetaContent(doc, [
            'meta[property="og:title"]',
            'meta[name="twitter:title"]',
        ]) || doc.querySelector('title')?.textContent?.trim() || fallback.title;

        const subtitle = getMetaContent(doc, [
            'meta[property="og:description"]',
            'meta[name="description"]',
            'meta[name="twitter:description"]',
        ]) || fallback.subtitle;

        const image = getMetaContent(doc, [
            'meta[property="og:image"]',
            'meta[property="og:image:url"]',
            'meta[name="twitter:image"]',
            'meta[name="twitter:image:src"]',
        ]);

        const siteName = getMetaContent(doc, ['meta[property="og:site_name"]']) || fallback.siteName;

        return {
            url,
            title,
            subtitle,
            imageUrl: resolveUrl(image, url),
            siteName,
        };
    } catch {
        return fallback;
    } finally {
        window.clearTimeout(timeoutId);
    }
}
