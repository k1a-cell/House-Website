// common.js - Interactive features

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Login modal AJAX
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    window.location.reload();
                } else {
                    document.getElementById('loginError').textContent = 'Invalid credentials';
                    document.getElementById('loginError').style.display = 'block';
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        });
    }

    // Signup modal AJAX
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    window.location.reload();
                } else {
                    document.getElementById('signupError').textContent = 'User already exists or error';
                    document.getElementById('signupError').style.display = 'block';
                }
            } catch (error) {
                console.error('Signup error:', error);
            }
        });
    }

    // Contact form AJAX
    const contactForm = document.querySelector('form[action="/contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            try {
                const response = await fetch('/contact', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('Error sending message.');
                }
            } catch (error) {
                console.error('Contact error:', error);
            }
        });
    }
});