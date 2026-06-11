---
title: "为什么国内 AI 产品的 C 端订阅，迟到了整整 2.5 年"
description: "6 个 AI 产品的商业化时间线对比，发现一个反直觉的规律。不是产品逻辑决定商业化节奏，是资本结构决定。"
pubDate: "Apr 28 2026"
badge: "商业化"
tags: ["AI", "商业化", "C 端订阅", "DeepSeek", "Kimi", "豆包", "ChatGPT"]
---

最近在做 AI 商业化的桌面调研，把 6 个产品的收费时间线一条条铺出来后，看到一个很反直觉的事实。

海外 AI 产品做 C 端订阅，是 2023 年 2 月就开始的。国内第一个真正意义上的 C 端付费订阅，等到 2025 年 9 月才出现。中间整整迟到了 2.5 年。

这件事我看完时间线之前没想过会差这么多。

<div class="design-figure">
<div class="design-figure__title">6 个 AI 产品 C 端付费订阅首发时间对比（一手来源核实）</div>
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="600" height="320" rx="8" fill="#0f172a"/>
  <text x="300" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="#f8fafc">海外 vs 国内 C 端订阅首发节点</text>
  <text x="300" y="52" text-anchor="middle" font-size="11" fill="#64748b">2023-02 → 2025-09，整整迟到 2.5 年</text>

  <line x1="80" y1="80" x2="80" y2="290" stroke="#334155" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="520" y1="80" x2="520" y2="290" stroke="#334155" stroke-width="1" stroke-dasharray="2,3"/>
  <text x="80" y="76" text-anchor="middle" font-size="10" fill="#94a3b8">2023-02</text>
  <text x="520" y="76" text-anchor="middle" font-size="10" fill="#94a3b8">2025-09</text>

  <g>
    <circle cx="80" cy="100" r="6" fill="#10b981"/>
    <text x="95" y="104" font-size="11" fill="#f8fafc">ChatGPT Plus</text>
    <text x="195" y="104" font-size="10" fill="#10b981">$20/月｜2023-02-01</text>
  </g>
  <g>
    <circle cx="180" cy="130" r="6" fill="#10b981"/>
    <text x="195" y="134" font-size="11" fill="#f8fafc">Claude Pro</text>
    <text x="280" y="134" font-size="10" fill="#10b981">$20/月｜2023-09-07</text>
  </g>
  <g>
    <circle cx="240" cy="160" r="6" fill="#10b981"/>
    <text x="255" y="164" font-size="11" fill="#f8fafc">Gemini Advanced</text>
    <text x="370" y="164" font-size="10" fill="#10b981">$19.99/月｜2024-02-08</text>
  </g>

  <line x1="80" y1="200" x2="520" y2="200" stroke="#475569" stroke-width="0.5"/>

  <g>
    <circle cx="520" cy="220" r="6" fill="#f59e0b"/>
    <text x="510" y="224" text-anchor="end" font-size="11" fill="#f8fafc">Kimi 付费会员</text>
    <text x="400" y="224" text-anchor="end" font-size="10" fill="#f59e0b">2025-09-25｜49 元/月</text>
  </g>
  <g>
    <circle cx="520" cy="250" r="6" fill="#64748b"/>
    <text x="510" y="254" text-anchor="end" font-size="11" fill="#f8fafc">豆包</text>
    <text x="490" y="254" text-anchor="end" font-size="10" fill="#64748b">至今核心免费</text>
  </g>
  <g>
    <circle cx="520" cy="280" r="6" fill="#64748b"/>
    <text x="510" y="284" text-anchor="end" font-size="11" fill="#f8fafc">DeepSeek</text>
    <text x="490" y="284" text-anchor="end" font-size="10" fill="#64748b">永久免费</text>
  </g>
</svg>
</div>

海外双雄起手就是 $20/月，Google 跟到 $19.99，价格全部踩在同一个锚点上。国内四个产品里，三个不收 C 端的钱，最后一个 Kimi 收了，距离它公测过去了 23 个月。

