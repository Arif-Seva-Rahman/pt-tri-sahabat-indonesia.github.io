// fadein-effect.js
document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll(".gallery figure");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    figures.forEach(fig => {
        observer.observe(fig);
    });
});