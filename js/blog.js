$(function(){
	$("#homeBtn").click(function(){
		window.location = "./index.html";
	});
	$("#homeBtn span").mouseover(function(){
		$(this).css({
			"font-size": "3rem",
			"color": "white",
			"background": "#333333"
		});
		$(this).text("Home");
	});
	$("#homeBtn span").mouseout(function(){
		$(this).css({
			"color": "#333333",
			"font-size": "4rem",
			"background": "white"
		});
		$(this).text("H");
	});
});