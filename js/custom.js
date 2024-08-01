document.addEventListener('DOMContentLoaded', function () {
    // Generate PIN
    const button = document.querySelector('.js-generate-key');
    button.addEventListener('click', function () {        
        const input = document.querySelector('.js-pin-output');
        const secretKey = Math.floor(100000 + Math.random() * 900000); // Generates a 4-digit random number
        input.value = secretKey;       
    });

   
});
