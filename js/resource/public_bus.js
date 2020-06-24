var busMethod = {
    /**
     * 刷新购物车显示
     */
    refreshUserCart: function () {
        var service = {};
        var fn="queryUserCartCount";
        service = Commonjs.jsonToString(service)
        var params = Commonjs.getParams(fn,service);
        winiisRequest.get(weburl, params, function (data) {
            $('#hl-user-cart-number').html(data.data.count);
        }, function (data) {
            console.log('refresh user cart fail：', data);
        });
    }
};