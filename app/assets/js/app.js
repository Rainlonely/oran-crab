$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()+'px');
	$('aside ul li').on('click',function(){
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});
});