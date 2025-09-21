// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for any internal links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Removed parallax scroll effect to fix weird movement

    // Animate speaker cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe speaker cards for animation
    document.querySelectorAll('.speaker-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Function to update registration link (call this when you have the actual link)
    window.updateRegistrationLink = function(url) {
        const registerBtn = document.getElementById('register-link');
        if (registerBtn && url) {
            registerBtn.href = url;
        }
    };

    // Function to update contact email (call this with your actual email)
    window.updateContactEmail = function(email) {
        const emailLink = document.getElementById('contact-email');
        if (emailLink && email) {
            emailLink.href = `mailto:${email}`;
            emailLink.textContent = email;
        }
    };

    // Add click tracking for registration button
    document.getElementById('register-link').addEventListener('click', function(e) {
        // Add analytics tracking here if needed
        console.log('Registration button clicked');
    });

    // Add hover effect to logos
    document.querySelectorAll('.qcc-logo, .qiskit-logo').forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

});