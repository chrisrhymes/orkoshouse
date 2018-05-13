var burger = $('.navbar-burger');
var mainMenu = $('.navbar-menu');
burger.on('click', function(){
    burger.toggleClass('is-active');
    mainMenu.toggleClass('is-active');
})