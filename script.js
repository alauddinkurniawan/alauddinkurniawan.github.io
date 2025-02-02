const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
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


document.addEventListener('DOMContentLoaded', () => {

    
    const roles = [
        'Frontend Developer, Game Programmer, UI UX Designer, Storyteller, Active Volunteer',
        'Agent of Change.',
    ]; // List of roles

    
    const typingSpeed = 50; // Speed of typing (ms)
    const delayBetweenRoles = 2000; // Delay before switching roles (ms)

    const animatedRole = document.getElementById('animated-role');
    
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

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        // If at the top of the page, show the header fully
        header.style.top = "0";
    } else if (window.scrollY > lastScrollY) {
        // Scrolling down → hide the header
        header.style.top = "-100px"; // Adjust this value based on your header height
    } else {
        // Scrolling up → show the header
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});

//sidebar

const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Open sidebar when menu button is clicked
menuButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Close sidebar when close button or overlay is clicked
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});


