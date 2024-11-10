// scroll.js
export function initScrollHighlight() {
    document.addEventListener("DOMContentLoaded", () => {
      const links = document.querySelectorAll('.nav a');
  
      links.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default anchor click behavior
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          // Scroll with a smooth behavior
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for margin (5rem = 80px)
            behavior: 'smooth'
          });
        });
      });
  
      window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100; // Adjust offset if needed
  
        links.forEach(link => {
          const section = document.querySelector(link.getAttribute('href'));
          if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
  }
  