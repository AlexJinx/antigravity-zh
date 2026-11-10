# Antigravity 简体中文界面工具

为 Windows Antigravity 提供本地界面翻译、版本检查、原始资源备份和恢复功能，并提供可在应用内调用的插件技能入口。

当前预览版为 **2.30.0**，适配 **Antigravity 2.30.0**。工具版本与适配的 Antigravity 版本保持一致，同一版本内的翻译修订通过 Git 提交记录追踪。

## 环境与兼容性

| 项目 | 要求 |
| --- | --- |
| 操作系统 | Windows |
| Antigravity 版本 | 2.30.0，安装前会校验应用资源中的版本 |
| Python | 3.10 或更高版本，能够通过 `python` 命令启动 |
| 图形界面 | Python 自带的 Tkinter |
| 默认应用位置 | `%LOCALAPPDATA%\Programs\antigravity` |
| 默认插件位置 | `%USERPROFILE%\.gemini\config\plugins\antigravity-zh` |

当前实现使用 Python 标准库。先在 PowerShell 中检查 Python 环境。

```powershell
python --version
python -m tkinter
```

第二条命令会打开 Tkinter 测试窗口，看到窗口后可以关闭。若命令无法运行，请先修复 Python 安装及其 Tkinter 组件。

## 汉化范围

目前已补充以下界面文案。

- 主侧栏、导航和常用操作按钮。
- 模型额度、套餐说明、额度重置时间及部分悬浮提示。
- 常规设置中的界面布局、权限说明、计划审核、排队消息和语音设置。
- 应用、外观、快捷键、通知和浏览器设置中的多项标签与说明。
- 首页问候语、输入提示、语音按钮和部分动态选择提示。

主侧栏、模型额度、常规设置、外观、快捷键和首页已进行实际窗口检查。高级设置、项目专属设置、第三方插件详情、部分菜单、错误提示和确认弹窗仍需继续补齐与验证。

插件技能的对话调用尚未单独验收，官方插件校验命令尚未运行。当前版本属于持续完善中的预览版。

## 下载

在 GitHub 仓库页面选择 **Code → Download ZIP**，完整解压到本地目录。需要固定版本时，可从仓库的 Tags 页面下载对应版本。

后文的相对路径均以解压后的项目根目录为起点，该目录包含 `README.md`、`install-plugin.cmd` 和 `antigravity-zh` 文件夹。

## 首次安装

### 1. 注册插件

1. 双击项目根目录中的 `install-plugin.cmd`。
2. 等待出现“插件文件已安装到……”提示。
3. 保存工作并重新打开 Antigravity。
4. 进入 **Customizations → Installed**，汉化后对应“自定义 → 已安装”。
5. 查找 **Antigravity 简体中文**。

安装脚本会把配套文件复制到当前用户的插件目录。相同内容可重复安装，遇到已有的不同内容时会停止并显示冲突文件。

也可以从项目根目录运行插件安装程序。

```powershell
python install_plugin.py
```

### 2. 打开汉化工具

在 Antigravity 中新建对话，输入下面的请求。

```text
使用 zh-interface 打开汉化安装工具
```

也可以在项目根目录直接启动图形工具。

```powershell
python antigravity-zh/scripts/tool.py gui
```

工具窗口提供“检查版本”“安装汉化”“恢复英文”三个按钮。

### 3. 应用中文界面

1. 在工具窗口中点击“检查版本”，确认应用版本为 `2.30.0`。
2. 保存 Antigravity 中的工作，并完全退出应用。
3. 在独立工具窗口中点击“安装汉化”。
4. 等待工具提示安装成功。
5. 重新打开 Antigravity，检查侧栏、设置和模型额度页是否显示中文。

**插件注册和界面汉化需要分别完成。** 中文界面在应用资源补丁安装成功并重启后生效。

## 命令行操作

在项目根目录执行以下命令。

```powershell
# 检查应用版本及汉化标记
python antigravity-zh/scripts/tool.py check

# 完全退出 Antigravity 后安装汉化
python antigravity-zh/scripts/tool.py install

# 完全退出 Antigravity 后恢复英文
python antigravity-zh/scripts/tool.py restore
```

`check` 会读取应用资源。对于尚未安装补丁的受支持版本，它会在内存中尝试重建并校验资源。显示“汉化已安装”表示检测到了补丁标记，实际加载效果还需要通过重启后的页面确认。

安装在其他位置时，为 `check`、`install` 或 `restore` 指定实际的 `app.asar` 路径。下面以 `D:\Apps\Antigravity` 为例。

```powershell
python antigravity-zh/scripts/tool.py check --path "D:\Apps\Antigravity\resources\app.asar"
python antigravity-zh/scripts/tool.py install --path "D:\Apps\Antigravity\resources\app.asar"
python antigravity-zh/scripts/tool.py restore --path "D:\Apps\Antigravity\resources\app.asar"
```

图形工具使用默认应用路径。自定义安装位置请使用上述命令行方式。

## 备份与恢复英文

