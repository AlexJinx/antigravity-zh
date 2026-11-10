---
name: zh-interface
description: 检查 Windows Antigravity 2.30.0 主界面汉化补丁状态，或打开配套工具安装汉化和恢复英文。用户询问本插件、要求检查汉化、安装中文界面或恢复英文时使用。
---

# Antigravity 简体中文

插件根目录位于本文件向上两级，配套程序在根目录的 scripts/tool.py。
使用当前技能文件的真实路径定位程序。全局默认位置为用户目录下的 .gemini/config/plugins/antigravity-zh/scripts/tool.py。

## 检查

使用本机 Python 运行 `tool.py check`，将实际版本、是否已安装及错误信息用中文报告给用户。
该命令读取应用资源并在内存中校验补丁，不修改应用文件。

## 安装或恢复

先执行检查。此插件通过本地资源补丁翻译界面，适配版本为 2.30.0。
安装和恢复要求 Antigravity 完全退出，因此通过独立工具窗口完成最后一步。
用户请求安装或恢复时，启动工具窗口并告诉用户保存工作、退出 Antigravity，再点击对应按钮。

在 Windows PowerShell 中，先将已定位的 tool.py 绝对路径保存为 `$zhToolPath`，随后运行

```powershell
$zhPythonPath = (Get-Command python -ErrorAction Stop).Source
Start-Process -FilePath $zhPythonPath -ArgumentList @(('"' + $zhToolPath + '"'), 'gui') -WindowStyle Hidden
```

窗口启动后，清楚说明用户应点击“安装汉化”或“恢复英文”。启动窗口的结果只代表工具已打开，安装成功需要工具实际返回成功以及用户重启后的界面确认。
尊重用户当前操作范围。应用内正在运行的任务由用户保存和结束。
版本不匹配、资源变化或备份校验失败时，报告工具错误并保留现状。

插件启用状态和汉化补丁状态分别由插件管理器与补丁工具管理。卸载插件前，用户可以先通过工具恢复英文。