---

很多人会以为「国内迟到」就等于「国内还没开始商业化」。其实并不是。

国内做 B 端 API 商业化的速度比海外慢不了多少。

Kimi 在 2024 年 2 月就开了 Moonshot 开放平台，按 token 计费，注册送 15 块钱体验金。豆包在 2024 年 5 月 Force 大会直接把 API 单价做到 0.0008 元/千 tokens，火山引擎总裁谭待原话「比行业便宜 99.3%，地板价仍有盈利空间」。DeepSeek 在 2024 年 5 月发 V2，输入 1 元/百万 tokens，正式引爆国内大模型 API 价格战。

如果你只看 B 端，国内并不慢。但如果连 B 端都已经开始收钱了、C 端还是免费，说明问题不是商业化能力，而是商业化路径的选择。

---

三家不收 C 端钱的逻辑，其实完全不一样。

**豆包不收 C 端的钱，是因为字节本来就不靠订阅赚钱。**

字节给豆包的设定，其实是一个「双轨制」。C 端豆包 App 核心对话、语音、搜索长期免费，靠抖音生态导流和巨额信息流投放冲 DAU。B 端火山引擎用 API 极致低价抢量，2024 年 5 月到 2025 年 5 月，豆包大模型日均 tokens 调用量从 1200 亿涨到 16.4 万亿，一年增长 137 倍。

字节算账的方式从来不是「我从用户身上每月抽走 $20」，而是「我让你用得多，你最后会变成我云生意的一部分」。

这就像你家楼下的连锁超市，本来就不靠会员费赚钱，他靠的是你天天来。每天少一块钱、多一块钱不重要，重要的是你买菜的时候，第一个想到的是他。

但「免费」和「永远全部功能免费」其实是两件事。

到 2026 年 4 月，豆包大模型日均 token 调用量已经涨到 120 万亿，对比 2024 年 5 月的 1200 亿，**两年涨了 1000 倍**。这条曲线再往前走 1-2 年，纯免费在 B 端 MaaS 单一收入结构下不可持续。

而且豆包 App 里其实已经悄悄设了软门槛：Seedance 2.0 视频生成单账号每天 10 个免费额度，10 秒视频耗 2 个，超额无法付费——这是典型的「先培养预期，再开放付费」节奏，跟剪映 2019-2022 年那一轮路径完全一样。

字节系内的付费样板已经跑通：剪映 VIP→SVIP（59-499 元/月）、即梦 AI（69 / 199 / 499 元/月）都是「先免费做大、再分级会员」走过来的。

所以更准确的判断是：豆包**主对话和语音**长期免费的概率高，但**视频生成、批量出图、长文档处理、高级编程**这类算力刚性成本功能，1-2 年内大概率会分层收费。Token 涨 1000 倍这条曲线，本身就在为会员化铺垫。

**DeepSeek 不收 C 端的钱，是因为它真的不需要。**

DeepSeek 由幻方量化首期 30 亿元自有资金孵化，到 2026 年才开始传出第一次外部融资。也就是说在它最关键的 V2、V3、R1 那段时间里，它没有任何 ROI 压力。

梁文锋在《暗涌 Waves》专访里原话是这样：

> 我们的原则是不贴钱，也不赚取暴利。我们的出发点，就不是趁机赚一笔，而是走到技术的前沿，去推动整个生态发展。

R1 输出价做到 OpenAI o1 的 3%，C 端永久免费。这不是策略，是结构性自由。没拿外面的钱，就不用对外面的人交答案。

**Kimi 不是不想收，是「不焦虑」。**

杨植麟 2024 年 3 月《潜望》访谈里那句话，传得很广：

> 我一点也不焦虑落地。AI 不是我在接下来一两年找到什么 PMF，而是接下来十到二十年如何改变世界。

但你回头看时间线就会发现一件事。他说这话之后 5 个月，月之暗面拿了腾讯 A+ 轮的钱。19 个月之后，Kimi 上线了 49 元的付费会员。

