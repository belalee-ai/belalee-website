---
title: "从 TEMU 投放体系看 AI 广告产品的设计逻辑"
description: "效果广告投放不是花钱买量，AI 广告产品也不是套个大模型。拆解 eCPM 竞价、ROAS 调控和素材生命周期背后的产品决策，聊聊一线投放经验对 AI 广告产品设计意味着什么。"
pubDate: "Mar 18 2026"
badge: "商业化"
tags: ["AI广告", "ROAS", "效果广告", "商业化"]
---

## 投手的三件事，AI 也在做同一件事

我在 TEMU 欧洲区负责广告投放的那段时间，每天做的事情说白了就是三件：在 eCPM 竞价框架里找效率最优解，在 ROAS 约束下做预算的动态分配，以及管理几百条素材从生到死的全过程。

这三件事做久了，会有一种感觉——其实就是在不确定信息下持续做判断：这条素材还能跑吗？这个 ROAS 目标该调高还是调低？这批受众快饱和了吗？没有标准答案，每一个决策都是赌一个概率。

然后我看到了阿里妈妈发布万亿参数的 LMA 大模型[1]，Google 把 Performance Max 的自动化能力又往前推[2]，Meta 的 Advantage+ 在扩大自动化覆盖[3]。这些 AI 广告产品在解决的问题——预估点击率、优化出价、管理素材效果——和我每天做的事情是一样的。**只是执行方式从人变成了模型。**

<div class="design-figure">
<div class="design-figure__title">投手的日常 vs AI 广告产品在解决的问题</div>
<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <defs><marker id="arrd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker></defs>
  <!-- Left label -->
  <text x="90" y="22" text-anchor="middle" font-size="11" fill="#94a3b8">投手每天在做</text>
  <!-- Right label -->
  <text x="420" y="22" text-anchor="middle" font-size="11" fill="#4ade80">AI 广告产品在解决</text>
  <!-- Row 1 -->
  <rect x="20" y="32" width="140" height="32" rx="5" fill="#1e293b"/>
  <text x="90" y="52" text-anchor="middle" font-size="11" fill="#e2e8f0">eCPM 竞价决策</text>
  <line x1="162" y1="48" x2="238" y2="48" stroke="#64748b" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrd)"/>
  <text x="200" y="43" text-anchor="middle" font-size="9" fill="#64748b">自动化</text>
  <rect x="240" y="32" width="160" height="32" rx="5" fill="#14532d"/>
  <text x="320" y="52" text-anchor="middle" font-size="11" fill="#4ade80">CTR/CVR 预估 + 实时出价</text>
  <!-- Row 2 -->
  <rect x="20" y="72" width="140" height="32" rx="5" fill="#1e293b"/>
  <text x="90" y="92" text-anchor="middle" font-size="11" fill="#e2e8f0">ROAS 调控</text>
  <line x1="162" y1="88" x2="238" y2="88" stroke="#64748b" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrd)"/>
  <rect x="240" y="72" width="160" height="32" rx="5" fill="#14532d"/>
  <text x="320" y="92" text-anchor="middle" font-size="11" fill="#4ade80">目标 ROAS 自适应优化</text>
  <!-- Row 3 -->
  <rect x="20" y="112" width="140" height="32" rx="5" fill="#1e293b"/>
  <text x="90" y="132" text-anchor="middle" font-size="11" fill="#e2e8f0">素材生命周期管理</text>
  <line x1="162" y1="128" x2="238" y2="128" stroke="#64748b" stroke-width="1" stroke-dasharray="4" marker-end="url(#arrd)"/>
  <rect x="240" y="112" width="160" height="32" rx="5" fill="#14532d"/>
  <text x="320" y="132" text-anchor="middle" font-size="11" fill="#4ade80">AIGC 素材生成与淘汰</text>
  <!-- Right annotation -->
  <text x="430" y="52" font-size="10" fill="#64748b">同一个问题</text>
  <text x="430" y="92" font-size="10" fill="#64748b">同一个问题</text>
  <text x="430" y="132" font-size="10" fill="#64748b">同一个问题</text>
</svg>
</div>

这篇文章想拆解的是：**一线投放中那些看似琐碎的日常判断，背后的决策逻辑是什么？这些逻辑在 AI 广告产品的设计中，又会以什么形式出现？**

## eCPM 竞价：看起来是公式，实际是一连串取舍

