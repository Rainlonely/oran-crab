$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()-40+'px');
	$('aside ul li').on('click',function(){
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});

	$('.nav-control').on('click',function(){
		if($(this).hasClass('on')){
			hideNavSubtitle();
		} else {
			showNavSubtitle();
		}
	});
	function hideNavSubtitle(){
		$('.nav-control').removeClass('on');
		$('aside ul li a').removeClass('on');
	}
	function showNavSubtitle(){
		$('.nav-control').addClass('on');
		$('aside ul li a').addClass('on');
	}

	

	/*******Cartoon1********/
	var cxn01CartoonShow = function(){
		$('#cxn01_1').transition({opacity: 1, duration: 500});
		$('#cxn01_2').transition({opacity: 1, y: '0', duration: 200});
		$('#cxn01_3').transition({opacity: 1, y: '0', delay: 200 ,duration: 300});
	}
	var cxn01CartoonHide = function(){
		$('#cxn01_1').transition({opacity: 0, duration: 500});
		$('#cxn01_3').transition({opacity: 0, y: '40', duration: 300});
		$('#cxn01_2').transition({opacity: 0, y: '40', duration: 200, delay: 300});
	}
	cxn01CartoonShow();
	$('a[href="#cxn01"]').on('shown.bs.tab', function (e) {cxn01CartoonShow();});
	$('a[href="#cxn01"]').on('hide.bs.tab', function (e) {cxn01CartoonHide();});
	/*******End Cartoon1********/
});

