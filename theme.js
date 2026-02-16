const THEME_KEY = "portfolio-theme";
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const themeState = {
  currentTheme: "light"
};

function getSavedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === "dark" || savedTheme === "light" ? savedTheme : null;
}

function getInitialTheme() {
  const savedTheme = getSavedTheme();
  if (savedTheme) return savedTheme;
  return mediaQuery.matches ? "dark" : "light";
}

function applyTheme(theme) {
  themeState.currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function setTheme(theme, shouldPersist = true) {
  applyTheme(theme);
  if (shouldPersist) saveTheme(theme);
  updateThemeButtonLabel();
}

function toggleTheme() {
  const nextTheme = themeState.currentTheme === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
}

function updateThemeButtonLabel() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  if (window.PortfolioI18n) {
    const key = themeState.currentTheme === "dark" ? "controls.themeToLight" : "controls.themeToDark";
    button.textContent = window.PortfolioI18n.t(key);
    return;
  }
  button.textContent = themeState.currentTheme === "dark" ? "Light Mode" : "Dark Mode";
}

function initThemeToggle() {
  applyTheme(getInitialTheme());
  updateThemeButtonLabel();
  const button = document.getElementById("theme-toggle");
  if (button) {
    button.addEventListener("click", toggleTheme);
  }

  mediaQuery.addEventListener("change", (event) => {
    if (getSavedTheme()) return;
    applyTheme(event.matches ? "dark" : "light");
    updateThemeButtonLabel();
  });
}

window.PortfolioTheme = {
  initThemeToggle,
  setTheme,
  toggleTheme,
  getTheme: () => themeState.currentTheme
};

window.updateThemeButtonLabel = updateThemeButtonLabel;
