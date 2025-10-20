// Animación de fade-in
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
});

// Formulario seguro (simulación)
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mensaje enviado (simulación segura)');
});