资本是有耐心的，但耐心是有期限的。

---

我把 6 个产品的资本结构和商业化节奏对在一起看，发现一个挺扎实的规律。

**不是产品逻辑决定商业化节奏，是资本结构决定商业化节奏。**

<div class="design-figure">
<div class="design-figure__title">资本结构 → 商业化节奏（4 类样本对照）</div>
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="600" height="320" rx="8" fill="#f8fafc"/>

  <rect x="20" y="20" width="135" height="280" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <text x="87" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">DeepSeek</text>
  <text x="87" y="62" text-anchor="middle" font-size="9" fill="#15803d">幻方自有资金</text>
  <line x1="35" y1="76" x2="139" y2="76" stroke="#86efac"/>
  <text x="87" y="98" text-anchor="middle" font-size="9" fill="#166534">不接受融资</text>
  <text x="87" y="116" text-anchor="middle" font-size="9" fill="#166534">没有 ROI 压力</text>
  <line x1="35" y1="132" x2="139" y2="132" stroke="#86efac"/>
  <text x="87" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">永久免费</text>
  <text x="87" y="172" text-anchor="middle" font-size="9" fill="#15803d">R1 价 = o1 的 3%</text>
  <text x="87" y="200" text-anchor="middle" font-size="9" fill="#475569">结构性自由</text>

  <rect x="170" y="20" width="135" height="280" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
  <text x="237" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">豆包</text>
  <text x="237" y="62" text-anchor="middle" font-size="9" fill="#a16207">字节亲生</text>
  <line x1="185" y1="76" x2="289" y2="76" stroke="#fcd34d"/>
  <text x="237" y="98" text-anchor="middle" font-size="9" fill="#92400e">抖音电商养着</text>
  <text x="237" y="116" text-anchor="middle" font-size="9" fill="#92400e">不靠订阅算账</text>
  <line x1="185" y1="132" x2="289" y2="132" stroke="#fcd34d"/>
  <text x="237" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">主功能免费</text>
  <text x="237" y="172" text-anchor="middle" font-size="9" fill="#a16207">算力重功能将分层收费</text>
  <text x="237" y="200" text-anchor="middle" font-size="9" fill="#475569">字节系剪映路径</text>

  <rect x="320" y="20" width="135" height="280" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="387" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">Kimi</text>
  <text x="387" y="62" text-anchor="middle" font-size="9" fill="#b91c1c">阿里 + 腾讯</text>
  <line x1="335" y1="76" x2="439" y2="76" stroke="#fca5a5"/>
  <text x="387" y="98" text-anchor="middle" font-size="9" fill="#991b1b">8 亿美元领投</text>
  <text x="387" y="116" text-anchor="middle" font-size="9" fill="#991b1b">投后估值 25 亿美元</text>
  <line x1="335" y1="132" x2="439" y2="132" stroke="#fca5a5"/>
  <text x="387" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">19 个月后开订阅</text>
  <text x="387" y="172" text-anchor="middle" font-size="9" fill="#b91c1c">49/99/199 元</text>
  <text x="387" y="200" text-anchor="middle" font-size="9" fill="#475569">资本 deadline</text>

  <rect x="470" y="20" width="110" height="280" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>
  <text x="525" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">海外三家</text>
  <text x="525" y="62" text-anchor="middle" font-size="9" fill="#1d4ed8">ChatGPT/Claude/Gemini</text>
  <line x1="485" y1="76" x2="565" y2="76" stroke="#93c5fd"/>
  <text x="525" y="98" text-anchor="middle" font-size="9" fill="#1e40af">机构股东相似</text>
  <text x="525" y="116" text-anchor="middle" font-size="9" fill="#1e40af">SaaS ARR 叙事</text>
  <line x1="485" y1="132" x2="565" y2="132" stroke="#93c5fd"/>
  <text x="525" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">$20/月锚点</text>
  <text x="525" y="172" text-anchor="middle" font-size="9" fill="#1d4ed8">三家全部踩线</text>
  <text x="525" y="200" text-anchor="middle" font-size="9" fill="#475569">同一道题</text>
