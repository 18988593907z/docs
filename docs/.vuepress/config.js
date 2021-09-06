const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
    // base: "/docs/",
    title: "一个vuepress网站",
    description: "一个vuepress学习项目",
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        //displayAllHeaders: true, // 默认值：false 显示所有页面标题
        //navbar: false,禁用导航栏
        //sidebar: 'auto',
        // sidebar: [
        //     '',
        //     'about',
        //     'about1',
        //     {
        //         title: '美丽的css',
        //         path: ''
        //     }
        // ],
        sidebar: sidebarConf,
        nav: navConf,
    }
}