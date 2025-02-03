

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // Add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Frontend Developer, Game Programmer, UI UX Designer, Storyteller, Active Volunteer",
    "Agent of Change.",
  ]; // List of roles

  const typingSpeed = 50; // Speed of typing (ms)
  const delayBetweenRoles = 2000; // Delay before switching roles (ms)

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
      roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
      setTimeout(type, typingSpeed);
    }
  }

  type(); // Start the typing animation
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const headerButtons = document.querySelectorAll("header nav ul li a"); // Target all <a> elements
const nameElements = document.querySelectorAll(".name");
const menuBtn = document.querySelectorAll(".menu-btn");
const hoverSpan = document.querySelectorAll(".hover-text span");


window.addEventListener("scroll", () => {
  if (window.scrollY < (0.2 * window.innerHeight)) {
    // If at the top of the page, show the header fully and change color
    header.style.top = "0";
    // Add top classes
    header.classList.add("header-top");
    headerButtons.forEach(button => {
      button.classList.add("headerbtns-top");
    });
    nameElements.forEach(button => {
      button.classList.add("name-top");
    });
    menuBtn.forEach(button => {
      button.classList.add("menu-btn-top");
    });
    hoverSpan.forEach(button => {
      button.classList.add("hover-text-top");
    });

    // Remove bottom classes
    header.classList.remove("header-bottom");
    headerButtons.forEach(button => {
      button.classList.remove("headerbtns-bottom");
    });
    nameElements.forEach(button => {
      button.classList.remove("name-bottom");
    });
    menuBtn.forEach(button => {
      button.classList.remove("menu-btn-bottom");
    });
    hoverSpan.forEach(button => {
      button.classList.remove("hover-text-bottom");
    });

    //header.style.background = "transparent"; // Darker background when scrolling
    //headerButtons.forEach(button => button.style.color = "snow"); // Apply to all buttons
    //nameElements.forEach(letter => letter.style.color = "snow");
    //menuBtn.forEach(letter => letter.style.color = "snow");
  } else if (window.scrollY > lastScrollY && window.scrollY > (1.2 * window.innerHeight)) {
    // Scrolling down → hide the header
    header.style.top = "-100px"; // Adjust this value based on your header height
  } else {
    // Scrolling up → show the header
    header.style.top = "0";
  }

  // Change the header color when scrolling
  if (window.scrollY > (0.1 * window.innerHeight)) {
    // Remove top classes
    header.classList.remove("header-top");
    headerButtons.forEach(button => {
      button.classList.remove("headerbtns-top");
    });
    nameElements.forEach(button => {
      button.classList.remove("name-top");
    });
    menuBtn.forEach(button => {
      button.classList.remove("menu-btn-top");
    });
    hoverSpan.forEach(button => {
      button.classList.remove("hover-text-top");
    });

    // Add bottom classes
    header.classList.add("header-bottom");
    headerButtons.forEach(button => {
      button.classList.add("headerbtns-bottom");
    });
    nameElements.forEach(button => {
      button.classList.add("name-bottom");
    });
    menuBtn.forEach(button => {
      button.classList.add("menu-btn-bottom");
    });
    hoverSpan.forEach(button => {
      button.classList.add("hover-text-bottom");
    });
   
    //headerButtons.forEach(button => button.style.color = "#333"); // Apply to all buttons
    //nameElements.forEach(letter => letter.style.color = "#333");
    //menuBtn.forEach(letter => letter.style.color = "#333");
    //header.style.background = "linear-gradient(45deg, yellow, #fbc02d, #ffd700)";
  }

  lastScrollY = window.scrollY;
});


// Sidebar functionality
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
