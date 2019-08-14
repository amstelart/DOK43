// Если на проекте jQuery
$( document ).ready(function() {
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
});
