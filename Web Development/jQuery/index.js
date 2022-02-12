$("h1").css("color", "red");

$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");

$("h1").hasClass("big-title");

$("h1").text("GoodBye!");
$("button").text("Buybuy");
$("button").html("<em>Hello</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://wwww.hao123.com");
console.log($("h1").attr("class"));

$("h1").click(function() {
  $("h1").css("color", "purple");
})


$("button").click(function() {
  $("h1").css("color", "black");
// })

$(document).keypress(function(event) {
  $("h1").text(event.key);
})

$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").append("<button>append</button>")
$("h1").prepend("<button>prepend</button>")

$("button").on("click", function(){
  $("h1").toggle();
})

$("button").on("click", function(){
  $("h1").fadeOut();
})

$("button").on("click", function(){
  $("h1").fadeToggle();
})

$("button").on("click", function(){
  $("h1").slideToggle();
})

$("button").on("click", function(){
  $("h1").animate({opacity: 0.5});
})

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.2});
})
$("button").on("click", function(){})
$("button").on("click", function(){
  console.log("this is log in the github the second time the third time the forth time")
})
$("button").on("click", function(){
  console.log("update from sidebranch")})

  $("button").on("click", function(){
    console.log("update from localbranch")})
