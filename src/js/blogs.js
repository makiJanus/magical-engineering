/* =========================================================
   blogs.js — blog cards (EN/ES), single source of truth.
   ========================================================= */

const BLOGS = [
  {
    id: "blog3",
    img: "/src/blog_posts/blog3/img1.png",
    alt: { en: "Ethics and Technology: A Future of Desires and Fears in Artificial Intimacy", es: "Ética y Tecnología: Un Futuro de Deseos y Miedos en la Intimidad Artificial" },
    href: { en: "/blogs/desires_fears_artificial_intimacy.html", es: "/es/blogs/desires_fears_artificial_intimacy.html" },
    title: {
      en: "Ethics and Technology: A Future of Desires and Fears in Artificial Intimacy",
      es: "Ética y Tecnología: Un Futuro de Deseos y Miedos en la Intimidad Artificial",
    },
    desc: {
      en: "Can the Use of Artificial Intelligence and Robotics for Sexual Satisfaction Promote Immoral and Dehumanizing Behaviors?",
      es: "¿Puede el uso de la Inteligencia Artificial y la Robótica para la Satisfacción Sexual promover comportamientos inmorales y deshumanizantes?",
    },
    tags: {
      en: [ { c: "pink", l: "AI" }, { c: "purple", l: "Society" } ],
      es: [ { c: "pink", l: "IA" }, { c: "purple", l: "Sociedad" } ],
    },
  },
  {
    id: "blog2",
    img: "/src/blog_posts/blog2/cyberlover_placehilder.png",
    alt: { en: "The Synthetic Lover: A New Era in Sexual Exploration", es: "El Amante Sintético: Una Nueva Era en la Exploración Sexual" },
    href: { en: "/blogs/synthetic_lover.html", es: "/es/blogs/synthetic_lover.html" },
    title: {
      en: "The Synthetic Lover: A New Era in Sexual Exploration",
      es: "El Amante Sintético: Una Nueva Era en la Exploración Sexual",
    },
    desc: {
      en: "As the lines between fantasy and reality continue to blur, a new generation of artificial sexual companions is emerging. But what does this mean for our relationships, our desires, and our very understanding of what it means to be human?",
      es: "A medida que las líneas entre fantasía y realidad continúan difuminándose, está emergiendo una nueva generación de compañeros sexuales artificiales. Pero, ¿qué significa esto para nuestras relaciones, nuestros deseos y nuestra propia comprensión de lo que significa ser humano?",
    },
    tags: {
      en: [ { c: "pink", l: "AI" }, { c: "orange", l: "Robotics" }, { c: "purple", l: "Society" } ],
      es: [ { c: "pink", l: "IA" }, { c: "orange", l: "Robótica" }, { c: "purple", l: "Sociedad" } ],
    },
  },
  {
    id: "blog1",
    img: "/src/blog_posts/blog1/placeholder.png",
    alt: { en: "Hybrid Prompts: Guide to Effective Conversational AI", es: "Prompts Híbridos: Guía para una IA Conversacional Efectiva" },
    href: { en: "/blogs/hybrid_prompts.html", es: "/es/blogs/hybrid_prompts.html" },
    title: {
      en: "Hybrid Prompts: Guide to Effective Conversational AI",
      es: "Prompts Híbridos: Guía para una IA Conversacional Efectiva",
    },
    desc: {
      en: "Discover how combining closed-ended questions with open-ended prompts can revolutionize your conversational AI experiences. Learn how hybrid prompts can help create more realistic, engaging, and empathetic interactions with virtual beings.",
      es: "Descubre cómo combinar preguntas cerradas con prompts abiertos puede revolucionar tus experiencias con IA conversacional. Aprende cómo los prompts híbridos pueden ayudar a crear interacciones más realistas, atractivas y empáticas con seres virtuales.",
    },
    tags: {
      en: [ { c: "pink", l: "AI" }, { c: "yellow", l: "Tutorial" } ],
      es: [ { c: "pink", l: "IA" }, { c: "yellow", l: "Tutorial" } ],
    },
  },
];

const _esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const _pageLang = () => (document.documentElement.lang === "es" ? "es" : "en");

function blogCardHTML(b, lang) {
  const tags = b.tags[lang].map((t) => `<span class="badge badge-${t.c}">${_esc(t.l)}</span>`).join("");
  return `
    <div class="card" data-href="${b.href[lang]}" role="link" tabindex="0" aria-label="${_esc(b.title[lang])}">
      <img class="card-img-top" src="${b.img}" alt="${_esc(b.alt[lang])}" loading="lazy">
      <div class="project-info">
        <div class="project-bio"><h3>${_esc(b.title[lang])}</h3><p>${_esc(b.desc[lang])}</p></div>
        <div class="card-tags">${tags}</div>
      </div>
    </div>`;
}

function renderBlogs() {
  const lang = _pageLang();
  const heading = {
    en: { h: "Blogs", p: "Here I post some thoughts and short research pieces, enjoy!" },
    es: { h: "Blogs", p: "Aquí comparto algunos pensamientos y breves investigaciones." },
  }[lang];

  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = `
    <section class="container">
      <div class="content-text"><h2>${heading.h}</h2><p>${heading.p}</p></div>
      <article class="project">${BLOGS.map((b) => blogCardHTML(b, lang)).join("")}</article>
    </section>`;
}

if (!window.__cardNavAttached) {
  window.__cardNavAttached = true;
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card[data-href]");
    if (card) window.location.href = card.dataset.href;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest && e.target.closest(".card[data-href]");
    if (card) { e.preventDefault(); window.location.href = card.dataset.href; }
  });
}

window.addEventListener("load", renderBlogs);