安装汉化时，工具会在应用的 `resources` 目录中保存这些文件。

| 文件 | 用途 |
| --- | --- |
| `app.asar` | 应用当前使用的资源文件 |
| `app.asar.antigravity-zh-original` | 安装前的原始资源备份 |
| `antigravity-zh-state.json` | 原始资源和补丁资源的 SHA-256 校验记录 |

恢复操作依赖备份和校验记录，请妥善保留这两个文件。

恢复时，先保存工作并完全退出 Antigravity，再打开工具点击“恢复英文”，或运行前面的 `restore` 命令。完成后重新启动应用。

也可以通过插件对话请求“使用 zh-interface 打开恢复英文工具”。

工具会校验备份和当前资源的哈希。如果应用文件已被更新或发生其他变化，恢复操作会停止，并提示检查实际版本与备份。

## 升级已有汉化工具

当新旧工具对应同一个 Antigravity 版本时，按以下步骤升级。

1. 保存工作并完全退出 Antigravity。
2. 使用旧版工具执行“恢复英文”。
3. 将现有 `%USERPROFILE%\.gemini\config\plugins\antigravity-zh` 文件夹移到插件目录之外，作为旧版备份。
4. 解压新工具，并运行新目录中的 `install-plugin.cmd`。
5. 使用新工具重新安装汉化。
6. 重新启动 Antigravity，检查实际界面。

插件文件安装器会拒绝覆盖内容不同的文件，因此升级前需要移出旧插件目录。恢复英文这一步应在旧版工具仍可使用时完成。

Antigravity 自身升级后，需要适配其新版本的工具。若计划升级应用，可先使用当前工具恢复英文。若应用已经升级，遇到版本或哈希不匹配时，应保留备份并核对新版本的适配说明。

## 卸载

1. 保存工作并完全退出 Antigravity。
2. 使用工具恢复英文。
3. 重新打开 Antigravity，在插件管理界面卸载插件，或在退出应用后移除该插件目录。

界面资源补丁通过“恢复英文”撤销，插件文件由插件管理器或插件目录管理。

## 常见问题

### 插件已显示在“已安装”中，界面仍然是英文

先确认已经执行“安装汉化”，然后完全退出并重启 Antigravity。运行 `check` 查看补丁标记。如果仍然只有部分文字为英文，请记录具体页面和操作步骤，以便补充翻译。

### 提示“请保存工作并完全退出 Antigravity”

工具仍检测到 `Antigravity.exe` 进程。保存工作并通过应用的退出操作关闭程序，再重试安装或恢复。

### 提示“目标文件已有不同内容”

插件目录中存在旧版或经过修改的文件。按照“升级已有汉化工具”中的步骤保留旧目录，再安装新版本。

### 提示仅适配 Antigravity 2.30.0

当前应用资源中的版本与本工具支持的版本不同，需要使用对应版本的汉化工具。

### 提示找不到 app.asar

核对 Antigravity 的实际安装位置。自定义位置可以通过 `--path` 指定，路径应指向 `resources` 下的 `app.asar` 文件。

### 提示备份校验失败或应用文件发生变化

保留当前备份和校验记录，核对应用是否更新、资源是否被其他工具修改。恢复逻辑会在校验失败时停止，处理问题时应提供完整错误信息。

### 双击安装脚本后提示找不到 Python

在 PowerShell 中运行 `python --version` 检查命令是否可用。安装或修复 Python 后重新打开终端，再运行安装脚本。

## 项目结构与实现

```text
antigravity-zh/
├── README.md
├── install-plugin.cmd
├── install_plugin.py
└── antigravity-zh/
    ├── plugin.json
    ├── skills/
    │   └── zh-interface/
    │       └── SKILL.md
    └── scripts/
        ├── tool.py
        ├── bridge.js
        └── renderer.js
```

- `install-plugin.cmd` 启动插件文件安装程序。
- `install_plugin.py` 复制插件文件，并检查已有文件冲突及复制结果。
- `plugin.json` 声明插件名称、版本和建议提示词。
- `SKILL.md` 描述应用内检查状态、打开安装及恢复工具的入口。
- `tool.py` 校验版本、重建 ASAR、保存备份并恢复资源。
- `bridge.js` 在应用主界面加载后注入翻译脚本。
- `renderer.js` 使用本地词典和动态文本规则翻译界面，并监听后续页面变化。

仓库提供汉化工具源码，运行时需要本机已安装对应版本的 Antigravity。

## 反馈翻译遗漏

提交 Issue 时，请尽量提供以下信息。

- Antigravity 版本、汉化工具版本，以及使用的提交或标签。
- 页面名称和打开该页面的步骤。
- 遗漏的英文原文及期望的中文译法。
- 可复现问题的截图或完整报错文本。

截图和日志中的账号、项目内容及凭据等信息请先脱敏。

## 参考资料

插件格式参考了官方插件文档及本机安装的 Firebase 插件。插件安装器已在临时目录完成测试。[Antigravity 插件文档](https://antigravity.google/docs/plugins)
