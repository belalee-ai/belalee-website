---
title: "让用户「留下来」和让用户「走不掉」，我做了 7 年产品才搞清楚这是两件事"
description: "DeepSeek 永远免费，估值 200 亿。这件事背后有一个做产品的人都该想清楚的问题。"
pubDate: "Apr 27 2026"
badge: "产品"
tags: ["商业化", "护城河", "用户留存", "DeepSeek"]
---

据 The Information 2026 年 4 月报道，DeepSeek 正以 200 亿美金估值进行新一轮融资（但消息未经 DeepSeek、腾讯、阿里三方官方确认）。看到这条消息，我的第一反应和大多数人一样，又一个烧钱换估值的故事。

但我顺手查了一下幻方科技的体量。量化私募，管理规模超过 700 亿人民币，按行业常见的管理费和业绩报酬粗算，外界估算其 2025 年相关收入可能在 50 亿人民币量级，但这不是经审计净利润。他们根本不差这点钱。业内的主流判断是，这笔融资为了给核心研究员做期权定价，不是因为活不下去了。

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

那问题就来了。一个永远不向用户收钱、母公司还不差钱的产品，如果该估值属实，腾讯阿里为什么要抢着给它 200 亿？

---

这件事的答案其实不复杂。我们用的那个 DeepSeek，那个聊天界面，是它的成本，不是它的收入。真正的商业化在另一层，在 API，在那些把 DeepSeek 接进自己产品里的开发者身上。

<div class="design-figure">
<div class="design-figure__title">主流 API 模型价格对比（¥ / 百万 tokens · 标准 API 单价 · DeepSeek V4-Pro 取限时 2.5 折价 · 海外厂商为标准价 · 按 1 美金 ≈ 7.2 元换算 · 不含 Batch / 缓存命中 / 企业折扣 / 区域加价 · Gemini 2.5 Pro 取 ≤200K 上下文价 · Gemini Flash 为低延迟档作参考）</div>
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="600" height="280" rx="8" fill="#f8fafc"/>
  <!-- Legend -->
  <rect x="380" y="16" width="12" height="12" rx="2" fill="#10b981"/>
  <text x="398" y="26" font-size="11" fill="#374151">Input</text>
  <rect x="448" y="16" width="12" height="12" rx="2" fill="#0f172a"/>
  <text x="466" y="26" font-size="11" fill="#374151">Output</text>
  <!-- X axis -->
  <line x1="40" y1="220" x2="580" y2="220" stroke="#cbd5e1" stroke-width="1"/>
  <!-- DeepSeek V4-Pro: ¥3 / ¥6 -->
  <rect x="60" y="216" width="22" height="4" rx="1" fill="#10b981"/>
  <rect x="84" y="212" width="22" height="8" rx="1" fill="#0f172a"/>
  <text x="83" y="208" text-anchor="middle" font-size="10" font-weight="700" fill="#10b981">¥3</text>
  <text x="95" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">¥6</text>
  <text x="83" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="#10b981">DeepSeek V4-Pro</text>
  <!-- Gemini 2.5 Flash: ¥2.16 / ¥18 -->
  <rect x="170" y="217" width="22" height="3" rx="1" fill="#10b981"/>
  <rect x="194" y="195" width="22" height="25" rx="1" fill="#0f172a"/>
  <text x="181" y="208" text-anchor="middle" font-size="10" fill="#374151">¥2.16</text>
  <text x="205" y="187" text-anchor="middle" font-size="10" fill="#374151">¥18</text>
  <text x="193" y="240" text-anchor="middle" font-size="11" fill="#374151">Gemini 2.5 Flash</text>
  <!-- Gemini 2.5 Pro: ¥9 / ¥72 -->
  <rect x="280" y="208" width="22" height="12" rx="1" fill="#10b981"/>
  <rect x="304" y="120" width="22" height="100" rx="1" fill="#0f172a"/>
  <text x="291" y="200" text-anchor="middle" font-size="10" fill="#374151">¥9</text>
  <text x="315" y="112" text-anchor="middle" font-size="10" fill="#374151">¥72</text>
  <text x="303" y="240" text-anchor="middle" font-size="11" fill="#374151">Gemini 2.5 Pro</text>
  <!-- GPT-5.4: ¥18 / ¥108 -->
  <rect x="390" y="195" width="22" height="25" rx="1" fill="#10b981"/>
  <rect x="414" y="70" width="22" height="150" rx="1" fill="#0f172a"/>
  <text x="401" y="187" text-anchor="middle" font-size="10" fill="#374151">¥18</text>
  <text x="425" y="62" text-anchor="middle" font-size="10" fill="#374151">¥108</text>
  <text x="413" y="240" text-anchor="middle" font-size="11" fill="#374151">GPT-5.4</text>
  <!-- Claude Sonnet 4.6: ¥21.6 / ¥108 -->
  <rect x="500" y="190" width="22" height="30" rx="1" fill="#10b981"/>
  <rect x="524" y="70" width="22" height="150" rx="1" fill="#0f172a"/>
  <text x="511" y="182" text-anchor="middle" font-size="10" fill="#dc2626">¥21.6</text>
  <text x="535" y="62" text-anchor="middle" font-size="10" fill="#dc2626">¥108</text>
  <text x="523" y="240" text-anchor="middle" font-size="11" fill="#374151">Claude Sonnet 4.6</text>
  <!-- Annotation -->
  <rect x="40" y="252" width="520" height="20" rx="4" fill="#ecfdf5" stroke="#6ee7b7"/>
  <text x="300" y="266" text-anchor="middle" font-size="11" font-weight="600" fill="#065f46">DeepSeek V4-Pro 限时优惠：输入约 GPT/Claude 主力档 1/6~1/7，输出约 1/12~1/18</text>
