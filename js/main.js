$(document).ready(function () {
  // navbar scroll animation
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar").addClass("scroll");
      $(".navbar-brand").addClass("scroll");
      $("#lio").addClass("text-white");
      $(".nav-text").addClass("scroll");
    } else {
      $("#lio").removeClass("text-white");
      $(".navbar").removeClass("scroll");
      $(".navbar-brand").removeClass("scroll");
      $(".nav-text").removeClass("scroll");
    }
  });

  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  //typing animation script
  var typed = new Typed(".animate", {
    strings: ["Developer", "Designer", "Programmer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  var typed = new Typed(".animate-2", {
    strings: ["Developer", "Designer", "Programmer", "Gamer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  $(document).ready(function () {
    $("#divshow").click(function () {
      $("#mydiv").toggle("slide");
      if ($(this).text() == "Hide") {
        $(this).text("Read more...");
      } else {
        $(this).text("Hide");
      }
    });
  });
});
