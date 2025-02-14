// ───────────────────────────────────────────
// 1. Auto-Scrolling Animation
// ───────────────────────────────────────────
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// ───────────────────────────────────────────
// 2. Typing Animation Effect
// ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Frontend Developer, Game Programmer, UI UX Designer, Storyteller, Active Volunteer",
    "Agent of Change.",
  ];
  const typingSpeed = 50;
  const delayBetweenRoles = 2000;
  const animatedRole = document.getElementById("animated-role");

  let roleIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      animatedRole.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenRoles);
    }
  }

  function erase() {
    if (charIndex > 0) {
      animatedRole.textContent = roles[roleIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, typingSpeed / 2);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();
});

// ───────────────────────────────────────────
// 3. Header Shadow Effect on Scroll
// ───────────────────────────────────────────
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ───────────────────────────────────────────
// 4. Header Scroll Behavior (Show/Hide & Color Change)
// ───────────────────────────────────────────
let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const headerButtons = document.querySelectorAll("header nav ul li a");
const nameElements = document.querySelectorAll(".name");
const menuBtn = document.querySelectorAll(".menu-btn");
const hoverSpan = document.querySelectorAll(".hover-text span");

window.addEventListener("scroll", () => {
  if (window.scrollY < (0.2 * window.innerHeight)) {
    header.style.top = "0";
    header.classList.add("header-top");
    headerButtons.forEach(button => button.classList.add("headerbtns-top"));
    nameElements.forEach(button => button.classList.add("name-top"));
    menuBtn.forEach(button => button.classList.add("menu-btn-top"));
    hoverSpan.forEach(button => button.classList.add("hover-text-top"));

    header.classList.remove("header-bottom");
    headerButtons.forEach(button => button.classList.remove("headerbtns-bottom"));
    nameElements.forEach(button => button.classList.remove("name-bottom"));
    menuBtn.forEach(button => button.classList.remove("menu-btn-bottom"));
    hoverSpan.forEach(button => button.classList.remove("hover-text-bottom"));
  } 
  else if (window.scrollY > lastScrollY && window.scrollY > (0.9  * window.innerHeight)) {
    header.style.top = "-100px";
  } 
  else {
    header.style.top = "0";
  }

  if (window.scrollY > (0.1 * window.innerHeight)) {
    header.classList.remove("header-top");
    headerButtons.forEach(button => button.classList.remove("headerbtns-top"));
    nameElements.forEach(button => button.classList.remove("name-top"));
    menuBtn.forEach(button => button.classList.remove("menu-btn-top"));
    hoverSpan.forEach(button => button.classList.remove("hover-text-top"));

    header.classList.add("header-bottom");
    headerButtons.forEach(button => button.classList.add("headerbtns-bottom"));
    nameElements.forEach(button => button.classList.add("name-bottom"));
    menuBtn.forEach(button => button.classList.add("menu-btn-bottom"));
    hoverSpan.forEach(button => button.classList.add("hover-text-bottom"));
  }

  lastScrollY = window.scrollY;
});

// ───────────────────────────────────────────
// 5. Sidebar Menu Functionality
// ───────────────────────────────────────────
const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Open sidebar when menu button is clicked
menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Close sidebar when close button or overlay is clicked
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
