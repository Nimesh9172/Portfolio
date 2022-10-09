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
  let typed = new Typed(".animate",{
    strings: ["Developer","Designer","Programmer","Gamer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  let typed2 = new Typed(".animate-2",{
    strings: ["Developer","Designer","Programmer","Gamer"],
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

// matrix raining effect start

let c = document.getElementById("binary");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
let font_size = 15;
let columns = c.width / font_size;
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ120";
character = character.split("");
let drops = [];

function init() {
  drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(29, 37, 45, .1)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = "red";
  ctx.font = font_size + "px arial";
  for (let i = 0; i < drops.length; i++) {
    let text = character[Math.floor(Math.random() * character.length)];
    ctx.fillText(text,i * font_size,drops[i] * font_size);
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

init();
let raining = setInterval(draw,33);

const handleResize = () => {
  clearInterval(raining);
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  columns = c.width / font_size;
  c.setAttribute("width",c.width);
  c.setAttribute("height",c.height);
  init()
  raining = setInterval(draw,100);
};

window.addEventListener("resize",handleResize);
// matrix raining effect  end
