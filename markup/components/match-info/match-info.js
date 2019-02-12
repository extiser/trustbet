$('.match-info-nav__item').on('click touchstart', function (e) {
  e.preventDefault();
  var hash = $(this).attr('href');
  var offset = $(hash).offset().top;
  
  $('html, body').animate({scrollTop: offset - 50}, 500, 'swing');

});