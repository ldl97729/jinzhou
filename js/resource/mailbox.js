$(document).ready(function() {

    // 弹窗
    $('.show-btn').click(function(){
        $('.fixed-box').addClass('show');
        $('.modal-box').addClass('animated bounceInDown');
        refreshVcode();
        $(".fixed-box").on("click", "#comfirm", function(){
            comfirms();
            //点击id为div_link时调用的处理函数
        });
    });
    //关闭弹窗
    $('.modal-box .close').click(function(){
        $('.fixed-box').removeClass('show');
        $('.modal-box').removeClass('animated bounceInDown');
    });
    $("body").addClass('mailbody');
    //确认提交
    function comfirms() {
        // var  parms = {
        //
        // }
        var  free =   $(" input[ name='free' ] ").val(), //免费试用
            name =  $(" input[ name='name' ] ").val(), //姓名
            phone = $(" input[ name='phone' ] ").val(), //手机号码
            firmName = $(" input[ name='firmName' ] ").val(), //企业名字
            email = $(" input[ name='email' ] ").val(),//邮箱
            remarks = $(" input[ name='remarks' ] ").val(),//备注
            code = $(" input[ name='code' ] ").val(),//验证码
            tips = "",//提示问题
            myreg = /^1[3456789]\d{9}$/,
            pass = true;
        if (!name){
            pass = false;
            tips = "请输入姓名";
        }
        if (pass&&!phone){
            pass = false;
            tips = "请输入手机号码";
        }
        if (pass&&!myreg.test(phone)){
            pass = false;
            tips = "请输入手机正确号码";
        }
        if (pass&&!code){
            pass = false;
            tips = "请输入验证码";
        }
        if (!pass){
            alert(tips);
            return;
        }
        var data = {
            free :free,
            name : name,
            phone :phone,
            firmName :firmName,
            email :email,
            remarks :remarks,
            code :code
        }
        var service = data;
        var fn="login";
        service = Commonjs.jsonToString(service)
        var params = Commonjs.getParams(fn,service);
        WiniisRequest.get
        // ajax({
        //     url:'',
        //     data:{},
        //     successfn: function (res) {
        //         $('.fixed-box').removeClass('show');
        //         $('.modal-box').removeClass('animated bounceInDown');
        //     },
        //     errorfn: function (res) {
        //
        //     },
        // })
    }
});