const topbar = document.getElementById("topbar");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const toTop = document.getElementById("toTop");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  topbar.classList.toggle("scrolled", y > 40);
  toTop.classList.toggle("show", y > 650);
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// เปิดได้ทีละหมวด เพื่อให้อ่านกฎง่ายขึ้น
document.querySelectorAll(".rule-card").forEach(card => {
  card.addEventListener("toggle", () => {
    if (!card.open) return;
    document.querySelectorAll(".rule-card").forEach(other => {
      if (other !== card) other.open = false;
    });
  });
});
