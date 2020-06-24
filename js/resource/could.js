$(document).ready(function() {


    function init(){

    }

    $(".checkComBtn").click(function (e) {
        var  val =   $("input[ name='val']").val(); //域名
        if (val ==''){
            alert("请输入域名");
            return;
        }
        var url = " http://www.huiva.cn/huiva/domain-register.html?";
        var domainExitList = $(".tit").text();
        var href = url +"domainName="+val+"&domainExitList=" + domainExitList;
        location.href=href;
    })

    $(".suf-list ul li").click(function (e) {
        $(".tit").html($(this).text());
    })

});