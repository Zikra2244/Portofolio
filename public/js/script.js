document.addEventListener('DOMContentLoaded', () => {

    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({ 
        duration: 800, 
        once: true, 
        offset: 50 
    });

    // Inisialisasi Typed.js
    if (document.querySelector('#typed')) {
        new Typed('#typed', {
            strings: ["Tech Enthusiast.", "Public Relations Specialist.", "Creative Leader.", "Problem Solver."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true
        });
    }
    
    // ==========================================================
    // EFEK SCROLL PADA NAVBAR
    // ==========================================================
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    }

    // ==========================================================
    // FUNGSIONALITAS TOMBOL KEMBALI KE ATAS
    // ==========================================================
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ==========================================================
    // FUNGSIONALITAS DARK MODE TOGGLE
    // ==========================================================
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = 'bi-sun-fill';
    const moonIcon = 'bi-moon-stars-fill';
    
    // Cek tema yang tersimpan di localStorage atau preferensi sistem
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.querySelector('i').classList.remove(moonIcon);
            themeToggle.querySelector('i').classList.add(sunIcon);
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeToggle.querySelector('i').classList.remove(moonIcon);
            themeToggle.querySelector('i').classList.add(sunIcon);
        } else {
            themeToggle.querySelector('i').classList.remove(sunIcon);
            themeToggle.querySelector('i').classList.add(moonIcon);
        }
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

});