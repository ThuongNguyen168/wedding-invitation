// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load gallery images
const imageFiles = [
    'Image.jfif',
    'Image (1).jfif',
    'Image (2).jfif',
    'Image (3).jfif',
    'Image (4).jfif',
    'Image (5).jfif',
    'Image (6).jfif',
    'Image (7).jfif',
    'Image (8).jfif',
    'Image (9).jfif',
    'Image (10).jfif'
];

const galleryGrid = document.getElementById('galleryGrid');
let currentImageIndex = 0;

if (galleryGrid) {
    imageFiles.forEach((imageFile, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = `image/${imageFile}`;
        img.alt = `Wedding Photo ${index + 1}`;
        img.loading = 'lazy';
        
        // Error handling for image loading
        img.onerror = function() {
            console.warn(`Failed to load image: image/${imageFile}`);
            this.style.display = 'none';
        };
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
        
        // Click to open lightbox
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
        
        // Intersection Observer for fade-in animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(galleryItem);
    });
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;
    currentImageIndex = index;
    lightboxImage.src = `image/${imageFiles[index]}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showNextImage() {
    if (!lightboxImage) return;
    currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
    lightboxImage.src = `image/${imageFiles[currentImageIndex]}`;
}

function showPrevImage() {
    if (!lightboxImage) return;
    currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
    lightboxImage.src = `image/${imageFiles[currentImageIndex]}`;
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    }
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Countdown Timer
const countdownDate = new Date('2026-01-25T10:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP Form submission
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const nameInput = rsvpForm.querySelector('input[type="text"]');
        const emailInput = rsvpForm.querySelector('input[type="email"]');
        
        if (nameInput && emailInput) {
            const name = nameInput.value;
            const email = emailInput.value;
            
            // Show success message
            alert(`Cảm ơn bạn ${name} đã xác nhận tham dự! Chúng tôi sẽ liên hệ với bạn qua email ${email} để xác nhận chi tiết.`);
            
            // Reset form
            rsvpForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('RSVP Form Data:', {
                name,
                email,
                phone: rsvpForm.querySelector('input[type="tel"]')?.value,
                guests: rsvpForm.querySelector('select')?.value,
                message: rsvpForm.querySelector('textarea')?.value
            });
        }
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add animation to detail cards on scroll
const detailCards = document.querySelectorAll('.detail-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

detailCards.forEach(card => {
    cardObserver.observe(card);
});

// Add floating animation to section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-out';
            }
        });
    }, { threshold: 0.5 });
    observer.observe(title);
});

// Particles Canvas Animation
const canvas = document.getElementById('particles-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Connect nearby particles
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Enhanced parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// Music Player Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

// Load saved music state from localStorage
const savedMusicState = localStorage.getItem('musicPlaying');
if (savedMusicState === 'true') {
    isPlaying = true;
}

// Initialize music state
function initMusic() {
    if (backgroundMusic && musicToggle) {
        // Try to play music (will fail silently if user hasn't interacted)
        if (isPlaying) {
            backgroundMusic.play().catch(err => {
                console.log('Auto-play prevented:', err);
                isPlaying = false;
                musicToggle.classList.remove('playing');
            });
        }
        
        if (isPlaying && !backgroundMusic.paused) {
            musicToggle.classList.add('playing');
        }
        
        // Music toggle button click
        musicToggle.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    isPlaying = true;
                    musicToggle.classList.add('playing');
                    localStorage.setItem('musicPlaying', 'true');
                }).catch(err => {
                    console.log('Play failed:', err);
                    // Show user-friendly message
                    alert('Nhạc nền sẽ tự động phát khi bạn tương tác với trang web. Vui lòng thử lại sau khi đã cuộn hoặc click vào trang.');
                });
            } else {
                backgroundMusic.pause();
                isPlaying = false;
                musicToggle.classList.remove('playing');
                localStorage.setItem('musicPlaying', 'false');
            }
        });
        
        // Play music on first user interaction
        const playOnInteraction = () => {
            if (!isPlaying && backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    isPlaying = true;
                    musicToggle.classList.add('playing');
                    localStorage.setItem('musicPlaying', 'true');
                }).catch(err => {
                    console.log('Play on interaction failed:', err);
                });
            }
            // Remove listeners after first interaction
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
        };
        
        // Add event listeners for first interaction
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('scroll', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        
        // Handle music ended (shouldn't happen with loop, but just in case)
        backgroundMusic.addEventListener('ended', () => {
            backgroundMusic.play();
        });
    }
}

// Initialize music when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
} else {
    initMusic();
}

