"use client";

import { useEffect, useState } from "react";

const projects = [
  { no: "01", title: "视频制作", tone: "acid", mark: "Video", textMark: true },
  { no: "02", title: "图片制作", tone: "ink", mark: "Poster &\nLong Pic", textMark: true },
  { no: "03", title: "公众号运营", tone: "paper", mark: "WeChat\nRetainer", textMark: true },
  { no: "04", title: "小程序制作", tone: "grid", mark: "↗" },
  { no: "06", title: "小红书投放", tone: "signal", mark: "red note", textMark: true },
];

const videoItems = [
  {
    parts: [
      "/videos/video-01/part-aa",
      "/videos/video-01/part-ab",
    ],
  },
  {
    parts: [
      "/videos/video-02/part-aa",
      "/videos/video-02/part-ab",
      "/videos/video-02/part-ac",
      "/videos/video-02/part-ad",
    ],
  },
  {
    parts: [
      "/videos/video-03/part-aa",
      "/videos/video-03/part-ab",
      "/videos/video-03/part-ac",
      "/videos/video-03/part-ad",
      "/videos/video-03/part-ae",
      "/videos/video-03/part-af",
    ],
  },
] as const;

const posterItems = [
  { id: "01", img: "/projects/posters/poster-01.jpg", height: 4023 },
  { id: "02", img: "/projects/posters/poster-02.jpg", height: 9028 },
  { id: "03", img: "/projects/posters/poster-03.jpg", height: 4692 },
  { id: "04", img: "/projects/posters/poster-04.jpg", height: 427 },
  { id: "05", img: "/projects/posters/poster-05.jpg", height: 7528 },
  { id: "06", img: "/projects/posters/poster-06.jpg", height: 5488 },
  { id: "07", img: "/projects/posters/poster-07.jpg", height: 1778 },
  { id: "08", img: "/projects/posters/poster-08.jpg", height: 1778 },
  { id: "09", img: "/projects/posters/poster-09.jpg", height: 3671 },
  { id: "10", img: "/projects/posters/poster-10.jpg", height: 3988 },
  { id: "11", img: "/projects/posters/poster-11.jpg", height: 6501 },
  { id: "12", img: "/projects/posters/poster-12.jpg", height: 1519 },
  { id: "13", img: "/projects/posters/poster-13.jpg", height: 1519 },
  { id: "14", img: "/projects/posters/poster-14.jpg", height: 1046 },
  { id: "15", img: "/projects/posters/poster-15.jpg", height: 711 },
  { id: "16", img: "/projects/posters/poster-16.jpg", height: 710 },
  { id: "17", img: "/projects/posters/poster-17.jpg", height: 1280 },
];

const wechatSections = [
  {
    no: "01",
    tab: "PLANNING",
    title: "策划规划",
    lead: "从品牌阶段目标出发，完成选题方向、内容矩阵与发布节奏的整体规划。",
    description: "围绕品牌阶段性传播需求，梳理沟通重点与受众场景，规划内容主题和上线节奏；同步协调文案、设计、审核等环节，并结合发布数据持续复盘优化。",
    items: [
      ["01", "需求拆解", "明确传播目标、受众与核心信息"],
      ["02", "内容规划", "建立选题矩阵与月度发布节奏"],
      ["03", "协同推进", "统筹文案、设计及审核反馈"],
      ["04", "数据复盘", "追踪表现并优化后续内容方向"],
    ],
  },
  {
    no: "02",
    tab: "CONTENT",
    title: "文案撰写、内容展示",
    lead: "根据不同传播目的完成文案撰写与内容落地，让品牌表达调性一致，且符合当下热点，完成传播目的。",
    description: "覆盖品牌宣传、艺人合作、日常促销及活动宣传等内容类型，负责推文方向、标题结构、正文表达与发布信息的完整梳理。",
    items: [
      ["A", "品牌宣传", "图文 / 长图 / 活动传播"],
      ["B", "艺人合作", "图文 / 长图 / 节点传播"],
      ["C", "日常促销", "图文 / 长图 / 促销宣传"],
      ["D", "活动宣传", "视频 / 长图文 / 活动传播"],
    ],
  },
] as const;