eCPM = Bid × CTR × CVR，这个公式任何做过效果广告的人都能背出来。但公式本身不产生任何决策，决策藏在公式背后的操作空间里。

在 TEMU 投放 Facebook 广告时，我面对的典型场景是这样的：一条素材上线 6 小时，花了 200 美元，点击率 1.8%，转化率 0.6%，ROAS 0.7。这条素材要不要继续跑？

如果只看公式，答案很简单——ROAS 没达标，关掉。但实际决策要考虑的东西多得多：

<div class="design-figure">
<div class="design-figure__title">eCPM 决策三层模型</div>
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- Layer 1 -->
  <rect x="50" y="20" width="500" height="80" rx="12" fill="#fff5f5" stroke="#e53e3e" stroke-width="1.5"/>
  <text x="300" y="50" text-anchor="middle" font-size="14" font-weight="600" fill="#c53030">第一层：数据置信度</text>
  <text x="300" y="72" text-anchor="middle" font-size="11" fill="#742a2a">样本量够不够？48h / $500 经验阈值，之前的判断都是赌</text>
  <!-- Arrow -->
  <path d="M300 100 L300 120" stroke="#a0aec0" stroke-width="1.5" marker-end="url(#arrow)"/>
  <!-- Layer 2 -->
  <rect x="50" y="120" width="500" height="80" rx="12" fill="#fffff0" stroke="#d69e2e" stroke-width="1.5"/>
  <text x="300" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#975a16">第二层：竞争环境</text>
  <text x="300" y="172" text-anchor="middle" font-size="11" fill="#744210">CPM 上涨是市场因素还是素材问题？对比同期其他素材判断</text>
  <!-- Arrow -->
  <path d="M300 200 L300 220" stroke="#a0aec0" stroke-width="1.5" marker-end="url(#arrow)"/>
  <!-- Layer 3 -->
  <rect x="50" y="220" width="500" height="80" rx="12" fill="#f0fff4" stroke="#38a169" stroke-width="1.5"/>
  <text x="300" y="250" text-anchor="middle" font-size="14" font-weight="600" fill="#276749">第三层：素材组合策略</text>
  <text x="300" y="272" text-anchor="middle" font-size="11" fill="#22543d">单条不达标但受众互补？关掉可能推高头部 CPM、收窄触达</text>
  <!-- Arrow marker -->
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a0aec0"/></marker></defs>
</svg>
</div>

**第一层是数据置信度。** 200 美元的花费在欧洲市场大概对应 300-400 次点击，转化事件可能只有十几个。这个样本量下的 ROAS 波动非常大，今天 0.7 明天可能回到 1.2。我们后来摸索出一个经验阈值：Facebook 广告在欧洲市场至少需要跑满 48 小时且花费超过 500 美元，转化数据才开始稳定。在此之前做的任何判断都是在赌。

**第二层是竞争环境。** eCPM 不是你自己的事，是一个实时拍卖。同一时段竞争对手集中加预算（比如 Black Friday 前两周），你的 CPM 可能比平时高 40%-60%[4]。这时候 ROAS 下滑不一定是素材问题，可能只是竞价成本被推高了。我们会对比同期其他素材的 CPM 变化来判断：如果所有素材的 CPM 都在涨，那是市场因素；如果只有这一条在涨，那是素材在衰退。

**第三层是素材组合策略。** 一个广告账户不是只跑一条素材，而是几十条同时在跑。单条素材的 ROAS 不达标，但如果它覆盖的受众和其他头部素材互补，关掉它可能导致整体触达下降。我们做过测试：关掉三条 ROAS 在 0.8-0.9 之间的"边缘素材"后，头部素材的 CPM 反而上涨了 15%，因为竞价池里少了自己的竞争者，但触达的受众也收窄了。

这些判断如果要让 AI 来做，对应的产品设计问题就变成了：

- 模型需要多大的样本量才能给出可靠的效果预估？冷启动阶段怎么处理？Google PMax 的做法是给新素材一个"学习期"标签，期间不做激进优化[2]，本质上就是在解决数据置信度的问题。
- 竞价环境的波动怎么建模？是把 CPM 波动当噪声过滤，还是作为信号输入？阿里妈妈 LMA 的方案是用万亿参数去拟合这些动态关系[1]，但模型越大推理成本越高，这里有一个效果和成本的 trade-off。
- 多素材之间的协同效应怎么量化？Meta Advantage+ 目前的策略是让系统自主决定素材的展示权重[3]，但广告主经常反馈"不知道系统为什么选了这条素材"——可解释性是另一个产品层面的取舍。

