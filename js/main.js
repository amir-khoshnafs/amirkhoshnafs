/**
 * Main JavaScript file for the portfolio website.
 * Handles all dynamic functionality including animations,
 * event listeners, and third-party library initializations.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Feather Icons Initialization ---
    // Replaces all `data-feather` attributes with SVG icons.
    try {
        feather.replace();
    } catch (e) {
        console.error("Feather icons failed to initialize.", e);
    }

    // --- Custom Cursor ---
    // Controls the custom dot and outline cursor effect.
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });
    }

    // --- Mobile Menu Toggle ---
    // Handles opening and closing the mobile navigation menu.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Typed.js Hero Section Effect ---
    // Initializes the typing animation in the hero section.
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Machine Learning Engineer',
                'Computer Vision',
                'Deep Learning',
                'Statistics'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    } else {
        console.error("Typed.js is not loaded.");
    }


    // --- Header Shadow & Back to Top Button Visibility ---
    // Adds a shadow to the header and shows the 'back to top'
    // button when the user scrolls down.
    const header = document.getElementById('header');
    const backToTopButton = document.getElementById('back-to-top');
    if (header && backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
                backToTopButton.classList.add('visible');
            } else {
                header.classList.remove('shadow-lg');
                backToTopButton.classList.remove('visible');
            }
        });
    }

    // --- Scroll-based Animations ---
    // Fades in sections as they are scrolled into view.
    try {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.scroll-reveal').forEach(el => scrollObserver.observe(el));
    } catch(e) {
        console.error("Intersection Observer for scroll animations failed.", e);
    }


    // --- Active Nav Link Highlighting ---
    // Highlights the current navigation link based on scroll position.
    try {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('#main-nav a');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: "-30% 0px -70% 0px" });
        sections.forEach(section => navObserver.observe(section));
    } catch(e) {
        console.error("Intersection Observer for nav link highlighting failed.", e);
    }


    // --- Close mobile menu on nav link click ---
    // Ensures the mobile menu closes after a link is clicked.
    if (mobileMenu) {
        document.querySelectorAll('#mobile-menu a').forEach(anchor => {
            anchor.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    // --- Three.js Particle Background ---
    // Initializes and animates the 3D particle background in the hero section.
    if (typeof THREE !== 'undefined') {
        let scene, camera, renderer, particles;
        const canvas = document.getElementById('bg-canvas');

        function initThreeJS() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const particleCount = 5000;
            const vertices = [];
            for (let i = 0; i < particleCount; i++) {
                const x = (Math.random() - 0.5) * 2000;
                const y = (Math.random() - 0.5) * 2000;
                const z = (Math.random() - 0.5) * 2000;
                vertices.push(x, y, z);
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            const material = new THREE.PointsMaterial({
                color: 0x58a6ff,
                size: 1.5,
                transparent: true,
                opacity: 0.7
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            camera.position.z = 5;
        }

        let mouseX = 0,
            mouseY = 0;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) / 100;
            mouseY = (event.clientY - window.innerHeight / 2) / 100;
        });

        function animate() {
            requestAnimationFrame(animate);
            if (particles) {
                particles.rotation.x += 0.0001;
                particles.rotation.y += 0.0002;

                // Camera follows mouse for a subtle parallax effect
                camera.position.x += (mouseX - camera.position.x) * 0.01;
                camera.position.y += (-mouseY - camera.position.y) * 0.01;
                camera.lookAt(scene.position);
            }
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);

        initThreeJS();
        animate();

    } else {
        console.error("Three.js is not loaded.");
    }
});
