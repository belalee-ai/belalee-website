---
title: "让用户「留下来」和让用户「走不掉」，我做了 7 年产品才搞清楚这是两件事"
description: "DeepSeek 永远免费，估值 200 亿。这件事背后有一个做产品的人都该想清楚的问题。"
pubDate: "Apr 23 2026"
badge: "产品"
tags: ["商业化", "护城河", "用户留存", "DeepSeek"]
---

DeepSeek 要融资了，估值 200 亿美金。看到这条消息，我的第一反应和大多数人一样——又一个烧钱换估值的故事。

但我查了一下幻方科技的体量。量化私募，管理规模超过 700 亿人民币，一年净利大概在 50 亿量级。他们根本不差这点钱。业内的主流判断是这笔融资为了给核心研究员做期权定价，不是因为活不下去了。

<div class="design-figure">
<div class="design-figure__title">幻方科技 × DeepSeek 规模一览</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="560" height="200" rx="8" fill="#0f172a"/>
  <!-- Card 1: 管理规模 -->
  <rect x="20" y="24" width="155" height="152" rx="6" fill="#1e293b"/>
  <text x="97" y="56" text-anchor="middle" font-size="11" fill="#94a3b8">幻方科技管理规模</text>
  <text x="97" y="100" text-anchor="middle" font-size="32" font-weight="800" fill="#f8fafc">700亿</text>
  <text x="97" y="124" text-anchor="middle" font-size="11" fill="#64748b">人民币</text>
  <rect x="36" y="142" width="123" height="20" rx="3" fill="#0f172a"/>
  <text x="97" y="156" text-anchor="middle" font-size="10" fill="#475569">量化私募 AUM</text>
  <!-- Card 2: 年净利 -->
  <rect x="200" y="24" width="155" height="152" rx="6" fill="#1e293b"/>
  <text x="278" y="56" text-anchor="middle" font-size="11" fill="#94a3b8">幻方年净利润（估）</text>
  <text x="278" y="100" text-anchor="middle" font-size="32" font-weight="800" fill="#f8fafc">50亿</text>
  <text x="278" y="124" text-anchor="middle" font-size="11" fill="#64748b">人民币 / 年</text>
  <rect x="216" y="142" width="123" height="20" rx="3" fill="#0f172a"/>
  <text x="278" y="156" text-anchor="middle" font-size="10" fill="#475569">覆盖 DeepSeek 研发投入</text>
  <!-- Card 3: DeepSeek 估值 -->
  <rect x="380" y="24" width="160" height="152" rx="6" fill="#1c3a2e"/>
  <text x="460" y="56" text-anchor="middle" font-size="11" fill="#6ee7b7">DeepSeek 融资估值</text>
  <text x="460" y="96" text-anchor="middle" font-size="28" font-weight="800" fill="#4ade80">$200亿</text>
  <text x="460" y="118" text-anchor="middle" font-size="11" fill="#86efac">美金</text>
  <rect x="396" y="142" width="128" height="20" rx="3" fill="#14532d"/>
  <text x="460" y="156" text-anchor="middle" font-size="10" fill="#4ade80">≈ 1,450 亿人民币</text>
</svg>
</div>

那问题就来了。一个永远不向用户收钱、母公司还不差钱的产品，腾讯阿里为什么要抢着给它 200 亿的估值？

---

这件事的答案其实不复杂。你用的那个 DeepSeek，那个聊天界面，是它的成本，不是它的收入。真正的商业化在另一层，在 API，在那些把 DeepSeek 接进自己产品里的开发者身上。

