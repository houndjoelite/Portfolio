// Init animations
AOS.init({ once: true, duration: 700 });

// Dark/light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const localTheme = localStorage.getItem("theme");
if (localTheme) {
  document.documentElement.setAttribute("data-theme", localTheme);
} else {
  // Default to dark theme if none saved
  document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Projects data
const projects = [
  {
    title: "TONK Protocol",
    description: "Lead Front-End – dApp DeFi.",
    image: "images/TONK Protocol.PNG",
    live: "#"
  },
  {
    title: "Système anti-phishing",
    description: "Outil de détection de phishing basé ML.",
    image: "images/Phishings.PNG",
    live: "#"
  },
  {
    title: "Extracteurdejus.net",
    description: "Boutique en ligne WooCommerce.",
    live: "https://extracteurdejus.net"
  },
  // --- Sites clients ---
  { title: "Afghantkd.com", live: "http://afghantkd.com" },
  { title: "Virgo4.com", live: "http://virgo4.com" },
  { title: "Sander-martijn.com", live: "https://sander-martijn.com" },
  { title: "Fgpltd.com", live: "http://fgpltd.com" },
  { title: "Annacaro.org", live: "https://annacaro.org" },
  { title: "Allofsooq.com", live: "http://allofsooq.com" },
  { title: "Chickamaugacherokee.org", live: "https://chickamaugacherokee.org" },
  { title: "Albadehermes.com", live: "https://albadehermes.com" },
  { title: "Agazelle.com", live: "https://agazelle.com" },
  { title: "Angelobona.net", live: "https://angelobona.net" },
  { title: "Aykoctemizlik.com", live: "http://aykoctemizlik.com" },
  { title: "Atlastours.fr", live: "http://atlastours.fr" },
  { title: "Automotoboard.info", live: "http://automotoboard.info" },
  { title: "SecondLifeSettlement.com", live: "http://secondlifesettlement.com" },
  { title: "Ekw-hrd.com", live: "http://ekw-hrd.com" },
  { title: "Saint-emilion-premiers.com", live: "https://saint-emilion-premiers.com" },
  { title: "Rhinoplastydigest.com", live: "http://rhinoplastydigest.com" },
  { title: "Michiganrotts.com", live: "http://michiganrotts.com" },
  { title: "Nurburgringuk.com", live: "http://nurburgringuk.com" },
  { title: "Fllyachts.com", live: "http://fllyachts.com" },
  { title: "Boucherie-kautzmann.fr", live: "http://boucherie-kautzmann.fr" },
  { title: "Hoteldespoetes.fr", live: "http://hoteldespoetes.fr" },
  { title: "Gymflash.fr", live: "http://gymflash.fr" },
  { title: "Dandydenantes.fr", live: "http://dandydenantes.fr" },
  { title: "Ausoleildumaroc.fr", live: "http://ausoleildumaroc.fr" },
  { title: "Umanesens.fr", live: "http://umanesens.fr" },
  { title: "Cheapsoccerjersey.net", live: "http://cheapsoccerjersey.net" },
  { title: "Jbfurnace.com", live: "http://jbfurnace.com" },
  { title: "Sutherlandshireaustralia.com", live: "https://sutherlandshireaustralia.com" },
  { title: "SouthSeattleDaySinn.com", live: "http://southseattledaysinn.com" },
  { title: "Vchlorin.com", live: "http://vchlorin.com" },
  { title: "Lyon-chambres-enfants.com", live: "http://lyon-chambres-enfants.com" },
  { title: "Kuhn-org.com", live: "http://kuhn-org.com" },
  { title: "Muskokadelivery.com", live: "http://muskokadelivery.com" },
  { title: "Tidalwavesc.com", live: "http://tidalwavesc.com" }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = ""; // reset
  projects.forEach(p => {
    // Fallback image: screenshot service if not provided
    const imgSrc = p.image && !p.image.startsWith("https://via.placeholder") ? p.image : (p.live ? `https://image.thum.io/get/width/800/${p.live}` : p.image);
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${imgSrc}" alt="${p.title}" loading="lazy">
      <div class="project-card__content">
        <h4 class="project-card__title">${p.title}</h4>
        <p class="project-card__desc">${p.description}</p>
      </div>`;
    grid.appendChild(card);
  });
}
renderProjects();

// Skills data
const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Netlinking", icon: "https://img.icons8.com/external-solidglyph-m-oki-orlando/64/000000/external-link-seo-and-marketing-solid-solidglyph-m-oki-orlando.png" },
  { name: "Rédaction d'articles", icon: "https://img.icons8.com/ios-filled/50/000000/write.png" },
  { name: "Microsoft Office", icon: "https://img.icons8.com/color/48/000000/microsoft-office-2019--v1.png" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
  { name: "Bases de données", icon: "https://img.icons8.com/color/48/000000/database.png" }
];
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  skills.forEach(s => {
    const item = document.createElement("div");
    item.className = "skill-item";
    item.innerHTML = `
      <img src="${s.icon}" alt="${s.name}">
      <span>${s.name}</span>`;
    grid.appendChild(item);
  });
}
renderSkills();
