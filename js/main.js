$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop()>50){
      $('.navbar').addClass('scroll')
      $('#lio').addClass('text-white')
      $('.nav-link').removeClass('scroll')
    } else{
      $('.navbar').removeClass('scroll')
      $('#lio').removeClass('text-white')
      $('.nav-link').addClass('scroll')
    };
  });
});

