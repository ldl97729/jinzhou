Vue.component('header-top', {
    template: `
    <div>
    <header><div class="header">
    <div class="layout clearfix">
        <div class="logo">
            <a href="index.html">汇华科技</a>
        </div>
        <div class="ability-info">
            <span class="call">13580345010</span>
            <a class="l-login" href="#">登录</a>
            <a class="l-register" href="#">免费注册</a>
        </div>
        <div class="nav">
            <ul>
                <li :class="navs==0?'on':''"><a class="bt" href="index.html">首页</a></li>
                <li :class="navs==1?'on':''"><a class="bt" href="mailbox.html">企业邮箱</a></li>
                <li :class="navs==2?'on':''">
                    <a class="bt" href="application.html">企业应用</a>
                    <div class="nav-body">
                        <dl class="dl">
                            <dt><a href="application.html">智能营销</a></dt>
                            <dd><a href="application.html">详情优势</a></dd>
                            <dd><a href="application.html">方案价值</a></dd>
                            <dd><a href="application.html">方案版本</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="application1.html">CRM</a></dt>
                            <dd><a href="application1.html">产品特点</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="application2.html">蚂蚁分工</a></dt>
                            <dd><a href="application2.html">产品特点</a></dd>
                            <dd><a href="application2.html">特色功能</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="application3.html">Teambition</a></dt>
                            <dd><a href="application3.html">产品特点</a></dd>
                            <dd><a href="application3.html">客户案例</a></dd>
                            <dd><a href="application3.html">企业需求</a></dd>
                        </dl>
                    </div>
                </li>
                <li :class="navs==3?'on':''">
                    <a class="bt" href="cloud.html">云产品</a>
                    <div class="nav-body">
                        <dl class="dl">
                            <dt><a href="cloud.html">域名与网站</a></dt>
                            <dd><a href="cloud.html">域名注册</a></dd>
                            <dd><a href="cloud.html">域名购买</a></dd>
                            <dd><a href="#">网站建设</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="cloud3.html">云服务器</a></dt>
                            <dd><a href="cloud3.html">弹性计算ECS</a></dd>
                            <dd><a href="#">CDN</a></dd>
                            <dd><a href="#">云安全</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="cloud1.html">短信服务</a></dt>
                            <dd><a href="cloud1.html">营销短信</a></dd>
                            <dd><a href="cloud1.html">验证码/通知</a></dd>
                            <dd><a href="cloud2.html">国际短信</a></dd>
                            <dd><a href="cloud4.html">数字短信</a></dd>
                        </dl>
                        <dl class="dl">
                            <dt><a href="#">云运维</a></dt>
                            <dd><a href="#">数据迁移</a></dd>
                            <dd><a href="#">代运维</a></dd>
                        </dl>
                    </div>
                </li>
                <li :class="navs==4?'on':''">
                    <a class="bt" href="dingding.html">钉钉服务</a>
                    <!--<div class="nav-body snav-body">
                        <dl class="dl">
                            <dd><a href="#">VIP顾问服务</a></dd>
                            <dd><a href="#">定制开发</a></dd>
                            <dd><a href="#">客户案例</a></dd>
                        </dl>
                    </div>-->
                </li>
                <li :class="navs==5?'on':''"><a class="bt" href="news.html">行业动态/产品资讯</a></li>
                <li :class="navs==6?'on':''"><a class="bt" href="solution.html">解决方案</a></li>
                <li :class="navs==7?'on':''"><a class="bt" href="ecology.html">生态合作</a></li>
                <li :class="navs==8?'on':''"><a class="bt" href="help.html">帮助中心</a></li>
            </ul>
        </div>
        <div class="btn-m-list">
            <span class="burger burger-1 trans"></span>
            <span class="burger burger-2 trans-fast"></span>
            <span class="burger burger-3 trans"></span>
        </div>
    </div>
</div></header><div class="mask"></div>
<div class="mob-nav">
    <div class="neirong-close">close</div>
    <!--<div class="logos"><a href="index.html"><img src="images/logo.png"></a></div>-->
    <ul class="subtab">
        <li><a class="tlink" href="index.html">首页</a></li>
        <li>
            <a class="tlink subbtn" href="javascript:;">企业邮箱</a>
            <div class="submenu">
                <ul>
                    <li><a class="mlink" href="mailbox.html">产品介绍</a></li>
                    <li><a class="mlink" href="mailbox1.html">钉邮</a></li>
                    <li><a class="mlink" href="mailbox2.html">运维服务</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a class="tlink subbtn" href="javascript:;">企业应用</a>
            <div class="submenu">
                <ul>
                    <li><a class="mlink" href="application.html">智能营销</a></li>
                    <li><a class="mlink" href="application1.html">CRM</a></li>
                    <li><a class="mlink" href="application2.html">蚂蚁分工</a></li>
                    <li><a class="mlink" href="application3.html">Teambition</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a class="tlink subbtn" href="javascript:;">云产品</a>
            <div class="submenu">
                <ul>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">域名与网站</a>
                        <div class="menuer">
                            <a href="cloud.html">域名注册</a>
                            <a href="cloud.html">域名购买</a>
                            <a href="cloud.html">网站建设</a>
                        </div>
                    </li>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">云服务器</a>
                        <div class="menuer">
                            <a href="cloud3.html">弹性计算ECS</a>
                            <a href="#">CDM</a>
                            <a href="#">云安全</a>
                        </div>
                    </li>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">短信服务</a>
                        <div class="menuer">
                            <a href="cloud1.html">营销短信</a>
                            <a href="#">验证码/通知</a>
                            <a href="cloud2.html">国际短信</a>
                            <a href="cloud4.html">数字短信</a>
                        </div>
                    </li>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">云运维</a>
                        <div class="menuer">
                            <a href="#">数据迁移</a>
                            <a href="#">代运维</a>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <a class="tlink" href="dingding.html">钉钉服务</a>
            <div class="submenu">
                <ul>
                    <li><a class="mlink" href="dingding.html">VIP顾问服务</a></li>
                    <li><a class="mlink" href="#">定制开发</a></li>
                    <li><a class="mlink" href="#">客户案例</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a class="tlink subbtn" href="javascript:;">行业动态/产品资讯</a>
            <div class="submenu">
                <ul>
                    <li><a class="mlink" href="news.html">行业动态</a></li>
                    <li><a class="mlink" href="news.html">产品资讯</a></li>
                </ul>
            </div>
        </li>
        <li>
            <a class="tlink subbtn" href="javascript:;">解决方案</a>
            <div class="submenu">
                <ul>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">通用解决方案</a>
                        <div class="menuer">
                            <a href="solution.html">混合云解决方案</a>
                            <a href="solution.html">异地容灾解决方案</a>
                        </div>
                    </li>
                    <li>
                        <a class="mlink subbtn1" href="javascript:;">行业解决方案</a>
                        <div class="menuer">
                            <a href="solution.html">电商解决方案</a>
                            <a href="solution.html">游戏解决方案</a>
                            <a href="solution.html">物流解决方案</a>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li><a class="tlink" href="ecology.html">生态合作</a></li>
        <li>
            <a class="tlink subbtn" href="javascript:;">帮助中心</a>
            <div class="submenu">
                <ul>
                    <li><a class="mlink" href="help.html">阿里邮箱</a></li>
                    <li><a class="mlink" href="help.html">阿里云</a></li>
                    <li><a class="mlink" href="help.html">Teambition</a></li>
                    <li><a class="mlink" href="help.html">钉钉</a></li>
                </ul>
            </div>
        </li>
    </ul>
</div></div>`,
    props: ["navs"],
    data: function() {
        return {

        }
    },
    mounted: function() {

    },
    methods: { // 公用get方法

    }
})