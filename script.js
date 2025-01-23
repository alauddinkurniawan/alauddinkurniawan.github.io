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
        'Game Programmer',
        'Frontend Developer',
        'UI/UX Designer',
        'Storyteller',
        'Changemaker',
    ]; // List of roles

    
    const typingSpeed = 100; // Speed of typing (ms)
    const delayBetweenRoles = 1500; // Delay before switching roles (ms)

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