</svg>
</div>

但「资本结构」只是表层。真正的底层逻辑是这一句——**这个产品需不需要靠自己赚钱活着**。

DeepSeek 不需要。它靠幻方的量化基金养着，700 亿管理规模，AI 不是它母体的现金流来源。所以它敢永久免费，敢把 R1 做到 o1 的 3%。豆包不需要。它靠字节的抖音和电商养着，AI 入口不是它母体的现金流来源。所以它敢 C 端免费换 DAU、用 B 端低价抢生态。Kimi 需要。它拿了阿里 8 亿美元、腾讯几亿外部融资，没有别的业务给它输血，必须靠这个产品本身的 ARR 兑现估值故事。所以它必须在 19 个月后开始做 C 端订阅。ChatGPT、Claude、Gemini 也需要。融的钱量级相似、估值压力相似、机构股东相似，整条赛道被 SaaS 的 ARR 叙事框住，所以它们全部踩在 $20/月这个锚点上。

反例可以验证这个逻辑：Apple 自有现金流 1500 亿美金，比 DeepSeek 阔气得多——但 Apple 不会永久免费。原因不是钱不够，是 Apple 的主营业务（iPhone + 服务订阅）必须自己赚钱。**自有资金给的只是「敢免费」的可能，「不靠自己活」才是真正按下永久免费这个按钮的手指。**

如果你只看产品本身，会觉得这些公司在做不同的判断。如果你看产品在母体里扮演什么角色，会发现他们其实只是在做不同的题。

这件事我做产品 7 年第一次想得这么清楚。商业化方案做得对不对，不是看产品经理的水平，是看产品背后那笔钱的来路。来路决定了你能慢多久、能免费多久、能在用户心里待多久才被迫开口。

---

最后落到实处。如果你是在 AI 产品里做商业化的产品经理，看完这条时间线，有三件事情可能值得拿出来想。

**1. 你这个产品需不需要靠自己赚钱活着。**

这是底层那道题。DeepSeek 靠幻方量化基金养着不需要，豆包靠字节抖音电商养着不需要，所以它们敢永久免费。Kimi 没有别的业务输血、必须靠 ARR 兑现估值，所以它在 19 个月之后必须开口。如果你的产品在母体里是「现金流来源」，订阅就是必须解的题；如果它是「战略投入」、有别的业务在养，你就有永久免费这个选项。

**2. 你们产品到底应该收谁的钱。**

海外是 C 端订阅 + B 端 API 双轨，国内主流是 B 端 API + C 端免费。这两种结构差异，不是策略选择，是底层算账方式的不同。如果你在做收费方案前没想清楚「我们是谁的现金流」，方案做出来就是空中楼阁。

**3. $20/月不是定价，是锚点。**

海外三家全部踩在这个数字上，是消费 SaaS 二十年训练出来的用户心智。国内 Kimi 选 49 元也不是巧合，49、99、199 这个三档结构在国内视频会员、音乐会员、网盘会员里也已经被验证过了。真正决定定价的不是模型成本，是用户心里那个「我每月愿意为这类东西付多少钱」的尺子。

---

如果有一天你做的 AI 产品要开始收钱了，不要先问「我们值多少钱」。

先问一句：**我们的钱，到底应该从哪里来。**

---

我把这套思路整理成了一份《产品商业化自检表》。不限 AI、不限赛道，做产品的都能用。分两层 5 个问题，对完就知道你们应该走 DeepSeek、豆包、还是 Kimi 那种路径。

这份表只回答一件事：**你现在该不该做订阅**。
定价档位定多少、分几档、怎么和年付/季付/试用拼组合，是另一道题，下一篇我专门拆。

在公众号「梨贝拉」后台回复「自检」就能拿到。
