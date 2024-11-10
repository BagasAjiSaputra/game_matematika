export function initNavbar() {
  document.addEventListener('DOMContentLoaded', () => {
    const hamburg = document.getElementById('hamburg');
    const nav = document.getElementById('nav');

    hamburg.addEventListener('click', function() {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        setTimeout(() => {
          nav.style.display = 'none'; 
        }, 300); 
      } else {
        nav.style.display = 'flex'; 
        setTimeout(() => {
          nav.classList.add('active'); 
        }, 10); 
      }
    });
  });
}
