$(document).on('scroll', function (e) {
    var scrollTop = $(document).scrollTop();
    var pageHeaderHeight = $('.page-header').height();
    var headerBarHeight = $('.header-bar').height();
    if((pageHeaderHeight-headerBarHeight*3) < scrollTop) {
    	$('.header-bar').addClass('background');
    }
    else {
    	$('.header-bar').removeClass('background');
    }
});

var initDesignCanvas = function initDesignCanvas() {
    canvas = document.getElementById("canvas-design");
    exportRoot = new lib.w_des();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
};

$(document).ready(function() {
	$("#show-mobile-menu").click(function() {
		console.log('click');
		$(".horizontal-nav").toggleClass('open');
	});

    initDesignCanvas();
});
