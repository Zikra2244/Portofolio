document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-in-out'
    });

    // Initialize Typed.js
    if (document.querySelector('#typed')) {
        new Typed('#typed', {
            strings: ["Public Relations Specialist.", "Tech Enthusiast.", "Creative Leader.", "Problem Solver."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true,
            cursorChar: '|',
            shuffle: false
        });
    }

    // Navbar Scroll Effect
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        // Set initial state
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                mainNav.classList.add('scrolled-dark');
            }
        }

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    mainNav.classList.add('scrolled-dark');
                }
            } else {
                mainNav.classList.remove('scrolled');
                mainNav.classList.remove('scrolled-dark');
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Update URL hash if needed
            if (window.location.hash) {
                history.pushState("", document.title, window.location.pathname);
            }
        });
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = 'bi-sun-fill';
    const moonIcon = 'bi-moon-stars-fill';
    
    // Check for saved theme or system preference
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Set initial theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button icon
        if (theme === 'dark') {
            themeToggle.querySelector('i').classList.remove(moonIcon);
            themeToggle.querySelector('i').classList.add(sunIcon);
        } else {
            themeToggle.querySelector('i').classList.remove(sunIcon);
            themeToggle.querySelector('i').classList.add(moonIcon);
        }
        
        // Update navbar if scrolled
        if (window.scrollY > 50) {
            if (theme === 'dark') {
                mainNav.classList.add('scrolled-dark');
            } else {
                mainNav.classList.remove('scrolled-dark');
            }
        }
    };

    // Apply preferred theme on load
    setTheme(getPreferredTheme());

    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset considering navbar height
                const navbarHeight = document.querySelector('#mainNav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL hash
                history.pushState(null, null, targetId);
                
                // Focus the target element for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // Bootstrap's lg breakpoint
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Add animation delay to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.setAttribute('data-aos-delay', (index % 2) * 100);
    });

    // Form submission handling (example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
            // You can add AJAX form submission or other logic
        });
    }
});