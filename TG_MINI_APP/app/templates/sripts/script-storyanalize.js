// Элементы модального окна истории анализа
const storyDeleteIcons = document.querySelectorAll('#analize-story .delete-icon');
const storyModal = document.getElementById('modal-del-story');
const storyModalContent = storyModal.querySelector('.modal-content');
const storyDeleteButton = storyModal.querySelector('#deleteBtn');
const storyCancelButton = storyModal.querySelector('#cancelBtn');
const storyCloseButton = storyModal.querySelector('#closeModal');
const storyModalProductName = storyModal.querySelector('strong');

let storyCardToDelete = null;

// Обработка кликов по иконке удаления
storyDeleteIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    storyCardToDelete = icon.closest('.card');
    const productName = storyCardToDelete.querySelector('.product-description')?.textContent.trim();
    if (productName) {
      storyModalProductName.textContent = productName;
    }

    storyModal.classList.remove('modal-desactive');
    storyModalContent.classList.remove('desactive-page');
  });
});

// Закрытие модального окна
function closeStoryModal() {
  storyModal.classList.add('modal-desactive');
  storyModalContent.classList.add('desactive-page');
  storyCardToDelete = null;
}

storyCancelButton.addEventListener('click', closeStoryModal);
storyCloseButton.addEventListener('click', closeStoryModal);

// Подтверждение удаления
storyDeleteButton.addEventListener('click', () => {
  if (storyCardToDelete) {
    storyCardToDelete.classList.add('desactive-card');
  }
  closeStoryModal();
});
