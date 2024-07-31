document.addEventListener('DOMContentLoaded', function() {
    const captchaContainer = document.getElementById('captcha-container');
    const captchaForm = document.getElementById('captcha-form');
    const captchaInput = document.getElementById('captcha-input');
    const resultDiv = document.getElementById('result');
    const captchaImage = document.getElementById('captcha-image');

    // Predefined CAPTCHA images and solutions
    const captchas = [
        { src: 'captcha1.jpg', solution: 'ABC123' },
        { src: 'captcha2.jpg', solution: 'DEF456' },
        { src: 'captcha3.jpg', solution: 'GHI789' }
    ];

    // Randomly select a CAPTCHA
    let selectedCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
    captchaImage.src = selectedCaptcha.src;

    captchaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userInput = captchaInput.value.trim();

        if (userInput === selectedCaptcha.solution) {
            resultDiv.textContent = 'CAPTCHA validation passed!';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'CAPTCHA validation failed!';
            resultDiv.style.color = 'red';
            // Reload a new CAPTCHA
            selectedCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
            captchaImage.src = selectedCaptcha.src;
            captchaInput.value = '';
        }
    });
});
