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

  // function filterList() {
  //   var tagsArray = new Array();
  //   var contractorsList = $('.contractors__list');
  //   var items = $('.contractors__item');
  //   var tag = $('.search__tags-list .search__tags-item');



  //   tag.on('click', function(e) {
  //     e.preventDefault();
  //     $(this).toggleClass('active');
  //     selectTagsArray = new Array();

  //     tag.each(function() {
  //       if($(this).hasClass('active')) {
  //         selectTagsArray.push($(this).find('.search__tags-link').text());
  //       }
  //     })
  //     console.log(selectTagsArray);

  //     items.each(function() {
  //       var foo = $(this).find('.contractors__tag');
  //       var itemTagsArray = new Array();
  //       foo.each(function() {
  //         itemTagsArray.push($(this).text())
  //         return itemTagsArray;
  //       })


  //       console.log('-------------------');
  //       // console.log(itemTagsArray);


  //       for (var i = 0; i < selectTagsArray.length; i++) {
  //         if($.inArray( selectTagsArray[i],itemTagsArray)) {
  //           $(this).hide();
  //         } else {
  //           $(this).show();
  //         }
  //       }
      
  //       // console.log(itemTagsArray)
  //     })
  //   })
  //   // console.log('=======================')
  // }

  // filterList();


  $('.tagsort-tags-container').tagSort({
    items: '.contractors__item',
    tagElement: 'li',
    tagClassPrefix: false,
    itemTagsView: false,
    itemTagsSeperator: ' ',
    itemTagsElement: false,
    sortType: 'exclusive',
    tagAttr: 'data-item-tags',
    fadeTime: 0
  });



});
