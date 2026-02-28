document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const themeToggle = document.getElementById('theme-toggle');
    const currentYearSpan = document.getElementById('current-year');
    const rootPath = document.documentElement;
    const body = document.body;

    // === Update Year ===
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // === Theme Management (Light / Dark) ===
    const THEME_KEY = 'akash-portfolio-theme';

    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    const getSavedTheme = () => {
        return localStorage.getItem(THEME_KEY);
    };

    const setTheme = (theme) => {
        if (theme === 'light') {
            rootPath.setAttribute('data-theme', 'light');
            themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
        } else {
            rootPath.removeAttribute('data-theme');
            themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
        }
        localStorage.setItem(THEME_KEY, theme);
    };

    // Initialize Theme
    const savedTheme = getSavedTheme();
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(getSystemTheme());
    }

    // Toggle click event
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = rootPath.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // System theme change listener
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!getSavedTheme()) {
            setTheme(e.matches ? 'light' : 'dark');
        }
    });

    // === Intersection Observer for Scroll Animations ===
    const setupObserver = () => {
        const slideUpElements = document.querySelectorAll('.slide-up');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        slideUpElements.forEach(el => observer.observe(el));
    };

    setupObserver();

    // === Mobile Menu Functionality ===
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const closeMenu = document.getElementById('close-menu');

    const toggleMenu = (isOpen) => {
        if (isOpen) {
            hamburger.classList.add('open');
            mobileMenu.classList.add('open');
            body.style.overflow = 'hidden';
        } else {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
        }
    };

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isCurrentlyOpen = mobileMenu.classList.contains('open');
            toggleMenu(!isCurrentlyOpen);
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                toggleMenu(false);
            });
        }

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });
    }

    // === Smooth Scrolling for Nav Links (Optional enhancement over native CSS) ===
    // We already use scroll-behavior: smooth in CSS, which is preferred for performance,
    // but JS can help with edge cases when clicking anchors on the same page.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 80; // approximate height of header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
