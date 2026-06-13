import { useEffect, useRef } from 'react';
import { autoSync, uploadToCloud, isAutoSyncEnabled } from '../services/syncManager';
import { hasLocalChanges } from '../services/syncData';

/**
 * useAutoSync - 实时检测改动 + 防抖上传
 * 
 * 每次打开新标签页：
 * 1. 立即执行一次完整同步（下载 + 按需上传）
 * 2. 每秒检测本地是否有改动
 * 3. 检测到改动后启动 5 秒防抖 → 5 秒内无新改动 → 自动上传
 */
export function useAutoSync() {
    // 用 ref 跟踪防抖状态，避免闭包问题
    const debounceRef = useRef(0);

    useEffect(() => {
        // 打开时立即执行一次完整同步
        autoSync();

        // 每秒检测改动，5 秒防抖后上传
        const interval = setInterval(() => {
            if (!isAutoSyncEnabled()) return;
            if (!hasLocalChanges()) {
                debounceRef.current = 0; // 没改动了，重置
                return;
            }

            if (debounceRef.current === 0) {
                // 首次检测到改动，启动 5 秒计时
                debounceRef.current = Date.now();
            } else if (Date.now() - debounceRef.current >= 5000) {
                // 改动持续 5 秒以上 → 上传
                debounceRef.current = 0;
                uploadToCloud();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
}
