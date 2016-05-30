
(function($){
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
    //表单验证
    $('input').bind('focus', function () {
        $(this).next().css('right', "-100px");
    });
    $('.error').click(function () {
        $(this).prev().focus()
    });

    function check(obj, valit) {
        obj.blur(function () {
            if ($(this).val() == '') {
                $(this).next().css('right', "10px").text(valit);
                return false;
            } else {
                return true;
            }
        });
    }

    function checkTel(obj2) {
        var e = /^1[3|4|5|8|7][0-9]\d{8}$/;
        obj2.blur(function () {
            if (!e.test(obj2.val())) {
                $(this).next().css('right', "10px").text(vail.telerr);
                return false
            } else {
                return true;
            }
        });
    }
    var vail = {
        emput: "输入不能为空",
        telerr: "手机格式不正确",
        email: '邮箱格式不正确'

    };
    var cnname = $('#cn_name'),
        enname = $('#en_name'),
        tel    = $('#stu_tel');
        check(cnname, vail.emput);
        check(enname, vail.emput);
        checkTel(tel);
    $('#submit').on('click',function(){

        var cnname = $('#cn_name'),
            enname = $('#en_name'),
            tel    = $('#stu_tel'),
            email  = $('#stu_email');
        var t = /^1[3|4|5|8|7][0-9]\d{8}$/,
            e =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (cnname.val() == ''){
                cnname.next().css('right', "10px").text(vail.emput);
                return false;
            }
            if (enname.val() == ''){
                enname.next().css('right', "10px").text(vail.emput);
                return false;
            }
            if (tel.val() == ''){
                tel.next().css('right', "10px").text(vail.emput);
                return false;
            }
            if (!t.test(tel.val())){
                tel.next().css('right', "10px").text(vail.telerr);
                return false;
            }
            if (email.val() == ''){
                email.next().css('right', "10px").text(vail.emput);
                return false;
            }
            if (!e.test(email.val())){
                email.next().css('right', "10px").text(vail.email);
                return false;
            } else{
                $(this).text('跳转中....');
                return true;
            }
    });


})($);

