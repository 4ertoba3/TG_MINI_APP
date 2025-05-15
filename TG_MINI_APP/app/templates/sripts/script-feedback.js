document.addEventListener("DOMContentLoaded", () => {
  const filterButton = document.querySelector('.feedback-filter');
  const filterText = filterButton.childNodes[filterButton.childNodes.length - 1]; // Текстовый узел "Новые"
  const modal = document.getElementById('modal-filter-feedback');
  const filterSection = document.getElementById('feedback-search-filter');
  const radioButtons = filterSection.querySelectorAll('input[type="radio"][name="products"]');
  const feedbackList = document.querySelector('.feedback-list');

  filterButton.addEventListener('click', () => {
    modal.classList.remove('modal-desactive');
    filterSection.classList.remove('desactive-page');
  });

  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      const selectedLabel = radio.parentElement.textContent.trim();

      // Обновляем текст в фильтре
      filterText.textContent = ' ' + selectedLabel;

      // Закрываем модальное окно
      modal.classList.add('modal-desactive');
      filterSection.classList.add('desactive-page');

      // Сортируем отзывы
      const feedbackCards = Array.from(feedbackList.querySelectorAll('.feedback-card'));
      let sortedCards;

      switch (selectedLabel) {
        case "Новые":
          sortedCards = feedbackCards.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
          break;
        case "Старые":
          sortedCards = feedbackCards.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
          break;
        case "С высокой оценкой":
          sortedCards = feedbackCards.sort((a, b) => b.dataset.rating - a.dataset.rating);
          break;
        case "С низкой оценкой":
          sortedCards = feedbackCards.sort((a, b) => a.dataset.rating - b.dataset.rating);
          break;
        default:
          sortedCards = feedbackCards;
      }

      // Перерисовываем список
      feedbackList.innerHTML = '';
      sortedCards.forEach(card => feedbackList.appendChild(card));
    });
  });
});