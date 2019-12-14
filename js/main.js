// При клике на кнопку Show More показывает больше работ в портфолио
$(document).ready(function(){
    $(".button_show-more").click(function(){
        $(".hidden").toggleClass("visible"); return false;
    });


// Скрывает кнопку при развернутом портфолио
    $(".button_show-more").click(function(){
        $(".button_hidden").toggleClass("hidden"); return false;
    });


// Для прокрутки при скроле
    new WOW().init();


// Плавная прокрутка к якорю
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });


// Скрытие кнопки Scrollup
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
    });


    // $(".nav__li--show").click(function(){
    //     $(".menu_state_open").removeClass("menu_state_open"); return false;
    // });

});;





