svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {
  tagsSort();
  buttonToggle();
  addToList();

  function buttonToggle() {
    $('.header__menu-icon').on('click', function() {
      $('.header__nav-wrapper--mobile').toggleClass('active');
    })
  }
  
  function addToList() {
    var contractors = $('.contractors__item');

    $('.-js-add .button').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).find('.button__text').text(function(i, content) {
        return content === "Pyydä tarjous!" ? "Lisätty listalle" : "Pyydä tarjous!";
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

  function tagsSort() {
    $('.taglist').tagSort({
      items: '.contractors__item',
      tagElement: 'li',
      tagClassPrefix: false,
      itemTagsView: false,
      itemTagsSeperator: ' ',
      itemTagsElement: false,
      sortType: 'exclusive',
      tagAttr: 'data-item-tags',
      fadeTime: 200
    });
  }
});