<div class="design-figure">
<div class="design-figure__title">API 定价对比（每百万 tokens 输入）</div>
<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- Background -->
  <rect x="0" y="0" width="560" height="200" rx="8" fill="#f8fafc"/>
  <!-- Bar: DeepSeek -->
  <rect x="60" y="40" width="32" height="120" rx="4" fill="#10b981"/>
  <text x="76" y="175" text-anchor="middle" font-size="11" fill="#374151">DeepSeek</text>
  <text x="76" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#10b981">$0.28</text>
  <text x="76" y="190" text-anchor="middle" font-size="10" fill="#6b7280">V3</text>
  <!-- Bar: GPT-4o mini -->
  <rect x="160" y="112" width="32" height="48" rx="4" fill="#f59e0b"/>
  <text x="176" y="175" text-anchor="middle" font-size="11" fill="#374151">GPT-4o mini</text>
  <text x="176" y="104" text-anchor="middle" font-size="13" font-weight="700" fill="#f59e0b">$0.15</text>
  <text x="176" y="190" text-anchor="middle" font-size="10" fill="#6b7280">OpenAI</text>
  <!-- Bar: GPT-4o -->
  <rect x="280" y="40" width="32" height="120" rx="4" fill="#ef4444" opacity="0.3"/>
  <rect x="280" y="40" width="32" height="120" rx="4" fill="none" stroke="#ef4444" stroke-dasharray="4"/>
  <text x="296" y="175" text-anchor="middle" font-size="11" fill="#374151">GPT-4o</text>
  <text x="296" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#ef4444">$2.50</text>
  <text x="296" y="190" text-anchor="middle" font-size="10" fill="#6b7280">OpenAI</text>
  <!-- Annotation -->
  <line x1="76" y1="80" x2="296" y2="80" stroke="#d1d5db" stroke-dasharray="3" stroke-width="1"/>
  <rect x="340" y="65" width="180" height="30" rx="4" fill="#ecfdf5" stroke="#6ee7b7"/>
  <text x="430" y="84" text-anchor="middle" font-size="11" fill="#065f46">DeepSeek ≈ GPT-4o 价格的 1/10</text>
</svg>
</div>

每百万个 tokens 收 $0.28，是 OpenAI 旗舰模型价格的十分之一。你用的是广告，开发者付的是账单。

这个逻辑不只是 DeepSeek 在用，所有大模型公司都在做。我今天真正想聊的，不是这个模式本身，而是它背后有一件事，是我做了七年产品才慢慢想清楚的。

---

我在美图做会员的那几年，一直有一种隐隐的不踏实感。

数据是好看的，DAU 在涨，留存也不错，会员转化一直在优化。但你盯着这些数字的时候，会有一个问题反复出现在脑子里——这些用户今天在，明天还在吗？

我后来想清楚了，这种不踏实感从哪里来的。

**大多数产品做的是「让用户留下来」。** 你给用户足够的理由打开 App，够用的功能，好的体验，他留下来是因为你做得好。这件事本身没有问题，但它是脆的。

因为「好」是一个相对概念。今天你好，明天竞品比你更好，用户就走了，他走的代价是零。这种模式做的越好，越依赖你持续领先，一旦竞品追上来，用户流失的速度会出乎意料地快。

**「让用户走不掉」是另一件事，需要另一套思路。**

<div class="design-figure">
<div class="design-figure__title">两件完全不同的事</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- Left column: 留下来 -->
  <rect x="20" y="20" width="240" height="180" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
  <text x="140" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">留下来</text>
  <text x="140" y="78" text-anchor="middle" font-size="12" fill="#64748b">因为你够好</text>
  <text x="140" y="102" text-anchor="middle" font-size="12" fill="#64748b">用户满意</text>
  <text x="140" y="126" text-anchor="middle" font-size="12" fill="#64748b">随时可以走</text>
  <rect x="40" y="148" width="200" height="28" rx="4" fill="#e2e8f0"/>
  <text x="140" y="167" text-anchor="middle" font-size="11" fill="#94a3b8">迁移成本 = 0</text>
  <!-- Right column: 走不掉 -->
  <rect x="300" y="20" width="240" height="180" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="420" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="#f59e0b">走不掉</text>
  <text x="420" y="78" text-anchor="middle" font-size="12" fill="#e2e8f0">换掉你代价太高</text>
  <text x="420" y="102" text-anchor="middle" font-size="12" fill="#e2e8f0">思维方式被你塑造</text>
  <text x="420" y="126" text-anchor="middle" font-size="12" fill="#e2e8f0">自己不想换</text>
  <rect x="320" y="148" width="200" height="28" rx="4" fill="#1e293b"/>
  <text x="420" y="167" text-anchor="middle" font-size="11" fill="#f59e0b">迁移成本 = 真实代价</text>
  <!-- Divider arrow -->
  <text x="280" y="118" text-anchor="middle" font-size="20" fill="#cbd5e1">≠</text>
