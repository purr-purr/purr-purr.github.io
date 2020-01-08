// Our Projects Section Slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        prevArrow: "<img src='../HTML/img/icons/left-arrow.svg' class='prev project_arrow' alt='prev'>",
        nextArrow: "<img src='../HTML/img/icons/right-arrow.svg' class='next project_arrow' alt='next'>",
        slidesToScroll: 1,
        responsive: [
                        {
                            breakpoint: 900,
                            settings: {
                            slidesToShow: 1
                            }
                        },
                    ]
    });
});

// Rent Section Slider
$(document).ready(function(){
    $('.card__slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        prevArrow: "<img src='../HTML/img/icons/left-arrow.svg' class='prev rent-arrow' alt='prev'>",
        nextArrow: "<img src='../HTML/img/icons/right-arrow.svg' class='next rent-arrow' alt='next'>",
        slidesToScroll: 1
    });
})

