(() => {
  if (window.__antigravityChinese) return;
  window.__antigravityChinese = true;
  const words = {
    'For paid Pro plans, Argon quota is separate. Higher Argon quota (included as part of the larger Gemini quota bucket) is available on Ultra plans.': '付费 Pro 套餐的 Argon 额度单独计算。Ultra 套餐提供更高的 Argon 额度，并将其计入更大的 Gemini 共享额度池。',
    'Your Plan:': '当前套餐：', 'Model Quota': '模型额度',
    'Automations': '定时任务', 'Workspace': '工作区', 'View': '视图', 'Window': '窗口',
    'No Project': '未选择项目', 'Create New Project': '新建项目',
    'Display Options': '显示选项', 'Project options': '项目选项',
    'Archive conversation': '归档对话', 'Pin conversation': '置顶对话',
    'More options': '更多选项', 'Search Conversations': '搜索对话',
    'Toggle Sidebar': '切换侧栏', 'Go Back': '后退', 'Go Forward': '前进',
    'Settings': '设置', 'General': '常规', 'Application': '应用',
    'Appearance': '外观', 'Shortcuts': '快捷键', 'Notifications': '通知',
    'Models': '模型', 'Browser': '浏览器', 'Projects': '项目',
    'Not in Project': '未归属项目', 'Conversations': '对话',
    'Give Feedback': '反馈', 'Models & Usage': '模型与用量',
    'Manage your model quota and credits.': '管理模型额度和 AI 积分。',
    'Plan': '套餐', 'Your Plan: Google AI Pro': '当前套餐：Google AI Pro',
    'Your Plan: Google AI Ultra': '当前套餐：Google AI Ultra',
    'You can upgrade to a Google AI Ultra plan to receive higher rate limits.': '升级至 Google AI Ultra 可获得更高的使用额度。',
    'Upgrade': '升级', 'Model Credits': '模型积分',
    'Enable AI Credit Overages': '允许超额使用 AI 积分',
    "When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.": '开启后，模型额度耗尽时将消耗 AI 积分继续处理请求。Antigravity 会优先使用模型额度。',
    'Gemini Models': 'Gemini 模型', 'Weekly Limit Remaining': '本周剩余额度',
    'Five Hour Limit Remaining': '当前 5 小时周期剩余额度',
    'Claude and GPT models': 'Claude 和 GPT 模型',
    'Gemini 4 Argon Weekly Limit': 'Gemini 4 Argon 本周额度',
    'View Usage': '查看用量', 'New Conversation': '新建对话',
    'New Chat': '新建对话', 'New Project': '新建项目',
    'Open Project': '打开项目', 'Add Project': '添加项目',
    'Scheduled Tasks': '定时任务', 'Customizations': '自定义',
    'Marketplace': '插件市场', 'Installed': '已安装',
    'Search': '搜索', 'Cancel': '取消', 'Save': '保存', 'Close': '关闭',
    'Confirm': '确认', 'Apply': '应用', 'Done': '完成', 'Back': '返回',
    'Next': '下一步', 'Continue': '继续', 'Delete': '删除',
    'Rename': '重命名', 'Archive': '归档', 'Restore': '恢复',
    'Copy': '复制', 'Copied': '已复制', 'Retry': '重试',
    'Install': '安装', 'Uninstall': '卸载', 'Enable': '启用',
    'Disable': '禁用', 'Refresh': '刷新', 'Sign out': '退出登录',
    'Theme': '主题', 'System': '跟随系统', 'Light': '浅色', 'Dark': '深色',
    'Language': '语言', 'Font Size': '字体大小', 'Auto': '自动',
    'Always': '始终', 'Never': '从不', 'Permissions': '权限'
  };
  Object.assign(words, {
    "Interface Layout": "界面布局",
    "Knowledge Work": "知识工作",
    "Simplified interface for research, writing, and everyday tasks.": "适用于研究、写作和日常任务的简洁界面。",
    "Software Engineering": "软件工程",
    "Full interface for coding, developer tools, and managing agents.": "适用于编程、开发工具和智能体管理的完整界面。",
    "Global Permissions": "全局权限",
    "Configure global allowed and denied resource permissions.": "配置全局资源访问的允许和拒绝权限。",
    "Learn more": "了解更多",
    "Permission Preset": "权限预设",
    "Controls the actions the agent can take.": "控制智能体可以执行的操作。",
    "Tool Permissions": "工具权限",
    "Modify permissions for file, terminal, and MCP tools.": "修改文件、终端和 MCP 工具的权限。",
    "Network Access Rules": "网络访问规则",
    "Configure allowed and denied URLs for reading.": "配置允许和禁止读取的网址。",
    "Agent Behavior": "智能体行为",
    "Plan Review Policy": "计划审核策略",
    "Whether the agent asks you to review its documents.": "设置智能体是否请求你审核其文档。",
    "Execution": "执行",
    "Open": "打开",
    "Always Ask": "始终询问",
    "Always Proceed": "始终继续",
    "Agent always asks for review.": "智能体始终请求审核。",
    "Queued Messages": "排队消息",
    "Configure when follow-up messages are sent.": "配置后续消息的发送时机。",
    "Queue until after the current turn.": "排队等待当前轮次完成。",
    "Interrupt the agent and send immediately.": "中断智能体并立即发送。",
    "Configure agent execution, queued message delivery, and permissions.": "配置智能体执行、排队消息发送和权限。",
    "Voice mode": "语音模式",
    "Voice": "声音",
    "The voice used in Voice mode. Powered by Gemini Live.": "语音模式使用的声音，由 Gemini Live 提供支持。",
    "Not set": "未设置",
    "Change": "更改",
    "Microphone": "麦克风",
    "Input device for voice mode and dictation.": "语音模式和听写使用的输入设备。",
    "System default": "系统默认",
    "Volume": "音量",
    "How loud Antigravity's voice is.": "Antigravity 语音的播放音量。",
    "Chat Layout": "对话布局",
    "Chat Input": "对话输入",
    "Default Customizations": "默认自定义配置",
    "Customize Global Skills": "自定义全局技能",
    "Custom Agents": "自定义智能体",
    "MCP Servers": "MCP 服务器",
    "Enter to Send": "按 Enter 发送",
    "Send messages with the keyboard's Enter key instead of starting a new line.": "按键盘 Enter 键发送消息。",
    "Agent Non-Workspace File Access": "智能体访问工作区外文件",
    "Command Setup Script": "命令初始化脚本",
    "A shell setup script run before every command the agent executes.": "智能体执行每条命令之前运行的 Shell 初始化脚本。",
    "Enable Terminal Sandbox": "启用终端沙箱",
    "Run terminal commands with sandbox restrictions.": "在沙箱限制下运行终端命令。",
    "Sandbox Allow Network": "允许沙箱访问网络",
    "Allow sandboxed commands to make network requests.": "允许沙箱内的命令发起网络请求。",
    "Terminal Command Auto Execution": "终端命令自动执行",
    "Review Policy": "审核策略",
    "Enable Sounds for Agent": "启用智能体提示音",
    "Play a sound when your action is needed or the agent finishes.": "需要你操作或智能体完成任务时播放提示音。",
    "Enable Notifications for Agent": "启用智能体通知",
    "Show system notifications when your action is needed or the agent finishes.": "需要你操作或智能体完成任务时显示系统通知。",
    "Conversation Steps": "对话步骤",
    "Choose how much detail is shown during a conversation.": "选择对话中显示的详细程度。",
    "Custom Context Menus": "自定义右键菜单",
    "Replace the default browser right-click menu with quick actions.": "使用快捷操作替换浏览器默认右键菜单。",
    "Screen Reader Mode": "屏幕阅读器模式",
    "Optimize the interface and terminal output for screen readers.": "优化界面和终端输出以适配屏幕阅读器。",
    "Conversation Width": "对话宽度",
    "Configure the maximum width of the conversation panel.": "设置对话面板的最大宽度。",
    "Terminal Placement": "终端位置",
    "Choose where terminal sessions appear.": "选择终端会话的显示位置。",
    "Markdown Artifact Width": "Markdown 文档宽度",
    "Configure the default width of markdown artifacts.": "设置 Markdown 文档的默认宽度。",
    "Context and Quota Indicator": "上下文与额度指示器",
    "Show how full the context window is next to the send button. Click it for a breakdown and to see your model quota.": "在发送按钮旁显示上下文窗口的使用情况。点击可查看详细信息和模型额度。",
    "Open Links In": "链接打开位置",
    "Choose where links open by default when clicked.": "选择点击链接后的默认打开位置。",
    "Enable Browser Tools": "启用浏览器工具",
    "Browser Javascript Execution Policy": "浏览器 JavaScript 执行策略",
    "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "控制智能体是否可以运行自定义 JavaScript 来自动执行复杂的浏览器操作。",
    "Prevent Sleep": "防止休眠",
    "Prevent the computer from sleeping while the app is running.": "应用运行期间防止电脑休眠。",
    "Keep In Menu Bar": "保留在菜单栏",
    "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "关闭所有窗口后，应用仍在后台运行，并可通过菜单栏访问。",
    "Automatic Check for Updates": "自动检查更新",
    "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "有可用更新时自动提示重启应用。关闭后，可从应用菜单手动检查更新。",
    "Enable Remote Control": "启用远程控制",
    "Manage your conversations from the companion website.": "从配套网站管理你的对话。",
    "Manage your plan, credentials, and general preferences.": "管理套餐、凭据和常规偏好。",
    "Enable Telemetry": "启用遥测",
    "Marketing Emails": "营销邮件",
    "Not Signed In": "未登录",
    "App version": "应用版本",
    "Remote Control": "远程控制",
    "Work with local agents from another device.": "从其他设备使用本地智能体。",
    "Device Name": "设备名称",
    "Enter device name...": "输入设备名称……",
    "A label for this computer when you connect from another device. Changing it reconnects.": "从其他设备连接时显示的电脑名称。更改后会重新连接。",
    "Open in Remote Control": "在远程控制中打开",
    "Continue your work from another device with Remote Control. Scan the QR code or open the link below.": "通过远程控制在其他设备继续工作。扫描二维码或打开下方链接。",
    "Local Windows environment": "本地 Windows 环境",
    "Advanced Settings": "高级设置",
    "Configure the agent's visual theme and display preferences.": "配置智能体的视觉主题和显示偏好。",
    "Browser Actuation Permissions": "浏览器操作权限",
    "Execute URLs": "网址操作",
    "Allow/deny agent browser actuation access to specific URLs.": "允许或禁止智能体在浏览器中操作指定网址。",
    "Download files": "下载文件",
    "Allow/deny agent browser file downloads from specific sites.": "允许或禁止智能体从指定网站下载文件。",
    "Organization Allowed Domains (Read-Only)": "组织允许的域名（只读）",
    "Download Location": "下载位置",
    "Browsing History": "浏览历史",
    "Browser Subagent": "浏览器子智能体",
    "Browser Actuation Rules": "浏览器操作规则",
    "Configure built-in browser, link opening, and browser subagent preferences.": "配置内置浏览器、链接打开方式和浏览器子智能体偏好。",
    "Manage your notification preferences.": "管理通知偏好。",
    "Set the volume of agent sounds.": "设置智能体提示音的音量。",
    "Keyboard shortcuts for quick navigation and control.": "用于快速导航和操作的键盘快捷键。",
    "Edit Shortcut": "编辑快捷键",
    "Add Shortcut": "添加快捷键",
    "Remove Shortcut": "移除快捷键",
    "Plugins": "插件",
    "Skills & Rules": "技能与规则",
    "Create": "创建",
    "Details": "详情",
    "Add": "添加",
    "No custom agents yet.": "尚无自定义智能体。",
    "Search customizations...": "搜索自定义配置……",
    "Built In": "内置",
    "Global": "全局",
    "Search conversations...": "搜索对话……",
    "Ask anything, @ to mention, / for actions": "输入问题，使用 @ 引用，使用 / 选择操作",
    "Open Folder": "打开文件夹",
    "Mark All as Read": "全部标为已读",
    "Mark This Conversation as Read": "将此对话标为已读",
    "Mark This Conversation as Unread": "将此对话标为未读",
    "Rename This Conversation": "重命名此对话",
    "Move to New Group": "移至新分组",
    "Remove from Group": "从分组移除",
    "Copy Conversation ID": "复制对话 ID",
    "Copy Trajectory ID": "复制轨迹 ID",
    "Copy Image": "复制图片",
    "Open in Tab": "在标签页打开",
    "Open in New Tab": "在新标签页打开",
    "Add inline comment": "添加行内评论",
    "Open in Side Panel": "在侧边面板打开",
    "Copy Link": "复制链接",
    "Link Settings": "链接设置",
    "Open In": "打开方式",
    "Failed to read file": "读取文件失败",
    "Edit comment": "编辑评论",
    "Delete comment": "删除评论",
    "Request Review": "请求审核",
    "Every command requires approval.": "每条命令均需批准。",
    "Ask before sensitive operations.": "执行敏感操作前询问。",
    "Automatically decide if commands run.": "自动决定是否运行命令。",
    "Run all commands without restrictions.": "不加限制地运行所有命令。",
    "View site information": "查看网站信息",
    "Cookies and site data": "Cookie 与网站数据",
    "Show in folder": "在文件夹中显示",
    "Cancel download": "取消下载",
    "Remove from list": "从列表移除",
    "Add screenshot to conversation": "将截图添加至对话",
    "Open in external browser": "在外部浏览器打开",
    "Open Link in New Tab": "在新标签页打开链接",
    "Open Link in External Browser": "在外部浏览器打开链接",
    "Copy Link Address": "复制链接地址",
    "Open Image in New Tab": "在新标签页打开图片",
    "Copy Image Address": "复制图片地址",
    "Open in External Browser": "在外部浏览器打开",
    "Embedded web preview": "内嵌网页预览",
    "Open in Built-in Browser": "在内置浏览器打开"
});
  Object.assign(words, {
    'Add context': '添加上下文', 'Record voice memo': '录制语音备忘',
    'Start Voice mode': '开始语音模式', 'Message input': '消息输入',
    'New Conversation in Project': '在项目中新建对话',
    'Announcements and tips': '公告与提示', 'Sidebar': '侧栏',
    'Typeahead menu': '输入建议菜单',
    'Hi there.': '你好。', 'Hello.': '你好。',
    'Welcome back.': '欢迎回来。', 'Good to see you.': '很高兴见到你。'
  });
  Object.assign(words, {
    "Keyboard shortcuts": "键盘快捷键",
    "Voice volume": "语音音量",
    "Queue": "排队",
    "Send Immediately": "立即发送",
    "Type": "输入",
    "and select": "并选择",
    "to have the agent generate a plan.": "即可让智能体生成计划。",
    "Manage Antigravity app settings.": "管理 Antigravity 应用设置。",
    "Notification Settings": "通知设置",
    "To modify notification settings, open your operating system's system preferences.": "打开操作系统的系统设置以修改通知设置。",
    "Open System Preferences": "打开系统设置",
    "Windows Subsystem for Linux": "适用于 Linux 的 Windows 子系统",
    "Run the app against a Linux environment. Connecting relaunches the app into the selected WSL distro.": "在 Linux 环境中运行应用。连接后，应用将在所选 WSL 发行版中重新启动。",
    "Connect": "连接",
    "Version": "版本",
    "Chat": "对话",
    "Default": "默认",
    "Verbose": "详细",
    "Contrast": "对比度",
    "Strong": "高对比度",
    "Font": "字体",
    "Light Theme": "浅色主题",
    "Dark Theme": "深色主题",
    "Preset": "预设",
    "Default Light": "默认浅色",
    "Default Dark": "默认深色",
    "Background": "背景色",
    "Foreground": "前景色",
    "Accent": "强调色",
    "Sound": "声音",
    "Chime volume": "提示音音量",
    "Built-in Browser": "内置浏览器",
    "External Browser": "外部浏览器",
    "Folder where files downloaded in the built-in browser are saved.": "内置浏览器下载文件的保存文件夹。",
    "Change…": "更改……",
    "Clear visited URLs and autocomplete suggestions from the built-in browser.": "清除内置浏览器的已访问网址和自动补全建议。",
    "Clear": "清除",
    "Configure allowed and denied URLs for the browser subagent (invoked with /browser). Requires Google Chrome.": "配置浏览器子智能体允许和禁止访问的网址（通过 /browser 调用）。需要 Google Chrome。",
    "Edit": "编辑",
    "Search shortcuts": "搜索快捷键",
    "Search shortcuts...": "搜索快捷键……",
    "Navigation": "导航",
    "Open Conversation Picker": "打开对话选择器",
    "Open File Search": "打开文件搜索",
    "New Tab": "新建标签页",
    "Reopen Closed Tab": "重新打开已关闭的标签页",
    "Select Previous Conversation": "选择上一个对话",
    "Select Next Conversation": "选择下一个对话",
    "Move Conversation Up": "上移对话",
    "Move Conversation Down": "下移对话",
    "Previous Side Panel Tab": "上一个侧面板标签页",
    "Next Side Panel Tab": "下一个侧面板标签页",
    "Open Settings": "打开设置",
    "Conversation": "对话",
    "Focus Input": "聚焦输入框",
    "Toggle Model Selector": "切换模型选择器",
    "Toggle Voice Recording": "切换语音录制",
    "Mute Voice Mic": "切换麦克风静音",
    "Mute Voice Speaker": "切换语音播放静音",
    "Find in Pane": "在面板中查找",
    "Add to Chat/Quote": "添加至对话或引用",
    "Archive This Conversation": "归档当前对话",
    "Layout Controls": "布局控制",
    "Toggle Side Panel": "切换侧面板",
    "Toggle Maximize Side Panel": "切换侧面板最大化",
    "Toggle Overview Panel": "切换概览面板",
    "Toggle Terminal": "切换终端",
    "Zoom In": "放大",
    "Zoom Out": "缩小",
    "Reset Zoom": "重置缩放"
});
  Object.assign(words, {
    'Configure allowed and denied URLs for the browser subagent. It runs in the built-in browser, so no separate browser install is needed.': '配置浏览器子智能体允许和禁止访问的网址。它在内置浏览器中运行，无需另行安装浏览器。',
    'This Computer': '本机',
    'Remote': '远程',
    'Advanced': '高级',
    'Configure what the agent can do in local and remote conversations.': '配置智能体在本地和远程对话中可以执行的操作。',
    'Controls permissions for remote conversations.': '控制远程对话的权限。',
    'Configure allowed and denied URLs for the browser subagent (invoked with /browser). Requires': '配置浏览器子智能体允许和禁止访问的网址（通过 /browser 调用）。需要'
  });
  Object.assign(words, {
    "Settings for conversations outside of projects.": "项目之外的对话设置。",
    "No token data available.": "暂无词元用量数据。",
    "Loading workspace customizations...": "正在加载工作区自定义配置……",
    "Loading customizations...": "正在加载自定义配置……",
    "The breakdown below shows token usage from customizations like rules, skills, and MCP. If a budget is exceeded, large rules are demoted to path pointers and large customizations are excluded automatically.": "下方展示规则、技能和 MCP 等自定义配置的词元用量。超出预算时，较大的规则会改为路径引用，较大的自定义配置会自动排除。",
    "There are no customizations enabled.": "尚未启用自定义配置。",
    "Skills": "技能",
    "Rules": "规则",
    "Other Customizations": "其他自定义配置",
    "Manage project folders and settings.": "管理项目文件夹和设置。",
    "Folders": "文件夹",
    "Add Folder": "添加文件夹",
    "Project": "项目",
    "Danger Zone": "危险操作",
    "Delete Project": "删除项目",
    "Featured": "精选",
    "Build with Google": "使用 Google 开发工具",
    "Connect to Google Workspace, including Docs, Sheets, Slides, Drive, and Calendar.": "连接 Google Workspace，包括文档、表格、幻灯片、云端硬盘和日历。",
    "Build on Google's developer platforms, including Android, Chrome, Gemini, and Google Cloud.": "使用 Google 的开发平台构建应用，包括 Android、Chrome、Gemini 和 Google Cloud。",
    "Read, draft, and edit docs.": "阅读、起草和编辑文档。",
    "Read, write, and format spreadsheets.": "读取、写入和设置电子表格格式。",
    "Read, edit, and present presentations.": "阅读、编辑和演示幻灯片。",
    "Read, edit, and export presentations.": "阅读、编辑和导出演示文稿。",
    "Search, upload, download, and share files.": "搜索、上传、下载和共享文件。",
    "Check availability, schedule events, and RSVP.": "查看空闲时间、安排日程并回复邀请。",
    "Prototype, build & run modern apps that users love with Firebase's backend, AI, and operational infrastructure.": "借助 Firebase 的后端、AI 和运维基础设施，为用户设计原型、构建并运行现代应用。",
    "Create with Prompt": "通过提示词创建",
    "New": "新建",
    "No automations yet": "尚无定时任务",
    "Run a prompt on a schedule, like a morning summary of yesterday's changes. Runs show up here.": "按计划运行提示词，例如每天早晨总结昨日变化。运行记录将显示在这里。",
    "Name": "名称",
    "Untitled": "未命名",
    "This computer": "本机",
    "Uses your local files and tools. Schedules only.": "使用本机文件和工具，支持定时运行。",
    "Trigger": "触发条件",
    "Scheduled": "定时",
    "Every day": "每天",
    "Every week": "每周",
    "Every month": "每月",
    "Weekdays": "工作日",
    "Instructions": "任务指令",
    "Prompt": "提示词",
    "How often": "运行频率",
    "What should the agent do on each run? For example: summarize new bugs assigned to me and anything that changed overnight.": "每次运行时智能体应完成什么任务？例如，汇总分配给我的新缺陷及昨夜的变化。",
    "Check for Updates": "检查更新",
    "Create Project": "创建项目",
    "Command Palette": "命令面板",
    "Minimize": "最小化",
    "Maximize": "最大化"
});
  const excluded = 'script,style,textarea,input,pre,code,[contenteditable]:not([contenteditable="false"]),[role="log"],.markdown,.prose,[data-message-id]';
  const controls = 'button,label,nav,aside,h1,h2,h3,[role="button"],[role="menuitem"],[role="tab"],[role="dialog"],[role="navigation"],[role="menu"],[role="tooltip"]';
  function translate(text) {
    const trimmed = text.trim().replace(/\s+/g, ' ');
    let value = words[trimmed];
    if (trimmed.startsWith('Models within this group:')) {
      value = trimmed.replace('Models within this group:', '本组包含的模型：');
    }
    for (const [prefix, replacement] of [
      ['Select project, current:', '选择项目，当前：'],
      ['Select model, current:', '选择模型，当前：'],
      ['Agent permissions preset selector, current:', '智能体权限预设，当前：']
    ]) {
      if (trimmed.startsWith(prefix)) {
        const suffix = trimmed.slice(prefix.length).trim();
        value = replacement + (words[suffix] || suffix);
      }
    }
    const breakdown = trimmed.match(/^Show (\d+) breakdowns?$/);
    if (breakdown) value = `显示 ${breakdown[1]} 项明细`;
    const version = trimmed.match(/^Version (\d+\.\d+\.\d+)$/);
    if (version) value = `版本 ${version[1]}`;
    const deletion = trimmed.match(/^Permanently delete (.+) including (\d+) active conversations?\.$/);
    if (deletion) value = `永久删除 ${deletion[1]}，包括其中 ${deletion[2]} 个活跃对话。`;
    const reset = trimmed.match(/^You have used some of your weekly limit, it will fully refresh in (\d+) days?, (\d+) hours?\.$/);
    if (reset) value = `已使用部分本周额度，将在 ${reset[1]} 天 ${reset[2]} 小时后完全重置。`;
    return value ? text.replace(text.trim(), value) : text;
  }
  function scan() {
    const isConfigurationPage = /^\/(customizations|sidecars)(?:\/|$)/.test(window.location?.pathname || '');
    const settingsHeading = [...document.querySelectorAll('h1,h2,h3,div,span')].find(
      element => element.childElementCount === 0 &&
        ['Settings', '设置'].includes(element.textContent.trim()) &&
        !element.closest('button,nav,aside')
    );
    let settingsPanel = settingsHeading?.parentElement;
    for (let depth = 0; settingsPanel && depth < 8; depth++) {
      const text = settingsPanel.textContent;
      if (/General|常规/.test(text) && /Appearance|外观/.test(text) &&
          /Notifications|通知/.test(text) && settingsPanel.querySelector('input,button,[role="tab"]')) {
        if (settingsPanel.parentElement !== document.body) settingsPanel = settingsPanel.parentElement;
        break;
      }
      if (!settingsPanel.parentElement || settingsPanel.parentElement === document.body) {
        settingsPanel = null;
        break;
      }
      settingsPanel = settingsPanel.parentElement;
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const pending = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.closest(excluded)) continue;
      const normalized = node.nodeValue.trim().replace(/\s+/g, ' ');
      const knownDescription = normalized.length > 30 && Object.hasOwn(words, normalized);
      if (!parent.closest(controls) && !settingsPanel?.contains(parent) && !knownDescription && !isConfigurationPage) continue;
      if (parent.childElementCount === 0 && parent.childNodes?.length > 1) {
        const combined = parent.textContent;
        const translated = translate(combined);
        if (translated !== combined && [...parent.childNodes].every(child => child.nodeType === 3)) {
          if (node === parent.firstChild) {
            for (const child of parent.childNodes) pending.push([child, child === node ? translated : '']);
          }
          continue;
        }
      }
      let value = translate(node.nodeValue);
      if (parent.closest('h1,h2,h3')) {
        const greeting = normalized.match(/^(?:Hi |Hello, |Welcome back, |Good to see you, )(.+)\.$/);
        if (greeting) value = `你好，${greeting[1]}。`;
      }
      if (value !== node.nodeValue) pending.push([node, value]);
    }
    for (const [node, value] of pending) node.nodeValue = value;
    for (const element of document.querySelectorAll('[title],[aria-label],[placeholder],[data-placeholder]')) {
      if (element.closest('.markdown,.prose,[data-message-id]')) continue;
      for (const attribute of ['title', 'aria-label', 'placeholder', 'data-placeholder']) {
        const original = element.getAttribute(attribute);
        if (original) {
          const value = translate(original);
          if (value !== original) element.setAttribute(attribute, value);
        }
      }
    }
  }
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      observer.disconnect();
      scan();
      observe();
    });
  });
  function observe() {
    observer.observe(document.body, { subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: ['title', 'aria-label', 'placeholder', 'data-placeholder'] });
  }
  scan();
  observe();
})();