</svg>
</div>

DeepSeek 官方主力模型 V4-Pro，限时 2.5 折优惠期内输入 ¥3、输出 ¥6 每百万 tokens（原价 ¥12 / ¥24，优惠至 2026/05/05）。同等性能档的 GPT-5.4 标准价 ¥18 / ¥108，Claude Sonnet 4.6 标准价 ¥21.6 / ¥108（按 1 美金 ≈ 7.2 元换算）。即便用 DeepSeek 原价对比，输出价格也只有海外主力档的 1/4 ~ 1/5；限时优惠下差距更大（输入约 1/6~1/7，输出约 1/12~1/18）。我们用的是广告，开发者付的是账单。

这个逻辑所有大模型公司都在做，DeepSeek 没什么特别的。我今天真正想聊的是它背后另一件事，做了七年产品我才慢慢想清楚。

---

我做会员的那几年，一直有一种隐隐的不踏实感。

数据是好看的，DAU 在涨，留存也不错，会员转化一直在优化。可盯着这些数字的时候，脑子里其实会反复出现一个问题，这些用户今天在，明天还在吗。说白了就是，他们留下来，到底是真的喜欢我们，还是还没找到更好的。

我后来才想清楚这种不踏实感从哪儿来的。

大多数产品做的是「让用户留下来」。给用户足够的理由打开 App，够用的功能，好的体验，他留下来其实是因为我们做得好。这件事本身并不是没有意义，可它是脆的。

「好」其实是一个相对概念。

就像你出门吃饭，街上每家店都能做你想吃的菜，可只有一家才是你真正想要的味道。哪怕它换到别的城市，你还是会想去。

可大多数产品其实没做到那家饭店的程度。做得好，并不等于做到了独一无二。

今天我们好，用户就来；明天竞品比我们更好，用户就走，他走的代价是零。这种模式并不是做得不好，是做得越好越依赖我们持续领先。一旦竞品追上来，用户流失的速度会出乎意料地快。

「让用户走不掉」是另一件事，要的是另一套思路。

