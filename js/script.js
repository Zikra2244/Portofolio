document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    easing: "ease-in-out",
  });

  if (document.querySelector("#typed")) {
    new Typed("#typed", {
      strings: [
        "Technology Enthusiast.",
        "Fullstack Developer.",
        "DevOps Learner.",
        "Problem Solver.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      cursorChar: "|",
    });
  }

  const mainNav = document.querySelector("#mainNav");
  if (mainNav) {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        mainNav.classList.add("scrolled");
        if (document.documentElement.getAttribute("data-theme") === "dark") {
          mainNav.classList.add("scrolled-dark");
        }
      } else {
        mainNav.classList.remove("scrolled", "scrolled-dark");
      }
    };

    handleNavbarScroll();
    window.addEventListener("scroll", handleNavbarScroll);
  }

  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.classList.toggle("active", window.scrollY > 300);
    });

    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname);
      }
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = "bi-sun-fill";
  const moonIcon = "bi-moon-stars-fill";

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const icon = themeToggle.querySelector("i");
    if (theme === "dark") {
      icon.classList.replace(moonIcon, sunIcon);
      if (window.scrollY > 50) mainNav.classList.add("scrolled-dark");
    } else {
      icon.classList.replace(sunIcon, moonIcon);
      mainNav.classList.remove("scrolled-dark");
    }
  };

  setTheme(getPreferredTheme());

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "light" ? "dark" : "light");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = mainNav.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        history.pushState(null, null, targetId);
        targetElement.setAttribute("tabindex", "-1");
        targetElement.focus();
      }
    });
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (
        window.innerWidth <= 992 &&
        navbarCollapse.classList.contains("show")
      ) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  document.querySelectorAll(".timeline-item").forEach((item, index) => {
    item.setAttribute("data-aos-delay", (index % 2) * 100);
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted");
    });
  }
});
