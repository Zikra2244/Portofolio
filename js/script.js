// ================== LANGUAGE SWITCHER ==================
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const languageSelector = document.querySelector(".language-selector");
  const langOptions = document.querySelectorAll(".language-option");
  const currentLangSpan = document.getElementById("currentLang");

  // Set initial active state berdasarkan localStorage
  const savedLang = localStorage.getItem("language") || "en";
  currentLangSpan.textContent = savedLang === "en" ? "EN" : "ID";

  // Set active class on the correct option
  langOptions.forEach((option) => {
    if (option.getAttribute("data-lang") === savedLang) {
      option.classList.add("active");
    }
  });

  // Toggle dropdown
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      languageSelector.classList.toggle("active");
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (languageSelector && !languageSelector.contains(e.target)) {
      languageSelector.classList.remove("active");
    }
  });

  // Handle language selection
  langOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.getAttribute("data-lang");

      // Update active class
      langOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Update button text
      currentLangSpan.textContent = lang === "en" ? "EN" : "ID";

      // Load translations (panggil fungsi dari translations.js)
      if (typeof setLanguage === "function") {
        setLanguage(lang);
      } else if (typeof loadTranslations === "function") {
        loadTranslations(lang);
      }

      // Close dropdown
      languageSelector.classList.remove("active");
    });
  });
});

// ================== AOS INITIALIZATION ==================
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: "ease-in-out",
});

// ================== TYPED.JS INITIALIZATION ==================
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("language") || "en";
  const typedWords = translations[currentLang]?.typing_words || [
    "Technology Enthusiast.",
    "IT Infrastructure Enthusiast.",
    "Frontend Developer.",
    "DevOps Enthusiast.",
    "Blockchain Learner.",
  ];

  if (document.querySelector("#typed")) {
    window.typed = new Typed("#typed", {
      strings: typedWords,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });
  }
});

// ================== THEME TOGGLE ==================
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector("i");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (themeIcon) {
    themeIcon.className =
      theme === "dark" ? "bi bi-moon-stars-fill" : "bi bi-brightness-high-fill";
  }

  // Update navbar class for scrolled state
  const mainNav = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    mainNav.classList.add("scrolled");
    if (theme === "dark") {
      mainNav.classList.add("scrolled-dark");
    } else {
      mainNav.classList.remove("scrolled-dark");
    }
  }
}

// Initialize theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Add rotation animation
  themeToggle.style.transform = "rotate(180deg)";
  setTimeout(() => {
    themeToggle.style.transform = "rotate(0deg)";
  }, 300);

  setTheme(newTheme);
});

// ================== NAVBAR SCROLL EFFECT ==================
const navbar = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      navbar.classList.add("scrolled-dark");
    }
  } else {
    navbar.classList.remove("scrolled", "scrolled-dark");
  }
});

// ================== BACK TO TOP BUTTON ==================
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

backToTop?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Add ripple effect
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  backToTop.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
});

// ================== SMOOTH SCROLLING FOR NAVIGATION ==================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = navbar?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update URL without page jump
      history.pushState(null, null, targetId);

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse?.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }

      // Add highlight effect
      targetElement.style.transition = "background-color 0.5s ease";
      targetElement.style.backgroundColor = "rgba(37, 99, 235, 0.1)";
      setTimeout(() => {
        targetElement.style.backgroundColor = "";
      }, 1000);
    }
  });
});

// ================== MOBILE MENU AUTO CLOSE ==================
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (
      window.innerWidth <= 992 &&
      navbarCollapse?.classList.contains("show")
    ) {
      navbarCollapse.classList.remove("show");
    }
  });
});

// ================== ACTIVE NAVIGATION HIGHLIGHT ==================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset + (navbar?.offsetHeight || 0) + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// ================== STATS COUNTER ANIMATION ==================
const statsSection = document.querySelector("#about");
if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = document.querySelectorAll(".stat-number");
          statNumbers.forEach((stat) => {
            const targetText = stat.textContent;
            const target = parseInt(targetText) || 5;
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                stat.textContent = target + "+";
                clearInterval(timer);
              } else {
                stat.textContent = Math.floor(current) + "+";
              }
            }, 20);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  statsObserver.observe(statsSection);
}

// ================== SKILLS ANIMATION ==================
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";

        const items = entry.target.querySelectorAll("li");
        items.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, index * 100);
        });
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".skill-list").forEach((list) => {
  list.style.opacity = "0";
  list.style.transform = "translateX(-20px)";
  list.style.transition = "all 0.5s ease";

  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-10px)";
    item.style.transition = "all 0.3s ease";
  });

  skillObserver.observe(list);
});

// ================== PROJECT CARDS HOVER EFFECT ==================
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const badge = card.querySelector(".project-badge");
    if (badge) {
      badge.style.transform = "scale(1.05)";
      badge.style.transition = "transform 0.3s ease";
    }
  });

  card.addEventListener("mouseleave", () => {
    const badge = card.querySelector(".project-badge");
    if (badge) {
      badge.style.transform = "scale(1)";
    }
  });
});

// ================== PARALLAX EFFECT ==================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundPositionY = scrolled * 0.5 + "px";
  }
});

// ================== RIPPLE EFFECT STYLES ==================
const style = document.createElement("style");
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.5s ease-out;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .back-to-top {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
