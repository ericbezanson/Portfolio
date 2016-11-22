
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

    if (category === "nav-js") {
      $(".thumbnail").removeClass("selected");
      $(".js").addClass("selected");
    } 
    	else if (category === "nav-ang") {
      $(".thumbnail").removeClass("selected");
      $(".ang").addClass("selected");
    } 
    	else if (category === "nav-design") {
      $(".thumbnail").removeClass("selected");
      $(".design").addClass("selected");
    } 
    	else if (category === "nav-webop") {
      $(".thumbnail").removeClass("selected");
      $(".webop").addClass("selected");
    } 
    	else if (category === "nav-all") {
      $(".thumbnail").removeClass("selected");
      
    }
    
    
    
  });
};


$(document).ready(main);