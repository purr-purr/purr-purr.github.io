// При клике на кнопку Show More показывает больше работ в портфолио
$(document).ready(function(){
    $(".button_show-more").click(function(){
        $(".hidden").toggleClass("visible"); return false;
    });
});;

// Скрывает кнопку при развернутом портфолио
$(document).ready(function(){
    $(".button_show-more").click(function(){
        $(".button_hidden").toggleClass("hidden"); return false;
    });
});;