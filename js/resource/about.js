$(document).ready(function() {

     function queryData() {
        var self = this;
        self.action = ServletUtils.get("content");
        var service = {
            flag: "about"
        };
        var fn="getAgreement";
        service = Commonjs.jsonToString(service);
        var params = Commonjs.getParams(fn, service);//获取参数
        Commonjs.ajaxTrue(weburl,params,function (data) {
            self.info = data.data;
            // $("#title").html(self.info.title);
            $('.aboutus').html(self.info.content);
        },true,"正在加载数据...");
    }

    queryData()

});