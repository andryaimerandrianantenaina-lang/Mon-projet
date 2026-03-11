document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const topBtn = document.getElementById("topBtn");
    const skillContainers = document.querySelectorAll(".skill-container");
    
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
        
        if (topBtn) {
            topBtn.style.display = (window.scrollY > 200) ? "block" : "none";
        }
    });
    
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.progress-bar-fill');
                const percentText = entry.target.querySelector('.percentage');
                
                if (bar) {
                    const widthValue = bar.getAttribute('data-width');
                    bar.style.width = widthValue; // Déclenche l'animation CSS
                    
                    if (percentText) {
                        percentText.textContent = widthValue;
                    }
                }
                obs.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    skillContainers.forEach(el => observer.observe(el));
});

