$(document).ready(function(){
    var ele = $(document) || $('body');
    ele.on("scroll",function(){
        var a = ele.scrollTop();
        if (a > 864){
            $('.class_pro').fadeIn();
        }
        if(a > 1263){
            $('.teacher_item').fadeIn();
        }
    });
    //图片延迟加载
    $("img.lazy").lazyload();
    //banner切换
    $('.bxslider').bxSlider({
        speed:'800',
        auto:'true',
        pause:'4000'
    });
});