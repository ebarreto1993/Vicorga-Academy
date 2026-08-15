document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Scroll en el Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Animaciones al hacer scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento se animará cuando el 15% sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejamos de observar el elemento una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

// 3. Toggle Menú Móvil (Lógica completa)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

// 4. Lógica Completa, Interactiva y Automática del Carrusel
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const courseIcons = document.querySelectorAll('.course-icon');
    const cards = document.querySelectorAll('.course-card');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    if (track) {
        // Calcular distancia de scroll por tarjeta
        const getScrollAmount = () => {
            const card = track.querySelector('.course-card');
            return card ? card.offsetWidth + 20 : 250;
        };

        // 4.1 Generar y activar los puntitos (dots) dinámicamente
        if (indicatorsContainer) {
            indicatorsContainer.innerHTML = ''; // Limpiamos los fijos del HTML
            cards.forEach((card, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active'); // El primero inicia activo
                
                // Hacer que los puntos sean clickeables
                dot.addEventListener('click', () => {
                    const targetPosition = cards[index].offsetLeft - track.offsetLeft;
                    track.scrollTo({ left: targetPosition, behavior: 'smooth' });
                });
                
                indicatorsContainer.appendChild(dot);
            });
        }
        
        const dots = document.querySelectorAll('.dot');

        // 4.2 Botones de Flecha (Anterior y Siguiente)
        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
            });
        }

        // 4.3 Clic en los Íconos Superiores (Sincronización)
        courseIcons.forEach((icon, index) => {
            icon.addEventListener('click', () => {
                if (cards[index]) {
                    const targetPosition = cards[index].offsetLeft - track.offsetLeft;
                    track.scrollTo({ left: targetPosition, behavior: 'smooth' });
                }
            });
        });

        // 4.4 Movimiento Automático (Auto-play)
        const startAutoPlay = () => {
            return setInterval(() => {
                const maxScrollLeft = track.scrollWidth - track.clientWidth;
                if (track.scrollLeft >= maxScrollLeft - 15) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
                }
            }, 3500);
        };

        let autoPlayInterval = startAutoPlay();

        // Pausar al pasar el mouse
        track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        track.addEventListener('mouseleave', () => {
            autoPlayInterval = startAutoPlay();
        });

        // 4.5 Sincronizar el ícono y el punto activo al deslizar
        track.addEventListener('scroll', () => {
            const scrollPos = track.scrollLeft;
            cards.forEach((card, index) => {
                const cardLeft = card.offsetLeft - track.offsetLeft;
                // Si la tarjeta está cerca del borde izquierdo del contenedor visible
                if (Math.abs(scrollPos - cardLeft) < card.offsetWidth / 2) {
                    
                    // Actualizar íconos
                    courseIcons.forEach(i => i.classList.remove('active'));
                    if (courseIcons[index]) courseIcons[index].classList.add('active');
                    
                    // Actualizar puntitos
                    dots.forEach(d => d.classList.remove('active'));
                    if (dots[index]) dots[index].classList.add('active');
                }
            });
        });
    }

    // 5. Animación para la barra de estadísticas
    const statsSection = document.querySelector('.stats-bar');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    // 6. Carrusel de Testimonios
    const testiTrack = document.getElementById('testimonial-track');
    const testiDotsContainer = document.getElementById('testi-indicators');
    const testiCards = document.querySelectorAll('.testimonial-card');

    if (testiTrack && testiCards.length > 0) {
        
        // 6.1 Generar puntitos dinámicamente
        if (testiDotsContainer) {
            testiDotsContainer.innerHTML = '';
            testiCards.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('testi-dot');
                if (index === 0) dot.classList.add('active');
                
                // Clic en el puntito para ir al testimonio exacto
                dot.addEventListener('click', () => {
                    const targetPosition = testiCards[index].offsetLeft - testiTrack.offsetLeft;
                    testiTrack.scrollTo({ left: targetPosition, behavior: 'smooth' });
                });
                
                testiDotsContainer.appendChild(dot);
            });
        }

        const testiDots = document.querySelectorAll('.testi-dot');

        // 6.2 Movimiento automático
        const startTestiAutoPlay = () => {
            return setInterval(() => {
                const maxScrollLeft = testiTrack.scrollWidth - testiTrack.clientWidth;
                // Si llegamos al final, volver al principio
                if (testiTrack.scrollLeft >= maxScrollLeft - 10) {
                    testiTrack.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Moverse el ancho exacto de un testimonio
                    testiTrack.scrollBy({ left: testiTrack.clientWidth, behavior: 'smooth' });
                }
            }, 4000); // Cambia cada 4 segundos
        };

        let testiAutoPlayInterval = startTestiAutoPlay();

        // 6.3 Pausar si el usuario pone el mouse encima para leer
        testiTrack.addEventListener('mouseenter', () => clearInterval(testiAutoPlayInterval));
        testiTrack.addEventListener('mouseleave', () => {
            testiAutoPlayInterval = startTestiAutoPlay();
        });

        // 6.4 Sincronizar el puntito dorado al deslizar
        testiTrack.addEventListener('scroll', () => {
            const scrollPos = testiTrack.scrollLeft;
            testiCards.forEach((card, index) => {
                const cardLeft = card.offsetLeft - testiTrack.offsetLeft;
                if (Math.abs(scrollPos - cardLeft) < card.offsetWidth / 2) {
                    testiDots.forEach(d => d.classList.remove('active'));
                    if (testiDots[index]) testiDots[index].classList.add('active');
                }
            });
        });
    }
});