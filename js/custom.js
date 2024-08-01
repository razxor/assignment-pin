document.addEventListener('DOMContentLoaded', function () {
    // Generate PIN
    const button = document.querySelector('.js-generate-key');
    button.addEventListener('click', function () {        
        const input = document.querySelector('.js-pin-output');
        const secretKey = Math.floor(100000 + Math.random() * 900000); // Generates a 4-digit random number
        input.value = secretKey;       
    });

    // Keypad manage
    const pinInput = document.getElementById('pin-input');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = this.textContent;
            if (keyValue === 'x') {
                pinInput.value = pinInput.value.slice(0, -1); // Remove the last character
            } else if (keyValue === 'Clear') {
                pinInput.value = ''; 
            } else if (keyValue === 'Submit') {               
                alert('PIN Submitted: ' + pinInput.value);
            } else {
                if (pinInput.value.length < 6) {
                    pinInput.value += keyValue; 
                }
            }
        });
    });
});
