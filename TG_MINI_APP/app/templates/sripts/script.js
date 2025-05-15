document.addEventListener("DOMContentLoaded", () => {
    const $ = s => document.querySelector(s);
    const allSections = document.querySelectorAll("section");
    const footerButtons = document.querySelectorAll(".footer-button");

    const sections = {
        home: $("#home-page"),
        personal: $("#personal-account"),
        messages: $("#messages"),
        favorite: $("#favorite"),
        photo: $("#analize"),
        component: $("#component"),
        feedback: $("#feedback"),
        comparison: $("#comparison"),
        comparisonresult: $("#comparison-result"),
        analizepagephoto: $("#analize-pagephoto"),
        analizepagetext: $("#analize-pagetext"),
        analize1: $("#analize-result1"),
        analize: $("#analize-result"),
        story: $("#analize-story"),
        cosmetics: $("#safe-cosmetics"),
        help: $("#help-and-supprot"),
        experts: $("#experts"),
        expert1: $("#expert1"),
        expert2: $("#expert2"),
        expert3: $("#expert3"),
        registration: $("#registration"),
        login: $("#login")
    };

    function showOnly(section) {
        allSections.forEach(sec => sec.classList.add("desactive-page"));
        section?.classList.remove("desactive-page");
    }

    function activateFooterButton(activeBtn) {
        footerButtons.forEach(btn => {
            btn.classList.remove("active-footer-button");
            const img = btn.querySelector("img");
            if (img?.src.includes("white")) img.src = img.src.replace("white", "purple");
        });
        activeBtn.classList.add("active-footer-button");
        const img = activeBtn.querySelector("img");
        if (img?.src.includes("purple")) img.src = img.src.replace("purple", "white");
    }

    // Навигация из футера
    [
        [".footer-button-profile", sections.personal],
        [".footer-button-mess", sections.messages],
        [".footer-button-like", sections.favorite],
        [".footer-button-home", sections.home],
        [".footer-button-photo", sections.photo]
    ].forEach(([btnSel, section]) => {
        const btn = $(btnSel);
        btn?.addEventListener("click", () => {
            showOnly(section);
            activateFooterButton(btn);
        });
    });

    // Назад-кнопки
    [
        [".header-personal-account .arrow-icon-left", sections.personal, sections.home],
        [".favorite-header .arrow-icon-left", sections.favorite, sections.home],
        [".analize-result-header", sections.analize, sections.cosmetics],
        [".analize-result1-header", sections.analize1, sections.cosmetics],
        [".analize-story-header .arrow-icon-left", sections.story, sections.home],
        [".analize-header .arrow-icon-left", sections.photo, sections.home],
        [".comparison-header .arrow-icon-left", sections.comparison, sections.home],
        [".comparison-result-header .arrow-icon-left", sections.comparisonresult, sections.comparison],
        [".feedback-header .arrow-icon-left", sections.feedback, sections.analize],
        [".analize-pagephoto .arrow-icon-left", sections.analizepagephoto, sections.photo],
        [".analize-pagetext .arrow-icon-left", sections.analizepagetext, sections.photo],
        [".component-header .arrow-icon-left", sections.component, sections.analize],
        [".safe-cosmetics-header .arrow-icon-left", sections.cosmetics, sections.home],
        [".header-help-and-supprot .arrow-icon-left", sections.help, sections.personal],
        [".experts-header .arrow-icon-left", sections.experts, sections.home],
        [".messages-header .arrow-icon-left", sections.messages, sections.home],
        [".expert1-header .arrow-icon-left", sections.expert1, sections.home],
        [".expert2-header .arrow-icon-left", sections.expert2, sections.home],
        [".expert3-header .arrow-icon-left", sections.expert3, sections.home]
    ].forEach(([btnSel, from, to]) => {
        $(btnSel)?.addEventListener("click", e => {
            e.preventDefault();
            showOnly(to);
        });
    });

    // Переходы по элементам
    [
        [".home-page .profile a", sections.home, sections.personal],
        [".home-page .right-column .action-item-favorite", sections.home, sections.favorite],
        [".home-page .home-main-content .actions-grid .full-width", sections.home, sections.photo],
        [".home-page .home-main-content .actions-grid .narrow-tall", sections.home, sections.comparison],
        [".safe-product-card.holyland .safe-about", sections.home, sections.analize1],
        [".safe-product-card.human .safe-about", sections.home, sections.analize],
        [".personal-account .story-analize .arrow-icon-profile", sections.personal, sections.story],
        [".registration .divider-if", sections.registration, sections.login],
        [".login .divider-if", sections.login, sections.registration],
        [".home-page .home-main-content .checked-products-header .arrow-icon", sections.home, sections.story],
        [".home-page .home-main-content .cosmetics-header .arrow-icon", sections.home, sections.cosmetics],
        [".personal-account .support-section .arrow-icon", sections.personal, sections.help],
        [".home-page .right-column .action-item-expert", sections.home, sections.experts],
        [".analize .analize-content .analize-button-photo", sections.photo, sections.analizepagephoto],
        [".analize .analize-content .analize-button-text", sections.photo, sections.analizepagetext],
        [".comparison .comparison-content .comparison-sostav-button", sections.comparison, sections.comparisonresult],
        [".home-page .expert-section .arrow-icon", sections.home, sections.experts],
        [".experts .cards-container .card1 .analysis-result", sections.experts, sections.expert1],
        [".experts .cards-container .card2 .analysis-result", sections.experts, sections.expert2],
        [".experts .cards-container .card3 .analysis-result", sections.experts, sections.expert3],
        [".home-page .expert-section .experts-list .expert-card1", sections.home, sections.expert1],
        [".home-page .expert-section .experts-list .expert-card2", sections.home, sections.expert2],
        [".home-page .expert-section .experts-list .expert-card3", sections.home, sections.expert3],
        [".analize-result .analize-result-feedback .arrow-icon", sections.analize, sections.feedback],
        [".analize-result .analize-result-exp-but", sections.analize, sections.experts],
        [".analize-result .analize-result-home-but", sections.analize, sections.home],
        [".analize-result1 .analize-result-exp-but", sections.analize1, sections.experts],
        [".analize-result1 .analize-result-home-but", sections.analize1, sections.home],
        [".analize-result .analize-result-aboutcomponent .see-all-comp", sections.analize, sections.component]
    ].forEach(([sel, from, to]) => {
        $(sel)?.addEventListener("click", e => {
            e.preventDefault();
            showOnly(to);
        });
    });

    // Регистрация
    const registrationButton = $(".registration-button");
    const loginButton = $(".login-button");
    const footer = $("#mobile-footer");

    registrationButton?.addEventListener("click", e => {
        e.preventDefault();
        if (!registrationButton.classList.contains("active-registration-button")) return;

        showOnly(sections.home);
        footer?.classList.remove("desactive-page");

    });

    loginButton?.addEventListener("click", e => {
        e.preventDefault();
        if (!loginButton.classList.contains("active-login-button")) return;

        showOnly(sections.home);
        footer?.classList.remove("desactive-page");
    });
});