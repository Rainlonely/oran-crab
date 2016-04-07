$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()+'px');
	$('aside ul li').on('click',function(){
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});

	var cxn01CartoonShow = function(){
		$('#cxn01_2').transition({opacity: 1, marginBottom: '40px'});
		$('#cxn01_3').transition({opacity: 1, marginTop: '0px'});
	}

	$('a[href="#cxn01"]').on('shown.bs.tab', function (e) {
  	cxn01CartoonShow();
	});
	
});