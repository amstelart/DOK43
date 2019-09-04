// Если на проекте jQuery
$( document ).ready(function() {

  $(".phone-mask").mask("+7(999) 999-9999");

  $('#main-slider').slick({
    autoplay: true,
    fade: true,
    speed: 600,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false
  });
  $('.gallery-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  });

  var t0;

  $('#toTop').hide().on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 300);
  });

  $(window).on('scroll', function(){
    clearTimeout(t0);
    t0 = setTimeout(function () {
        showScrollTopButton();
      }, 100);
  });

  showScrollTopButton();

  function showScrollTopButton(){
    if ( $(document).scrollTop() >= 900 ) {
      $('#toTop').fadeIn();
    }
    else {
      $('#toTop').fadeOut();
    }
  }
});
