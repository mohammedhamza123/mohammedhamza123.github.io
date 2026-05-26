// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Theme toggle function
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add animation class
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// Theme toggle event
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Animated Name Effect - Simple and compatible with Arabic
function initNameAnimation() {
    const animatedName = document.querySelector('.animated-name');
    
    if (animatedName) {
        // Set data attribute for the shimmer effect
        animatedName.setAttribute('data-text', animatedName.textContent);
        
        // Add hover effect
        animatedName.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.textShadow = '0 4px 30px rgba(255, 255, 255, 0.4)';
        });
        
        animatedName.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.textShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        });
    }
}

// Initialize name animation when page loads
window.addEventListener('load', initNameAnimation);

// Language Toggle System
const langToggle = document.getElementById('langToggle');
const htmlElement = document.documentElement;

// Load saved language or default to Arabic
const savedLang = localStorage.getItem('language') || 'ar';
htmlElement.setAttribute('data-lang', savedLang);
htmlElement.setAttribute('lang', savedLang);
htmlElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');

// Translation function
function translate(key) {
    const keys = key.split('.');
    let value = translations[htmlElement.getAttribute('data-lang')];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Update all translatable elements
function updateLanguage() {
    const currentLang = htmlElement.getAttribute('data-lang');
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', dir);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translate(key);
        
        if (translation && translation !== key) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.hasAttribute('alt')) {
                element.setAttribute('alt', translation);
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update modal caption
    const modalCaption = document.getElementById('modalCaption');
    if (modalCaption) {
        modalCaption.textContent = translate('modal.clickToZoom');
    }
}

// Language toggle function
function toggleLanguage() {
    const currentLang = htmlElement.getAttribute('data-lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    htmlElement.setAttribute('data-lang', newLang);
    localStorage.setItem('language', newLang);
    
    updateLanguage();
}

// Language toggle event
if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
}

// Initialize language on page load
updateLanguage();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations with stagger effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.education-card, .experience-card, .skill-category, .achievement-card, .certificate-card, .contact-card, .about-text').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Add active class to current section in navigation with smooth transitions
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    lastScrollTop = scrollTop;
}, { passive: true });

// Certificate Modal functionality
function openModal(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    
    // Check if it's a PDF file
    if (imageSrc.endsWith('.pdf')) {
        modalImg.style.display = 'none';
        const pdfFrame = document.createElement('iframe');
        pdfFrame.src = imageSrc;
        pdfFrame.style.width = '90%';
        pdfFrame.style.maxWidth = '1400px';
        pdfFrame.style.height = '90vh';
        pdfFrame.style.border = 'none';
        pdfFrame.style.borderRadius = '12px';
        pdfFrame.style.margin = 'auto';
        pdfFrame.style.display = 'block';
        pdfFrame.style.marginTop = '5vh';
        pdfFrame.id = 'pdfFrame';
        
        // Remove existing iframe if any
        const existingFrame = document.getElementById('pdfFrame');
        if (existingFrame) {
            existingFrame.remove();
        }
        
        modalImg.parentNode.insertBefore(pdfFrame, modalImg);
        caption.textContent = 'انقر خارج الشهادة أو اضغط ESC للإغلاق';
    } else {
        // Remove existing iframe if any
        const existingFrame = document.getElementById('pdfFrame');
        if (existingFrame) {
            existingFrame.remove();
        }
        modalImg.style.display = 'block';
        modalImg.src = imageSrc;
        caption.textContent = 'انقر خارج الصورة أو اضغط ESC للإغلاق';
    }
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    const pdfFrame = document.getElementById('pdfFrame');
    if (pdfFrame) {
        pdfFrame.remove();
    }
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add parallax effect to hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, { passive: true });

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Debounce scroll events
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
