document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    // Determine the current language from the <html> element
    const language = document.documentElement.lang;
    const navbatToLoad = (language === 'en') ? "/src/modules/navbar.html" : "/src/modules/navbar_es.html";

    function loadNavbar() {
        fetch(navbatToLoad)
            .then(response => response.text())
            .then(html => {
                navbarPlaceholder.innerHTML = html;
                // Activate navbar functionality
                activateNavbar();
            })
            .catch(error => {
                console.error("Error loading navbar:", error);
            });
    }

    function activateNavbar() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        // Close navbar when link is clicked
        const navLink = document.querySelectorAll(".nav-link");
        navLink.forEach((n) => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

        // Event listener for theme switch
        function switchTheme(e) {
            const theme = e.target.checked ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }

        toggleSwitch.addEventListener("change", switchTheme);

        // Save user preference on load
        const currentTheme = localStorage.getItem("theme") || null;

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            toggleSwitch.checked = currentTheme === "dark";
        }

        // Language switcher button
        const langSwitcherButton = document.getElementById("langSwitcher");
        const langIcon = document.getElementById("langIcon");

        const initialLang = localStorage.getItem("lang") || "en";
        updateLangIcon(initialLang);

        langSwitcherButton.addEventListener("click", () => {
            const newLang = initialLang === "en" ? "es" : "en";
            // Get the current page URL
            let currentPage = window.location.pathname;
            // Remove any existing language prefix from the current page URL
            currentPage = currentPage.replace(/^\/(en|es)\//, "/");
            // Get the base URL based on the environment
            const baseURL = window.location.hostname === "127.0.0.1" ? "http://127.0.0.1:5501" : "https://magical-engineering.com";
            // Construct the new URL by adding the language prefix for Spanish version
            const newURL = `${baseURL}${newLang === "es" ? `/${newLang}` : ""}${currentPage}`;
            // Redirect to the new URL
            window.location.href = newURL;
            localStorage.setItem("lang", newLang);
            updateLangIcon(newLang);
            loadTranslations(newLang);
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

    // Call the loadFooter function after loading the navbar
    loadNavbar();
    loadFooter();
});