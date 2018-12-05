$(document).ready(function () {
	"use strict";
	/*************** scroll-top ******************/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50)
			$(".nav").addClass("navbar2"),
			$(".navbar-brand").addClass("navbar-brand2"),
			$(".cat").addClass("cahnge-color")	
		else
			$(".nav").removeClass("navbar2"),
		    $(".navbar-brand").removeClass("navbar-brand2"),
			$(".cat").removeClass("cahnge-color")			     
	});
	$(".fa-search").click(function() {
		$(".clicked").toggleClass("aa"),
		$(".r").toggleClass("aaa"),
		$(".cate").toggleClass("aaaa");	
	});
	$(".navbar-toggler").click(function() {
		$(".r").toggleClass("apear");
	});
	
	/*************** scroll-top ******************/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700)
			$(".scrolled").show();
		     else 
			     $(".scrolled").hide();
	});
	$(".scrolled").click(function()
	{
		$("html,body").animate({scrollTop:0},600);
	});
	
});
/*loading page*/
$(window).on('load', function () {
      $(".sk-cube").fadeOut(2000,function(){
		  $(".sk-cube").parent().fadeOut(2000);
		  $("body").css("overflow","auto")
	  });
 });