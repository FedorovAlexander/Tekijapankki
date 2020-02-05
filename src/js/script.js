svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {

  $('.header__menu-icon').on('click', function() {
    $('.header__nav-wrapper--mobile').toggleClass('active');
  })

  function addToList() {
    $('.-js-add .button').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).text(function(i, text) {
        return text === "Pyydä tarjous!" ? "Lisätty listalle" : "Pyydä tarjous!";
      })
      $('.-js-count-button').find('.button').addClass('active');

      if (!$(".-js-add .button.active").length) {
        $('.-js-count-button').find('.button').removeClass('active');
      }
      if ($(".-js-add .button.active").length) {
        if ($(window).width() < 700) {
          $('.-js-counter').text('(' + $(".-js-add .button.active").length + ')');
       }
       else {
        $('.-js-counter').text($(".-js-add .button.active").length);
       }
        
      } else {
        $('.-js-counter').text('');
      }
    })
  }
  addToList();
});
