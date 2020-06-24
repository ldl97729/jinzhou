//慧林模板资源加载引擎
var WiniisLoader = function () {
    //初始化
    this.__init();
};

WiniisLoader.prototype = {
    constructor: WiniisLoader,
    /**
     * 当前模板路径.
     */
    __tpl: '',
    /**
     * 获取模板路径.
     * @returns {string}
     */
    getTpl: function() {
        return this.__tpl;
    },

    /**
     * 模板名称.
     */
    __tplName: '',

    /**
     * 获取模板名称.
     * @returns {string}
     */
    getTplName: function() {
        return this.__tplName;
    },

    /**
     * 初始化操作.
     * @private
     */
    __init: function () {
        //读取模板路径
        var uri = window.location.pathname;
        //防止uri中出现“//”，导致相对路径资源加载错误.
        if (uri.indexOf("//") > -1) {
            uri = uri.replace("//", "/");
            location.href=uri;
        }
        var staticWay = uri.match(/(.*)-/g);
        if (null != staticWay) {
            var tplLike = staticWay[0].replace("-", "/");
            var tplArr = tplLike.split('/');
            this.__tpl = "/" + tplArr[1] + "/";
            this.__tplName = this.__tpl.replace("\/", "");
        } else {
            if (uri != "/" && uri.indexOf('/', 1) > -1) {
                var tplArr = uri.split('/');
                this.__tpl = "/" + tplArr[1] + "/";
                this.__tplName = this.__tpl.replace("\/", "");
            }
        }
    },

    /**
     * 加载JS.
     * @param source
     */
    loadJs: function (source) {
        source = ".js" == source.substr(source.length - 3) ? source : (source + ".js");
        document.write(unescape('%3Cscript%20src%3D%22'+this.getTpl()+source+'%22%3E%3C/script%3E'));
    },

    /**
     * 加载CSS.
     * @param source
     */
    loadCss: function (source) {
        source = ".css" == source.substr(source.length - 4) ? source : (source + ".css");
        document.write('<link rel="stylesheet" href="'+this.getTpl()+source+'">');
    },

    /**
     * 获取当前模板对应其他文件的相对路径.
     * @param source
     * @returns {*}
     */
    path: function (source) {
        return this.getTpl() + source;
    }
};
//实始化全局资源加载变量.
var loader = new WiniisLoader();