<div class="design-figure">
<div class="design-figure__title">两件完全不同的事</div>
<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- Left column: 留下来 -->
  <rect x="20" y="20" width="240" height="180" rx="8" fill="#f1f5f9" stroke="#e2e8f0"/>
  <text x="140" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">留下来</text>
  <text x="140" y="78" text-anchor="middle" font-size="12" fill="#64748b">因为我们够好</text>
  <text x="140" y="102" text-anchor="middle" font-size="12" fill="#64748b">用户满意</text>
  <text x="140" y="126" text-anchor="middle" font-size="12" fill="#64748b">随时可以走</text>
  <rect x="40" y="148" width="200" height="28" rx="4" fill="#e2e8f0"/>
  <text x="140" y="167" text-anchor="middle" font-size="11" fill="#94a3b8">迁移成本 = 0</text>
  <!-- Right column: 走不掉 -->
  <rect x="300" y="20" width="240" height="180" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="420" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="#f59e0b">走不掉</text>
  <text x="420" y="78" text-anchor="middle" font-size="12" fill="#e2e8f0">换掉我们代价太高</text>
  <text x="420" y="102" text-anchor="middle" font-size="12" fill="#e2e8f0">思维方式被我们塑造</text>
  <text x="420" y="126" text-anchor="middle" font-size="12" fill="#e2e8f0">自己不想换</text>
  <rect x="320" y="148" width="200" height="28" rx="4" fill="#1e293b"/>
  <text x="420" y="167" text-anchor="middle" font-size="11" fill="#f59e0b">迁移成本 = 真实代价</text>
  <!-- Divider arrow -->
  <text x="280" y="118" text-anchor="middle" font-size="20" fill="#cbd5e1">≠</text>
</svg>
</div>

走不掉建立在两件事上。

一件是习惯的深度。不只是操作习惯，是解决问题的方式真的被我们重塑了。用了我们的产品足够久，用户看到一个问题的时候，第一个浮现的解决方案就是我们的那套流程。

就像你剪了几年头发都在同一家店，那个发型师懂你的脸型、习惯你的发质，记得你上次剪短了不舒服。换一家店，可能也能剪，可剪出来就不是你真正想要的样子，你还是会想念之前那位。

他换掉我们，要重建的不只是新产品的操作路径，是他解决这类问题的思维框架。这个迁移成本比想象中高得多。

另一件是进化的方向感。我们一直在用户最需要的地方迭代，他发现这个产品真的懂他，在跟着他的需求成长。这种信任积累到一定程度，他甚至不会主动去看竞品。其实并不是他觉得没机会，是他觉得没必要换。

---

用这个框架来看 DeepSeek，就清晰多了。

<div class="design-figure">
<div class="design-figure__title">DeepSeek 双层商业模式</div>
<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- C端 -->
  <rect x="20" y="20" width="240" height="140" rx="8" fill="#fafafa" stroke="#e5e7eb"/>
  <text x="140" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#374151">C 端（我们这种普通用户）</text>
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

它的 C 端只做到了「留下来」。DeepSeek 够好，免费，有理由打开。可我们今天也能用 ChatGPT，能用 Claude，换掉它的代价是零。

它的 B 端做到了「走不掉」。开发者花时间调通接口，写好接入逻辑，测好边界情况，把它嵌进产品的核心流程里。如果半年后 DeepSeek 调价，打开代码库，发现替换它需要重写一块不小的逻辑，还需要重新跑测试，重新验证行为。算一下时间成本，决定先用着。

但这里要把颗粒度再拆细一层。API 接入有迁移成本是所有大模型公司的共性，不是 DeepSeek 一家的。OpenAI、Anthropic、Gemini，一旦接进去迁移成本同样高。所以真正要回答的问题不是「为什么不换」，而是上一步，为什么开发者第一次会选 DeepSeek。

我看下来是三件事叠在一起。

一是价格断崖。同等性能档面前，DeepSeek 便宜一档。很多 SaaS 产品原本用 GPT-5.4 或 Claude Sonnet 跑不通账，毛利打不正，API 成本吃掉一半客单价。这种产品用 DeepSeek 就能跑通。它不是抢 OpenAI 的存量客户，是解锁了一整个原本不存在的应用层。

二是开放权重/open weights。DeepSeek V3、R1、V4 全部开放权重，从 HuggingFace 下载就能本地部署，能自己微调。这是 OpenAI 和 Anthropic 给不了的。对数据敏感行业、对出海合规、对金融医疗这类客户，「可以不依赖它」反而是「敢深度接入它」的前提。闭源模型的天花板被这一招直接掀了。

三是先发心智加生态绑定。今年 1 月那波 DeepSeek-R1 的全球出圈，把「国产模型也能打」这件事的认知很大程度上锚定在了 DeepSeek 上。中文场景训练充分，对国内开发者是默认选项。GitHub 上 LangChain、Dify、Coze 这些工具链先适配了它，后来的模型再好也要从生态迁移这件事开始重新争。

