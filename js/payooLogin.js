document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        // add preventDefault to stop browser load
        event.preventDefault();
        const mobileNumber = document.getElementById('mobile-number-input'.value);
        const pinNumber = document.getElementById('pin-number-input').value;
        if(pinNumber == '1122'){
            // to navigate the another page in same derectory
            window.location.href = './payooHome.html'
        }
        else{
            alert('You have entered wrong number or pin')
        }
    })