
var main = function(){
    $("#navbtn").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top}, 2000);
    });
    $("#work").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top}, 2000);
    });
    $("#main-nav li").hover(function(){
        $(this).css("border-bottom", "4px solid white");
        $(this).mouseleave(function(){
            $(this).css("border-bottom", "none");
        });
    });
    $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');

    if (category === "nav-consumer") {
      $(".thumbnail").removeClass("selected");
      $(".consumer").addClass("selected");
    } 
    	else if (category === "nav-mobile") {
      $(".thumbnail").removeClass("selected");
      $(".mobile").addClass("selected");
    } 
    	else if (category === "nav-commerce") {
      $(".thumbnail").removeClass("selected");
      $(".commerce").addClass("selected");
    } 
    	else if (category === "nav-enterprise") {
      $(".thumbnail").removeClass("selected");
      $(".enterprise").addClass("selected");
    } 
    	else if (category === "nav-all") {
      $(".thumbnail").removeClass("selected");
      
    }
    
    
    
  });
};


$(document).ready(main);