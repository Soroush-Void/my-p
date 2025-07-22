// You can add JavaScript interactions here
console.log("Welcome to my portfolio site!");
// Smooth Scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
