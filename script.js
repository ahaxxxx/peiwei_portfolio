const resumeData = {
  brand: "MahamCodes",
  name: "Clara Tan Pei Wei",
  headline: "Biological Science graduate with international business development experience in IVD/POCT healthcare markets.",
  contact: {
    email: "peiweitan58@gmail.com",
    phone: "+60 11-3334 2933",
    location: "Malaysia / China"
  },
  about: "Analytical and detail-oriented professional with hands-on exposure to cross-border business operations, distributor communication, and exhibition support across Southeast Asia and East Asia.",
  education: [
    {
      title: "Tianjin University",
      detail: "Bachelor of Biological Science (Sep 2021 - Jul 2025), full scholarship awardee."
    }
  ],
  experience: [
    {
      title: "International Business Development - Xenta Biomedical Science Co. Ltd.",
      detail: "Supported market development and customer coordination in Malaysia, Indonesia, Korea, and Japan (Jul 2025 - Jan 2026)."
    },
    {
      title: "Vice President - Malaysian Student Association in Tianjin",
      detail: "Led 300+ student organization operations and executed 10 large-scale events (2023 - 2024)."
    },
    {
      title: "iGEM Experimental Team Member - Tianjin University",
      detail: "Contributed to PET biodegradation project, 500+ sample tests, and team won iGEM Gold Medal (2024 - 2025)."
    }
  ],
  projects: [
    {
      title: "TaskFlow JS",
      detail: "A vanilla JavaScript task manager with local storage persistence, category filters, and due-date sorting."
    },
    {
      title: "WeatherPulse",
      detail: "A JavaScript weather dashboard using API data, dynamic icons, and location-based forecast cards."
    },
    {
      title: "Budget Buddy",
      detail: "An interactive JS expense tracker with monthly charts, spending alerts, and exportable summaries."
    }
  ]
};

function createCards(items, targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = items.map((item) => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    </article>
  `).join("");
}

function renderPortfolio(data) {
  document.getElementById("full-name").textContent = `${data.brand} | ${data.name}`;
  document.getElementById("headline").textContent = data.headline;
  document.getElementById("about-text").textContent = data.about;
  createCards(data.education, "education-list");
  createCards(data.experience, "experience-list");
  createCards(data.projects, "projects-list");
}

function setupInteractivity(data) {
  const btn = document.getElementById("contact-btn");
  const info = document.getElementById("contact-info");

  btn.addEventListener("click", () => {
    info.classList.toggle("hidden");
    info.textContent = `${data.contact.email} | ${data.contact.phone} | ${data.contact.location}`;
    btn.textContent = info.classList.contains("hidden") ? "Show Contact" : "Hide Contact";
  });
}

renderPortfolio(resumeData);
setupInteractivity(resumeData);