**不在一线做过这些判断，你设计产品时很容易把 eCPM 当成一个纯数学问题。但它不是。它是一个在不确定信息下持续做取舍的过程。**

## ROAS 调控：不是调一个数字，是设计一套反馈系统

在 TEMU，我主导过从 Auto Bid 向 ROAS 出价的转型。这件事听起来很简单——把出价方式从"系统自动出价"切换成"按目标 ROAS 出价"就行了。但真正的难点不在切换本身，在于**切换之后怎么建立一套持续有效的调控机制**。

我们碰到的第一个问题是：**ROAS 目标设多少？**

这不是拍脑袋能定的。设高了（比如 150%），系统会大幅收缩投放量，因为它只去竞争最有把握转化的流量，结果就是花不出去钱、GMV 上不去。设低了（比如 80%），钱花得很快但利润率撑不住。

我们最终的做法是分品类设定基准线：标品（比如手机壳、数据线）ROAS 目标设 120%，因为转化路径短、用户决策快；非标品（比如服装、家居）设 90%，因为决策周期长、退货率高，需要更大的流量池来筛选高意向用户。这些基准线不是一次性设好的，每两周根据实际数据做一轮校准。

第二个问题更棘手：**调控的节奏怎么把握？**

Facebook 的广告系统有一个"学习阶段"（Learning Phase），每次你调整出价或预算超过 20%，系统就会重新进入学习期，通常持续 3-5 天[5]。学习期内的效果波动很大，如果你急着看结果又去调，就会陷入"调了→学习→效果差→再调→再学习"的死循环。

我们后来形成的纪律是：**单次调幅控制在 5%-20%，调整后至少观察 24-48 小时再做下一步判断。** 紧急情况（比如 ROAS 突然跌到 50% 以下）除外，那种情况直接降预算止损，不等学习期。

<div class="mermaid">
graph LR
    A["设定目标<br/>分品类基准线"] --> B{"ROAS 达标？"}
    B -->|"达标"| C["维持策略<br/>两周校准一次"]
    B -->|"未达标"| D["微调 5-20%<br/>观察 24-48h"]
    B -->|"暴跌 &lt;50%"| E["立即止损"]
    style A fill:#e0f2f1,stroke:#4db6ac
    style E fill:#fff5f5,stroke:#e53e3e
</div>


第三个问题是：**当数据打架的时候信谁？**

Facebook 后台的归因数据和我们自己 BI 系统的数据经常对不上。Facebook 用 7 天点击归因，我们的 BI 用的是末次点击。同一条广告，Facebook 说 ROAS 130%，BI 说只有 95%。差异来源主要是跨设备转化和延迟归因。

我们的处理方式是：以 BI 数据为决策依据（因为它接的是真实的订单数据），但用 Facebook 数据做趋势判断（它的数据更实时）。两套数据的差异比例（我们内部叫"归因折扣系数"）大概稳定在 15%-25% 之间，如果某天这个系数突然变大，说明投放结构可能出了问题——比如新素材带来了大量浅层点击但没转化。

<div class="design-figure">
<div class="design-figure__title">归因折扣系数：两套数据对同一笔订单的解读差异</div>
<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <rect x="0" y="0" width="560" height="130" rx="8" fill="#0f172a"/>
  <!-- Facebook bar -->
  <text x="20" y="30" font-size="11" fill="#94a3b8">Facebook 7日归因</text>
  <rect x="20" y="38" width="336" height="24" rx="4" fill="#3b82f6"/>
  <text x="362" y="55" font-size="12" font-weight="700" fill="#93c5fd">ROAS 130%</text>
  <!-- BI bar -->
  <text x="20" y="80" font-size="11" fill="#94a3b8">内部 BI（末次点击归因）</text>
  <rect x="20" y="88" width="252" height="24" rx="4" fill="#f59e0b"/>
  <text x="278" y="105" font-size="12" font-weight="700" fill="#fcd34d">ROAS 95%</text>
  <!-- Gap annotation -->
  <rect x="254" y="38" width="100" height="74" rx="0" fill="none" stroke="#ef4444" stroke-dasharray="3" stroke-width="1"/>
  <text x="304" y="75" text-anchor="middle" font-size="10" fill="#ef4444">归因折扣</text>
  <text x="304" y="90" text-anchor="middle" font-size="10" fill="#ef4444">15–25%</text>
  <text x="20" y="125" font-size="9" fill="#475569">同一批订单，两个系统数字不同——差异稳定在 15-25% 属正常，突然扩大则是预警信号</text>
