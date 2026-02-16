function renderPersonal(items) {
  const container = document.getElementById("personal-grid");
  if (!container) return;
  container.innerHTML = items.map((item) => `
    <article class="card">
      <h3>${item.label}</h3>
      <p>${item.value}</p>
    </article>
  `).join("");
}

function renderTimeline(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item) => `
    <article class="timeline-card">
      <h3>${item.title}</h3>
      <p class="meta">${item.subtitle}</p>
      <p class="meta period">${item.period}</p>
      <ul class="bullet-list">
        ${item.bullets.map((line) => `<li>${line}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderAwards(items) {
  const container = document.getElementById("awards-list");
  if (!container) return;
  container.innerHTML = items.map((award) => `<li>${award}</li>`).join("");
}

function renderPortfolioContent() {
  if (!window.PortfolioI18n) return;
  const data = window.PortfolioI18n.getCurrentDictionary();
  renderPersonal(data.personal.items);
  renderTimeline(data.experience.items, "experience-list");
  renderTimeline(data.education.items, "education-list");
  renderTimeline(data.activities.items, "activities-list");
  renderAwards(data.awards.items);
  if (window.renderContact) window.renderContact();
}

function initPortfolio() {
  if (!window.PortfolioI18n || !window.PortfolioTheme) return;
  window.PortfolioI18n.initLanguageToggle();
  window.PortfolioTheme.initThemeToggle();
  window.PortfolioI18n.setLanguage(window.PortfolioI18n.getLanguage());
}

window.renderPortfolioContent = renderPortfolioContent;

document.addEventListener("DOMContentLoaded", initPortfolio);
