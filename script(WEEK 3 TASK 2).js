function checkPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('strength-text');
    const passwordStrengthIndicator = document.getElementById('password-strength');
    const password = passwordInput.value;

    if (password.length < 5) {
        strengthText.textContent = 'Weak';
        passwordStrengthIndicator.className = 'strength-indicator';
    } else if (password.length >= 5 && password.length < 8) {
        strengthText.textContent = 'Medium';
        passwordStrengthIndicator.className = 'strength-indicator medium';
    } else {
        strengthText.textContent = 'Strong';
        passwordStrengthIndicator.className = 'strength-indicator strong';
    }
}
