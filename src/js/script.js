svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {
  $('.header__menu-icon').on('click', function() {
    $('.header__nav-wrapper--mobile').toggleClass('active');
  })
});
