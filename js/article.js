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
		$("html, body").animate({
			scrollTop: 0
		}, 'fast');
	});
})