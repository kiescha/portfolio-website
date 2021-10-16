(function(){
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');


    function validateEmail (){
        let value = emailInput.value

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field');
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid Email addres');
            return false;
        }

        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid Email addres');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;

        // let hasAtsigh = value.indexOf('@');
        // let hasDot = value.indexOf('.');
    }

    function showErrorMessage(input, message){
        let error = input.parentElement;
        let error = container.querySelector('.error-message');
        if (error){
            container.removeChild(error);
        }
        if (message){
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateForm (){
        return validateEmail();
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Success')
        }
    });
    emailInput.addEventListener('input', validateEmail);

})();