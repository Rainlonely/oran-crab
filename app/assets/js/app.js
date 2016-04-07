$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()+'px');
	$('aside ul li').on('click',function(){
		// $('.tab-pane').removeClass('current');
		// $('.tab-pane.active').addClass('current');
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});
<<<<<<< HEAD

	var cxn01CartoonShow = function(){
		$('#cxn01_2').transition({opacity: 1, y: '0',duration: 200});
		$('#cxn01_3').transition({opacity: 1, y: '0',delay: 200 ,duration: 200});
	}
	var cxn01CartoonHide = function(){
		$('#cxn01_2').transition({opacity: 0, y: '40'});
		$('#cxn01_3').transition({opacity: 0, y: '40'});
	}

=======
	$('.ele-hide').on('webkitTransitionEnd', function () {
		// if (!$(this).hasClass('active')) {
		// 	$(this).css('overflow', 'hidden');
		// }
		// $('.tab-pane.active').css('overflow', 'auto');
		// $('.tab-pane').not('.active').css('overflow', 'hidden');
		// alert('end');
	});
	// var cxn01CartoonShow = function(){
	// 	$('#cxn01_2').transition({opacity: 1, marginBottom: '40px'});
	// 	$('#cxn01_3').transition({opacity: 1, marginTop: '0px'});
	// }
	//
>>>>>>> 0ae3750f462a60833132a1b5c6a3d3e312c1106e
	$('a[href="#cxn01"]').on('shown.bs.tab', function (e) {
		// $('.tab-pane').removeClass('current');
		// $('.tab-pane.active').addClass('current');
	});
<<<<<<< HEAD
	$('a[href="#cxn01"]').on('hidden.bs.tab', function (e) {
  	cxn01CartoonHide();
	});
});
=======
	// $('a[href="#cxn01"]').on('click', function () {
	//
	// })
});
>>>>>>> 0ae3750f462a60833132a1b5c6a3d3e312c1106e
