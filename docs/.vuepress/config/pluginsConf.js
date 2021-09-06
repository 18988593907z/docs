const moment = require('moment');
const secret = require('./secret');
moment.locale("zh-cn");//不考虑多语言

module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': {
        transformer: (timestamp) =>{
            return moment(timestamp).format("LLLL")
        }
    },

    '@vuepress/pwa': {//未实现功能
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },

    '@vuepress/google-analytics': {//未实现功能,谷歌分析已改版
        g: secret.g, //ga现已改为g
    },

    '@vssue/vuepress-plugin-vssue':{//未选择使用此种评论，因为需要使用github账号登陆
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
    
        // 其他的 Vssue 配置
        owner: 'yitoumiemie',
        repo: 'docs',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        autoCreateIssue: true,
    },

    'vuepress-plugin-comment': {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
        el: '#valine-vuepress-comment',
        appId: secret.appId,
        appKey: secret.appKey
        }
    },
}