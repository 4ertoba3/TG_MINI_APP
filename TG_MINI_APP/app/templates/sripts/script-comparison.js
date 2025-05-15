document.addEventListener("DOMContentLoaded", () => {
  const comparisonButton = document.querySelector(".comparison-sostav-button");

  function setupSostavButtons(containerSelector) {
    const container = document.querySelector(containerSelector);
    const buttons = container.querySelectorAll("div[class$='button-photo'], div[class$='button-text']");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          const img = btn.querySelector("img");
          if (!img) return;

          // Сброс изображений
          if (btn.classList.contains("first-sostav-button-photo") || btn.classList.contains("second-sostav-button-photo")) {
            img.src = "images/photoblack.svg";
          } else {
            img.src = "images/textblack.svg";
          }

          btn.classList.remove("selected");
          btn.classList.add("desactive-button");
        });

        // Установка aceptblack.svg и активного состояния
        const currentImg = button.querySelector("img");
        if (currentImg) {
          currentImg.src = "images/aceptblack.svg";
          button.classList.add("selected");
          button.classList.remove("desactive-button");
        }

        updateMainButtonState();
      });
    });
  }

  function updateMainButtonState() {
    const firstSelected = document.querySelector(".first-sostav .selected");
    const secondSelected = document.querySelector(".second-sostav .selected");

    if (firstSelected && secondSelected) {
      comparisonButton.classList.add("active-comparison-button");
    } else {
      comparisonButton.classList.remove("active-comparison-button");
    }
  }

  setupSostavButtons(".first-sostav");
  setupSostavButtons(".second-sostav");
});
