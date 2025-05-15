document.addEventListener("DOMContentLoaded", () => {
  const clearSearchBtn = document.querySelector(".clear-search");
  const modalFilter = document.getElementById("modal-filter");
  const homeSearchFilter = document.getElementById("home-search-filter");
  const filterClose = document.querySelector(".filter-close");

  clearSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalFilter.classList.remove("modal-desactive");
    homeSearchFilter.classList.remove("desactive-page");
  });

  filterClose.addEventListener("click", () => {
    modalFilter.classList.add("modal-desactive");
    homeSearchFilter.classList.add("desactive-page");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const clearSearchBtn = document.querySelector(".clear-search-exp");
  const modalFilter = document.getElementById("modal-filter-exp");
  const homeSearchFilter = document.getElementById("exp-search-filter");
  const filterClose = document.querySelector(".filter-close-exp");

  clearSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalFilter.classList.remove("modal-desactive");
    homeSearchFilter.classList.remove("desactive-page");
  });

  filterClose.addEventListener("click", () => {
    modalFilter.classList.add("modal-desactive");
    homeSearchFilter.classList.add("desactive-page");
  });
});