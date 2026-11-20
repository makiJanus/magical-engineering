/* =========================================================
   projects.js — single source of truth for project cards.
   Renders the cherry-picked (home) set and the full set,
   in EN or ES, based on the page's <html lang>.
   ========================================================= */

const PROJECTS = [
  {
    id: "project16",
    img: "/src/project_posts/project16/cover.gif",
    cherry: true,
    alt: { en: "Emily — A Social Robot", es: "Emily — Una robot social" },
    href: { en: "/projects/emily.html", es: "/es/projects/emily.html" },
    title: {
      en: "Emily: a fully autonomous social robot and development platform",
      es: "Emily: una robot social completamente autónoma y una plataforma de desarrollo",
    },
    desc: {
      en: "A Raspberry Pi social robot that unifies a conversational voice brain, a 24-servo expressive head, and two operator displays into one talking, looking, feeling face.",
      es: "Una robot social sobre Raspberry Pi que une una mente conversacional, una cabeza expresiva de 24 servos y dos pantallas de operador en una sola cara que habla, mira y siente.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "orange", l: "LLM" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "orange", l: "LLM" }, { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project15",
    img: "/src/project_posts/project15/eyes_cover.gif",
    cherry: false,
    alt: { en: "Modular Robotic Silicone Eye", es: "Ojo de Silicona Robótico" },
    href: { en: "/projects/robotic_silicone_eye.html", es: "/es/projects/robotic_silicone_eye.html" },
    title: {
      en: "Modular Robotic Silicone Eye",
      es: "Ojo Robótico Modular de Silicona",
    },
    desc: {
      en: "A pair of 12-servo silicone eyes that track your face, blink, hold expressions, and wander on their own.",
      es: "Un par de ojos de silicona de 12 servos que siguen tu cara, parpadean, sostienen expresiones y deambulan por su cuenta.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project14",
    img: "/src/project_posts/project14/mouth_cover.gif",
    cherry: false,
    alt: { en: "Robotic Silicone Mouth", es: "Boca de Silicona Robótica" },
    href: { en: "/projects/robotic_silicone_mouth.html", es: "/es/projects/robotic_silicone_mouth.html" },
    title: {
      en: "Robotic Silicone Mouth",
      es: "Boca Robótica con Piel (de Silicona)",
    },
    desc: {
      en: "A 9-servo silicone mouth and lower face that pulls real expressions, lip-syncs to spoken audio, and mirrors your face in real time.",
      es: "Una boca y la mitad inferior de una cara actuadas por 9 servos: hace expresiones reales, sincroniza los labios con el audio y refleja tu cara en tiempo real.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "orange", l: "LLM" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "orange", l: "LLM" }, { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project13",
    img: "/src/project_posts/project13/cover.gif",
    cherry: false,
    alt: { en: "Universal Remote Controller", es: "Control Remoto Universal" },
    href: { en: "/projects/universal_remote.html", es: "/es/projects/universal_remote.html" },
    title: {
      en: "Universal Remote Controller",
      es: "Control Remoto Universal",
    },
    desc: {
      en: "A minimalist universal remote controller designed to simplify the user experience with a clean, intuitive interface.",
      es: "Un control remoto universal minimalista diseñado para simplificar la experiencia del usuario con una interfaz limpia y intuitiva.",
    },
    tags: {
      en: [ { c: "purple", l: "Electronics" } ],
      es: [ { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project12",
    img: "/src/project_posts/project12/cover.gif",
    cherry: false,
    alt: { en: "Emma: A robot girl that likes to talk", es: "Emma: Una robot a la que le encanta conversar" },
    href: { en: "/projects/emma.html", es: "/es/projects/emma.html" },
    title: {
      en: "Emma — A robot girl that likes to talk",
      es: "Emma — Una robot a la que le encanta conversar",
    },
    desc: {
      en: "Emma is a social robot designed to interact with children in a natural way, using advanced AI technologies to create an engaging and educational experience.",
      es: "Emma es un robot social diseñada para interactuar con niños de forma natural, combinando tecnologías de inteligencia artificial para crear una experiencia cercana y estimulante.",
    },
    tags: {
      en: [ { c: "green", l: "Research" }, { c: "blue", l: "Robotics" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulation" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "green", l: "Investigación" }, { c: "blue", l: "Robótica" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulación" }, { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project11",
    img: "/src/project_posts/project11/12.gif",
    cherry: true,
    alt: { en: "Lumina, an AI personality framework", es: "Lumina, un framework de personalidad" },
    href: { en: "/projects/lumina.html", es: "/es/projects/lumina.html" },
    title: {
      en: "Lumina — A personality framework disguised as an erotic streamer",
      es: "Lumina - Framework de personalidad disfrazado como streamer erótica",
    },
    desc: {
      en: "Lumina is an erotic virtual streamer that combines different AI technologies to create an interactive and engaging experience for her audience.",
      es: "Lumina es una streamer virtual erótica que combina distintas tecnologías de inteligencia artificial para crear una experiencia interactiva y atractiva para su audiencia.",
    },
    tags: {
      en: [ { c: "green", l: "Research" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "green", l: "Investigación" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project10",
    img: "/src/project_posts/project10/sr_4.gif",
    cherry: true,
    alt: { en: "Robots That Understand and Follow Human Instructions", es: "Robots que Entienden y Siguen Instrucciones Humanas" },
    href: { en: "/projects/lim2n.html", es: "/es/projects/lim2n.html" },
    title: {
      en: "Robots That Understand and Follow Human Instructions",
      es: "Robots que Entienden y Siguen Instrucciones Humanas",
    },
    desc: {
      en: "An experiment where I used LLMs to reason over semantic maps, generate paths, and control a Jetbot robot using PD. The key? A good prompt.",
      es: "Un experimento donde utilicé LLMs para razonar sobre mapas semánticos, generar rutas y controlar un robot Jetbot usando PD. ¿La clave? Un buen prompt.",
    },
    tags: {
      en: [ { c: "green", l: "Research" }, { c: "blue", l: "Robotics" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "green", l: "Investigación" }, { c: "blue", l: "Robótica" }, { c: "orange", l: "LLM" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project8",
    img: "/src/project_posts/project8/behaviors.gif",
    cherry: false,
    alt: { en: "Two-wheeled robot balancing and navigating", es: "Robot de dos ruedas que equilibra y navega" },
    href: { en: "/projects/inverted_wheeled_pendulum_train.html", es: "/es/projects/inverted_wheeled_pendulum_train.html" },
    title: {
      en: "This robot can navigate while keeping its balance",
      es: "Este robot puede navegar mientras mantiene su equilibrio",
    },
    desc: {
      en: "Two-wheeled inverted pendulum trained using reinforcement learning in NVIDIA Isaac Lab to maintain balance and navigate.",
      es: "Péndulo invertido de dos ruedas entrenado usando aprendizaje por refuerzo en NVIDIA Isaac Lab para mantener el equilibrio y navegar.",
    },
    tags: {
      en: [ { c: "green", l: "Research" }, { c: "blue", l: "Robotics" }, { c: "orange", l: "Reinforcement Learning" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "green", l: "Investigación" }, { c: "blue", l: "Robótica" }, { c: "orange", l: "Aprendizaje por Refuerzo" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project2",
    img: "/src/project_posts/project2/intro.gif",
    cherry: false,
    alt: { en: "Iter: modular robotics platform", es: "Iter: plataforma robótica modular" },
    href: { en: "/projects/iter.html", es: "/es/projects/iter.html" },
    title: {
      en: "Iter: Modularity at the heart of robotics design",
      es: "Iter: La modularidad en el corazón del diseño robótico",
    },
    desc: {
      en: "Designed to be as modular as possible, both in terms of software and hardware. With dedicated swappable modules for each task according to the requirements and a Python-based API.",
      es: "Creado para ser lo más modular posible, tanto en términos de software como de hardware. Con módulos intercambiables dedicados para cada tarea según los requisitos y una API basada en Python.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "purple", l: "Electronics" }, { c: "cyan", l: "VR" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "purple", l: "Electrónica" }, { c: "cyan", l: "VR" } ],
    },
  },
  {
    id: "project7",
    img: "/src/project_posts/project7/card.png",
    cherry: false,
    alt: { en: "Rovver X 130: Digital Twin", es: "Rovver X 130: Gemelo Digital" },
    href: { en: "/projects/rovver_x_130.html", es: "/es/projects/rovver_x_130.html" },
    title: {
      en: "Rovver X 130: Digital Twin",
      es: "Rovver X 130: Gemelo Digital",
    },
    desc: {
      en: "Designing a digital twin of the robot Rovver X 130 of Envirosight in Nvidia Isaac Sim.",
      es: "Diseñando un gemelo digital del robot Rovver X 130 de Envirosight en Nvidia Isaac Sim.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project6",
    img: "/src/project_posts/project6/digital_twin.jpg",
    cherry: false,
    alt: { en: "Mini Vizca 400: Digital Twin", es: "Mini Vizca 400: Gemelo Digital" },
    href: { en: "/projects/mini_vizca_400.html", es: "/es/projects/mini_vizca_400.html" },
    title: {
      en: "Mini Vizca 400: Digital Twin",
      es: "Mini Vizca 400: Gemelo Digital",
    },
    desc: {
      en: "Designing a digital twin of the robot Mini Vizca 400 of Maquintel Robotic Services in Nvidia Isaac Sim.",
      es: "Gemelo digital del robot Mini Vizca 400 de Maquintel Robotic Services en Nvidia Isaac Sim.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project1",
    img: "/src/project_posts/project1/trayectories.png",
    cherry: false,
    alt: { en: "Published research: Autonomous mobile robotics", es: "Investigación publicada: Robótica móvil autónoma" },
    href: { en: "/projects/paper.html", es: "/es/projects/paper.html" },
    title: {
      en: "Published research: Autonomous mobile robotics",
      es: "Investigación publicada: Robótica móvil autónoma",
    },
    desc: {
      en: "Designing a python library to generate navigation strategies for different types of mobile robots with Deep Reinforcement Learning in Nvidia Isaac Sim.",
      es: "Diseñando una biblioteca de Python para generar estrategias de navegación para diferentes tipos de robots móviles con Aprendizaje por Refuerzo Profundo en Nvidia Isaac Sim.",
    },
    tags: {
      en: [ { c: "green", l: "Research" }, { c: "blue", l: "Robotics" }, { c: "orange", l: "Reinforcement Learning" }, { c: "pink", l: "Simulation" } ],
      es: [ { c: "green", l: "Investigación" }, { c: "blue", l: "Robótica" }, { c: "orange", l: "Aprendizaje por Refuerzo" }, { c: "pink", l: "Simulación" } ],
    },
  },
  {
    id: "project3",
    img: "/src/project_posts/project3/pdf-chat.jpg",
    cherry: false,
    alt: { en: "AI-powered intelligent assistants", es: "Asistentes inteligentes con IA" },
    href: { en: "/projects/llm_pdf_qa.html", es: "/es/projects/llm_pdf_qa.html" },
    title: {
      en: "Enhancing Human Understanding: The Rise of Intelligent Assistants",
      es: "Mejorando la Comprensión Humana: El Auge de los Asistentes Inteligentes",
    },
    desc: {
      en: "Exploring AI-powered assistants, their ability to explore vast knowledge bases, and how they assist in finding valuable insights and applications.",
      es: "Explorando asistentes impulsados por IA, su capacidad para explorar vastas bases de conocimiento, y cómo ayudan a encontrar ideas.",
    },
    tags: {
      en: [ { c: "orange", l: "LLM" } ],
      es: [ { c: "orange", l: "LLM" } ],
    },
  },
  {
    id: "project4",
    img: "/src/project_posts/project4/circuit.jpg",
    cherry: false,
    alt: { en: "3.3V rechargeable power circuit", es: "Circuito de carga de 3.3V" },
    href: { en: "/projects/3v3_charger_circuit.html", es: "/es/projects/3v3_charger_circuit.html" },
    title: {
      en: "Make every 3v3 device rechargeable",
      es: "Haz que cada dispositivo 3v3 sea recargable",
    },
    desc: {
      en: "A circuit designed to charge a 3.7 V lipo battery and, if necessary, act as a power supply. In both cases the output voltage is 3.3 V.",
      es: "Un circuito diseñado para cargar una batería lipo de 3.7 V y, si es necesario, actuar como fuente de alimentación; en ambos casos el voltaje de salida es 3.3 V.",
    },
    tags: {
      en: [ { c: "purple", l: "Electronics" } ],
      es: [ { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project5",
    img: "/src/project_posts/project5/aina.png",
    cherry: false,
    alt: { en: "Aina — Humanoid ROS platform", es: "Aina - Plataforma robótica humanoide ROS" },
    href: { en: "/projects/aina.html", es: "/es/projects/aina.html" },
    title: {
      en: "Aina - Humanoid platform ROS robot",
      es: "Aina - Plataforma robótica humanoide ROS",
    },
    desc: {
      en: "The Journey of Exploring Social Interactions through Aina, My First Experience as an Open-Source Humanoid Robot Developer.",
      es: "El Viaje de Explorar Interacciones Sociales a través de Aina, Mi Primera Experiencia como Desarrollador de Robot Humanoide de Código Abierto.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "purple", l: "Electrónica" } ],
    },
  },
  {
    id: "project9",
    img: "/src/project_posts/project9/r.jpg",
    cherry: false,
    alt: { en: "Small humanoid robot for interaction with kids with autism", es: "Robot humanoide pequeño para interacción con niños con autismo" },
    href: { en: "/projects/asd_robot.html", es: "/es/projects/asd_robot.html" },
    title: {
      en: "Small Humanoid Robot for Interaction with Kids with Autism",
      es: "Robot Humanoide Pequeño para Interacción con Niños con Autismo",
    },
    desc: {
      en: "More children are diagnosed with autism. This project explores how technology can boost their social skills.",
      es: "Más niños son diagnosticados con autismo. Este proyecto explora cómo la tecnología puede mejorar sus habilidades sociales.",
    },
    tags: {
      en: [ { c: "blue", l: "Robotics" }, { c: "purple", l: "Electronics" } ],
      es: [ { c: "blue", l: "Robótica" }, { c: "purple", l: "Electrónica" } ],
    },
  },
];

/* ── helpers ─────────────────────────────────────────────── */
const _esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const _pageLang = () => (document.documentElement.lang === "es" ? "es" : "en");

function cardHTML(p, lang) {
  const tags = p.tags[lang].map((t) => `<span class="badge badge-${t.c}">${_esc(t.l)}</span>`).join("");
  return `
    <div class="card" data-href="${p.href[lang]}" role="link" tabindex="0" aria-label="${_esc(p.title[lang])}">
      <img class="card-img-top" src="${p.img}" alt="${_esc(p.alt[lang])}" width="450" height="250" loading="lazy">
      <div class="project-info">
        <div class="project-bio">
          <h3>${_esc(p.title[lang])}</h3>
          <p>${_esc(p.desc[lang])}</p>
        </div>
        <div class="card-tags">${tags}</div>
      </div>
    </div>`;
}

function renderProjects() {
  const lang = _pageLang();
  const heading = {
    en: { h: "Projects", cherry: "Check out some of my personal projects!", full: "Here you have the full list of the projects, enjoy!" },
    es: { h: "Proyectos", cherry: "¡Échale un vistazo a algunos de mis proyectos personales!", full: "¡Aquí tienes la lista completa de los proyectos, disfruta!" },
  }[lang];

  const cherry = PROJECTS.filter((p) => p.cherry);
  const all = PROJECTS;

  const seeMoreHref = lang === "es" ? "/es/projects.html" : "/projects.html";
  const seeMoreLabel = lang === "es" ? "Ver más" : "See more";

  const container = document.getElementById("projects-container");
  if (container) {
    container.innerHTML = `
      <section class="container">
        <div class="content-text"><h2>${heading.h}</h2><p>${heading.cherry}</p></div>
        <article class="project">${cherry.map((p) => cardHTML(p, lang)).join("")}</article>
        <div class="see-more">
          <a href="${seeMoreHref}" class="btn-ghost">${seeMoreLabel} <i class="fas fa-arrow-right"></i></a>
        </div>
      </section>`;
  }

  const general = document.getElementById("projects-general");
  if (general) {
    general.innerHTML = `
      <section class="container">
        <div class="content-text"><h2>${heading.h}</h2><p>${heading.full}</p></div>
        <article class="project">${all.map((p) => cardHTML(p, lang)).join("")}</article>
      </section>`;
  }
}

/* ── delegated card navigation (registered once) ─────────── */
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

window.addEventListener("load", renderProjects);
