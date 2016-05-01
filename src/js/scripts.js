$(document).on('scroll', function (e) {
    headerBackground();
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

    headerBackground();

    initDesignCanvas();

    var intervalTime = 2000;

    setInterval(function() {
        discoCycle(intervalTime);
    },intervalTime*6);

    setInterval(function() {
        neonCycle(intervalTime);
    },intervalTime*3)

    neonCycle(intervalTime);
    discoCycle(intervalTime);

    $("#mobile-menu").on("click",function(){
        $(this).focus();
        console.log(this);
    });
    
});

function discoBlack() {
    $("#disco-target").css("background-color","rgba(0,0,0,0.4)");
}

function discoRed() {
    $("#disco-target").css("background-color","rgba(231, 59, 53, 0.9)");
}

function discoBlue() {
    $("#disco-target").css("background-color","rgba(103, 198, 229, 0.9)");
}

function discoYellow() {
    $("#disco-target").css("background-color","rgba(255, 209, 34, 0.9)");
}


function neonBlack(){
    $("#neon-target").css("text-shadow","0.06em 0.06em 0px rgba(0,0,0,0.4)");
}

function neonRed() {
    $("#neon-target").css("text-shadow","0.06em 0.06em 0px rgba(231, 59, 53, 0.9)");
}

function neonYellow() {
    $("#neon-target").css("text-shadow","0.06em 0.06em 0px rgba(255, 209, 34, 0.9)");
}

function neonBlue(){
    $("#neon-target").css("text-shadow","0.06em 0.06em 0px rgba(103, 198, 229, 0.9)");
}


function discoCycle(x){
    var intervalTime = x;

    setTimeout(function() {
        discoBlack();
    }, intervalTime);

    setTimeout(function() {
        discoYellow();
    }, intervalTime*2);

    setTimeout(function() {
        discoBlack();
    }, intervalTime*3);

    setTimeout(function() {
        discoBlue();
    }, intervalTime*4);

    setTimeout(function() {
        discoBlack();
    }, intervalTime*5);

    setTimeout(function() {
        discoRed();
    }, intervalTime*6);
}

function neonCycle(x){
    var intervalTime = x/2;

    setTimeout(function() {
        neonYellow();
    }, intervalTime);

    setTimeout(function() {
        neonBlue();
    }, intervalTime*2);

    setTimeout(function() {
        neonRed();
    }, intervalTime*3);
}

function headerBackground(){
    var scrollTop = $(document).scrollTop();
    var pageHeaderHeight = $('.page-header').height();
    var headerBarHeight = $('.header-bar').height();
    if((pageHeaderHeight-headerBarHeight*3) < scrollTop) {
        $('.header-bar').addClass('background');
    }
    else {
        $('.header-bar').removeClass('background');
    }
}