document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector('input[placeholder="Имя"]');
    const phoneInput = document.querySelector('input[placeholder="Номер телефона"]');
    const consentCheckbox = document.querySelector('.consent input[type="checkbox"]');
    const submitButton = document.querySelector('.registration-button');

    function validateForm() {
        const isNameFilled = nameInput.value.trim() !== "";
        const isPhoneFilled = phoneInput.value.trim() !== "";
        const isConsentChecked = consentCheckbox.checked;

        if (isNameFilled && isPhoneFilled && isConsentChecked) {
            submitButton.classList.add("active-registration-button");
        } else {
            submitButton.classList.remove("active-registration-button");
        }
    }

    nameInput.addEventListener("input", validateForm);
    phoneInput.addEventListener("input", validateForm);
    consentCheckbox.addEventListener("change", validateForm);
});

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.login-input');
    const submitButton = document.querySelector('.login-button');

    const nameInput = inputs[0];
    const phoneInput = inputs[1];

    function validateForm() {
        const isNameFilled = nameInput.value.trim() !== "";
        const isPhoneFilled = phoneInput.value.trim() !== "";

        if (isNameFilled && isPhoneFilled) {
            submitButton.classList.add("active-login-button");
            submitButton.disabled = false;
        } else {
            submitButton.classList.remove("active-login-button");
            submitButton.disabled = true;
        }
    }

    nameInput.addEventListener("input", validateForm);
    phoneInput.addEventListener("input", validateForm);

    // Инициализация кнопки как disabled при старте
    validateForm();
});