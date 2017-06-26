$(document).ready(function() {
	
	$('#top').lavalamp({
    	easing: 'easeOutBack'
	});

	$('.box').hide().fadeIn(2000);

	$(".list li").hover(function() {
		$(this).addClass('active-l');
	}, function() {
		$(this).removeClass('active-l');
	});

	$("#wsnooker2").hover(function(){
		$(this).animate({"width": "55px"}, 300);
	},
	function(){
		$(this).animate({"width": "50px"}, 300);
	});

	$("#score2").hover(function(){
		$(this).animate({"width": "83px"}, 300);
	},
	function(){
		$(this).animate({"width": "78px"}, 300);
	});

	$("#logo3").hover(function(){
		$(this).animate({"width": "85px"}, 300);
	},
	function(){
		$(this).animate({"width": "80px"}, 300);
	});

	$(".mark").hover(function() {
		$(this).addClass('active-l');
	}, function() {
		$(this).removeClass('active-l');
	});
});