
import 'owl.carousel2';

var burger = $('.navbar-burger');
var mainMenu = $('.navbar-menu');
burger.on('click', function(){
    burger.toggleClass('is-active');
    mainMenu.toggleClass('is-active');
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        autoplay: false,
        loop: true,
    });
  });


