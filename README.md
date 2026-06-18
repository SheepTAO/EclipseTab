<div align="center">

# 🌟 Eclipse Tab

### 新一代浏览器新标签页扩展

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Available-brightgreen?logo=googlechrome)](https://chromewebstore.google.com/detail/eclipse-tab/lcnmbgidemidmfffplkpflpdpmfdgabp)
[![Edge Add-ons](https://img.shields.io/badge/Edge-Available-blue?logo=microsoftedge)](https://microsoftedge.microsoft.com/addons/detail/eclipse-tab/omlbmhdkajhbcdhjdgjalelbbmjoekfj)
[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Available-orange?logo=firefox)](https://addons.mozilla.org/zh-CN/firefox/addon/eclipse-tab/)
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)

[English](README-en.md) | 简体中文

![Eclipse Tab 预览](https://github.com/user-attachments/assets/f7674f4f-3830-43bc-8ac4-00fdc0ceec7d)

**✨ 灵感白板 · 🌐 多重空间 · 🎨 美观高效**

</div>

<br>

> 💡 **AI 驱动开发** - 本项目 90% 使用 AI 辅助编码（VibeCoding）开发

Eclipse Tab 是一款功能强大的浏览器新标签页扩展，以 **Zen Shelf（灵感白板）** 和 **Focus Spaces（多重空间）** 为核心，让你的浏览器成为创意工作站和效率中心。

<br>

## 📦 安装

| 浏览器 | 链接 |
|:---|:---|
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png" width="20" /> **Chrome** | [Chrome 扩展商店](https://chromewebstore.google.com/detail/eclipse-tab/lcnmbgidemidmfffplkpflpdpmfdgabp?utm_source=ext_app_menu) |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png" width="20" /> **Edge** | [Edge 扩展商店](https://microsoftedge.microsoft.com/addons/detail/eclipse-tab/omlbmhdkajhbcdhjdgjalelbbmjoekfj?hl=zh-cn) |
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png" width="20" /> **Firefox** | [Firefox 扩展商店](https://addons.mozilla.org/zh-CN/firefox/addon/eclipse-tab/) |

<details>
<summary>🛠️ 手动安装 / Zen Browser 配置</summary>

<br>

**Chrome / Edge 手动安装**
1. 下载项目并解压
2. 打开 `chrome://extensions/` 或 `edge://extensions/`，开启「开发者模式」
3. 点击「加载已解压的扩展程序」，选择 `dist` 文件夹

**Zen Browser**（基于 Firefox）
1. 按 Firefox 方式安装后，打开 `about:config`
2. 将 `zen.urlbar.replace-newtab` 设为 `false`

</details>

<br>

## 🎯 核心功能

<table>
<tr>
<td width="50%" valign="top">

### ✏️ Zen Shelf - 灵感白板

> 自由的创意画布，像便签纸和照片墙一样记录灵感。

- 📝 **文字贴纸** - 自定义字号（12–120px）、颜色、对齐方式
- ☑️ **复选框模式** - 贴纸可添加复选框，点击切换完成状态
- 🔗 **链接卡片** - 输入 URL 后一键转为带标题和封面的链接卡片；双击卡片直接跳转
- 🖼️ **图片贴纸** - 支持上传、粘贴图片及 SVG，自由缩放
- 🎭 **自由布局** - 拖拽摆放，自动避让界面元素
- 📌 **固定贴纸** - 右键可固定贴纸，防止误触移动
- 🗑️ **回收站** - 删除的贴纸进入回收站，可随时恢复

</td>
<td width="50%" valign="top">

### 🌐 Focus Spaces - 多重空间

> 为不同场景创建独立工作空间，工作、学习、娱乐互不干扰。

- 🗂️ **多空间管理** - 创建、重命名、置顶、删除
- 📋 **独立应用列表** - 每个空间有专属的 Dock 应用
- 🚀 **长按快速跳转** - 长按 Navigator 弹出空间选择器，滑动直达目标空间
- 📤 **导入 / 导出** - 支持导出当前空间或一次导出全部空间配置

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🚀 Dock 应用栏

> macOS 风格的应用管理，优雅高效。

- 📌 **快速访问** - 常用网站一键打开
- 📁 **文件夹整理** - 拖拽创建文件夹；少于 2 个应用自动解散
- 🔍 **智能图标** - 多阶策略自动获取高清图标，兜底生成文字图标
- 📚 **批量导入** - 从浏览器书签导入，或用 AI 生成 JSON 一键导入

</td>
<td width="50%" valign="top">

### 🎨 精美主题

> 个性化你的新标签页。

- 🌈 **四种模式** - Default、Light、Dark、Auto 跟随系统
- 🖼️ **自定义背景** - 渐变色、纯色、上传壁纸，支持纹理叠加
- 🎯 **智能适配** - 自动调整文字颜色确保可读性
- 🌐 **多语言** - 支持中文 / English 切换

</td>
</tr>
<tr>
<td colspan="2" valign="top">

### ☁️ 云端同步

> 通过 WebDAV 多端同步，安全可控，数据完全属于你。

- 🔄 **自动同步** - 打开新标签页自动检测并同步
- 📦 **全量备份** - 配置 / 空间 / 贴纸一键同步
- 🖼️ **资产可选** - 壁纸和贴纸图片按需开启同步（默认关闭）
- 🆕 **新设备无忧** - 配置 WebDAV 即自动拉取全部数据

</td>
</tr>
</table>

---

## 💡 使用技巧

### 🎯 界面

- **设置**：鼠标移到页面**左上角**出现设置图标 ⚙️
- **编辑 Dock**：鼠标移到页面**右上角**出现编辑按钮 ✏️，或右键 Dock 图标直接编辑 / 删除

### ✏️ Zen Shelf

| 操作 | 说明 |
|:---|:---|
| 双击空白处 | 快速创建文字贴纸 |
| 双击文字贴纸 | 编辑内容 |
| `Ctrl+V` | 粘贴剪贴板图片为图片贴纸 |
| `Shift` + 点击贴纸 | 多选文字贴纸，可批量拖动或按 `Delete` 批量删除 |
| 拖到屏幕边缘 | 拖动贴纸到边缘回收站图标，松手即删除 |
| 输入 URL 后点击链接按钮 | 将纯 URL 文字转为链接卡片 |
| 工具栏 +/- 或 `Ctrl+↑↓` | 调整字号；按住 `Shift` 大步长调整 |
| `Ctrl+1`~`7` | 快速切换贴纸颜色 |
| 右键贴纸 | 编辑、复制、导出、固定、删除等操作 |
| 右键背景 | 添加贴纸、上传图片、进入编辑模式、打开设置、清空所有贴纸 |
| 回收站侧边栏 | 左滑还原，右滑永久删除 |
| 文字中 `[文本](url)` | 渲染为可点击超链接 |

### 🚀 Dock

- **图标右键**：可直接编辑或删除，无需进入编辑模式
- **刷新图标**：设置面板中「批量刷新图标」可对当前空间所有图标强制重新获取，适用于图标缺失或需要更新的情况
- **批量导入**：编辑模式下点击「+」→「批量导入」，支持从书签选择或导入 AI 生成的 JSON

### 🌐 Focus Spaces

- **循环切换**：点击 Dock 最右侧空间按钮循环切换
- **快速跳转**：长按空间按钮（0.2 秒）弹出选择器，按住滑动到目标空间后松手直接跳转
- **空间管理**：右键空间按钮 → 置顶、重命名、删除、导入 / 导出（支持导出全部空间）

### ☁️ 云同步

- 在同步面板填入 WebDAV 服务器地址和账号密码，开启自动同步后每次打开新标签页会自动检测更新
- 壁纸和贴纸图片默认不同步，可在面板中手动开启

---

## ❓ 常见问题

**数据存储在哪里？**
所有数据存储在本地浏览器（`localStorage` + `IndexedDB`），不会上传至任何服务器。

**如何备份数据？**
- **完整备份**：设置 → 导出备份 → 保存 `.zip` 文件
- **空间配置**：右键空间按钮 → 导出空间（或导出全部空间）→ 保存 JSON 文件

**如何恢复数据？**
- **完整恢复**：设置 → 导入备份 → 选择 `.zip` 文件
- **空间配置**：右键空间按钮 → 导入空间 → 选择 JSON 文件

**云端同步和本地备份的区别？**
- **本地备份**：生成 `.zip` 文件，适合手动迁移和恢复
- **WebDAV 同步**：通过你自己的 WebDAV 服务多设备实时同步，壁纸和贴纸图片可按需开启

---

## 📝 关于项目

Eclipse Tab 使用现代 Web 技术构建，90% 的代码通过 AI 辅助编码（VibeCoding）完成。

特别感谢 [@SheepTAO](https://github.com/SheepTAO) 贡献 WebDAV 云端同步功能，[@lycohana](https://github.com/lycohana) 贡献文字贴纸超链接解析相关逻辑。

**技术栈**：React 18 + TypeScript + Vite · CSS Modules · Feature-based 架构

**性能亮点**：多级图标缓存（Memory + IndexedDB）、并发请求去重、RAF 节流渲染、Web Worker 图片压缩、视口缩放响应式布局

---

## 🙏 致谢

感谢所有使用和支持 Eclipse Tab 的用户！欢迎 ⭐ Star、提交 Issue 或分享使用体验。

## 📄 许可证

GNU GPLv3

---

<div align="center">

**Eclipse Tab** - 让每一个新标签页都成为一次愉悦的开始 ✨

Made with ❤️ using AI-assisted coding (VibeCoding)

</div>
