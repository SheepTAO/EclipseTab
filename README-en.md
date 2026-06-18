<div align="center">

# 🌟 Eclipse Tab

### Next-Gen Browser New Tab Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Available-brightgreen?logo=googlechrome)](https://chromewebstore.google.com/detail/eclipse-tab/lcnmbgidemidmfffplkpflpdpmfdgabp)
[![Edge Add-ons](https://img.shields.io/badge/Edge-Available-blue?logo=microsoftedge)](https://microsoftedge.microsoft.com/addons/detail/eclipse-tab/omlbmhdkajhbcdhjdgjalelbbmjoekfj)
[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Available-orange?logo=firefox)](https://addons.mozilla.org/zh-CN/firefox/addon/eclipse-tab/)
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)

English | [简体中文](README.md)

<img width="2940" height="1846" alt="Eclipse Tab Preview" src="https://github.com/user-attachments/assets/19ba09a7-3917-4110-a9f7-10622905a06d" />

**✨ Creative Canvas · 🌐 Multiple Spaces · 🎨 Beautiful & Efficient**

</div>

<br>

> 💡 **AI-Powered Development** - This project is 90% developed using AI-assisted coding (VibeCoding)

Eclipse Tab transforms your browser's new tab page into a creative workstation, centered around **Zen Shelf (Creative Canvas)** and **Focus Spaces (Multiple Workspaces)**.

<br>

## 📦 Installation

| Browser | Link |
|:---|:---|
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png" width="20" /> **Chrome** | [Chrome Web Store](https://chromewebstore.google.com/detail/eclipse-tab/lcnmbgidemidmfffplkpflpdpmfdgabp?utm_source=ext_app_menu) |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png" width="20" /> **Edge** | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/eclipse-tab/omlbmhdkajhbcdhjdgjalelbbmjoekfj?hl=zh-cn) |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png" width="20" /> **Firefox** | [Firefox Add-ons](https://addons.mozilla.org/zh-CN/firefox/addon/eclipse-tab/) |

<details>
<summary>🛠️ Manual Installation / Zen Browser Setup</summary>

<br>

**Chrome / Edge — Manual Installation**
1. Download and unzip the project
2. Open `chrome://extensions/` or `edge://extensions/`, enable "Developer mode"
3. Click "Load unpacked" and select the `dist` folder

**Zen Browser** (Firefox-based)
1. Install via Firefox method above, then open `about:config`
2. Set `zen.urlbar.replace-newtab` to `false`

</details>

<br>

## 🎯 Core Features

<table>
<tr>
<td width="50%" valign="top">

### ✏️ Zen Shelf - Creative Canvas

> A free-form canvas for capturing inspiration — like sticky notes and a photo wall in your browser.

- 📝 **Text Stickers** - Custom font size (12–120px), color, and alignment
- ☑️ **Checkbox Mode** - Add a checkbox to any sticker; click to toggle completion
- 🔗 **Link Cards** - Type a URL and click the link button to convert it into a rich card with title and cover image; double-click to open
- 🖼️ **Image Stickers** - Upload, paste, or drag images (including SVG); freely resize
- 🎭 **Free Layout** - Drag anywhere; auto-avoids UI elements
- 📌 **Pin Stickers** - Right-click to pin a sticker and prevent accidental moves
- 🗑️ **Recycle Bin** - Deleted stickers go to the recycle bin and can be restored anytime

</td>
<td width="50%" valign="top">

### 🌐 Focus Spaces - Multiple Workspaces

> Independent workspaces for every context — work, study, and entertainment stay separate.

- 🗂️ **Multi-Space Management** - Create, rename, pin, and delete spaces
- 📋 **Independent App Lists** - Each space has its own Dock apps
- 🚀 **Long-Press Quick Jump** - Long-press the Navigator to open the space switcher; slide to jump directly
- 📤 **Import / Export** - Export the current space or all spaces at once

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🚀 Dock App Bar

> macOS-style app management, elegant and efficient.

- 📌 **Quick Access** - One-click to frequently used sites
- 📁 **Folder Organization** - Drag one app onto another to create a folder; auto-dissolves below 2 apps
- 🔍 **Smart Icons** - Multi-stage strategy to fetch high-res icons; falls back to generated text icons
- 📚 **Batch Import** - Import from browser bookmarks, or import AI-generated JSON

</td>
<td width="50%" valign="top">

### 🎨 Beautiful Themes

> Personalize your new tab page.

