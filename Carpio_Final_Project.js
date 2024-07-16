window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === '#' + current) {
            li.classList.add('active');
        }
    });
});
