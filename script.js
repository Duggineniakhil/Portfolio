/* ═══════════════════════════════════════════════════════════
   APOLLO-INSPIRED PORTFOLIO — SCRIPT.JS
   Star field, scroll reveals, smooth scroll, scroll-to-top
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── Star Field Background ──────────────────────────────
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const NUM_STARS = 200;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < NUM_STARS; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.6 + 0.1,
                speed: Math.random() * 0.3 + 0.05,
                drift: (Math.random() - 0.5) * 0.15,
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();

            // Move stars
            star.y += star.speed;
            star.x += star.drift;

            // Twinkle
            star.alpha += (Math.random() - 0.5) * 0.02;
            star.alpha = Math.max(0.05, Math.min(0.7, star.alpha));

            // Wrap around
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
        });
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    createStars();
    drawStars();
    window.addEventListener('resize', () => { resizeCanvas(); createStars(); });


    // ─── Scroll Reveal Animation ────────────────────────────
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ─── Smooth Scrolling for Anchor Links ──────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // ─── Scroll to Top Button ───────────────────────────────
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    // ─── Navbar Scroll Effect ───────────────────────────────
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.06)';
        }
        lastScrollY = currentScrollY;
    });

    // ─── Stagger project cards ──────────────────────────────
    const projectCards = document.querySelectorAll('.project-card.reveal');
    projectCards.forEach((card, i) => {
        card.dataset.delay = (i * 150).toString();
    });

    const resumeCards = document.querySelectorAll('.resume-card.reveal');
    resumeCards.forEach((card, i) => {
        card.dataset.delay = (i * 150).toString();
    });

});