<div class="design-figure">
<div class="design-figure__title">为什么是 DeepSeek｜B 端被选中的三层底层逻辑</div>
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="600" height="280" rx="8" fill="#0f172a"/>
  <!-- Layer 3 (top, narrow) -->
  <polygon points="220,30 380,30 360,80 240,80" fill="#7c3aed" opacity="0.85"/>
  <text x="300" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#f8fafc">先发心智 + 生态绑定</text>
  <text x="300" y="72" text-anchor="middle" font-size="10" fill="#e9d5ff">LangChain / Dify / Coze 先适配 · 中文默认选项</text>
  <!-- Layer 2 (middle) -->
  <polygon points="160,90 440,90 420,150 180,150" fill="#0ea5e9" opacity="0.85"/>
  <text x="300" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="#f8fafc">开源权重</text>
  <text x="300" y="134" text-anchor="middle" font-size="10" fill="#bae6fd">HuggingFace 可下载 · 本地可部署 · 闭源模型给不了的安全感</text>
  <!-- Layer 1 (bottom, wide) -->
  <polygon points="80,160 520,160 500,230 100,230" fill="#10b981" opacity="0.9"/>
  <text x="300" y="187" text-anchor="middle" font-size="15" font-weight="800" fill="#f8fafc">价格断崖｜¥3 vs ¥18＋</text>
  <text x="300" y="208" text-anchor="middle" font-size="11" fill="#a7f3d0">让原本算不通账的应用跑通 · 解锁原本不存在的应用层</text>
  <!-- Right annotation -->
  <rect x="40" y="246" width="520" height="22" rx="4" fill="#1e293b" stroke="#334155"/>
  <text x="300" y="261" text-anchor="middle" font-size="11" font-weight="600" fill="#fbbf24">三层叠加 = 「为什么是 DeepSeek」 · 走不掉是接入之后，被选中是接入之前</text>
</svg>
</div>

走不掉是接入之后的事。为什么是它，是接入之前的事。在我看来，两件事叠在一起，才是这个估值能站得住的核心理由。

而且它一直在出新模型，能力在持续增强，接进去的产品一直在受益。替换它未必难在改几行 API 参数，而是难在重新验证输出行为、提示词效果、工具调用稳定性、成本结构和线上边界情况, 需要重新找一个同等质量的替代品，研究文档，测行为差异，这个过程开发者不想花时间。

这就是「走不掉」的完整形态。没有任何条款在锁我们，是我们自己的决策成本在留着我们。

"DeepSeek 的护城河不在普通用户聊天界面的留存，而在开发者第一次选择它之后形成的工程惯性：价格让它被选中，开放权重让它敢被深接入，生态适配让它更容易进入工作流；真正的迁移成本不只是 API 替换，而是重新验证整个产品里的模型行为。"

---

这件事为什么值得认真想？因为很多做产品的人，其实把「留下来」和「走不掉」当成了同一件事。

他们在设计权益、做活动、优化留存流程的时候，解决的都是「留下来」的问题。怎么让用户今天不走，怎么让用户这个月还在。这些并不是不对，都必要。

<div class="design-figure">
<div class="design-figure__title">大多数产品的留存工作都停在这里</div>
<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <defs>
    <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <!-- Box 1 -->
  <rect x="20" y="30" width="110" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="75" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">权益设计</text>
  <text x="75" y="75" text-anchor="middle" font-size="10" fill="#94a3b8">会员 / 积分 / 福利</text>
  <!-- Arrow -->
  <line x1="132" y1="60" x2="158" y2="60" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Box 2 -->
  <rect x="160" y="30" width="110" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="215" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">活动运营</text>
  <text x="215" y="75" text-anchor="middle" font-size="10" fill="#94a3b8">促销 / Push / 活动</text>
  <!-- Arrow -->
  <line x1="272" y1="60" x2="298" y2="60" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Box 3 -->
  <rect x="300" y="30" width="110" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="355" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">留存优化</text>
  <text x="355" y="75" text-anchor="middle" font-size="10" fill="#94a3b8">A/B / 流失预警</text>
  <!-- Arrow to result -->
  <line x1="412" y1="60" x2="438" y2="60" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
  <!-- Result box with crack -->
  <rect x="440" y="22" width="100" height="76" rx="6" fill="#fef9c3" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="490" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">留下来</text>
  <text x="490" y="70" text-anchor="middle" font-size="10" fill="#b45309">✓ 但随时</text>
  <text x="490" y="84" text-anchor="middle" font-size="10" fill="#b45309">可以走</text>
  <!-- Question tag -->
  <text x="490" y="116" text-anchor="middle" font-size="22" font-weight="900" fill="#ef4444">?</text>
  <text x="357" y="116" text-anchor="middle" font-size="10" fill="#94a3b8">绝大多数产品的留存体系终点</text>
