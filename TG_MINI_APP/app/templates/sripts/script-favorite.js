// Получаем все иконки удаления
const deleteIcons = document.querySelectorAll('.fav-delete-icon');
const modal = document.getElementById('modal-del-fav');
const modalContent = modal.querySelector('.modal-content');
const deleteButton = document.getElementById('deleteBtn');
const cancelButton = document.getElementById('cancelBtn');
const closeButton = document.getElementById('closeModal');
const modalProductName = modal.querySelector('strong');

let cardToDelete = null; // Текущая карточка

// Обработка нажатия на иконки удаления
deleteIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    cardToDelete = icon.closest('.card');
    const productName = cardToDelete.querySelector('.product-description')?.textContent.trim();
    if (productName) {
      modalProductName.textContent = productName; // Подставляем имя продукта
    }

    modal.classList.remove('modal-desactive');
    modalContent.classList.remove('desactive-page');
  });
});

// Закрытие модального окна
function closeModal() {
  modal.classList.add('modal-desactive');
  modalContent.classList.add('desactive-page');
  cardToDelete = null;
}

cancelButton.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);

// Подтверждение удаления
deleteButton.addEventListener('click', () => {
  if (cardToDelete) {
    cardToDelete.classList.add('desactive-card');
  }
  closeModal();
});