- 🌈 **Four Modes** - Default, Light, Dark, Auto (follows system)
- 🖼️ **Custom Backgrounds** - Gradients, solid colors, uploaded wallpapers, texture overlays
- 🎯 **Smart Adaptation** - Auto-adjusts text colors for readability
- 🌐 **Multilingual** - English / 中文 interface

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### ☁️ Cloud Sync

> Sync across devices via WebDAV — secure, private, and fully under your control.

- 🔄 **Auto Sync** - Detects and syncs automatically when opening a new tab
- 📦 **Full Backup** - Config, spaces, and stickers all in one sync
- 🖼️ **Assets Optional** - Wallpapers and sticker images synced on demand (disabled by default)
- 🆕 **New Device Ready** - Just configure WebDAV and all data syncs automatically

</td>
</tr>
</table>

---

## 💡 Usage Tips

### 🎯 Interface

- **Settings**: Hover over the **top-left corner** to reveal the settings icon ⚙️
- **Edit Dock**: Hover over the **top-right corner** to reveal the edit button ✏️, or right-click any Dock icon to edit / delete it directly

### ✏️ Zen Shelf

| Action | Description |
|:---|:---|
| Double-click blank area | Quickly create a text sticker |
| Double-click a text sticker | Edit its content |
| `Ctrl+V` | Paste clipboard image as an image sticker |
| `Shift` + click sticker | Multi-select text stickers; drag together or press `Delete` to batch-delete |
| Drag to screen edge | Drop sticker onto the recycle bin icon to delete |
| Type a URL → click link button | Convert plain URL text into a rich link card |
| Toolbar +/- or `Ctrl+↑↓` | Adjust font size; hold `Shift` for larger steps |
| `Ctrl+1`~`7` | Quick-switch sticker color |
| Right-click sticker | Edit, copy, export, pin, delete, and more |
| Right-click background | Add sticker, upload image, toggle edit mode, open settings, clear all stickers |
| Recycle bin sidebar | Swipe left to restore, swipe right to permanently delete |
| `[text](url)` in sticker content | Renders as a clickable hyperlink |

### 🚀 Dock

- **Right-click icon**: Edit or delete directly without entering edit mode
- **Refresh Icons**: In Settings → "Refresh Icons" to force re-fetch icons for the current space — useful for missing or outdated icons
- **Batch Import**: In edit mode, click "+" → "Batch Import" to add apps from bookmarks or import an AI-generated JSON file

### 🌐 Focus Spaces

- **Cycle through**: Click the space switcher button on the far right of the Dock
- **Quick jump**: Long-press the switcher (0.2s) to open the selector, then slide to your target space and release
- **Space management**: Right-click the switcher → pin, rename, delete, import / export (including export all spaces)

### ☁️ Cloud Sync

- Enter your WebDAV server URL and credentials in the sync panel; enable auto-sync to check for updates on every new tab
- Wallpapers and sticker images are not synced by default — enable them in the sync panel as needed

---

## ❓ FAQ

**Where is data stored?**
All data is stored locally in your browser (`localStorage` + `IndexedDB`). Nothing is uploaded to any server.

**How do I back up my data?**
- **Full backup**: Settings → Export Backup → save the `.zip` file
- **Space config**: Right-click space switcher → Export Space (or Export All Spaces) → save JSON

**How do I restore data?**
- **Full restore**: Settings → Import Backup → select the `.zip` file
- **Space config**: Right-click space switcher → Import Space → select JSON file

**What's the difference between cloud sync and local backup?**
- **Local backup**: Creates a `.zip` file — great for manual migration and restore
- **WebDAV sync**: Syncs across devices via your own WebDAV service; wallpapers and sticker images are optional

---

## 📝 About

Eclipse Tab is built with modern web technologies, with 90% of the code completed through AI-assisted coding (VibeCoding).

Special thanks to [@SheepTAO](https://github.com/SheepTAO) for contributing the WebDAV cloud sync feature, and [@lycohana](https://github.com/lycohana) for contributing the text sticker hyperlink parsing logic.

**Tech Stack**: React 18 + TypeScript + Vite · CSS Modules · Feature-based architecture

**Performance highlights**: Multi-level icon caching (Memory + IndexedDB), concurrent request deduplication, RAF-throttled rendering, Web Worker image compression, viewport-scaling responsive layout

---

## 🙏 Acknowledgments

Thanks to everyone using and supporting Eclipse Tab! Feel free to ⭐ Star the project, submit Issues, or share your experience.

## 📄 License

GNU GPLv3

---

<div align="center">

**Eclipse Tab** - Making every new tab a delightful beginning ✨

Made with ❤️ using AI-assisted coding (VibeCoding)

</div>
