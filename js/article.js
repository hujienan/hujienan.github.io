$(function(){
	$(window).scroll(function(){
		var scrValue = $(this).scrollTop();
		if(scrValue >= 120){
			$("#toTop").show();
		}else{
			$("#toTop").hide();
		}
	});
	$("#toTop").click(function(){
		$(window).scrollTop(0);
	});
	$("#backToList").click(function(){
		window.location = "../blog.html";
	});
})