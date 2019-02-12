$('.about-match__more').on('click touchstart', function (e) {
  e.preventDefault();
  var text = $(this).html();

  $('.about-match__hidden').slideToggle();
  $(this).hide();
});