const wechatPlanningImages = [
  { src: "/projects/wechat/planning/planning-01.png", alt: "公众号四月内容规划表" },
  { src: "/projects/wechat/planning/planning-02.png", alt: "Sports Week 项目目标" },
  { src: "/projects/wechat/planning/planning-03.png", alt: "Sports Week 第二季度传播路线图" },
  { src: "/projects/wechat/planning/planning-04.png", alt: "四月第一周公众号内容规划" },
  { src: "/projects/wechat/planning/planning-05.png", alt: "四月第二周公众号内容规划" },
  { src: "/projects/wechat/planning/planning-06.png", alt: "四月第三周公众号内容规划" },
] as const;

const wechatContentItems = [
  {
    src: "/projects/wechat/content/content-brand.png",
    alt: "品牌宣传公众号文章封面",
    href: "https://mp.weixin.qq.com/s/k37vc4-qnogAVEnMs5Z1ww",
  },
  {
    src: "/projects/wechat/content/content-artist.png",
    alt: "艺人合作公众号文章封面",
    href: "https://mp.weixin.qq.com/s/AGrmcGh99dQoMF0YsnA5gQ",
  },
  {
    src: "/projects/wechat/content/content-promotion.png",
    alt: "日常促销公众号文章封面",
    href: "https://mp.weixin.qq.com/s/Gf-mfkSYUKAXk6tdc1erIA",
  },
  {
    src: "/projects/wechat/content/content-campaign.png",
    alt: "活动宣传公众号文章封面",
    href: "https://mp.weixin.qq.com/s/Odo8UP1E32BF179DuCFr9w",
  },
] as const;