</svg>
</div>

把这套经验映射到 AI 广告产品设计上：

- **ROAS 目标的自适应调整**是一个核心的产品功能。Google PMax 已经在做这件事——广告主设一个目标 ROAS，系统自动在这个约束下优化[2]。但"目标设多少合适"这个问题，很多广告主自己也不清楚。产品需要提供基准线建议，而这个建议需要基于品类、市场、竞争环境的综合判断。
- **调控节奏的自动化**意味着系统要能识别"学习期"和"稳定期"，在学习期内克制住不做激进调整。这背后不是技术问题，是产品逻辑——你要决定什么时候让系统"忍一忍"。
- **多源数据的归因对齐**在 AI 时代只会更复杂。当 AI 同时在多个渠道投放、自动生成素材、动态调整受众时，"这个转化到底归功于谁"的问题会指数级变难。产品如果不解决归因透明度，广告主就没法信任系统。

## 素材生命周期：不是分个 ABC 那么简单

在 TEMU 的投放体系里，我们同时在跑的素材经常有上百条。管理这些素材不是"好的多花钱、差的关掉"就完了。

**素材有明确的生命周期曲线。** 一条效果好的素材，典型的生命周期是这样的：上线前 3 天处于学习期，第 4-7 天进入效果爬升期，第 2-3 周达到峰值，之后开始衰退。衰退的信号通常是 CTR 逐日下滑 0.1-0.2 个百分点——用户对这条素材"审美疲劳"了。

我们的管理策略分三档：

<div class="mermaid">
graph LR
    A["上线"] --> B["学习期 D1-3"] --> C["爬升 D4-7"] --> D["峰值 W2-3"] --> E["衰退"]
    E --> F{"分档"}
    F -->|"头部 10%"| G["复制放量"]
    F -->|"中腰部 30%"| H["单变量优化"]
    F -->|"尾部 60%"| K["关停"]
    style G fill:#f0fff4,stroke:#38a169
    style H fill:#fffff0,stroke:#d69e2e
    style K fill:#fff5f5,stroke:#e53e3e
</div>


**头部素材（ROAS > 120%，占比约 10%）：** 不是简单加预算，而是用"复制广告组"的方式放量。直接加预算会触发学习期重置，但复制一个新的广告组、用相同素材和定向，相当于在不打扰原有广告组的情况下开了第二条通道。单条头部素材我们做到过日花费 10,000 美元以上、ROAS 稳定在 100% 以上。

**中腰部素材（ROAS 80%-120%，占比约 30%）：** 这些素材是最需要"养"的。我们会做的事情包括：微调受众定向（比如从 25-45 岁收窄到 28-38 岁）、换落地页版本、调整投放时段。每次只改一个变量，观察 48 小时，看能不能把 ROAS 推上 120%。大约有 20% 的中腰部素材能被优化到头部水平。

**尾部素材（ROAS < 80%，占比约 60%）：** 给 48 小时观察窗口，如果没有改善趋势就关停。这里的关键判断是"没有改善趋势"——不是看绝对值，而是看斜率。一条素材 ROAS 从第一天的 60% 涨到第二天的 75%，虽然还没达标，但趋势是对的，可以再观察；如果从 60% 跌到 55%，直接关。

这套逻辑搬到 AI 广告产品的语境下，对应的是 AIGC 素材的管理机制：

AI 生成素材的速度远超人工——模型可以一天生成几百条素材变体。但**生成不是瓶颈，筛选和迭代才是**。产品需要回答的核心问题是：怎么在海量素材中快速识别出头部潜力素材，怎么自动化中腰部素材的优化动作，怎么设定合理的淘汰规则？

字节跳动的巨量引擎已经在往这个方向走——AIGC 能力覆盖素材生成、投放优化、效果归因等多个场景[6]，本质上就是在用 AI 管理 AI 生成的内容。但据我了解，目前大部分 AI 广告平台在素材管理这一环还比较粗糙，基本是"生成→投放→看数据→人工决定下一步"。自动化的素材生命周期管理，我认为是接下来 AI 广告产品的一个重要方向。

## 从使用者到设计者，中间隔的不是技术

做广告投手的时候，我最大的痛点是什么？不是工具不够智能——Facebook 的算法已经很强了——**而是工具的黑箱性。**

