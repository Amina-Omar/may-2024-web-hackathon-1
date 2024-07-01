// script.js

// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Hide the titles after clicking a link
        document.getElementById('titles').classList.add('hidden');
    });
});

// Toggle titles section
document.getElementById('homeButton').addEventListener('click', function () {
    const titles = document.getElementById('titles');
    titles.classList.toggle('hidden');
});
