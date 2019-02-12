$('.timezone-select__visible').on('click touchstart', function (e) {
  e.preventDefault();
  $(this).toggleClass('_active');
  $(this).closest('.timezone-select').find('.timezone-select__dropdown').slideToggle();

});

$('.timezone-select__option').on('click touchstart', function (e) {
  e.preventDefault();

  var dataValue = $(this).data('value'),
      textValue = $(this).html();

  $(this).closest('.timezone-select').find('.timezone-select__hidden').val(dataValue);
  $(this).closest('.timezone-select').find('.timezone-select__choosen').html(textValue);

  $('.timezone-select__dropdown').slideToggle();
});