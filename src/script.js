window.addEventListener("load", async () => {
    // Initialize AOS with optimal settings
    AOS.init({
        duration: 800,  // slightly faster base duration
        offset: 100,    // start animations a bit earlier
        once: false,    // animations occur every time element scrolls into view
        mirror: true,   // whether elements should animate out while scrolling past them
        easing: 'ease-out-cubic',  // smoother easing function
        anchorPlacement: 'top-bottom'  // when the element hits the bottom of the viewport
    });

    await tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 69,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff37'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.7,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff37',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.7,
                direction: 'bottom',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

// Intersection Observer for scroll animations
window.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe main container
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
        observer.observe(mainContainer);
    }

    // Observe all sections and add section index for staggered animation
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.setProperty('--section-index', index);
        observer.observe(section);
    });
});