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
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn").addEventListener("click", function(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", document.querySelector("#nom").value.trim());
        formData.append("email", document.querySelector("#email").value.trim());
        formData.append("message", document.querySelector("#text").value.trim());

        console.log(formData)
    });
});
