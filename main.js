const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

/*form validation*/

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email_address');
const phone_number = document.getElementById('phone_number');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const phone_numberValue = phone_number.value.trim(); 
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        setSuccessFor(email);
    }

    if(phone_numberValue === '') {
        setErrorFor(phone_number, 'Phone number cannot be blank');
    } else {
        setSuccessFor(phone_number);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(confirm_passwordValue === '') {
        setErrorFor(confirm_password, 'Confirm Password cannot be blank');
    } else if(password !== confirm_password) {
        setErrorFor(confirm_password, 'Passwords does not match');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group error'
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}