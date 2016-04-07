$(document).ready(function(){
	$('.tab-content').css('height',$(window).height()-$('header').height()+'px');
	$('aside ul li').on('click',function(){
		// $('.tab-pane').removeClass('current');
		// $('.tab-pane.active').addClass('current');
		var liToTop = $(this).offset().top -80;
		$('.cursor').css('top',liToTop+'px');
	});
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
	$('a[href="#cxn01"]').on('shown.bs.tab', function (e) {
		// $('.tab-pane').removeClass('current');
		// $('.tab-pane.active').addClass('current');
	});
	// $('a[href="#cxn01"]').on('click', function () {
	//
	// })
});
