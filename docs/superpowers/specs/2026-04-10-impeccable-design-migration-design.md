# Impeccable + DESIGN.md 全站优化设计方案

## 概述

将个人网站（梨贝拉 / liwenhui.vercel.app）从当前的青绿色系 DaisyUI pastel 风格，分阶段迁移到 DESIGN.md 定义的 Airbnb 风格设计系统。使用 Impeccable 作为全程质量护栏。

## 决策记录

- **迁移策略**：方案 A — Impeccable 先行体检，修基础问题，再向 DESIGN.md 靠拢
- **覆盖范围**：全站所有页面（6+ 页面、16 个组件）
- **品牌色**：完全迁移到 Rausch Red (#ff385c)
- **字体**：替换为公开字体（见字体策略）

---

## 一、整体工作流

### 阶段一：体检（发现问题）

1. `/impeccable teach` — 注入当前项目上下文
2. `/audit` — 全站技术审计（a11y、性能、响应式）
3. `/critique` — UX 设计评审（层级、导航、信息架构）
4. `npx impeccable detect src/` — CLI 反模式扫描（24 条规则）
5. 汇总问题清单，修复基础问题

### 阶段二：迁移（向 DESIGN.md 靠拢）

6. 全局 Token 迁移 — 配色、字体、阴影、圆角、间距
7. 逐页组件适配 — 按优先级逐页调整

### 阶段三：打磨（质量收口）

8. `/typeset` — 排版精修
9. `/audit` — 二次全站审计
10. `/polish` — 最终打磨

### 阶段四：增强（必选）

11. `/animate` — 动效体系适配
12. `/colorize` — 色彩平衡微调
13. `/distill` — 精简冗余元素
14. `/harden` — 边缘场景加固
15. `/adapt` — 移动端专项优化
16. `npx impeccable detect https://liwenhui.vercel.app` — 线上最终质量门禁

---

## 二、字体策略

### 西文字体（替代 Airbnb Cereal VF）

**选定：Plus Jakarta Sans**
- 圆润几何体、Variable Font、Google Fonts 免费
- 气质最接近 Cereal VF（rounded terminals、warm）

### 中文字体

- **标题/装饰：LXGW WenKai（霞鹜文楷）** — 温暖文艺、有辨识度、适合个人品牌
- **正文：Source Han Sans SC（思源黑体）** — weight 齐全、可读性强

### 字体层级规则

| 角色 | 字体 | Weight | Letter-spacing |
|------|------|--------|----------------|
| 标题 h1-h3 | LXGW WenKai + Plus Jakarta Sans | 700 | -0.18px ~ -0.44px |
| UI 强调 | Source Han Sans SC + Plus Jakarta Sans | 600 | normal |
| 正文 UI | Source Han Sans SC + Plus Jakarta Sans | 500 | normal |
| 正文 Body | Source Han Sans SC + Plus Jakarta Sans | 400 | normal |

**原则**：不使用 300/400 weight 做标题，最低 500。

### 字体加载实现

**移除**：`global.css` 中的 Google Fonts Noto Sans SC / Noto Serif SC `@import`。

**新增字体引入**（在 BaseHead.astro 中 `<link>` preload）：
- **Plus Jakarta Sans**：Google Fonts，`?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`
- **LXGW WenKai**：使用 `lxgw-wenkai-webfont` npm 包（已做 unicode-range 分片，按需加载），或 CDN `https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@latest/style.css`
- **Source Han Sans SC**：继续使用 Google Fonts 的 Noto Sans SC（本质同一字体），`?family=Noto+Sans+SC:wght@400;500;600;700&display=swap`

**CSS font-family 声明**：
```css
body {
  font-family: 'Noto Sans SC', 'Plus Jakarta Sans', system-ui, sans-serif;
}
h1, h2, h3, .text-3xl, .text-4xl {
  font-family: 'LXGW WenKai', 'Plus Jakarta Sans', serif;
}
```

**性能保障**：
- 所有字体使用 `font-display: swap`
- LXGW WenKai 通过 `lxgw-wenkai-webfont` 的 unicode-range 分片按需加载（非全量加载）
- 总字体 payload 预算：< 500 KB（首屏）
- `<link rel="preload">` 预加载首屏关键字体子集

---

## 三、配色迁移方案

### 全局 Token 映射

| 角色 | 当前值 | 迁移目标 |
|------|--------|---------|
| 品牌强调色 | `oklch(~0.65 0.10 180)` 青绿 | `#ff385c` Rausch Red |
| 品牌深色（按下态） | — | `#e00b41` Deep Rausch |
| 错误色 | — | `#c13515` Error Red |
| 页面背景 | DaisyUI pastel | `#ffffff` 纯白 |
| 主文字 | DaisyUI base-content | `#222222` 温暖近黑 |
| 次要文字 | `oklch(0.52~0.58)` | `#6a6a6a` |
| 禁用态 | — | `rgba(0,0,0,0.24)` |
| 卡片阴影 | 单层 box-shadow | 三层：`rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px` |
| 卡片表面 | — | `#ffffff` |
| 按钮表面 | — | `#f2f2f2` |
| 边框 | — | `#c1c1c1` |

### 圆角标尺

| 级别 | 值 | 用途 |
|------|-----|------|
| Subtle | 4px | 小链接 |
| Standard | 8px | 按钮、标签、搜索 |
| Badge | 14px | 状态徽章 |
| Card | 20px | 卡片、大按钮 |
| Large | 32px | 大容器、Hero |
| Circle | 50% | 导航控件、头像 |

### DaisyUI 主题

重写 `tailwind.config.cjs` 中自定义主题，完整 DaisyUI Token 映射：

| DaisyUI Token | 当前值（pastel） | 迁移目标 |
|---------------|-----------------|---------|
| `primary` | `#6bbaa7` | `#ff385c` |
| `primary-content` | (auto) | `#ffffff` |
| `secondary` | (pastel default) | `#f2f2f2` |
| `accent` | (pastel default) | `#ff385c` |
| `neutral` | (pastel default) | `#222222` |
| `neutral-content` | (auto) | `#ffffff` |
| `base-100` | (pastel default) | `#ffffff` |
| `base-200` | (pastel default) | `#f2f2f2` |
| `base-300` | (pastel default) | `#e5e5e5` |
| `base-content` | (auto) | `#222222` |
| `error` | (pastel default) | `#c13515` |
| `info` | (pastel default) | `#428bff`（Legal Blue） |

### OKLCH 色值分组映射

当前 `global.css` 约 80 个 oklch 值，按分组迁移：

| 分组 | OKLCH 范围 | 迁移目标 |
|------|-----------|---------|
| 深色文字 | `oklch(0.25-0.45 ~180-210)` | `#222222` |
| 次要文字/图标 | `oklch(0.50-0.60 ~180-200)` | `#6a6a6a` |
| 品牌强调色 | `oklch(0.55-0.75 chroma>0.05 ~175-195)` | `#ff385c` |
| 淡色背景/表面 | `oklch(0.85-0.97 ~185-210)` | `#f2f2f2` 或 `#ffffff` |
| 边框/分隔线 | `oklch(0.90-0.96 low-chroma ~185-200)` | `#c1c1c1` 或 `rgba(0,0,0,0.08)` |

### 不适用的 DESIGN.md 颜色

- **Luxe Purple (`#460479`)**、**Plus Magenta (`#92174d`)**：Airbnb 高端层级专用色，本个人作品集网站不适用，不实现。
- **Legal Blue (`#428bff`)**：仅在有法律/信息链接需要时使用，映射到 DaisyUI `info` token。

### 克制原则

- Rausch Red 只用于 CTA 和品牌时刻，不做大面积背景
- 白色是主画布，内容提供色彩
- 不引入 DESIGN.md 之外的品牌色

---

## 四、组件迁移规范

### 高优先级（视觉核心）

| 组件 | 关键变更 |
|------|---------|
| Header | 白色粘性头部、Logo 区域 Rausch Red |
| SideBar | 白底、active 态 Rausch Red 左标记 |
| Card / HorizontalCard / ProjectCard | 三层阴影、20px 圆角、hover Level 2 阴影、图片优先 |
| Footer | 白底、`#222222` 链接、`rgba(0,0,0,0.08)` 分隔线 |

### 中优先级（内容展示）

| 组件 | 关键变更 |
|------|---------|
| CompanyTimeline / TimeLine | Rausch Red 节点、`#c1c1c1` 连线 |
| HorizontalShopItem | 跟随 HorizontalCard 样式：三层阴影、20px 圆角、`#222222` 文字 |
| SkillBoard | `#f2f2f2` 底 + `#222222` 文字、hover Level 2 阴影 |
| BubbleCloud / TagCloud | `#f2f2f2` 圆角胶囊、hover 阴影、移除彩色背景 |

### 低优先级（辅助）

| 组件 | 关键变更 |
|------|---------|
| BaseHead | 更新字体引用 |
| PageScroller | 50% 圆形、`#f2f2f2` 底色 |
| SideBarMenu / SideBarFooter | 跟随 SideBar 风格 |

### 全局 CSS 重写范围

- `hero-gradient`：删除青绿渐变 → 纯白/极淡暖色
- `shimmer-text`：Rausch Red 光效或移除
- 所有 `oklch(~180 hue)` → 按 OKLCH 分组映射表替换
- 阴影统一三层系统
- 圆角统一 5 级标尺
- **动效处理**：
  - `fadeSlideUp`：保留，无颜色依赖
  - `shimmer` / `btn-shimmer`：色值从青绿改为 Rausch Red 系，或移除（Airbnb 风格偏克制）
  - `avatarDrop` / `avatarFadeScale`：保留动画逻辑
  - `ringReveal` + `avatar-ring-glow`：`conic-gradient` 从青绿 oklch → Rausch Red 渐变或改为中性灰

### AI Lab 页面说明

`ai-lab/index.astro` 和 `ai-lab/personal-site.astro` 使用 `global.css` 中的 `.home-lab-card__*` 系列样式。迁移时：
- `.home-lab-card__status` 背景从青绿改为 Rausch Red
- `.home-lab-card__tools span` 背景从青绿淡色改为 `#f2f2f2`
- 其余文字/背景色跟随全局 OKLCH 分组映射

### 页面迁移顺序

`index.astro` → `blog/` → `cv.astro` → `projects.astro` → `skills.astro` → `contact.astro` → `ai-lab/`

### 断点与间距策略

- **断点**：保持当前三断点（1024px / 768px / 480px），不采用 DESIGN.md 的 8 级断点体系（个人作品集不需要）
- **间距**：采用 DESIGN.md 的 8px 基础单位，在迁移组件时逐步对齐 padding/margin 到 8px 倍数
- **暗色模式**：移除 DaisyUI darkTheme 配置，本站不提供暗色模式

---

## 五、Impeccable 命令使用手册

### 阶段一：体检

| 步骤 | 命令 | 目标 |
|------|------|------|
| 1 | `/impeccable teach` | 生成项目设计上下文 |
| 2 | `/audit` | a11y、性能、响应式问题清单 |
| 3 | `/critique` | Nielsen 启发式 UX 评审 |
| 4 | `npx impeccable detect src/` | 反模式扫描（渐变滥用、字体问题、低对比度等） |

### 阶段二：迁移护栏

| 时机 | 命令 | 用途 |
|------|------|------|
| Token 替换后 | `/audit header` `/audit sidebar` | 局部审计，确认对比度 |
| 页面迁移后 | `npx impeccable detect src/pages/<page>.astro` | 单文件反模式检测 |
| 字体替换后 | `/typeset` | 排版层级校准 |
| 组件改完后 | `/critique <component>` | 针对性 UX 评审 |

### 阶段三：打磨

| 步骤 | 命令 | 目标 |
|------|------|------|
| 1 | `/typeset` | 全站排版精修 |
| 2 | `/audit` | 二次全站审计 |
| 3 | `/polish` | 最终打磨 |
| 4 | `npx impeccable detect <线上URL>` | 部署后质量门禁 |

### 阶段四：增强（必选）

在打磨完成后，依次执行全部增强命令：

| 步骤 | 命令 | 目标 |
|------|------|------|
| 1 | `/animate` | 适配新风格的动效体系，统一 easing、时长、交互反馈 |
| 2 | `/colorize` | 配色迁移后的色彩平衡微调，确保 Rausch Red 体系和谐 |
| 3 | `/distill` | 精简冗余元素，减少视觉噪声 |
| 4 | `/harden` | 处理边缘场景：空状态、长文本溢出、国际化 |
| 5 | `/adapt` | 移动端专项优化，触控目标、响应式断裂点 |

---

## 六、技术约束

- **框架**：Astro 4.0.2（静态输出）
- **CSS**：TailwindCSS 3.3.5 + DaisyUI 4.4.10
- **部署**：Vercel 静态
- **包管理**：pnpm 10.33.0
- **DESIGN.md 定位**：目标设计系统参考，逐步靠拢而非一次性替换
