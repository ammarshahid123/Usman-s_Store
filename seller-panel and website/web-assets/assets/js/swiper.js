document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-products", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".likely-products", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});





// **Swiper Slider Initialization for Vertical Banner**
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.banner-vertical-slider', {
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
