# Antigravity 简体中文界面工具

为 Windows Antigravity 提供本地界面翻译、版本检查、备份和恢复功能。

当前版本为 **2.30.0**，适配 **Antigravity 2.30.0**。工具版本与适配的 Antigravity 版本保持一致。同一版本内的翻译修订通过 Git 提交记录追踪。

## 环境要求

- Windows。
- Antigravity 2.30.0，默认安装位置为 `%LOCALAPPDATA%/Programs/antigravity`。
- Python 3.10 或更高版本，图形工具需要 Tkinter。

## 安装

1. 下载仓库 ZIP 并完整解压。
2. 双击 `install-plugin.cmd`，将插件安装至当前用户的 `.gemini/config/plugins/antigravity-zh`。
3. 重启 Antigravity，在“自定义 → 已安装”中查看插件。
4. 新建对话，输入“使用 zh-interface 打开汉化安装工具”。
5. 工具窗口打开后，保存工作并完全退出 Antigravity。
6. 点击“安装汉化”，完成后重新启动 Antigravity。

也可以在解压目录直接打开图形工具。

```powershell
python antigravity-zh/scripts/tool.py gui
```

插件注册和应用汉化分两步完成。汉化会修改本地 `app.asar`，并在同目录保存原始备份及哈希校验记录。

## 命令行操作

在解压目录执行以下命令。

```powershell
# 检查版本及补丁标记
python antigravity-zh/scripts/tool.py check

# 完全退出 Antigravity 后安装
python antigravity-zh/scripts/tool.py install

# 完全退出 Antigravity 后恢复英文
python antigravity-zh/scripts/tool.py restore
```

自定义安装路径可为 `check`、`install`、`restore` 添加 `--path "实际路径/app.asar"`。图形工具使用默认安装路径。

## 覆盖范围

已补充主侧栏、模型额度与提示、常规设置、应用设置、外观设置、快捷键、通知、浏览器设置以及首页输入提示的翻译。主侧栏、模型额度、常规设置、外观、快捷键和首页已进行实际窗口检查。

目前仍在完善。高级设置、项目专属设置、第三方插件详情、部分菜单、错误提示和确认弹窗尚未全部覆盖。技能对话调用尚未单独验收，官方插件校验命令尚未运行。

## 更新与恢复

- 应用更新后，需要按新的 Antigravity 版本重新适配。
- 安装器检测到已有不同内容时会停止，保留现有文件。
- 升级旧版工具前，先使用旧工具恢复英文，保留旧插件目录，然后安装新版本并重新应用汉化。
- 恢复时会校验备份和当前应用文件的哈希。应用文件已发生变化时会停止恢复。
- 卸载插件前，可先通过工具恢复英文。

## 实现

`install_plugin.py` 负责插件文件安装。`tool.py` 校验版本、重建 ASAR、保存备份并恢复资源。`bridge.js` 向应用主界面加载 `renderer.js`，后者使用本地翻译表处理界面文字和动态提示。

仓库包含汉化工具源码。使用者需自行安装对应版本的 Antigravity。
