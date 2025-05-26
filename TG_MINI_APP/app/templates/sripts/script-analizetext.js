document.addEventListener('DOMContentLoaded', function () {    const button = document.querySelector('.analize-sostav-text');
    const textarea = document.querySelector('.analize-pagetext-textarea-input');
    // Получаем карточки и составы
    const resultSection1 = document.getElementById('analize-result');
    const resultSection2 = document.getElementById('analize-result1');
    const inputSection = document.getElementById('analize-pagetext');

    // Составы из карточек
    const composition1 = document.querySelector('#analize-result .analize-sostav p').textContent.trim();
    const composition2 = document.querySelector('#analize-result1 .analize-sostav p').textContent.trim();

    button.addEventListener('click', function (e) {
        e.preventDefault();

        const userInput = textarea.value.trim();

        // Простая проверка по точному совпадению
        if (userInput === composition1) {
            inputSection.classList.add('desactive-page');
            resultSection1.classList.remove('desactive-page');
        } else if (userInput === composition2) {
            inputSection.classList.add('desactive-page');
            resultSection2.classList.remove('desactive-page');
        } else {
            alert('Состав не найден. Пожалуйста, проверьте ввод.');
        }
    });
});