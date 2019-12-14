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


// Mobile Navigation

    (function($){
			$(function() {
				$('.menu__icon').on('click', function() {
				$(this).closest('.menu').toggleClass('menu_state_open');

                    $('.hide-menu').on('click', function() {
                    $(this).closest('.menu').toggleClass('menu_state_open');
                    });
				});
			});
	})(jQuery);
});;





