// Opening Card with Envelope
const openingCard = document.getElementById('openingCard');
const mainContent = document.getElementById('mainContent');
const envelopeFlap = document.getElementById('envelopeFlap');
const envelopePhotoContainer = document.querySelector('.envelope-photo-container');
const namesAbovePhoto = document.querySelector('.names-above-photo');
const touchHintBottom = document.querySelector('.touch-hint-bottom');

let envelopeOpened = false;

if (openingCard && mainContent && envelopeFlap) {
    const openEnvelope = () => {
        if (!envelopeOpened) {
            envelopeOpened = true;
            
            // Open the flap
            envelopeFlap.classList.add('opened');
            
            // Show photo after flap opens
            setTimeout(() => {
                if (envelopePhotoContainer) {
                    envelopePhotoContainer.classList.add('show');
                }
                if (namesAbovePhoto) {
                    namesAbovePhoto.classList.add('show');
                }
            }, 600);
            
            // Hide touch hint
            if (touchHintBottom) {
                touchHintBottom.style.opacity = '0';
            }
            
            // After everything opens, show main content below (don't hide the card)
            setTimeout(() => {
                // Show main content below the card
                if (mainContent) {
                    mainContent.classList.add('show');
                    
                    // Scroll to main content smoothly
                    setTimeout(() => {
                        mainContent.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 500);
                }
            }, 2500);
            
            // Play music when envelope starts opening
            const backgroundMusic = document.getElementById('backgroundMusic');
            if (backgroundMusic) {
                backgroundMusic.play().catch(err => {
                    console.log('Auto-play prevented:', err);
                });
            }
        }
    };
    
    // Click anywhere on opening card to open
    openingCard.addEventListener('click', openEnvelope);
    
    // Also click on touch hint
    if (touchHintBottom) {
        touchHintBottom.addEventListener('click', (e) => {
            e.stopPropagation();
            openEnvelope();
        });
    }
}

// Calendar Generation - December 2025
const calendarGrid = document.getElementById('calendarGrid');
if (calendarGrid) {
    // December 2025 starts on Monday (day 1 = Monday)
    const daysInMonth = 31;
    const firstDay = 1; // Monday (0 = Sunday, 1 = Monday)
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days 1-31
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        if (day === 15) {
            dayElement.classList.add('today');
            dayElement.textContent = day;
        } else if (day === 24) {
            dayElement.classList.add('heart');
            dayElement.textContent = '❤';
        } else {
            dayElement.textContent = day;
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

// Countdown Timer - December 15, 2025 at 10:30
const countdownDate = new Date('2025-12-15T10:30:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// RSVP Form submission
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = rsvpForm.querySelector('input[type="text"]');
        const attendance = rsvpForm.querySelector('input[name="attendance"]:checked');
        const guests = rsvpForm.querySelector('select');
        
        if (nameInput && attendance && guests) {
            const name = nameInput.value;
            const attendanceValue = attendance.value;
            const guestsValue = guests.value;
            
            alert(`Cảm ơn bạn ${name} đã xác nhận tham dự!`);
            
            rsvpForm.reset();
            
            console.log('RSVP Form Data:', {
                name,
                attendance: attendanceValue,
                guests: guestsValue
            });
        }
    });
}

// Music Player Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

function initMusic() {
    if (backgroundMusic && musicToggle) {
        musicToggle.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play().then(() => {
                    isPlaying = true;
                    musicToggle.classList.add('playing');
                }).catch(err => {
                    console.log('Play failed:', err);
                });
            } else {
                backgroundMusic.pause();
                isPlaying = false;
                musicToggle.classList.remove('playing');
            }
        });
        
        backgroundMusic.addEventListener('ended', () => {
            backgroundMusic.play();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
} else {
    initMusic();
}