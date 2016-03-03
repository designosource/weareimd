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