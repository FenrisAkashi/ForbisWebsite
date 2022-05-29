//modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.quote-btn');
const closeBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

//Form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const message = document.getElementById('message');

//Show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

//Get Fieldname
function getFieldName(input) {
    if (input === phoneNumber) {
        input = 'Phone Number';
        return input;
    }
    else {
        return input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }
}

//Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, message]);
})
