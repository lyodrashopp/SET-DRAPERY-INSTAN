// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero background animation
    if (document.getElementById('hero-bg')) {
        VANTA.WAVES({
            el: "#hero-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x87ceeb,
            shininess: 15.00,
            waveHeight: 15.00,
            waveSpeed: 1.00
        });
    }

    // Color options data
    const colors = [
        { name: "Black", image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m2jdyo3vvqes06@resize_w900_nl.webp" },
        { name: "Silver", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m2jdyo3vx4z8b5@resize_w900_nl.webp" },
        { name: "Mocca", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m2jdyo3vyjjo58@resize_w900_nl.webp" },
        { name: "Navy", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m2jez7r2d0qh1c@resize_w900_nl.webp" },
        { name: "Dark Maroon", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m2jez7r2efaxf8@resize_w900_nl.webp" },
        { name: "Sage Green", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m2jez7r2ftvdc0@resize_w900_nl.webp" },
        { name: "Dove", image: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m2jez7r2lg552e@resize_w900_nl.webp" },
        { name: "Burgundy", image: "https://down-id.img.susercontent.com/file/id-11134207-7rash-m2jez7r2in09f7@resize_w900_nl.webp" },
        { name: "Denim", image: "https://down-id.img.susercontent.com/file/id-11134207-7rase-m2jez7r2k1kpc1@resize_w900_nl.webp" },
        { name: "Khaki", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m2jez7r2o9a116@resize_w900_nl.webp" },
        { name: "Broken White", image: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m2jf39dh6kmx8e@resize_w900_nl.webp" },
        { name: "Baby Blue", image: "https://down-id.img.susercontent.com/file/id-11134207-7rash-m35t7dcm5ibv0c@resize_w900_nl.webp" }
    ];

    // Render color options
    const colorContainer = document.getElementById('color-options');
    if (colorContainer) {
        colors.forEach(color => {
            const colorElement = document.createElement('div');
            colorElement.className = 'color-option';
            colorElement.innerHTML = `
                <div class="relative overflow-hidden rounded-xl shadow-md">
                    <img src="${color.image}" alt="${color.name}" class="w-full h-40 object-cover">
                    <div class="color-name">${color.name}</div>
                </div>
            `;
            colorContainer.appendChild(colorElement);
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('button[aria-expanded]');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
            
            const content = button.nextElementSibling;
            if (content) {
                content.style.display = expanded ? 'none' : 'block';
            }
        });
    });

    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow.getTime() - now.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const countdownElements = document.querySelectorAll('#countdown .font-bold');
        if (countdownElements.length >= 3) {
            countdownElements[0].textContent = hours.toString().padStart(2, '0');
            countdownElements[1].textContent = minutes.toString().padStart(2, '0');
            countdownElements[2].textContent = seconds.toString().padStart(2, '0');
        }
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('custom-navbar');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// Form submission handling
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('orderonline-embed-form')) {
        // Add loading state
        const submitBtn = e.target.querySelector('.ooef-btn');
        if (submitBtn) {
            submitBtn.innerHTML = '<i data-feather="loader" class="animate-spin mr-2"></i>Memproses...';
            feather.replace();
        }
    }
});