const aboutCards = [
  {
    title: "个人介绍",
    type: "intro",
    copy: "3年+广告公司客户执行经验，长期负责品牌客户沟通、内容策划与跨团队项目推进。过往项目覆盖公众号运营、小红书达人投放及 social campaign：合作达人70+、爆文率60%，公众号单篇阅读量最高2.5w+，并有会员转化项目经验。具备从需求拆解、跨团队推进到数据复盘的完整项目执行经验",
  },
  {
    title: "服务品牌",
    type: "brands",
  },
] as const;

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeDetail, setActiveDetail] = useState<"video" | "poster" | "wechat" | "mini" | "rednote" | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [activePoster, setActivePoster] = useState<number | null>(null);
  const [activeWechatImage, setActiveWechatImage] = useState<number | null>(null);
  const closeDetail = () => {
    setActiveVideo(null);
    setActivePoster(null);
    setActiveWechatImage(null);
    setActiveDetail(null);
  };

  useEffect(() => {
    const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), hasReducedMotion ? 150 : 3600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeVideo === null) {
      setActiveVideoUrl(null);
      setVideoLoading(false);
      setVideoError(false);
      return;
    }

    const controller = new AbortController();
    let cancelled = false;
    let objectUrl: string | null = null;
    setActiveVideoUrl(null);
    setVideoLoading(true);
    setVideoError(false);

    Promise.all(
      videoItems[activeVideo].parts.map(async (part) => {
        const response = await fetch(part, { signal: controller.signal });
        if (!response.ok) throw new Error(`Unable to load ${part}`);
        return response.arrayBuffer();
      }),
    )
      .then((parts) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(new Blob(parts, { type: "video/mp4" }));
        setActiveVideoUrl(objectUrl);
      })
      .catch((error) => {
        if (cancelled || (error instanceof DOMException && error.name === "AbortError")) return;
        setVideoError(true);
      })
      .finally(() => {
        if (!cancelled) setVideoLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [activeVideo]);

  useEffect(() => {
    if (!activeDetail && !contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeWechatImage !== null && event.key === "ArrowLeft") {
        setActiveWechatImage((current) => current === null ? 0 : (current - 1 + wechatPlanningImages.length) % wechatPlanningImages.length);
        return;
      }
      if (activeWechatImage !== null && event.key === "ArrowRight") {
        setActiveWechatImage((current) => current === null ? 0 : (current + 1) % wechatPlanningImages.length);
        return;
      }
      if (event.key !== "Escape") return;
      if (contactOpen) setContactOpen(false);
      else if (activeWechatImage !== null) setActiveWechatImage(null);
      else if (activeVideo !== null) setActiveVideo(null);
      else if (activePoster !== null) setActivePoster(null);
      else closeDetail();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDetail, activePoster, activeVideo, activeWechatImage, contactOpen]);

  return (
    <>
      {introVisible && (
        <div className="intro" aria-label="网站开场动画">
          <div className="intro-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="intro-copy"><span>PORTFOLIO</span><span>SELECTED WORK</span></div>
          <div className="intro-counter" aria-hidden="true"><span>00</span><span className="intro-line" /><span>100</span></div>
          <button className="skip" onClick={() => setIntroVisible(false)}>跳过 <span aria-hidden="true">→</span></button>
        </div>
      )}

      <div className="site-shell">
        <aside className="sidebar">
          <a className="brand" href="#top" aria-label="回到首页">
            <span className="brand-name">KEIRA<br />PORTFOLIO</span>
          </a>
          <nav aria-label="主导航">
            <a href="#top"><em>00</em>首页</a>
            <a href="#work"><em>01</em>作品</a>
            <a href="#about"><em>02</em>关于</a>
            <a href="#contact"><em>03</em>联系</a>
          </nav>
        </aside>

        <main>
          <section className="hero" id="top">
            <div className="hero-title-wrap">
              <p className="eyebrow">PERSONAL PORTFOLIO / 2022—2026</p>
              <h1>Hiiiiiii<span className="welcome-line">You&apos;ve entered Keira&apos;s space</span></h1>
            </div>
            <div className="hero-bottom">
              <p className="hero-contact">TEL: <a href="tel:+8617770843092">17770843092</a><br />E-MAIL: <a href="mailto:lk04210109@163.com">lk04210109@163.com</a></p>
              <a href="#work" className="round-link" aria-label="查看精选作品"><span>VIEW<br />WORK</span><b aria-hidden="true">↓</b></a>
            </div>
          </section>

          <section className="work" id="work">
            <header className="section-heading"><p>SELECTED WORK</p><h2>一些案例</h2><span>05 PROJECTS</span></header>
            <div className="project-grid">
              {projects.map((project) => {
                const detail = project.no === "01" ? "video" : project.no === "02" ? "poster" : project.no === "03" ? "wechat" : project.no === "04" ? "mini" : project.no === "06" ? "rednote" : null;
                return (
                  <article
                  className={`project-card${detail ? " project-card--interactive" : ""}`}
                  key={project.no}
                  onClick={detail ? () => setActiveDetail(detail) : undefined}
                  onKeyDown={detail ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveDetail(detail);
                    }
                  } : undefined}
                  role={detail ? "button" : undefined}
                  tabIndex={detail ? 0 : undefined}
                  aria-label={detail ? `打开 ${project.mark.replace("\n", " ")} 项目详情` : undefined}
                >
                  <div className={`project-art ${project.tone}`}>
                    <span className="art-index">PROJECT / {project.no}</span>
                    <strong className={project.textMark ? "text-mark" : undefined}>{project.mark}</strong>
                  </div>
                  <div className="project-info">
                    <div><span>{project.no}</span><h3>{project.title}</h3></div>
                  </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="about" id="about">
            <header className="about-heading">
              <p className="section-label">02 / ABOUT</p>
              <h2>关于我</h2>
              <span>HOVER TO EXPAND</span>
            </header>
            <div className="experience-stack">
              {aboutCards.map((card, index) => (
                <article className={`experience-card experience-card--${index + 1}`} key={card.title} tabIndex={0}>
                  <div className="experience-summary">
                    <span className="experience-index">0{index + 1}</span>
                    <h3>{card.title}</h3>
                    <span className="experience-toggle" aria-hidden="true">＋</span>
                  </div>
                  <div className="experience-detail">
                    <div className="experience-detail-inner">
                      {card.type === "intro" ? (
                        <p className="about-intro-copy">{card.copy}</p>
                      ) : (
                        <div className="brand-logo-grid" aria-label="服务品牌 Logo">
                          <div className="brand-logo">
                            <img src="/brands/florentia-village.png" alt="佛罗伦萨小镇" />
                          </div>
                          <div className="brand-logo">
                            <img src="/brands/dachoo.png" alt="大厨" />
                          </div>
                          <div className="brand-logo">
                            <img src="/brands/misumi.png" alt="米思米" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer id="contact">
            <div><p>来这里找我吧</p><button className="contact-trigger" type="button" onClick={() => setContactOpen(true)}>LET’S TALK <span aria-hidden="true">↗</span></button></div>
            <div className="footer-meta"><span>SHANGHAI · CN</span></div>
          </footer>
        </main>
      </div>

      {contactOpen && (
        <div
          className="contact-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setContactOpen(false);
          }}
        >
          <section className="contact-dialog" role="dialog" aria-modal="true" aria-label="联系方式">
            <p>
              <span>TEL:</span> <a href="tel:+8617770843092">17770843092</a><br />
              <span>E-MAIL:</span> <a href="mailto:lk04210109@163.com">lk04210109@163.com</a>
            </p>
          </section>
          <button className="contact-close" type="button" onClick={() => setContactOpen(false)} aria-label="关闭联系方式">×</button>
        </div>
      )}

      {activeDetail === "video" && (
        <div
          className="video-detail-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <button className="video-detail-close" type="button" onClick={closeDetail} aria-label="关闭 Video 项目详情">×</button>
          <section className="video-detail-panel" role="dialog" aria-modal="true" aria-labelledby="video-detail-title">
            <header className="video-detail-header">
              <span>PROJECT / 01</span>
              <h2 id="video-detail-title">Video</h2>
            </header>
            <div className="video-thumbnails">
              {videoItems.map((_, index) => (
                <button
                  className="video-thumbnail"
                  type="button"
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  aria-label={`播放视频 ${index + 1}`}
                >
                  <span className={`video-thumbnail-art video-thumbnail-art--${index + 1}`}>
                    <span className="video-thumbnail-index">VIDEO / 0{index + 1}</span>
                    <span className="video-play" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeDetail === "poster" && (
        <div
          className="poster-detail-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <button className="poster-detail-close" type="button" onClick={closeDetail} aria-label="关闭 Poster 项目详情">×</button>
          <section className="poster-detail-panel" role="dialog" aria-modal="true" aria-labelledby="poster-detail-title">
            <header className="poster-detail-header">
              <span>PROJECT / 02</span>
              <h2 id="poster-detail-title">Poster &amp; Long Pic</h2>
            </header>
            <div className="poster-auto-gallery" aria-label="图片制作作品自动滚动画廊">
              <div className="poster-scroll-track">
                {[0, 1].map((loop) => (
                  <div className="poster-scroll-group" key={loop} aria-hidden={loop === 1}>
                    {posterItems.map((item, index) => (
                      <button
                        className="poster-preview"
                        type="button"
                        key={`${loop}-${item.id}`}
                        tabIndex={loop === 1 ? -1 : 0}
                        onClick={() => setActivePoster(index)}
                        aria-label={`查看图片制作作品 ${item.id} 完整图片`}
                      >
                        <img src={item.img} alt="" />
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeDetail === "wechat" && (
        <div
          className="wechat-detail-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <button className="wechat-detail-close" type="button" onClick={closeDetail} aria-label="关闭 WeChat Retainer 项目详情">×</button>
          <section className="wechat-detail-panel" role="dialog" aria-modal="true" aria-labelledby="wechat-detail-title">
            <header className="wechat-detail-header">
              <span>PROJECT / 03</span>
              <h2 id="wechat-detail-title">WeChat Retainer</h2>
            </header>
            <div className="wechat-work-list">
              {wechatSections.map((section) => (
                <article className={`wechat-work-card wechat-work-card--${section.no}`} key={section.no} tabIndex={0}>
                  <header className="wechat-work-summary">
                    <span className="wechat-work-index">{section.no}</span>
                    <span className="wechat-work-tab">{section.tab}</span>
                    <h3>{section.title}</h3>
                    <span className="wechat-work-hint">HOVER TO EXPAND</span>
                    <span className="wechat-work-arrow" aria-hidden="true">↓</span>
                  </header>
                  <div className="wechat-work-detail">
                    <div className="wechat-work-detail-inner">
                      <div className="wechat-work-copy">
                        <p className="wechat-work-lead">{section.lead}</p>
                        <p>{section.description}</p>
                        {section.no === "02" && (
                          <p className="wechat-work-highlight">其中上海小镇与京津小镇公众号平均单篇阅读量达 <span>2–4w+</span>。</p>
                        )}
                      </div>
                      {section.no === "01" ? (
                        <div className="wechat-planning-gallery" aria-label="策划规划方案图片">
                          {wechatPlanningImages.map((image, index) => (
                            <button
                              className="wechat-planning-thumb"
                              type="button"
                              key={image.src}
                              onClick={() => setActiveWechatImage(index)}
                              aria-label={`放大查看：${image.alt}`}
                            >
                              <img src={image.src} alt={image.alt} />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="wechat-content-gallery" aria-label="公众号内容案例">
                          {wechatContentItems.map((item) => (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              key={item.src}
                              aria-label={`打开${item.alt}`}
                            >
                              <img src={item.src} alt={item.alt} />
                              <span aria-hidden="true">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeDetail === "mini" && (
        <div
          className="mini-program-detail-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <button className="mini-program-detail-close" type="button" onClick={closeDetail} aria-label="关闭小程序制作项目详情">×</button>
          <section className="mini-program-detail-panel" role="dialog" aria-modal="true" aria-labelledby="mini-program-detail-title">
            <header className="mini-program-detail-header">
              <span>PROJECT / 04</span>
              <h2 id="mini-program-detail-title">Mini Program</h2>
            </header>
            <div className="mini-program-gallery" aria-label="小程序制作项目方案图片">
              {["04", "02", "01", "03"].map((item, index) => (
                <figure key={item}>
                  <img src={`/projects/mini-program/mini-program-${item}.jpg`} alt={`小程序制作项目方案 ${index + 1}`} />
                </figure>
              ))}
            </div>
            <div className="mini-program-copy">
              <article>
                <span>01 / PROJECT BACKGROUND</span>
                <h3>项目背景</h3>
                <p>通过劳动节线下“文艺复兴3D画作打卡体验”活动，策划一个线上互动小游戏，将「云」作为活动的核心视觉，打造一个充满玩趣又不失高级感的云上小镇。提高线下到店率。</p>
              </article>
              <article>
                <span>02 / MY ROLE</span>
                <h3>我的角色</h3>
                <p>独立完成整个方案；从云、文艺复兴3D画作、小镇实景结合TA洞察出发，策划整个游戏玩法。再通过线下实际场景结合重点地区、露出点位及人群相关数据分析，输出传播策略和具体内容延展，完成整个互动游戏方案。并与团队完成整个活动执行，输出活动结案报告。<br /><span className="mini-program-result">达成裂变率 <strong>94%</strong>，<strong>PV 65w+</strong>，<strong>UV 4w+</strong>，会员转化率 <strong>38.43%</strong></span></p>
              </article>
            </div>
          </section>
        </div>
      )}

      {activeDetail === "rednote" && (
        <div
          className="rednote-detail-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDetail();
          }}
        >
          <button className="rednote-detail-close" type="button" onClick={closeDetail} aria-label="关闭 red note 项目详情">×</button>
          <section className="rednote-detail-panel" role="dialog" aria-modal="true" aria-labelledby="rednote-detail-title">
            <header className="rednote-detail-header">
              <span>PROJECT / 06</span>
              <h2 id="rednote-detail-title">red note</h2>
            </header>
            <div className="rednote-detail-body">
              <div className="rednote-gallery" aria-label="小红书投放项目图片">
                <figure><img src="/projects/red-note-01.png" alt="烘焙达人小红书视频截图" /></figure>
                <figure><img src="/projects/red-note-02.png" alt="厨房场景小红书图文截图" /></figure>
                <figure><img src="/projects/red-note-03.png" alt="家居餐饮小红书视频截图" /></figure>
              </div>
              <div className="rednote-copy">
                <p>通过展现产品对目标用户不同使用场景的适配性，吸引更多潜在用户；进一步渗透目标人群，传递产品良好口碑，提升销量。</p>
                <p>活动期间同达人、mcn机构及品牌对接，基于品牌调性与 campaign 目标，筛选 KOL/KOC/素人达人资源，把控笔记发布节奏、内容，审核内容并发布，统计复盘发布后数据，及时调整内容方向，控制管理舆情。<mark>项目执行期间累计合作达人70+位，爆文率达60%。</mark></p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeDetail === "poster" && activePoster !== null && (
        <div
          className="poster-full-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActivePoster(null);
          }}
        >
          <button className="poster-full-close" type="button" onClick={() => setActivePoster(null)} aria-label="关闭完整图片">×</button>
          <figure className="poster-full-panel" role="dialog" aria-modal="true" aria-label={`图片制作作品 ${posterItems[activePoster].id} 完整图片`}>
            <img src={posterItems[activePoster].img} alt={`图片制作作品 ${posterItems[activePoster].id}`} />
          </figure>
        </div>
      )}

      {activeDetail === "wechat" && activeWechatImage !== null && (
        <div
          className="wechat-image-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveWechatImage(null);
          }}
        >
          <button className="wechat-image-close" type="button" onClick={() => setActiveWechatImage(null)} aria-label="关闭完整图片">×</button>
          <button
            className="wechat-image-nav wechat-image-nav--prev"
            type="button"
            onClick={() => setActiveWechatImage((current) => current === null ? 0 : (current - 1 + wechatPlanningImages.length) % wechatPlanningImages.length)}
            aria-label="查看上一张图片"
          >
            ←
          </button>
          <figure className="wechat-image-panel" role="dialog" aria-modal="true" aria-label={wechatPlanningImages[activeWechatImage].alt}>
            <img src={wechatPlanningImages[activeWechatImage].src} alt={wechatPlanningImages[activeWechatImage].alt} />
            <figcaption>{String(activeWechatImage + 1).padStart(2, "0")} / {String(wechatPlanningImages.length).padStart(2, "0")}</figcaption>
          </figure>
          <button
            className="wechat-image-nav wechat-image-nav--next"
            type="button"
            onClick={() => setActiveWechatImage((current) => current === null ? 0 : (current + 1) % wechatPlanningImages.length)}
            aria-label="查看下一张图片"
          >
            →
          </button>
        </div>
      )}

      {activeDetail === "video" && activeVideo !== null && (
        <div
          className="video-player-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveVideo(null);
          }}
        >
          <div className="video-player" role="dialog" aria-modal="true" aria-label={`视频 ${activeVideo + 1}`}>
            <button type="button" onClick={() => setActiveVideo(null)} aria-label="关闭视频">×</button>
            {videoLoading && (
              <div className="video-empty-state" role="status">
                <span>VIDEO / 0{activeVideo + 1}</span>
                <strong>正在加载视频…</strong>
              </div>
            )}
            {videoError && (
              <div className="video-empty-state" role="alert">
                <span>VIDEO / 0{activeVideo + 1}</span>
                <strong>视频加载失败，请重试</strong>
              </div>
            )}
            {activeVideoUrl && (
              <video controls autoPlay playsInline preload="metadata" src={activeVideoUrl}>
                当前浏览器不支持视频播放。
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
