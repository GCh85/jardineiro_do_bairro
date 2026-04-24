// ========================================
// O JARDINEIRO DO BAIRRO - SCRIPT
// Versão Melhorada
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.querySelector('.cabecalho');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});

// ========================================
// Scroll to Orçamento Section
// ========================================
function scrollToOrcamento() {
    document.getElementById('orcamento').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// ========================================
// Enviar Mensagem de Contacto
// ========================================
function enviarMensagem(event) {
    event.preventDefault();
    
    const form = document.getElementById('formContact');
    const feedback = document.getElementById('formFeedback');
    const nome = form.querySelector('#nome').value;
    const email = form.querySelector('#email').value;
    
    if (!nome || !email) {
        feedback.textContent = 'Por favor, preencha os campos obrigatórios.';
        feedback.style.color = '#e74c3c';
        return;
    }
    
    // Simulate form submission
    feedback.innerHTML = '<i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contacto em breve.';
    feedback.style.color = '#2D5A3D';
    
    // Reset form
    form.reset();
    
    // Clear feedback after 5 seconds
    setTimeout(function() {
        feedback.textContent = '';
    }, 5000);
}

// ========================================
// Download Guia (Lead Magnet)
// ========================================
function baixarGuia(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        // Simulate download
        alert('Obrigado! O guia foi enviado para ' + email + '. Por favor, verifique a sua caixa de email.');
        emailInput.value = '';
    }
}

// ========================================
// FAQ Toggle Animation
// ========================================
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function() {
        if (this.open) {
            // Close other FAQ items
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== this && other.open) {
                    other.removeAttribute('open');
                }
            });
        }
    });
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply if it's an internal page anchor
        if (href !== '#' && !href.startsWith('http')) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Form Validation Enhancement
// ========================================
document.querySelectorAll('form input, form select, form textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.required && !this.value.trim()) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#E5E5E3';
        }
        
        // Email validation
        if (this.type === 'email' && this.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#e74c3c';
            }
        }
    });
});

// ========================================
// Lazy Loading for Images (Performance)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console info for developers
// ========================================
console.log('%c O Jardineiro do Bairro ', 'background: #2D5A3D; color: white; padding: 8px 16px; border-radius: 4px; font-size: 14px; font-weight: bold;');
console.log('%c Versão Melhorada - 2026 ', 'background: #B8860B; color: white; padding: 4px 8px; border-radius: 2px; font-size: 12px;');