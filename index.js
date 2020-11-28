//html selector
$(".my-div h1").text("Hello");
$("#p3,h1").text("Goodbye");
$("#p2").text("Welcome");

//text manipulation and some method
$("#p1").html("Good Day");
$("#p3").append(" Welcome");
$("#p1").prepend("Welcome");

//attribute manipulation
$("a").attr("href","https://www.google.com/");

//CSS Style manipulating

$("h3").css("color","red");
$("h3").css("font-size","4rem");

$("h2").css({"color":"green","font-size":"2rem"});

$("h4").addClass("style1 style2");
