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


//Even Listener
$("button").click(function(){
    
    //$("h1").text("You clicked the button")

    $("h1").toggleClass("style1")

})


$("#btn").click(function(){
    //$("#div1").hide();
//$("#div1").show(2000);

$("#div1").show(2000).hide(2000)
})

$("#btn").click(function(){
    
    //$("#div1").hide();
//$("#div1").show(2000);

$("#div1").slideUp(2000).slideDown(2000)
})