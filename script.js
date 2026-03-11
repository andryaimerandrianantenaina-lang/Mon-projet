
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

    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector('.progress-bar-fill');
            bar.style.width = bar.getAttribute('data-width');
            obs.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 });

skillContainers.forEach(el => observer.observe(el));
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
            if (window.scrollY > 200) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
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
                bar.style.width = bar.getAttribute('data-width');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillContainers.forEach(el => observer.observe(el));
});
