document.addEventListener('DOMContentLoaded', function () {
    // Generate PIN
    var pin = 0;
    const button = document.querySelector('.js-generate-key');
    const alert_box = document.querySelector('.alert');
    button.addEventListener('click', function () {        
        const input = document.querySelector('.js-pin-output');
        const secretKey = Math.floor(100000 + Math.random() * 900000); // Generates a 4-digit random number
        input.value = secretKey;   
        pin = secretKey;    
    });

    // Keypad manage
    const pinInput = document.getElementById('pin-input');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = this.textContent;
            if (keyValue === 'x') {
                pinInput.value = pinInput.value.slice(0, -1); // Remove the last digit
            } else if (keyValue === 'Clear') {
                pinInput.value = ''; 
                alert_box.style.display = 'none';
            } else if (keyValue === 'Submit') {      
                if (pinInput.value.length ==6) {
                    //alert('PIN Submitted: ' + pinInput.value);
                    if(pinInput.value==pin){   
                        alert_box.style.display = 'block';                     
                        alert_box.classList.remove("error");
                        alert_box.classList.add("success");
                        alert_box.innerHTML = '<i class="fa fa-check-circle"></i> Success! The Secret Key you have entered matched.';
                    } else{
                        alert_box.style.display = 'block';   
                        alert_box.classList.remove("success");
                        alert_box.classList.add("error");
                        alert_box.innerHTML = '<i class="far fa-times-circle"></i> Alert! The Secret Key you have entered does not matched.';
                    }
                } else {
                    alert_box.style.display = 'block';   
                    alert_box.classList.remove("success");
                    alert_box.classList.add("error");
                    alert_box.innerHTML = '<i class="far fa-times-circle"></i> PIN Should be 6 digit';
                }                        

            } else {
                if (pinInput.value.length < 6) {
                    pinInput.value += keyValue;                     
                }
            }
        });
    });
});
