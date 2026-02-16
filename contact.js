const contactConfig = {
  email: "peiweitan58@gmail.com",
  linkedin: "Clara Tan",
  github: "https://github.com/ahaxxxx",
  whatsapp: "+601133342933"
};

function safeText(value) {
  return String(value || "").replace(/"/g, "&quot;");
}

function isHttpUrl(value) {
  return /^https?:\/\//i.test(String(value || ""));
}

function renderContactValue(value) {
  if (isHttpUrl(value)) {
    return `<a class="contact-link" href="${safeText(value)}" target="_blank" rel="noopener noreferrer">${safeText(value)}</a>`;
  }
  return `<span>${safeText(value)}</span>`;
}

function renderContact() {
  const container = document.getElementById("contact-list");
  if (!container || !window.PortfolioI18n) return;
  const { t } = window.PortfolioI18n;
  const whatsappDigits = (contactConfig.whatsapp || "").replace(/\D/g, "");

  container.innerHTML = `
    <div class="contact-item">
      <span class="contact-label">${t("contact.labels.email")}:</span>
      <a class="contact-link" href="mailto:${safeText(contactConfig.email)}">${safeText(contactConfig.email)}</a>
      <button id="copy-email-btn" class="copy-btn" type="button">${t("contact.copy")}</button>
    </div>
    <div class="contact-item">
      <span class="contact-label">${t("contact.labels.linkedin")}:</span>
      ${renderContactValue(contactConfig.linkedin)}
    </div>
    <div class="contact-item">
      <span class="contact-label">${t("contact.labels.github")}:</span>
      ${renderContactValue(contactConfig.github)}
    </div>
    <div class="contact-item">
      <span class="contact-label">${t("contact.labels.whatsapp")}:</span>
      <a class="contact-link" href="https://wa.me/${safeText(whatsappDigits)}" target="_blank" rel="noopener noreferrer">${safeText(contactConfig.whatsapp)}</a>
    </div>
  `;

  const copyBtn = document.getElementById("copy-email-btn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.email);
      copyBtn.textContent = t("contact.copied");
      window.setTimeout(() => {
        copyBtn.textContent = t("contact.copy");
      }, 1200);
    } catch (error) {
      copyBtn.textContent = t("contact.copy");
    }
  });
}

window.contactConfig = contactConfig;
window.renderContact = renderContact;
