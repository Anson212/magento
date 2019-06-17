<template>
    <div class="footer wow fadeInUp">
        <div class="rowFluid">
            <div class="span12">
            <div class="container">
                <div class="footer_content">
                <div class="span4 col-xm-12">
                    <div class="footer_list">
                    <div class="span6">
                        <div class="bottom_logo"> <img :src="picData[0]" alt="微信服务号二维码" /></div>
                    </div>
                    <div class="span6 col-xm-12">
                        <div class="quick_navigation">
                        <div class="quick_navigation_title">快速导航</div>
                        <ul>
                            <li> <a href="/" title="首页">首页</a> </li>
                            <li> <a href="/a/jiejuefangan/" title="解决方案">解决方案</a> </li>
                            <li> <a href="/a/guanyuwomen/" title="关于我们">关于我们</a> </li>
                            <li> <a href="/a/kehuanli/" title="客户案例">客户案例</a> </li>
                            <li> <a href="/a/jianzhanfangan/" title="建站方案">建站方案</a> </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="span4 col-xm-6 col-xs-12">
                    <div class="footer_list">
                    <div class="footer_link">
                        <div class="footer_link_title">友情链接</div>
                        <ul id="frientLinks">
                            <li><a href='https://github.com/Anson212/magento' target='_blank'>原码地址gitHub</a> </li>
                            <li><a href='http://www.lolint.com/' target='_blank'>个人主页</a> </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="span4 col-xm-6 col-xs-12">
                    <div class="footer_list">
                    <div class="footer_cotact">
                        <div class="footer_cotact_title">联系方式</div>
                        <ul>
                        <li><span class="footer_cotact_type">地址：</span><span class="footer_cotact_content">xxxx</span></li>
                        <li><span class="footer_cotact_type">电话：</span><span class="footer_cotact_content"><a href="tel:xxxx" class="call">xxxx</a></span></li>
                        <li><span class="footer_cotact_type">网址：</span><span class="footer_cotact_content"><a href="#" title="官网">xxxxxxx</a></span></li>
                        <li><span class="footer_cotact_type">邮箱：</span><span class="footer_cotact_content">xxxxxx@qq.com</span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="copyright">Copyright &copy; 2019-2029  版权所有 ICP备3262454531234565号 </div>
            </div>
        </div>
    </div>
</template>
<script>
import {WOW} from 'wowjs'
export default {
    data() {
        return {
            picData: [
                require('../../assets/images/weixin.png')
            ]
        }
    },
    mounted() { new WOW().init() }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
    
</style>