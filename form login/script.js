function createParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(particle);
    }
}

createParticles();

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');
    const visibilityIcon = document.getElementById('visibilityIcon');
    const visibilityOffIcon = document.getElementById('visibilityOffIcon');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(errorElement) {
        errorElement.style.display = 'block';
    }

    function hideError(errorElement) {
        errorElement.style.display = 'none';
    }

    // Password visibility toggle
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            visibilityIcon.style.display = 'none';
            visibilityOffIcon.style.display = 'block';
        } else {
            passwordInput.type = 'password';
            visibilityIcon.style.display = 'block';
            visibilityOffIcon.style.display = 'none';
        }
    });

    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            hideError(emailError);
        } else {
            showError(emailError);
        }
    });

    passwordInput.addEventListener('input', function() {
        if (validatePassword(passwordInput.value)) {
            hideError(passwordError);
        } else {
            showError(passwordError);
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;
        let isValid = true;

        if (!validateEmail(email)) {
            showError(emailError);
            isValid = false;
        } else {
            hideError(emailError);
        }

        if (!validatePassword(password)) {
            showError(passwordError);
            isValid = false;
        } else {
            hideError(passwordError);
        }

        if (isValid) {
            alert('Login berhasil! (Ini hanya contoh)');
        }
    });
});