// Burger menu

document.addEventListener('DOMContentLoaded', function() {
    const toggleElement = document.querySelector('.main__toggle');
    const bodyElement = document.querySelector('body');

    toggleElement.addEventListener('click', function() {
        toggleElement.classList.toggle('active');
        bodyElement.classList.toggle('menu-open');
    });
});

// Scroll

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});