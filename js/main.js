$(document).ready(function(){
  $('.news-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  });
  
  $('.menu__btn').on('click', function(){
    $('.header__menu__list').toggleClass('header__menu__list--active');
  });
});


