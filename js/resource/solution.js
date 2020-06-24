$(document).ready(function() {

    var tableData = [], //表格数据
        keyword='', //搜索数据
        page= {
            total: 0,
            size: 10,
            current: 1
        },pass = true;
    //初始化新闻列表
    function queryData(url) {
        var keyword = keyword;
        var index = page.current;
        var service = {};
        service.content = keyword;
        service.typeId = "";
        service.parentId = url;
        service.parentId = url;

        service.page = index;
        service.pagesize = 10;
        var fn="querySysArticle";
        service = Commonjs.jsonToString(service);
        var params = Commonjs.getParams(fn, service);//获取参数
        Commonjs.ajaxTrue(weburl,params,function (data) {
            tableData = data.data;
            page.total = data.rows;
            var strhtml = "";
            $.each(data.data, function (i, item) {
                var date = timestampToTime(item.publishTime);
                var content = "支持本市中小企业签约经遴选的专业服务平台购买专业服务，提升企业发展质量。在沪注册中小企业根据自身实际需求，于本年度内与平台签订服务合同，按照政府补贴和机构让利后的价格支付相关服务费用。</p>"
                var id = item.id+'';
                strhtml += "<li>" +
                    '<a href="http://www.huiva.cn/huiva/news/info.html?id='+id.trim()+'"'+">" +
                    '<div class="box">'+
                    '<div class="">'+
                    '<h2 class="h2 overflowtxt">'+item.title+'</h2>'+

                    '<div class="clearfix">'+
                    '<span class="time">发布时间：'+date+'</span>'+
                    '<span class="more">查看更多 <i>></i></span>'+
                    '</div></div></div></a></li>';
            });

            $(".news-list ul").html(strhtml);
            getpagination();

        },true,"正在加载数据...");
    }
    function changePage(page){
        queryData(page);
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
//时间戳转换为日期
    function timestampToTime(timestamp) {
        var str=   timestamp.year +'';
        var Y = 20+str.slice(1) + '-';
        var M = (timestamp.month+1 < 10 ? '0'+(timestamp.month+1) : timestamp.month+1) + '-';
        var D = timestamp.date;
        return Y+M+D;
    }
    function functiontrim(e)
    {
        return e.replace(/^\s+|\s+$/g, '');
    }
    //切换数据
    $(".commonDeal li").click(function (e) {
        var url = e.currentTarget.dataset.id;
        tableData = [], //表格数据
            keyword='', //搜索数据
            page= {
                total: 0,
                size: 10,
                current: 1
            },pass = true;
        queryData(url);
        $(".commonDeal li.on").removeClass("on");
        $(this).addClass("on");
    })
    queryData("commonDealWay")

});