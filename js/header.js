

$('.open-menu').click(function() {
  $(this).toggleClass('active');
  $('.new-menu').addClass('active')
});


    $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".new-menu" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });

    $('.slider1').owlCarousel({
    center: true,
    items:2,
    nav:false,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:7,
            nav:true
            
        }
    }
});
        $('.slider2').owlCarousel({
    center: true,
    items:2,
    nav:false,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:5,
            nav:true
            
        }
    }
});