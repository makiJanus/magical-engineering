document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    const language = document.documentElement.lang;
    const navbatToLoad = (language === 'en') ? "/src/modules/navbar.html" : "/src/modules/navbar_es.html";

    // ── Always dark theme ──
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");

    function loadNavbar() {
        fetch(navbatToLoad)
            .then(response => response.text())
            .then(html => {
                navbarPlaceholder.innerHTML = html;
                activateNavbar();
            })
            .catch(error => {
                console.error("Error loading navbar:", error);
            });
    }

    function activateNavbar() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        const navLink = document.querySelectorAll(".nav-link");
        navLink.forEach((n) => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

        // ── Language switcher ──
        const langSwitcherButton = document.getElementById("langSwitcher");
        const langIcon = document.getElementById("langIcon");

        // Read current lang once for the icon, but NEVER use it inside the click handler
        const initialLang = localStorage.getItem("lang") || document.documentElement.lang || "es";
        updateLangIcon(initialLang);

        langSwitcherButton.addEventListener("click", () => {
            // Always read fresh — this is what fixes the first-click bug
            const currentLang = localStorage.getItem("lang") || document.documentElement.lang || "es";
            const newLang = currentLang === "en" ? "es" : "en";

            let currentPage = window.location.pathname;
            currentPage = currentPage.replace(/^\/(en|es)\//, "/");

            const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
            const baseURL = isLocal
                ? `${window.location.protocol}//${window.location.host}`
                : "https://magical-engineering.com";

            const newURL = `${baseURL}${newLang === "es" ? `/${newLang}` : ""}${currentPage}`;

            localStorage.setItem("lang", newLang);
            updateLangIcon(newLang);
            window.location.href = newURL;
        });

        function updateLangIcon(lang) {
            if (lang === "en") {
                langIcon.src = "/src/assets/es.png";
            } else if (lang === "es") {
                langIcon.src = "/src/assets/en.png";
            }
        }
    }

    const footerPlaceholder = document.getElementById("footer-placeholder");

    function loadFooter() {
        fetch("/src/modules/footer.html")
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error("Error loading footer:", error);
            });
    }

    loadNavbar();
    loadFooter();
});
