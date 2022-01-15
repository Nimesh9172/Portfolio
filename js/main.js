$(document).ready(function () {
  // navbar scroll animation
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar").addClass("scroll");
      $(".navbar-brand").addClass("scroll");
      $("#lio").addClass("text-white");
      $(".nav-link").removeClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
      $(".navbar-brand").removeClass("scroll");
      $("#lio").removeClass("text-white");
      $(".nav-link").addClass("scroll");
    }
  });

  //typing animation script
  var typed = new Typed(".animate", {
    strings: ["Developer", "Designer", "Progammer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  var typed = new Typed(".animate-2", {
    strings: ["Developer", "Designer", "Progammer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  $(document).ready(function () {
    $("#divshow").click(function () {
      $("#mydiv").toggle("slide");
      if($(this).text() == 'Hide')
       {
           $(this).text('Read more...');
       }
       else
       {
           $(this).text('Hide');
       }
           });
    });
  });
