$(document).ready(function() {
    $('.sliders').slick({
        infinite: false, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: false, 
        adaptiveHeight: true 
    });

   
    function updateActiveTabBySlide(slideIndex) {
       
        var tabIndex = Math.floor(slideIndex);
        
       
        $('.tab').removeClass('active');
        $('.tab[data-tab="' + tabIndex + '"]').addClass('active');
    }

  
    $('.sliders').on('afterChange', function(event, slick, currentSlide) {
       
        updateActiveTabBySlide(currentSlide);
       if (currentSlide === 0) {
        $('#left').hide();
    } else {
        $('#left').show();
    }

    if (currentSlide === slick.slideCount - 1) {
        $('#right').hide();
    } else {
        $('#right').show();
    }
     
    });

         $('#left').hide(); 
  
    $('.tab').on('click', function() {
       
        var tabIndex = $(this).data('tab');
        
       
        $('.sliders').slick('slickGoTo', tabIndex);
    });

    
    $('#right').click(function(){
        $('.sliders').slick('slickNext'); 
    });

    $('#left').click(function(){
        $('.sliders').slick('slickPrev'); 
    });

   
    updateActiveTabBySlide(0);
});

      