系统告诉你"建议提高预算"，但不告诉你为什么。ROAS 突然下跌，你不知道是竞价环境变了、受众饱和了、还是素材在衰退。你只能靠经验去排查，一个因素一个因素地排除。

这个痛点在 AI 广告产品时代会被放大。当 AI 接管了出价、素材、受众的全链路决策后，广告主对系统的控制感会进一步降低。Google PMax 上线后，广告主社区里最多的抱怨就是"我不知道我的钱花在哪了"[7]。

AI 广告产品面临两个并行的挑战："怎么让 AI 投得更准"和"怎么让广告主信任 AI 的决策"。前者主要靠模型能力的进步，后者是一个纯粹的产品问题。**在我看来，后者在当前阶段更紧迫——因为再准的模型，如果广告主不信任、不愿意把预算交给它，准确率就没有发挥的场景。**

<div class="design-figure">
<div class="design-figure__title">AI 广告产品当前面临的两个并行挑战</div>
<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" style="font-family: system-ui, sans-serif;">
  <!-- Challenge 1 -->
  <rect x="20" y="20" width="240" height="120" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="140" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#94a3b8">挑战 1：投得更准</text>
  <text x="140" y="72" text-anchor="middle" font-size="11" fill="#64748b">CTR/CVR 模型精度</text>
  <text x="140" y="90" text-anchor="middle" font-size="11" fill="#64748b">跨渠道归因质量</text>
  <text x="140" y="108" text-anchor="middle" font-size="11" fill="#64748b">素材效果预估能力</text>
  <rect x="40" y="124" width="200" height="4" rx="2" fill="#334155"/>
  <rect x="40" y="124" width="100" height="4" rx="2" fill="#3b82f6"/>
  <text x="140" y="143" text-anchor="middle" font-size="9" fill="#64748b">主要靠模型能力进步，长期方向</text>
  <!-- Challenge 2 -->
  <rect x="300" y="20" width="240" height="120" rx="8" fill="#1c3a2e" stroke="#166534"/>
  <text x="420" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#4ade80">挑战 2：让人信任 ←更紧迫</text>
  <text x="420" y="72" text-anchor="middle" font-size="11" fill="#86efac">决策可解释性</text>
  <text x="420" y="90" text-anchor="middle" font-size="11" fill="#86efac">介入节点设计</text>
  <text x="420" y="108" text-anchor="middle" font-size="11" fill="#86efac">预算掌控感</text>
  <rect x="320" y="124" width="200" height="4" rx="2" fill="#14532d"/>
  <rect x="320" y="124" width="180" height="4" rx="2" fill="#4ade80"/>
  <text x="420" y="143" text-anchor="middle" font-size="9" fill="#86efac">纯产品问题，当前阶段最紧迫</text>
</svg>
</div>

这是一个纯粹的产品问题，不是技术问题。它需要的是对广告主心理和工作流程的深度理解——他们习惯看哪些指标、在什么节点需要介入、什么信息能让他们建立信任。这些答案，确实不在论文里。

---

## 数据来源说明

- eCPM 决策阈值（48h / $500）：作者 TEMU 欧洲区投放实操经验，非公开数据
- 归因折扣系数 15-25%：作者内部 BI vs Facebook 后台数据对比，TEMU 欧洲区 2023-2024
- 头部素材关停导致 CPM 上涨 15%：作者亲历 A/B 测试数据
- 中腰部素材 20% 可优化到头部：作者投放组历史数据估算
- Black Friday 前 CPM 上涨 40-60%：Revealbot Facebook Ads Benchmarks[4]

## 参考资料

[1] 阿里妈妈. 阿里妈妈发布万相台无界版及 LMA 大模型, 2024. https://www.alimama.com

[2] Google Ads Help. About Performance Max campaigns. https://support.google.com/google-ads/answer/10724817

[3] Meta Business Help Center. About Advantage+ shopping campaigns. https://www.facebook.com/business/help/

[4] Revealbot. Facebook Ads Benchmarks. https://revealbot.com/facebook-advertising-costs

[5] Meta Business Help Center. About the learning phase. https://www.facebook.com/business/help/112167992830700

[6] 字节跳动. 巨量引擎 AIGC 智能创意解决方案, 2024. https://www.oceanengine.com

[7] Search Engine Land. "Google Performance Max: What advertisers need to know about transparency." https://searchengineland.com
