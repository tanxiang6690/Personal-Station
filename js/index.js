$(function(){
    $('#fullpage').fullpage({
        anchors:["page1","page2","page3","page4","page5","page6"],
        fixedElements:'.navbar',
        lianjie:'.lianjie',
        resize:'true',
        /*回调函数*/
        afterLoad: function(anchorLink, index){
            if(index==1){
                $(".page_w1").transition({scale:(1,1),opacity:1,delay:1});
                $(".page_w2").transition({scale:(1,1),opacity:1,delay:1});
            }else if(index==2){
                $(".tupian").transition({scale:(1,1),opacity:1});
                $(".ziwojieshao").transition({top:450});
                $(".page2_bg1").addClass("fadeInRightBig");
                $(".page2_bg2").addClass("fadeInLeftBig")
            }else if(index==3){
                $(".pcimg").transition({rotateY:360,delay:300},2000)
                $(".yidongimg").transition({rotateY:360,delay:600},2000)
                $(".qitaimg").transition({rotateY:360,delay:900},2000)
            }else if(index==5){
                $(".skill").transition({rotateY:360},2000)
                $(".zuopin").transition({scale:(1,1)},1000)
                $(".zpmore").each(function(){
                    $(this).on("mouseenter",function(){
                        $(".mkword").hide().stop(true,true);
                       $(this).find(".mkword").fadeIn();
                    })
                    $(this).on("mouseleave",function(){
                        $(this).find(".mkword").fadeOut();
                    })
                })
            }
        },
        onLeave:function(index,dir){
            if(index==1){
                $(".page_w1").transition({scale:(0,0),opacity:0,delay:1});
                $(".page_w2").transition({scale:(0,0),opacity:0,delay:1});
            }else if(index==2){
                $(".tupian").transition({scale:(0,0),opacity:0});
                $(".ziwojieshao").transition({top:800});
                $(".page2_bg1").removeClass("fadeInRightBig");
                $(".page2_bg2").removeClass("fadeInLeftBig")
            }else if(index==3){
                $(".pcimg").transition({rotateY:0},2000)
                $(".yidongimg").transition({rotateY:0},2000)
                $(".qitaimg").transition({rotateY:0},2000)
            }
            else if(index==5){
                $(".skill").transition({rotateY:0},2000)
                $(".zuopin").transition({scale:(0,0)},1000)
            }
        }
    })
    //点击翻下一屏幕
    $(".to_foot").click(function () {
        $.fn.fullpage.moveSectionDown();
    })
    //
    $(".ycaian").click(function(){
        $(".ycaidanmore").slideToggle();
    })
//    点击后菜单消失
    $(".ycaidanmore").find("a").click(function () {
        $(".ycaidanmore").hide()
    })
//    第六屏
    var mySwiper = new Swiper ('.swiper-container', {
        // loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        parallax : true,
        autoplay : 4000,
        speed:2000,
        grabCursor : true,

    })


//    二维码

    $(".app").click(function(){
        $(".ewm-box").fadeToggle();
    })
    $(".ewm-box").click(function(){
        $(this).fadeOut();
    })
//作品页面切换效果
    $(".next").click(function () {
        $(".mask_zuopin").css({display:'block'})
        $(".zpmore").not(".mask_zuopin>.zpmore").animate({opacity:0},1)
    })
    $(".pre").click(function () {
        $(".mask_zuopin").css({display:'none'})
        $(".zpmore").not(".mask_zuopin>.zpmore").animate({opacity:1},1)
    })
})