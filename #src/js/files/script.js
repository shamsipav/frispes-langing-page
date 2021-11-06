// Header
const headerElement = document.querySelector(".header");

const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
        headerElement.classList.remove("_scroll");
    } else {
        headerElement.classList.add("_scroll");
    }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

// Slider
const swiper = new Swiper(".swiper", {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        579.98: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
    navigation: {
        nextEl: ".space__navigation-next",
        prevEl: ".space__navigation-prev",
    },
    pagination: {
        el: ".space__pagination",
        type: "fraction",
    },
});
