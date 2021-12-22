$(document).ready(function () {
  // navbar scroll animation
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

  //typing animation script
  var typed = new Typed('.animate', {
    strings: [
      "Developer",
      "Designer",
      "Progammer",
      "Gamer"
    ],
    typeSpeed:100,
    backSpeed: 80,
    loop: true
  });

  var typed = new Typed('.animate-2', {
    strings: [
      "Developer",
      "Designer",
      "Progammer",
      "Gamer"
    ],
    typeSpeed:100,
    backSpeed: 80,
    loop: true
  });

  var typed = new Typed('.testing', {
    strings: [
      "progress",
    ],
    typeSpeed:100,
    backSpeed: 40,
    loop: true
  });

});

