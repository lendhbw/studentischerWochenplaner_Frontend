document.addEventListener("DOMContentLoaded", () => {
    const toggleDesktop = document.getElementById("darkmode-toggle");
    const toggleMobile = document.getElementById("darkmode-toggle-mobile");
    const burgerBtn = document.getElementById("burger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // ============================================ Darkmode Funktionen ============================================ 
    function toggleDarkmode() {
        document.body.classList.toggle("dark");
        // Status speichern
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }

    // Theme beim Laden anwenden
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // Desktop-Darkmode-Button
    if (toggleDesktop) {
        toggleDesktop.addEventListener("click", (e) => {
            e.preventDefault();
            toggleDarkmode();
        });
    }

    // Mobile-Darkmode-Button
    if (toggleMobile) {
        toggleMobile.addEventListener("click", (e) => {
            e.preventDefault();
            toggleDarkmode();
            mobileMenu.style.display = "none";
        });
    }
    // ============================================ Mobile Nav ============================================ 
    // Burger-Menü öffnen/schließen
    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            mobileMenu.style.display =
                mobileMenu.style.display === "flex" ? "none" : "flex";
        });
    }
});