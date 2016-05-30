//$('#header').next().css('margin-top','65px');
(function() {
    $(document).scroll(function(){
        //document.documentElement.scrollTop
        var h =  $(window).scrollTop() ;
        var head = $('#header');
        if(h > 0){
            head.css("background","#f9f9f9");
        } else{
            head.css("background","");
        }
    });
    var header = new Headroom(document.getElementById("header"), {
        "tolerance": 5,
        "offset": 205,
        "classes": {
            "initial": "animated",
            "pinned": "swingInX",
            "unpinned": "swingOutX"
        }
    });
    header.init();
    //baner 视频
    var aBtn = $('.vido_btn');
    var close = $(".close");
    var  iframe = $("#playerIframe");
    aBtn.click(function(){
        var player = $('#player');
        iframe.get(0).setAttribute("src","play.html");
        player.show();
    });
    close.click(function(){
        var player = $('#player');
        player.hide();
        iframe.get(0).removeAttribute("src","play.html");
    });
}());