$(function(){
    $('.gruau_slider').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })

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
    
    $('.mobile__main-menu').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('is-active')
        $('.mobile__menu').toggleClass('is-active')
    
    })
          
})

