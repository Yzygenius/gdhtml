$(function () {
    function numAdd(el) {
        var lastNum = el.data("num"); el.text(0); var i = 0; var timer = setInterval(function () {
            if (i > 56) { el.text(i += 50); } else { el.text(i += 6); }
            if (i >= lastNum) { clearInterval(timer); el.text(lastNum); if (lastNum == 28 || lastNum == 56 || lastNum == 800 || lastNum == 5000) { el.text(lastNum + "+"); } };
        }, 60)
    }
    $(".priorities").waypoint(function (direction) { if (direction == "down") { numAdd($(".num").eq(0)); numAdd($(".num").eq(1)); numAdd($(".num").eq(2)); numAdd($(".num").eq(3)); numAdd($(".num").eq(4)); } }, { offset: "64%" }); jQuery(".nav").slide({ type: "menu", titCell: ".m", targetCell: ".sub", effect: "slideDown", delayTime: 300, triggerTime: 100, returnDefault: true }); var anim = $(".anim"); setTimeout(function () {
        $(window).scroll(function () { roll(); })
        $(window).resize(function () { roll(); })
        roll();
    }, 6)
    function roll() { var oHeight = $(window).height(); var ScrVal = $(window).scrollTop(); anim.each(function (i) { if (ScrVal + oHeight > anim.eq(i).offset().top + 100) { anim.eq(i).addClass("anim-show"); } }) }
    $(window).scroll(function () { var h = $(document).scrollTop(); var j = window.screen.height; var o = $(".fuSlide").offset().top; if (h > o - 100) { $('.digital').addClass('active'); } else { $('.digital').removeClass('active'); } }); $(window).scroll(function () {
        if ($(window).scrollTop() < 100) { $('.sidetop').hide(); } else { $('.sidetop').show(); }
        if ($(window).scrollTop() < 100) { $('#headdiv').stop().animate({ "top": "0px" }, 100); $('.logo').css("padding-top", "13px"); $('.nav .mmm').css("padding-top", "40px"); $('.nav .m').css("background-position", "right 46px"); $('.nav .sub').css("top", "86px"); $('.top02').css("height", "86px"); $("#top_bgs").css("height", "0") } else { $('#headdiv').stop().animate({ "top": "-4px" }, 100); $('.top02').css("height", "75px"); $('.logo').css("padding-top", "7px"); $('.nav .mmm').css("padding-top", "30px"); $('.nav .m').css("background-position", "right 35px"); $('.nav .sub').css("top", "67px"); $("#top_bgs").css("height", "7px") }
    }); $('.ck-slide').ckSlide({ autoPlay: true }); $(".sub-mouse").find("img").click(function () { var minheight = $(".i_one").offset().top - 75; $('html,body').animate({ scrollTop: minheight }, 500) });
});