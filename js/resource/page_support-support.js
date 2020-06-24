$(document).ready(function() {
    var tableData= [];
         keyword =  '',
        page =  {
            total: 0,
            size: 10,
            current: 1
        },
     pass = true;
        function queryData(index) {
        var self = this;
        var service = {};
        service.content = keyword;
        service.typeId = "";
        service.parentId = "onlineHelp";
        service.page = index;
        service.pagesize = 10;
        var fn="querySysArticle";
        service = Commonjs.jsonToString(service);
        var params = Commonjs.getParams(fn, service);//获取参数
        Commonjs.ajaxTrue(weburl,params,function (data) {
            tableData = data.data;
            page.total = data.rows;
            var strhtml = "<ul class='artDialogDiv'>";
            $.each(data.data, function (i, item) {
                var date = timestampToTime(item.publishTime);
                strhtml += "<li>" + " <a class='box' href='http://www.huiva.cn/huiva/support/detail.html?id=" +item.id +"'"+
                    "><h2 class='h2 overflowtxt'>"+item.title+"</h2>" +
                    "<span class='time'>"+ date+"</span></a></li>";
            });
            strhtml += "</ul>";
            $(".help-list").html(strhtml);
            getpagination()
        },true,"正在加载数据...");
    }

    //热点问题

    function inithotQuestion(labie,url) {
        var self = this;
        var service = {};
        service.content = "";
        service.typeId = "";
        service.parentId = url;
        service.page = 1;
        service.pagesize = 5;
        var fn="querySysArticle";
        service = Commonjs.jsonToString(service);
        var params = Commonjs.getParams(fn, service);//获取参数
        Commonjs.ajaxTrue(weburl,params,function (data) {
            var strhtml = "";
            $.each(data.data, function (i, item) {
                strhtml += "<li>" + "<a class='box' href='http://www.huiva.cn/huiva/support/detail.html?id=" +item.id +"' >"+item.title+ "</a></li>";
            });
            $(labie).html(strhtml);
        },true,"正在加载数据...");
    }
    //获取分页
    function getpagination() {
        if(page.total>0&&pass){
            $('#pagination').pagination({
                coping: true,
                homePage: '首页',
                endPage: '末页',
                totalData: page.total,
                showData: 10,
                prevContent: '上页',
                nextContent: '下页',
                callback: function (api) {
                    changePage(api.getCurrent());
                }
            });
            pass = false;
        }else{
            if (!(page.total>0)){
                $('#pagination').pagination({
                    coping: true,
                    homePage: '首页',
                    endPage: '末页',
                    pageCount: 0,
                    totalData: 0,
                    showData: 0,
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) {
                        changePage(api.getCurrent());
                    }
                });
            }
        }
    }
    function changePage(page){
        queryData(page);
    }
    //时间戳转换为日期
    function timestampToTime(timestamp) {
     var str=   timestamp.year +''
        var Y = 20+str.slice(1) + '-';
        var M = (timestamp.month+1 < 10 ? '0'+(timestamp.month+1) : timestamp.month+1) + '-';
        var D = timestamp.date;
        return Y+M+D;
    }
    $("#serach").click(function (e) {
        pass = true;
        keyword = $("input[ name='search']").val();;
        queryData(1);
    })

    $("input[ name='search']").blur(function(){
        pass = true;
        keyword = $("input[ name='search']").val();
        if (keyword==''){
            queryData(1);
        }
    })
    queryData(1);
    inithotQuestion(".help-nav-1 ul","hotQuestion");
    inithotQuestion(".help-nav-2 ul","videoTeache");
});