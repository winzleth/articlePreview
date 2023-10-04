$(document).ready(function(){
	$("#displaySns").click(function(){
		$("#toShow").fadeToggle();
		$("#toShow").css("display","block");
		$(this).toggleClass('active');
	});
});