document.addEventListener("DOMContentLoaded", () => {
    // 1. Sélection des éléments
    const sections = document.querySelectorAll(".section");
    const topBtn = document.getElementById("topBtn");
    const skillContainers = document.querySelectorAll(".skill-container");

    // 2. Gestion du bouton "Retour en haut" et animations au scroll
    window.addEventListener("scroll", () => {
        // Apparition des sections
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });

        // Visibilité du bouton top
        if (topBtn) {
            topBtn.style.display = (window.scrollY > 200) ? "block" : "none";
        }
    });

    // 3. Action du clic sur le bouton
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 4. Animation des barres de progression
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.progress-bar-fill');
                if (bar) {
                    bar.style.width = bar.getAttribute('data-width');
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillContainers.forEach(el => observer.observe(el));
});

