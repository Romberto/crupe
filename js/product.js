$(function(){
    var linc2 = $('.menu__popap'),
    timeoutId;
    $('.product_popap').hover(function(){
        clearTimeout(timeoutId);
        linc2.show();
    }, function(){
        timeoutId = setTimeout($.proxy(linc2,'hide'), 1000)
    });
    linc2.mouseenter(function(){
        clearTimeout(timeoutId); 
    }).mouseleave(function(){
        linc2.hide();
    });




    



})