</svg>
</div>

「走不掉」的设计是另一层，它问的是另一个问题。

我们的产品里有没有哪个功能或者哪套流程，是用户用了足够久之后，他解决问题的方式真的被我们塑造了，换掉我们要付出真实代价的。

如果没有，我们做的所有「留下来」的努力，都是建在沙滩上的。竞品足够好的那一天，用户离开的门槛是零。

---

DeepSeek 被说免费，说商业模式不清晰，说是烧钱换影响力。可它在资本市场上能讲出价的底气，我认为藏在那些开发者的代码库里，藏在那一行行接入 API 的调用里。那些代码才是它真正的护城河。不是用户数，不是 DAU，是换掉它的代价。

我们的产品里，有没有那行代码。

---

## 数据核查记录

> 本文所有硬数据均从官方一手文档核查。核查日期：**2026-04-27**。汇率口径：**1 美金 ≈ 7.2 元人民币**。

### API 定价（核查于 2026-04-27）

| 模型 | 官方价格 | ¥换算 | 一手来源 |
|---|---|---|---|
| DeepSeek V4-Pro | ¥3 / ¥6（cache miss，限时 2.5 折至 2026/05/05） | 直接¥ | [api-docs.deepseek.com/zh-cn/quick_start/pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing) |
| DeepSeek V4-Flash | ¥1 / ¥2（cache miss） | 直接¥ | 同上 |
| OpenAI GPT-5.4 | $2.50 / $15 | ¥18 / ¥108 | [developers.openai.com/api/docs/pricing](https://developers.openai.com/api/docs/pricing) |
| OpenAI GPT-5.5 | $5 / $30 | ¥36 / ¥216 | 同上 |
| Anthropic Claude Sonnet 4.6 | $3 / $15 | ¥21.6 / ¥108 | [platform.claude.com/docs/en/about-claude/pricing](https://platform.claude.com/docs/en/about-claude/pricing) |
| Anthropic Claude Opus 4.7 | $5 / $25 | ¥36 / ¥180 | 同上 |
| Google Gemini 2.5 Pro | $1.25 / $10（≤200k） | ¥9 / ¥72 | [ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing) |
| Google Gemini 2.5 Flash | $0.30 / $2.50 | ¥2.16 / ¥18 | 同上 |

### 其他事实

- **DeepSeek 估值 200 亿美金**：The Information 独家报道，2026.04.22 — 腾讯、阿里、DeepSeek 三方均未官方确认
- **幻方科技 700 亿管理规模 / 50 亿年净利**：虎嗅《幻方科技深度报道》(2025) + 业内公开估算（量化私募行业惯例口径）
- **DeepSeek 开源权重**（V3 / R1 / V4 全部在 HuggingFace 开放下载、可本地部署）：核查于 [huggingface.co/deepseek-ai](https://huggingface.co/deepseek-ai)，2026.04.27
- **图表数据与框架**：作者根据 7 年+ 产品实践整理

### 复核机制

> AI 模型定价变动频繁（一个月内可能调整）。如距离核查日期超过 30 天，建议重新核对官方文档；本文若发现数据偏差，欢迎读者指出。

### 内容声明

- 本文配图（含数据可视化 SVG）由作者借助 AI 工具辅助生成
- 本文涉及 DeepSeek 融资估值的信息源自 The Information 公开报道，相关公司均未官方确认，请读者注意甄别
- 个人产品经验描述基于公开行业信息与作者从业感受，不涉及任何前任职公司的内部数据或商业秘密
- 价格对比以各家官方定价页公开数据为准，DeepSeek 取限时优惠价、海外厂商取标准价，对比口径已在配图中明示
