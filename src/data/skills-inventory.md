# Skills Inventory

> Last updated: 2026-04-15
>
> Total: 60+ skills across 5 categories

---

## Custom Skills (自定义/第三方)

### Content Creation (内容创作)

| Skill | 触发场景 | 来源 |
|-------|---------|------|
| `khazix-writer` | 公众号长文写作、续写、扩写、根据素材产出文章 | 数字生命卡兹克 |
| `hv-analysis` | 横纵分析法深度研究，产出 PDF 报告 | 数字生命卡兹克 |
| `xhs-competitor-analysis` | 小红书链接自动触发，竞品博主分析 / 笔记拆解 | Custom |

### Video & Storyboard (视频与分镜)

| Skill | 触发场景 | 来源 |
|-------|---------|------|
| `film-storyboard-skill` | 从剧本创建分镜、生成 AI 图像提示词（Midjourney/Gemini 等） | RainLib/AI-Storyboard |
| `scriptwriter-skill` | 剧本创作、系列连续性、故事概念转视觉叙事 | RainLib/AI-Storyboard |
| `animator-skill` | 静态分镜序列转 Motion Prompts（Runway/Pika/SVD） | RainLib/AI-Storyboard |
| `storyboard-review-skill` | 分镜各阶段质量审查（beat board / sequence board / motion） | RainLib/AI-Storyboard |
| `storyboard-creation` | 通用分镜创作：镜头类型、机位角度、运动、180 度规则 | tool-belt/skills (7.1K installs) |

### Presentation (演示文稿)

| Skill | 触发场景 | 来源 |
|-------|---------|------|
| `frontend-slides` | 从零创建 HTML 演示文稿、PPT 转 Web、动画丰富的幻灯片 | zarazhangrui/frontend-slides |
| `ppt-generator` | AI 生成 PPT 图片（Gemini）+ 视频转场（可灵 AI），支持 2K/4K | op7418/NanoBanana-PPT-Skills (2.3K stars) |

### Web & Research (联网与研究)

| Skill | 触发场景 | 来源 |
|-------|---------|------|
| `web-access` | 所有联网操作：搜索、网页抓取、社交媒体内容、动态页面 | 一泽Eze (MIT) |
| `find-skills` | 发现和安装新 skill | Community |

---

## Official Plugins (官方插件)

### Superpowers (核心工作流) — by Anthropic

| Skill | 触发场景 |
|-------|---------|
| `superpowers:using-superpowers` | 会话启动时建立技能使用规范 |
| `superpowers:brainstorming` | 任何创意工作前的需求探索与设计 |
| `superpowers:writing-plans` | 多步骤任务的实现计划编写 |
| `superpowers:executing-plans` | 在独立会话中执行已有的实现计划 |
| `superpowers:dispatching-parallel-agents` | 2+ 个独立任务并行分发 |
| `superpowers:subagent-driven-development` | 当前会话中子代理驱动开发 |
| `superpowers:test-driven-development` | 实现功能/修复前先写测试 |
| `superpowers:systematic-debugging` | 遇到 bug、测试失败或异常行为时 |
| `superpowers:verification-before-completion` | 声称完成前必须运行验证命令 |
| `superpowers:requesting-code-review` | 完成任务/重大功能后请求审查 |
| `superpowers:receiving-code-review` | 收到 code review 反馈时 |
| `superpowers:finishing-a-development-branch` | 开发完成后决定合并/PR/清理 |
| `superpowers:using-git-worktrees` | 需要隔离工作空间的功能开发 |
| `superpowers:writing-skills` | 创建/编辑/验证技能 |

### Vercel Platform (25 skills) — by Vercel

| Skill | 触发场景 |
|-------|---------|
| `vercel:nextjs` | Next.js App Router 路由、组件、数据获取、部署 |
| `vercel:ai-sdk` | AI SDK 构建聊天、文本生成、工具调用、Agent |
| `vercel:ai-gateway` | 多 AI 提供商统一 API、模型路由、容错 |
| `vercel:chat-sdk` | 多平台聊天机器人（Slack/Telegram/Teams/Discord） |
| `vercel:shadcn` | shadcn/ui 组件、主题、Tailwind 集成 |
| `vercel:bootstrap` | 项目初始化、资源关联、环境配置 |
| `vercel:deploy` | 部署到 Vercel（preview / production） |
| `vercel:env` / `vercel:env-vars` | 环境变量管理与同步 |
| `vercel:marketplace` | Marketplace 集成发现与安装 |
| `vercel:status` | 项目部署状态查看 |
| `vercel:vercel-cli` | CLI 操作（部署、域名、日志） |
| `vercel:vercel-functions` | Serverless / Edge / Fluid Compute 函数 |
| `vercel:vercel-storage` | Blob / Edge Config / Neon / Upstash |
| `vercel:vercel-sandbox` | 沙箱代码执行（Firecracker microVM） |
| `vercel:vercel-agent` | AI 代码审查与事故调查 |
| `vercel:workflow` | 持久化工作流（WDK） |
| `vercel:next-cache-components` | Next.js 缓存组件 / PPR |
| `vercel:next-forge` | next-forge 单体仓库模板 |
| `vercel:next-upgrade` | Next.js 版本升级与迁移 |
| `vercel:react-best-practices` | React TSX 最佳实践检查 |
| `vercel:routing-middleware` | 路由中间件（请求拦截） |
| `vercel:runtime-cache` | 运行时缓存 API |
| `vercel:turbopack` | Turbopack 打包器配置与优化 |
| `vercel:deployments-cicd` | 部署与 CI/CD 流水线 |
| `vercel:verification` | 端到端流程验证 |
| `vercel:auth` | 认证集成（Clerk/Descope/Auth0） |
| `vercel:knowledge-update` | 平台知识纠偏与更新 |

### Figma (7 skills) — by Vercel/Figma

| Skill | 触发场景 |
|-------|---------|
| `figma:figma-use` | 调用 Figma 工具前的必备前置 |
| `figma:figma-implement-design` | Figma 设计稿 → 生产级代码（1:1 还原） |
| `figma:figma-generate-design` | 代码页面 → 写入 Figma |
| `figma:figma-generate-library` | 从代码库构建 Figma 设计系统 |
| `figma:figma-code-connect` | Figma 组件 ↔ 代码映射 |
| `figma:figma-create-design-system-rules` | 生成项目设计系统规则 |

### Chrome DevTools (4 skills) — via MCP

| Skill | 触发场景 |
|-------|---------|
| `chrome-devtools-mcp:chrome-devtools` | 浏览器调试与自动化 |
| `chrome-devtools-mcp:debug-optimize-lcp` | LCP 性能优化 |
| `chrome-devtools-mcp:a11y-debugging` | 无障碍调试与审计 |
| `chrome-devtools-mcp:troubleshooting` | DevTools 连接问题排查 |

### Other Official Skills

| Skill | 触发场景 |
|-------|---------|
| `frontend-design:frontend-design` | 高质量前端界面构建 |
| `code-review:code-review` | PR 代码审查 |
| `skill-creator:skill-creator` | 创建/修改/测试技能 |
| `claude-api` | Claude API / Anthropic SDK 开发 |
| `simplify` | 代码简化与重构 |
| `loop` | 定时循环执行命令 |
| `schedule` | Cron 定时远程代理 |
| `update-config` | Claude Code 配置管理 |
| `keybindings-help` | 快捷键自定义 |