</svg>
</div>

走不掉建立在两件事上。

**第一件是习惯的深度。** 不只是操作习惯，是解决问题的方式被你重塑了。用了你的产品足够久，用户看到一个问题的时候，第一个浮现的解决方案就是你的那套流程。他换掉你，要重建的不只是新产品的操作路径，是他解决这类问题的思维框架。这个迁移成本，比你想象中高得多。

**第二件是进化的方向感。** 你一直在用户最需要的地方迭代，他发现这个产品懂他，发现它在跟着他的需求成长。这种信任积累到一定程度，他甚至不会主动去看竞品，因为他觉得没有必要换。

---

用这个框架来看 DeepSeek，就清晰多了。

<div class="design-figure">
<div class="design-figure__title">DeepSeek 双层商业模式</div>
<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- C端 -->
  <rect x="20" y="20" width="240" height="140" rx="8" fill="#fafafa" stroke="#e5e7eb"/>
  <text x="140" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">C 端（你和我）</text>
  <text x="140" y="74" text-anchor="middle" font-size="11" fill="#6b7280">免费使用聊天界面</text>
  <text x="140" y="96" text-anchor="middle" font-size="11" fill="#6b7280">随时可切换 ChatGPT / Claude</text>
  <rect x="40" y="116" width="200" height="28" rx="4" fill="#fee2e2"/>
  <text x="140" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#dc2626">「留下来」— 脆</text>
  <!-- B端 -->
  <rect x="300" y="20" width="240" height="140" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="420" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#f8fafc">B 端（开发者）</text>
  <text x="420" y="74" text-anchor="middle" font-size="11" fill="#94a3b8">API 接入 · 代码嵌入产品</text>
  <text x="420" y="96" text-anchor="middle" font-size="11" fill="#94a3b8">替换需重写逻辑 + 重测行为</text>
  <rect x="320" y="116" width="200" height="28" rx="4" fill="#14532d"/>
  <text x="420" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#4ade80">「走不掉」— 护城河</text>
</svg>
</div>

它的 C 端做到了「留下来」——DeepSeek 够好，免费，有理由打开。但我今天也可以去用 ChatGPT，可以去用 Claude，换掉它的代价是零。

它的 B 端做到了「走不掉」。你花时间调通接口，写好接入逻辑，测好边界情况，把它嵌进产品的核心流程里。半年后 DeepSeek 提价，你打开代码库，发现替换它需要重写一块不小的逻辑，还需要重新跑测试，重新验证行为。你算了一下时间成本，决定先用着。

而且它一直在出新模型，能力在持续增强，你接进去的产品一直在受益。替换它，你还要去重新找一个同等质量的替代品，研究文档，测行为差异，这个过程你不想花时间。

这就是「走不掉」的完整形态。没有任何条款在锁你，是你自己的决策成本在留着你。

---

这件事为什么值得认真想？因为很多做产品的人，把「留下来」和「走不掉」当成了同一件事。

他们在设计权益、做活动、优化留存流程的时候，解决的都是「留下来」的问题——怎么让用户今天不走，怎么让用户这个月还在。这些都对，都必要。

但「走不掉」的设计是另一层，它问的是另一个问题：

> 你的产品里，有没有哪个功能或者哪套流程，是用户用了足够久之后，他的解决问题的方式被你塑造了，换掉你需要付出真实代价的？

如果没有，你做的所有「留下来」的努力，都是建在沙滩上的。竞品足够好的那一天，用户离开的门槛是零。

---

DeepSeek 被说免费，说商业模式不清晰，说是烧钱换影响力。但它估值 200 亿的底气，藏在那些开发者的代码库里，藏在那一行行接入 API 的调用里。那些代码才是它真正的护城河，不是用户数，不是 DAU，是换掉它的代价。

**你的产品里，有没有那行代码？**
