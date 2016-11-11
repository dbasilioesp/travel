/**
*
*   Menu Mobile
*
**/


// Responsive Menu
var TravelMenuMobile = function(){

  var bodyElement = document.querySelector('body');
  var menuMobile = document.querySelector('.menu-mobile');
  var hamburgerIcon = document.querySelector('.header .hamburger-icon');
  var spacer = menuMobile.querySelector('.spacer');
  var panelClose = menuMobile.querySelector('.panel-close');

  spacer.addEventListener('click', closeMenu);
  panelClose.addEventListener('click', closeMenu);

  hamburgerIcon.addEventListener('click', function(event){
    event.preventDefault();

    if (bodyElement.classList.contains('active-responsive')) {
        closeMenu();
    } else {
        openMenu();
    }
  });

  function closeMenu(){
    bodyElement.classList.remove('active-responsive');
    menuMobile.classList.remove('open');
    hamburgerIcon.classList.remove('open');
  }

  function openMenu(){
    bodyElement.classList.add('active-responsive');
    menuMobile.classList.add('open');
    hamburgerIcon.classList.add('open');
  }

  (function submenuDropdown(){
    var responsiveMenu = document.querySelector('.menu-mobile');
    var dropdowns = responsiveMenu.querySelectorAll('.dropdown');
    
    $.each(dropdowns, attachClick);

    function attachClick (index, trigger){

      var dropdownMenu = trigger.querySelector('.dropdown-menu');

      if (!dropdownMenu) {
        return;
      }

      var button = dropdownMenu.previousElementSibling;
      var sublinks = dropdownMenu.querySelectorAll('li');
      var sublinksInverse = Array.prototype.slice.call(sublinks, 0).reverse();

      if (button) {
        button.addEventListener('click', accordion);
      }

      function accordion (event) {

        event.preventDefault();

        TweenMax.set(dropdownMenu, {height: "auto", maxHeight: "999px"});

        if (trigger.classList.contains('open')) {
          // To close
          TweenMax.staggerTo(sublinksInverse, 0.2, {autoAlpha: 0}, 0.15);
          TweenMax.to(dropdownMenu, 0.8, {height: 0});
        }
        else {
          // To open
          TweenMax.from(dropdownMenu, 0.6, {height: 0});
          TweenMax.staggerTo(sublinks, 0.5, {autoAlpha: 1}, 0.15);
        }

        trigger.classList.toggle('open');

      }

    }

  })();
  
};
