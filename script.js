const CONTACT = {
  lineId: "scpxxx",
  lineUrl: "https://line.me/ti/p/I4pngm_YpX",
  email: "scpxxx@gmail.com"
};

const BRAND = {
  full: "Eric｜製造流程與資訊工具",
  short: "Eric｜資訊工具"
};

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const toast = document.querySelector(".toast");
const backToTop = document.querySelector(".back-to-top");
const heroLinePanel = document.querySelector("#heroLinePanel");

let toastTimer;

document.querySelectorAll("[data-brand-full]").forEach((item) => {
  item.textContent = BRAND.full;
});

document.querySelectorAll("[data-brand-short]").forEach((item) => {
  item.textContent = BRAND.short;
});

document.querySelectorAll("[data-line-id]").forEach((item) => {
  item.textContent = CONTACT.lineId;
});

document.querySelectorAll("[data-email]").forEach((item) => {
  item.textContent = CONTACT.email;
});

document.querySelectorAll("[data-line-link]").forEach((link) => {
  link.setAttribute("href", CONTACT.lineUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.setAttribute("href", `mailto:${CONTACT.email}`);
});

function closeMenu() {
  menuToggle?.classList.remove("is-open");
  navMenu?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function showToast(message = "已複製") {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(successMessage);
  }
}

function copyLineId() {
  copyText(CONTACT.lineId, "已複製 LINE ID");
}

function copyEmail() {
  copyText(CONTACT.email, "已複製 Email");
}

function openLineContact() {
  if (heroLinePanel) {
    heroLinePanel.hidden = false;
  }
  window.open(CONTACT.lineUrl, "_blank", "noopener,noreferrer");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = !navMenu.classList.contains("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  navMenu.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll("[data-show-line]").forEach((button) => {
  button.addEventListener("click", () => {
    openLineContact();
  });
});

document.querySelectorAll("[data-copy-line]").forEach((button) => {
  button.addEventListener("click", copyLineId);
});

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", copyEmail);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((item) => {
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-45% 0px -48% 0px" });

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 500);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest(".navbar")) closeMenu();
});
