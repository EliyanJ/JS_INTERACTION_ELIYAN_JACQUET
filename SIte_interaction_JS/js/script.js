// Je vérifie que le DOM est chargé
document.addEventListener('DOMContentLoaded', function () {

    // Nouveau slider avec la classe que je vise
    const swiper = new Swiper(".mon-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        },
        autoplay: {
            delay: 3000
        }
    });

});
