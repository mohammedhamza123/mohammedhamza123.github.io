// ============================================
// Hero Slideshow
// ============================================
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.hero-indicator');
const prevBtn = document.getElementById('hero-prev');
const nextBtn = document.getElementById('hero-next');
const totalSlides = slides.length;

// Function to show specific slide with smooth transition
function showSlide(index) {
    if (index === currentSlide || !slides[index]) return;
    
    // Get current and next slides
    const currentSlideElement = slides[currentSlide];
    const nextSlideElement = slides[index];
    
    // Remove active class from all slides first
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    // Mark current slide as previous for smooth fade out
    if (currentSlideElement) {
        currentSlideElement.classList.add('prev');
        
        // Remove prev class after transition completes
        setTimeout(() => {
            currentSlideElement.classList.remove('prev');
        }, 2600);
    }
    
    // Remove active class from all indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to next slide with slight delay for smooth crossfade
    setTimeout(() => {
        nextSlideElement.classList.remove('prev');
        nextSlideElement.classList.add('active');
    }, 50);
    
    // Add active class to current indicator
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}

// Function to go to previous slide
function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
}

// Auto-play slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 7000); // Change slide every 7 seconds (allowing 2.5s for transition + 4.5s display)
}

// Stop auto-play
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Initialize slideshow
function initSlideshow() {
    if (slides.length === 0) return;
    
    // Show first slide
    showSlide(0);
    
    // Start auto-play
    startSlideshow();
    
    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlideshow();
            startSlideshow(); // Restart after manual navigation
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlideshow();
            startSlideshow(); // Restart after manual navigation
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow(); // Restart after manual navigation
        });
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            prevSlide(); // RTL: right arrow goes to previous
            stopSlideshow();
            startSlideshow();
        } else if (e.key === 'ArrowLeft') {
            nextSlide(); // RTL: left arrow goes to next
            stopSlideshow();
            startSlideshow();
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initSlideshow);

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function toggleMobileMenu() {
    const isActive = navMenu.classList.contains('active');
    
    if (isActive) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            setTimeout(() => {
                mobileMenuOverlay.style.display = 'none';
            }, 400);
        }
        document.body.style.overflow = '';
    } else {
        navMenu.classList.add('active');
        mobileMenuToggle.classList.add('active');
        document.body.classList.add('menu-open');
        if (mobileMenuOverlay) {
            mobileMenuOverlay.style.display = 'block';
            setTimeout(() => {
                mobileMenuOverlay.classList.add('active');
            }, 10);
        }
        document.body.style.overflow = 'hidden';
    }
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on overlay
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Close mobile menu when pressing ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// ============================================
// Header Scroll Effect
// ============================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Progress Bar
// ============================================
const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);
window.addEventListener('load', updateScrollProgress);

// ============================================
// Scroll to Top Button
// ============================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Exchange Rates Management
// ============================================
// تم إزالة كود تحديث الأسعار لأن القسم يعرض العملات فقط بدون أسعار

// ============================================
// Professional Scroll Animations
// ============================================
const animationObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

// Fade In Animation
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-fade-in');
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, animationObserverOptions);

// Slide In Animation
const slideInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-slide-in');
            }, index * 150);
            slideInObserver.unobserve(entry.target);
        }
    });
}, animationObserverOptions);

// Scale In Animation
const scaleInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-scale-in');
            }, index * 120);
            scaleInObserver.unobserve(entry.target);
        }
    });
}, animationObserverOptions);

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Service Cards - Slide from right
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.classList.add('animate-on-scroll', 'slide-from-right');
        slideInObserver.observe(card);
    });
    
    // Feature Cards - Fade in with scale
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.classList.add('animate-on-scroll', 'fade-scale');
        scaleInObserver.observe(card);
    });
    
    // Contact Cards - Slide from left
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.classList.add('animate-on-scroll', 'slide-from-left');
        slideInObserver.observe(card);
    });
    
    // Section Headers - Fade in
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.classList.add('animate-on-scroll', 'fade-in');
        fadeInObserver.observe(header);
    });
    
    // About Content - Fade in
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('animate-on-scroll', 'fade-in');
        fadeInObserver.observe(aboutText);
    }
    
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.classList.add('animate-on-scroll', 'slide-from-left');
        slideInObserver.observe(aboutImage);
    }
    
    // Rates Table - Scale in
    const ratesTable = document.querySelector('.rates-table-wrapper');
    if (ratesTable) {
        ratesTable.classList.add('animate-on-scroll', 'fade-scale');
        scaleInObserver.observe(ratesTable);
    }
    
    // Social Links - Fade in
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.classList.add('animate-on-scroll', 'fade-in');
        fadeInObserver.observe(link);
    });
    
    // Footer Elements - Fade in
    const footerElements = document.querySelectorAll('.footer-content > *');
    footerElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll', 'fade-in');
        setTimeout(() => {
            fadeInObserver.observe(el);
        }, index * 100);
    });
    
    // Add visible class to sections on scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
});

// ============================================
// Form Validation (if contact form is added later)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// Lazy Loading for Images
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Handle Logo Image Error
// ============================================
const companyLogo = document.getElementById('company-logo');
if (companyLogo) {
    companyLogo.addEventListener('error', function() {
        // If logo image fails to load, hide it or show placeholder
        this.style.display = 'none';
        // Or you can set a placeholder
        // this.src = 'placeholder-logo.png';
    });
}

// ============================================
// Performance Optimization
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    activateNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ============================================
// Google Maps Integration
// ============================================
// The map is embedded via iframe in HTML
// Coordinates: 32.753845, 12.729744
// You can customize the map embed URL if needed

// ============================================
// Social Media Links
// ============================================
// Facebook and WhatsApp links are in the HTML
// Update the WhatsApp number in HTML: replace 218XXXXXXXXX with actual number

// ============================================
// Console Welcome Message
// ============================================
console.log('%cالشركة الوطنية للصرافة والخدمات المالية المساهمة', 'color: #1a365d; font-size: 20px; font-weight: bold;');
console.log('%cمرخصة من مصرف ليبيا المركزي', 'color: #3182ce; font-size: 14px;');
console.log('%cwww.wataniyaexchange.com.ly', 'color: #6b7280; font-size: 12px;');

// ============================================
// Page Load Complete
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Hide any loading spinners if present
    const loaders = document.querySelectorAll('.loader');
    loaders.forEach(loader => {
        loader.style.display = 'none';
    });
});

// ============================================
// Error Handling
// ============================================
window.addEventListener('error', (e) => {
    console.error('حدث خطأ:', e.error);
    // You can add error reporting here
}, true);

// ============================================
// SEO Enhancement - Update Meta Tags Dynamically
// ============================================
function updatePageTitle(section) {
    const titles = {
        home: 'الشركة الوطنية للصرافة والخدمات المالية المساهمة | مرخصة من مصرف ليبيا المركزي',
        about: 'من نحن | الشركة الوطنية للصرافة والخدمات المالية',
        services: 'خدماتنا | الشركة الوطنية للصرافة والخدمات المالية',
        rates: 'أسعار العملات | الشركة الوطنية للصرافة والخدمات المالية',
        contact: 'اتصل بنا | الشركة الوطنية للصرافة والخدمات المالية'
    };
    
    if (titles[section]) {
        document.title = titles[section];
    }
}

// ============================================
// Accessibility Enhancements
// ============================================
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Focus management for mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
            }
        }
    });
}

