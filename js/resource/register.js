var hlDivPageDomainRegister = new Vue({
    el: '#wrapper',
    data: function () {
        return {
            test:true,
            isIe: true,
            global: {},
            banner: [
            ],
            domain: {
                domainName: '',
                ext: '.com',
                domainExt: ['.com']
            },
            domainExtList: [],
            domainPriceOverview: [
                {
                    name: '.com',
                    sellPrice: 63
                },
                {
                    name: '.top',
                    sellPrice: 9
                },
                {
                    name: '.cn',
                    sellPrice: 16
                },
                {
                    name: '.xin',
                    sellPrice: 88
                },
                {
                    name: '.net',
                    sellPrice: 63
                }
            ],
            domainResultOK: [],
            testlist:[],
            domainResultError: [],
            allQuerying: false,
            adding: false,
            loading:true,
            length:false,
            checkboxs:false,
            checkAll:false,
            curHeight:20,
            tit : ".com"
        }
    },
    methods: {
        /**
         * 选择后缀
         */
        clickActive:function(item,index){
            var self = this;
            if (item.isTrue){
                var key = self.domain.domainExt.indexOf(item.name)
                self.domain.domainExt.splice(key,1);
            }else {
                self.domain.domainExt.push(item.name)
            }
            self.domainExtList[index].isTrue = !item.isTrue;
            this.tit=self.domain.domainExt[0];
        },
        /**
         * 全选
         */
        checkedAllBtn:function(){
            if (this.checkAll){
                for (var i =0;i < this.testlist.length;i++){
                    this.testlist[i].checked = false
                }
            }else {
                for (var i =0;i < this.testlist.length;i++){
                    this.testlist[i].checked = true
                }
            }
        },
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
            var weburl ="http://www.huiva.cn/web.do";
            winiisRequest.get(weburl, params, function (data) {
                self.loadRequest(data);
            });
        },
        /**
         * 选中过滤.
         */
        filterSelect:function (data) {
            var self = this;
            data.data.getUserDomainByUserName.map((item,index)=>{
                if (self.domain.domainExt[0]==item.name){
                    data.data.getUserDomainByUserName[index].isTrue = true;
                }else {
                    data.data.getUserDomainByUserName[index].isTrue = false;
                }
            })
            self.domainExtList = data.data.getUserDomainByUserName;
        }
        ,
        /**
         * 加载外部提交.
         */
        loadRequest: function(data) {
            var domainName = request("domainName");
            if (domainName ==''){
                this.filterSelect(data);
                return
            }

            if (!Commonjs.isEmpty(domainName)) {
                this.domain.domainName = domainName;
            }
            var extList = request("domainExitList");
            if (!Commonjs.isEmpty(extList)) {
                if (this.isIe) {
                    this.domain.ext = extList;
                } else {
                    this.domain.domainExt = extList.split(',');

                }
            }
            this.tit = this.domain.domainExt[0]
            this.filterSelect(data);
            this.doDomainQuery();
        },
        /**
         * 加载价格总览.
         */
        loadPriceView: function() {
            var self = this;
            var service = {};
            var fn="queryDomainPriceList";
            service = Commonjs.jsonToString(service)
            var params = Commonjs.getParams(fn,service);
            winiisRequest.get(weburl, params, function (data) {
                self.domainPriceOverview = data.data;
            });
        },
        /**
         * 域名查询.
         */
        doDomainQuery: function () {
            var self =this;
            if (this.domain.domainName==''){
                self.$message({
                    message: '请选择输入域名',
                    type: 'error',
                    offset:self.curHeight/2-100
                });
                // this.$message.error('请选择输入域名');
                return;
            }
            this.loading = true;
            if (this.isIe) {
                if (this.domain.ext == '') {
                    self.$message({
                        message: '请选择域名后缀',
                        type: 'error',
                        offset:self.curHeight/2-100
                    });
                    // this.$message.error('请选择域名后缀');
                    return;
                }
            } else {
                if (this.domain.domainExt.length < 1) {
                    self.$message({
                        message: '请选择至少一个域名后缀',
                        type: 'error',
                        offset:self.curHeight/2-100
                    });
                    // this.$message.error('请选择至少一个域名后缀');
                    return;
                }
            }
            var self = this;
            var domainList = [];
            var weburl ="http://www.huiva.cn/web.do";
            self.checkAll = false;
            if (this.isIe) {
                var item = {
                    domainName: self.domain.domainName + self.domain.ext,
                    querying: true,
                    price: 0,
                    message: '',
                    productCode: ''
                };
                domainList.push(item);
            } else {
                this.domain.domainExt.forEach(function (value) {
                    var item = {
                        domainName: self.domain.domainName + value,
                        querying: true,
                        price: 0,
                        message: '',
                        productCode: ''
                    };
                    domainList.push(item);
                });
            }
            this.allQuerying = true;
            this.domainResultOK = domainList;
            this.testlist = [];
            this.domainResultError = [];
            //查询
            setTimeout(function () {
                var domainQueryResult = [];
                var i = 0;
                domainList.forEach(function (item) {
                    var service = {
                        domainName: item.domainName
                    };
                    var fn = "checkDomainIsReg";
                    service = Commonjs.jsonToString(service)
                    var params = Commonjs.getParams(fn, service);
                    winiisRequest.get(weburl, params, function (data) {
                        item.querying = false;
                        if (data.result == 'success') {
                            self.length = true;
                            if (data.data.info.status == 'Y') {
                                self.checkboxs = true;
                                item.checked = false;
                                item.price = data.data.price;
                                item.productCode = data.data.productCode;
                                domainQueryResult.push(item);
                            } else {
                                item.message = data.data.info.message;
                                self.domainResultError.push(item);
                            }
                        } else {
                            item.message = data.msg;
                            self.domainResultError.push(item);
                        }
                    }, function () {
                        item.querying = false;
                        item.message = "请求失败，请重试";
                        self.domainResultError.push(item);
                    }, false);
                    i++;
                });
                self.domainResultOK = domainQueryResult;
                self.testlist = domainQueryResult;
                self.allQuerying = false;

                setTimeout(()=>{self.loading = false;},100)

            }, 500);
        },

        /**
         * 批量操作.
         * @param type
         */
        addAll: function(type) {
            var self = this;
            self.adding = true;
            var checkLength = [];
            var objectList = [];
            self.testlist.map((item,index)=>{
                if (item.checked){
                    objectList.push(index)
                }
            })
            if (objectList.length < 1) {
                self.$message({
                    message: '请选择至少一个域名后缀',
                    type: 'error',
                    offset:self.curHeight/2-100
                });
                return;
            }
            for (var m=0; m < objectList.length; m++) {
                var row = this.domainResultOK[m];
                var service = {
                    productCode: row.productCode,
                    applyTime: 1,
                    priceType: 'Y',
                    cartType: 'add',
                    productParam: row.domainName
                };
                var fn="addUserCart";
                service = Commonjs.jsonToString(service)
                var params = Commonjs.getParams(fn,service);
                var weburl ="http://www.huiva.cn/web.do";
                winiisRequest.get(weburl, params, function (data) {
                    self.adding = false;
                    if (type == '1') {
                        self.$message({
                            message: '添加成功',
                            type: 'success',
                            offset:self.curHeight/2-100
                        });
                        // self.$message.success('添加成功');
                        busMethod.refreshUserCart();
                    } else {
                        //跳转到购物车
                        location.href = Commonjs.getCfgVal(configParam.common.cfgKey.template) + configParam.htmlPage.goods;
                    }
                }, function (data) {
                    self.adding = false;
                    self.$message({
                        message: data.msg,
                        type: 'error',
                        offset:self.curHeight/2-100
                    });
                    // self.$message.error(data.msg);
                }, false);
            }
        },

        buy: function (row) {
            /**
             * fn: addUserCart
             p: {"productCode":"D001","applyTime":1,"priceType":"Y","cartType":"add","productParam":"a325532a.com"}
             * @type {methods}
             */
            var self = this;
            var weburl ="http://www.huiva.cn/web.do";
            var service = {
                productCode: row.productCode,
                applyTime: 1,
                priceType: 'Y',
                cartType: 'add',
                productParam: row.domainName
            };
            var fn="addUserCart";
            service = Commonjs.jsonToString(service)
            var params = Commonjs.getParams(fn,service);
            winiisRequest.get(weburl, params, function (data) {
                //跳转到购物车
                location.href = Commonjs.getCfgVal(configParam.common.cfgKey.template) + configParam.htmlPage.goods;
            }, function (data) {
                self.$message({
                    message: data.msg,
                    type: 'error',
                    offset:self.curHeight/2-100
                });
                // self.$message.error(data.msg);
            });
        },
        ieTest: function () {
            this.isIe = isIe();
        }
    },
    mounted: function () {
        this.curHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.ieTest();
        this.loadDomain();
        // this.loadPriceView();
    }
});
