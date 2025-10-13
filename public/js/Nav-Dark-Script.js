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
    
    // ============================================ Login/Logoff ============================================
    // /public/js/Nav-Dark-Script.js
    (function () {
        function updateNavbarAuthState() {
            const logoutLink = document.getElementById("logoutLink");
            const loginLink = document.getElementById("loginLink");
            const registerLink = document.getElementById("registerLink");

            const token = localStorage.getItem("stuplantoken");
            const isLoggedIn = !!(token && token.trim() !== "" && token && token.trim() !== "OFF");

            if (logoutLink) logoutLink.style.display = isLoggedIn ? "inline-block" : "none";
            if (loginLink) loginLink.style.display = isLoggedIn ? "none" : "inline-block";
            if (registerLink) registerLink.style.display = isLoggedIn ? "none" : "inline-block";
        }

        // global verfügbar machen
        window.updateNavbarAuthState = updateNavbarAuthState;

        // Beim ersten Laden anwenden (egal ob DOM schon fertig ist)
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", updateNavbarAuthState);
        } else {
            updateNavbarAuthState();
        }

        // Optional: auf Login-/Logout-Events reagieren
        window.addEventListener("auth:changed", updateNavbarAuthState);
    })();



});