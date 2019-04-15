$('.toggler').on('click', function (e) {
    e.preventDefault();

    var target = $(this).data('target');
    $('.modal').removeClass('_active');

    $(target).toggleClass('_active');
    $('.mask').fadeIn();
});

$('.modal__close, .mask').on('click', function (e) {
    e.preventDefault();

    $('.modal').removeClass('_active');
    $('.mask').fadeOut();

});