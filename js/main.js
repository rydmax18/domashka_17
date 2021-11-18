$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
