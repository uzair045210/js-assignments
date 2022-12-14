var emailField = document.getElementById('emailField');
var passwordField = document.getElementById('passwordField');
var lengthError = document.getElementById('lengthError');
var letterError = document.getElementById('letterError');
var numberError = document.getElementById('numberError');
const passLength = 6;

function validatePassword() {
    lengthError.style.display = 'none';
    letterError.style.display = 'none';
    numberError.style.display = 'none';
    let isTrue = false;
    var password = passwordField.value.toLowerCase();
    var email = emailField.value.toLowerCase();
    if (!isTrue) {
        if (password.length < passLength) {
            lengthError.style.display = 'inline';
            passwordField.style.borderColor = 'red';
            isTrue = true;
        }
        if (!hasLetters(password)) {
            letterError.style.display = 'inline';
            passwordField.style.borderColor = 'red';
            isTrue = true;
        }
        if (!hasNumbers(password)) {
            numberError.style.display = 'inline';
            passwordField.style.borderColor = 'red';
            isTrue = true;
        }
    }
    if (!isTrue)
        passwordField.style.borderColor = 'green';
    if (!isEmail(email))
        emailField.style.borderColor = 'red';
    else
        emailField.style.borderColor = 'green';
}

function isEmail(email) {
    return email.includes('@');
}

function hasLetters(password) {
    let isContain = false;
    for (let ch of password)
        if (ch >= 'a' && ch <= 'z') {
            isContain = true;
            break;
        }
    return isContain;
}

function hasNumbers(password) {
    let pattern = /\d+/g;
    return password.match(pattern);
}