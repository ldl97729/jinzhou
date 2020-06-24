var hlDivPageIndex = new Vue({
    el: '#wrapper',
    data: function () {
        return {
            domain: {
                domainName: '',
                domainExt: '.com'
            },
            domainExtList: [],
            curHeight:20
        }
    },
    methods: {

        /**
         * 加载域名产品
         */
        loadDomain: function () {
            var self = this;
            var service = {};
            service.page=1;
            service.pageSize=200;
            var fn="querDicSuffix";
            service = Commonjs.jsonToString(service)
            var params = Commonjs.getParams(fn,service);
            winiisRequest.get(weburl, params, function (data) {
                self.domainExtList = data.data.getUserDomainByUserName;
            });
        },
        /**
         * 域名查询触发.
         */
        doDomainQuery: function () {
            var self = this;
            console.log()
            if (Commonjs.isEmpty(this.domain.domainName)) {
                // this.$message.error('请输入域名');
                self.$message({
                    message: '请输入域名',
                    type: 'error',
                    offset:self.curHeight/2-100
                });
                return;
            }
            if (Commonjs.isEmpty(this.domain.domainExt)) {
                // this.$message.error('请选择域名后缀');
                self.$message({
                    message: '请选择域名后缀',
                    type: 'error',
                    offset:self.curHeight/2
                });
                return;
            }
            var url = loader.path('cloud.html') + '?domainName=' + this.domain.domainName + '&domainExitList=' + this.domain.domainExt;

            location.href = url;
        },
        /**
         * 选择域名产品.
         */
        clickActive:function (item) {
            this.domain.domainExt = item.name;
        }
    },
    mounted: function () {

        this.curHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.loadDomain();
    }
});
