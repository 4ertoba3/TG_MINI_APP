document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".cosmetic-sidebar-item");
    const productCards = document.querySelectorAll(".safe-product-card");
    const searchInput = document.querySelector(".search-input");

    let currentCategory = "";

    // Функция фильтрации по категории и тексту
    function filterCards() {
        const searchValue = searchInput.value.toLowerCase().trim();

        productCards.forEach((card) => {
            const name = card.querySelector(".safe-product-name").textContent.toLowerCase();
            const description = card.querySelector(".safe-product-description").textContent.toLowerCase();
            const matchesSearch = name.includes(searchValue) || description.includes(searchValue);
            const matchesCategory = currentCategory === "" || card.classList.contains(currentCategory);

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Обработка клика по боковому меню
    sidebarItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Удалить класс active у всех
            sidebarItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");

            const text = item.querySelector(".cosmetic-sidebar-desc").textContent.trim();

            const map = {
                "Крема": "crem",
                "Шампуни": "shampo",
                "Помады": "pomada",
                "Пудры": "pudra",
                "Глиттеры": "glitter",
                "Подподки": "podvodka",
                "Бронзеры": "bronzer",
                "Румяна": "rumina",
                "Хайлайтеры": "hightlight",
                "Тональные крема": "tonkrem"
            };

            currentCategory = map[text] || "";
            filterCards();
        });
    });

    // Обработка ввода в поиск
    searchInput.addEventListener("input", filterCards);

    // При загрузке показать всё
    filterCards();
});