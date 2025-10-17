// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Bouton "Retour en haut"
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Validation du formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Veuillez entrer un email valide.');
            return;
        }

        alert('Message envoyé avec succès !');
        contactForm.reset();
    });
}
