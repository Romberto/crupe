window.addEventListener('load', function(){


    $('.product__link').on('click', function(e){
        e.preventDefault();
        $('footer, main, header').css('filter', 'blur(3px)')
        $('.popup').fadeIn();
    })

    $('.popup__close').on('click', function(e){
        e.preventDefault()
        $('footer, main, header').css('filter', 'none')
        $('.popup').fadeOut();
    })

    $('.mobile__main-menu').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('is-active')
        $('.mobile__menu').toggleClass('is-active')
    
    })



})
