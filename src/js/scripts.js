$(document).on('scroll', function (e) {
    var scrollTop = $(document).scrollTop();
    var pageHeaderHeight = $('.page-header').height();
    var headerBarHeight = $('.header-bar').height();
    if((pageHeaderHeight-headerBarHeight) < scrollTop) {
    	$('.header-bar').addClass('background');
    }
    else {
    	$('.header-bar').removeClass('background');
    }
});

$(document).ready(function() {
	$("#show-mobile-menu").click(function() {
		console.log('click');
		$(".horizontal-nav").toggleClass('open');
	});
});
