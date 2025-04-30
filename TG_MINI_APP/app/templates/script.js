document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.querySelector(".home-page .profile a");
    const homePageSection = document.getElementById("home-page");
    const personalAccountSection = document.getElementById("personal-account");

    if (profileLink && homePageSection && personalAccountSection) {
        profileLink.addEventListener("click", function (e) {
            e.preventDefault();
            homePageSection.classList.add("desactive-page");
            personalAccountSection.classList.remove("desactive-page");
        });
    }

    const backButton = document.querySelector(".header-personal-account .arrow-icon-left");
    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            personalAccountSection.classList.add("desactive-page");
            homePageSection.classList.remove("desactive-page");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.querySelector(".footer-button-profile");
    const messagesBtn = document.querySelector(".footer-button-mess");
    const likeBtn = document.querySelector(".footer-button-like");
    const homeBtn = document.querySelector(".footer-button-home");

    const allSections = document.querySelectorAll("section");

    const personalAccountSection = document.getElementById("personal-account");
    const messagesSection = document.getElementById("messages"); // Убедись, что в HTML есть <section id="messages">
    const favoriteSection = document.getElementById("favorite"); // Убедись, что есть <section id="favorite">
    const homePageSection = document.getElementById("home-page"); // И <section id="home-page">

    function showOnly(sectionToShow) {
        allSections.forEach(section => {
            section.classList.add("desactive-page");
        });
        sectionToShow.classList.remove("desactive-page");
    }

    if (profileBtn && personalAccountSection) {
        profileBtn.addEventListener("click", function () {
            showOnly(personalAccountSection);
        });
    }

    if (messagesBtn && messagesSection) {
        messagesBtn.addEventListener("click", function () {
            showOnly(messagesSection);
        });
    }

    if (likeBtn && favoriteSection) {
        likeBtn.addEventListener("click", function () {
            showOnly(favoriteSection);
        });
    }

    if (homeBtn && homePageSection) {
        homeBtn.addEventListener("click", function () {
            showOnly(homePageSection);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.querySelector(".home-page .right-column .action-item-favorite");
    const homePageSection = document.getElementById("home-page");
    const favoriteSection = document.getElementById("favorite");

    if (profileLink && homePageSection && favoriteSection) {
        profileLink.addEventListener("click", function (e) {
            e.preventDefault();
            homePageSection.classList.add("desactive-page");
            favoriteSection.classList.remove("desactive-page");
        });
    }

    const backButton = document.querySelector(".favorite-header .arrow-icon-left");
    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            favoriteSection.classList.add("desactive-page");
            homePageSection.classList.remove("desactive-page");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.querySelector(".home-page .right-column .action-item-expert");
    const arrowLink = document.querySelector(".home-page .expert-section .arrow-icon");
    const homePageSection = document.getElementById("home-page");
    const expertsSection = document.getElementById("experts");

    if (profileLink && homePageSection && expertsSection) {
        profileLink.addEventListener("click", function (e) {
            e.preventDefault();
            homePageSection.classList.add("desactive-page");
            expertsSection.classList.remove("desactive-page");
        });
    }

    if (arrowLink && homePageSection && expertsSection) {
        arrowLink.addEventListener("click", function (e) {
            e.preventDefault();
            homePageSection.classList.add("desactive-page");
            expertsSection.classList.remove("desactive-page");
        });
    }

    const backButton = document.querySelector(".experts-header .arrow-icon-left");
    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            expertsSection.classList.add("desactive-page");
            homePageSection.classList.remove("desactive-page");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const homePageSection = document.getElementById("home-page");
    const favoriteSection = document.getElementById("messages");
    const backButton = document.querySelector(".messages-header .arrow-icon-left");
    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            favoriteSection.classList.add("desactive-page");
            homePageSection.classList.remove("desactive-page");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.querySelector(".experts .cards-container .card2 .analysis-result");
    const peopleLink = document.querySelector(".home-page .expert-section .experts-list .expert-card1");
    const homePageSection = document.getElementById("home-page");
    const expertsSection = document.getElementById("experts");
    const expert1Section = document.getElementById("expert1");

    if (profileLink && expertsSection && expert1Section) {
        profileLink.addEventListener("click", function (e) {
            e.preventDefault();
            expertsSection.classList.add("desactive-page");
            expert1Section.classList.remove("desactive-page");
        });
    }

    if (peopleLink && homePageSection && expert1Section) {
        peopleLink.addEventListener("click", function (e) {
            e.preventDefault();
            homePageSection.classList.add("desactive-page");
            expert1Section.classList.remove("desactive-page");
        });
    }

    const backButton = document.querySelector(".expert1-header .arrow-icon-left");
    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            expert1Section.classList.add("desactive-page");
            homePageSection.classList.remove("desactive-page");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.querySelector(".footer-button-profile");
    const messagesBtn = document.querySelector(".footer-button-mess");
    const likeBtn = document.querySelector(".footer-button-like");
    const homeBtn = document.querySelector(".footer-button-home");
    const photoBtn = document.querySelector(".footer-button-photo");

    const allSections = document.querySelectorAll("section");

    const personalAccountSection = document.getElementById("personal-account");
    const messagesSection = document.getElementById("messages");
    const favoriteSection = document.getElementById("favorite");
    const homePageSection = document.getElementById("home-page");
    const photoSection = document.getElementById("photo"); // Добавь в HTML <section id="photo">

    const footerButtons = document.querySelectorAll(".footer-button");

    function showOnly(sectionToShow) {
        allSections.forEach(section => {
            section.classList.add("desactive-page");
        });
        sectionToShow.classList.remove("desactive-page");
    }

    function activateFooterButton(activeButton) {
        footerButtons.forEach(button => {
            button.classList.remove("active-footer-button");
        });
        activeButton.classList.add("active-footer-button");
    }

    function activateFooterButton(activeButton) {
        const footerButtons = document.querySelectorAll(".footer-button");
    
        footerButtons.forEach(button => {
            button.classList.remove("active-footer-button");
    
            const img = button.querySelector("img");
            if (img && img.src.includes("white")) {
                img.src = img.src.replace("white", "purple");
            }
        });
    
        activeButton.classList.add("active-footer-button");
    
        const activeImg = activeButton.querySelector("img");
        if (activeImg && activeImg.src.includes("purple")) {
            activeImg.src = activeImg.src.replace("purple", "white");
        }
    }    

    if (profileBtn && personalAccountSection) {
        profileBtn.addEventListener("click", function () {
            showOnly(personalAccountSection);
            activateFooterButton(profileBtn);
        });
    }

    if (messagesBtn && messagesSection) {
        messagesBtn.addEventListener("click", function () {
            showOnly(messagesSection);
            activateFooterButton(messagesBtn);
        });
    }

    if (likeBtn && favoriteSection) {
        likeBtn.addEventListener("click", function () {
            showOnly(favoriteSection);
            activateFooterButton(likeBtn);
        });
    }

    if (homeBtn && homePageSection) {
        homeBtn.addEventListener("click", function () {
            showOnly(homePageSection);
            activateFooterButton(homeBtn);
        });
    }

    if (photoBtn && photoSection) {
        photoBtn.addEventListener("click", function () {
            showOnly(photoSection);
            activateFooterButton(photoBtn);
        });
    }
});
