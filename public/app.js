const PERSONA = {
  firstName: "Mufqi",
  lastName: "Harits",
  monogram: "MH",
  role: "AI Operator & Developer",
  practice:
    "Building agentic AI systems, automation workflows, and high-conversion content engines.",
  email: "mufqi@keepmuving.id",
  location: "Jakarta, Indonesia",
  socialLinks: ["linkedin.com/in/mufqiharits"],
};
const PROJECTS = [
  {
    id: "01",
    slug: "urainote-agentic",
    title: "UraiNote Agentic",
    year: "2026",
    discipline: "AI System",
    role: "System architecture, LLM orchestration.",
    summary:
      "A BYOK-powered, agentic note-taking system minimizing setup time.",
    challenge: "Integrating diverse AI models for seamless context recall.",
    approach:
      "Using OmniRoute as a unified hub to manage diverse RAG pipelines, ensuring <2s inference for ADHD-friendly flow state.",
    deliverables: [
      "System Architecture",
      "Obsidian Plugin",
      "Agentic Workflow",
    ],
    coverKey: "urainote",
    projectType: "Core Project",
    featuredLines: ["URAINOTE", "AGENTIC"],
    caption: "Agentic RAG Infrastructure",
  },
  {
    id: "02",
    slug: "keepmuving-automation",
    title: "keepmuving.id",
    year: "2026",
    discipline: "Automation",
    role: "n8n Workflow Engineering.",
    summary: "IG quote & soft-sell automation engine at scale.",
    challenge: "Removing the manual friction of high-frequency social content.",
    approach:
      "Integrating n8n + Canva API + Meta Graph API for complete pipeline automation.",
    deliverables: ["n8n Pipelines", "Canva Templates", "API Glue-code"],
    coverKey: "keepmuving",
    projectType: "Commercial System",
  },
  {
    id: "03",
    slug: "agentic-refactor",
    title: "Agentic Refactor",
    year: "2025",
    discipline: "Automation",
    role: "AI Agent Architecture.",
    summary: "Autonomous code refactoring agent for legacy codebases.",
    challenge: "Automating structural changes with zero regression.",
    approach:
      "Multi-agent orchestration to review, refactor, and test modular code snippets.",
    deliverables: ["Refactor Agent", "Execution Logs", "CI/CD Integration"],
    coverKey: "refactor",
    projectType: "Research",
  },
  {
    id: "04",
    slug: "clonehero-ai",
    title: "CloneHero AI autoChart",
    year: "2025",
    discipline: "AI Tooling",
    role: "Tool Development.",
    summary: "AI-driven auto-charting tool for rhythm games.",
    challenge: "Parsing complex audio features into mapped note-data.",
    approach:
      "Feature extractive signal processing combined with heuristic mapping models.",
    deliverables: ["Tool Suite", "Signal Maps"],
    coverKey: "clonehero",
    projectType: "Experimental",
  },
  {
    id: "05",
    slug: "operator-branding",
    title: "Operator Branding",
    year: "2026",
    discipline: "Branding",
    role: "Content Strategy.",
    summary: "Positioning framework for the AI Operator role.",
    challenge: "Differentiating from traditional AI consultants.",
    approach:
      "Data-driven carousel strategies focusing on system-building over time-selling.",
    deliverables: ["Framework Documentation", "Carousel System"],
    coverKey: "operator",
    projectType: "Strategic Positioning",
  },
  {
    id: "06",
    slug: "omniroute",
    title: "OmniRoute Core",
    year: "2026",
    discipline: "Infrastructure",
    role: "DevOps & Tooling.",
    summary: "Unified AI routing infrastructure.",
    challenge: "Failover and cost optimization for high-token usage.",
    approach:
      "Modular strategy using low-cost Gemini + high-performance R1 fallback.",
    deliverables: ["API Router", "Failover Protocols"],
    coverKey: "omniroute",
    projectType: "Core Tooling",
  },
];
const SERVICES = [
  {
    id: "01",
    title: "Agentic AI",
    scope: "Systems / Orchestration / RAG",
    text: "Building autonomous agents that go beyond chatting to actively execute operations.",
    deliverables: "Agent architecture, logic flow, deployment guidelines.",
  },
  {
    id: "02",
    title: "Automation",
    scope: "Workflows / Integrations / n8n",
    text: "Designing robust automation pipelines that eliminate manual operational friction.",
    deliverables: "Workflow schemas, CI/CD integration, monitoring logs.",
  },
  {
    id: "03",
    title: "AI Operator",
    scope: "Systems / Strategy / Branding",
    text: "Deploying end-to-end AI systems that produce scalable outcomes, not just time-based consultancy.",
    deliverables: "Operating framework, system docs, scalable automation.",
  },
];

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const menuTrigger = document.querySelector(".menu-trigger");
const menuScrim = document.querySelector(".menu-scrim");
const menuClose = document.querySelector(".menu-close");
const menuLinks = [...document.querySelectorAll(".menu-link")];
const dialog = document.querySelector(".project-dialog");
const dialogContent = document.querySelector(".dialog-content");
const toast = document.querySelector(".toast");
let priorFocus = null;
let toastTimer;

function updateClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const get = (type) => parts.find((part) => part.type === type)?.value || "00";
  const text = `${get("hour")}:${get("minute")}:${get("second")}`;
  const clock = document.getElementById("jakarta-clock");
  clock.textContent = `JAKARTA — ${text}`;
  clock.dateTime = now.toISOString();
  document.querySelector(".field-clock").textContent = text;
}
updateClock();
window.setInterval(updateClock, 1000);

function setMenu(open) {
  menuTrigger.setAttribute("aria-expanded", String(open));
  menuTrigger.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu",
  );
  menuScrim.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  if (open) menuLinks[0].focus();
  else menuTrigger.focus();
}
menuTrigger.addEventListener("click", () => setMenu(menuScrim.hidden));
menuClose.addEventListener("click", () => setMenu(false));
menuScrim.addEventListener("click", (event) => {
  if (event.target === menuScrim) setMenu(false);
});
menuLinks.forEach((link) =>
  link.addEventListener("click", () => setMenu(false)),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menuScrim.hidden) setMenu(false);
  if (!menuScrim.hidden && event.key === "Tab") {
    const focusable = [
      menuClose,
      ...menuLinks,
      menuScrim.querySelector(".menu-foot a"),
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

function openProject(slug, opener) {
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return;
  priorFocus = opener;
  dialogContent.innerHTML = `
    <div class="dialog-meta"><span>[ ${project.id} ]</span><span>${project.projectType.toUpperCase()}</span><span>${project.year}</span></div>
    <h2 id="dialog-title">${project.title.replaceAll("&", "&amp;")}</h2>
    <p class="dialog-summary">${project.summary}</p>
    <div class="dialog-detail-grid">
      <section><h3>THE CHALLENGE</h3><p>${project.challenge}</p></section>
      <section><h3>THE APPROACH</h3><p>${project.approach}</p></section>
      <section><h3>ROLE</h3><p>${project.role}</p></section>
      <section><h3>DELIVERABLES</h3><ul class="deliverable-list">${project.deliverables.map((item) => `<li>${item}</li>`).join("")}</ul></section>
    </div>
    <p class="dialog-footer">${project.discipline.toUpperCase()} <span aria-hidden="true">/</span> MUFQI HARITS — AI OPERATOR &amp; DEVELOPER</p>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  dialog.querySelector(".dialog-close").focus();
}
document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () =>
    openProject(button.dataset.project, button),
  );
});
dialog
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (priorFocus?.isConnected) priorFocus.focus();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else revealItems.forEach((item) => item.classList.add("is-visible"));

document.querySelectorAll("[data-split]").forEach((word) => {
  const original = word.innerHTML;
  if (reduceMotion) return;
  const text = word.childNodes;
  let index = 0;
  word.innerHTML = "";
  text.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      [...node.textContent].forEach((character) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.style.setProperty("--letter-index", index++);
        span.textContent = character === " " ? "\u00a0" : character;
        word.append(span);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const span = document.createElement("span");
      span.className = node.className;
      [...node.textContent].forEach((character) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.style.setProperty("--letter-index", index++);
        letter.textContent = character;
        span.append(letter);
      });
      word.append(span);
    }
  });
  if (!word.textContent.trim()) word.innerHTML = original;
});

const signalButton = document.querySelector(".signal-field");
signalButton.addEventListener("click", () => {
  const active = signalButton.getAttribute("aria-pressed") !== "true";
  signalButton.setAttribute("aria-pressed", String(active));
});

// Lightweight, self-contained agentic signal visualization: animated links and nodes respond to pointer position.
const canvas = document.querySelector(".signal-canvas");
const ctx = canvas.getContext("2d", { alpha: true });
const field = canvas.parentElement;
let width = 0;
let height = 0;
let nodes = [];
let frame = 0;
let pointer = { x: 0.5, y: 0.5, active: false };
let animationId;
function resizeSignal() {
  const bounds = field.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
  width = bounds.width;
  height = bounds.height;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = width < 500 ? 26 : 46;
  nodes = Array.from({ length: count }, (_, index) => {
    const angle = index * 2.399963;
    const radius = Math.sqrt((index + 0.5) / count) * 0.42;
    return {
      x: 0.5 + Math.cos(angle) * radius * 1.45,
      y: 0.5 + Math.sin(angle) * radius,
      phase: index * 0.91,
      size: index % 9 === 0 ? 2 : 1.1,
    };
  });
}
function drawSignal() {
  ctx.clearRect(0, 0, width, height);
  const cx = width * (0.5 + (pointer.active ? (pointer.x - 0.5) * 0.08 : 0));
  const cy = height * (0.5 + (pointer.active ? (pointer.y - 0.5) * 0.08 : 0));
  const time = reduceMotion ? 0 : frame * 0.007;
  const positions = nodes.map((node) => ({
    x:
      width * node.x +
      Math.sin(time + node.phase) * 7 +
      (cx - width / 2) * 0.025,
    y:
      height * node.y +
      Math.cos(time * 0.8 + node.phase) * 6 +
      (cy - height / 2) * 0.025,
    size: node.size,
  }));
  const maxLink = Math.min(width, height) * 0.23;
  positions.forEach((point, index) => {
    for (let next = index + 1; next < positions.length; next++) {
      const target = positions[next];
      const distance = Math.hypot(point.x - target.x, point.y - target.y);
      if (distance < maxLink) {
        const opacity = (1 - distance / maxLink) * 0.2;
        ctx.strokeStyle = `rgba(255,99,15,${opacity})`;
        ctx.lineWidth = 0.55;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();
      }
    }
    const selected = index % 8 === 0;
    ctx.fillStyle = selected
      ? `rgba(255,99,15,${0.42 + Math.sin(time * 1.6 + index) * 0.16})`
      : "rgba(236,220,208,.37)";
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
    ctx.fill();
  });
  if (!reduceMotion) {
    frame++;
    animationId = requestAnimationFrame(drawSignal);
  }
}
field.addEventListener("pointermove", (event) => {
  const bounds = field.getBoundingClientRect();
  pointer = {
    x: (event.clientX - bounds.left) / bounds.width,
    y: (event.clientY - bounds.top) / bounds.height,
    active: true,
  };
});
field.addEventListener("pointerleave", () => {
  pointer.active = false;
});
const canvasObserver = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    resizeSignal();
    if (!animationId) {
      drawSignal();
    }
  } else {
    cancelAnimationFrame(animationId);
    animationId = undefined;
  }
});
canvasObserver.observe(field);
window.addEventListener("resize", resizeSignal, { passive: true });
