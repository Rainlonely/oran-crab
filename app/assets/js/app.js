$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()+'px');
	$('aside ul li').on('click',function(){
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});


	var cxn01CartoonShow = function(){
		$('#cxn01_2').transition({opacity: 1, y: '0',duration: 200});
		$('#cxn01_3').transition({opacity: 1, y: '0',delay: 200 ,duration: 200});
	}
	var cxn01CartoonHide = function(){
		$('#cxn01_2').transition({opacity: 0, y: '40'});
		$('#cxn01_3').transition({opacity: 0, y: '40'});
	}


	$('.ele-hide').on('webkitTransitionEnd', function () {
		
	});
	

	$('a[href="#cxn01"]').on('shown.bs.tab', function (e) {
		cxn01CartoonShow();
	});

	$('a[href="#cxn01"]').on('hidden.bs.tab', function (e) {
  	cxn01CartoonHide();
	});

});

