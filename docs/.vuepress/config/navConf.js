module.exports = [//顶部导航栏
    { text: '主页', link: '/' },
    { text: '了解更多', link: '/about' },
    {
        text: '项目',
        items: [
            {
                text: '前端', items: [
                    { text: 'ProjectA', link: '/' },
                    { text: 'ProjectB', link: '/about' },
                ]
            },
            {
                text: '后端', items: [
                    { text: 'ProjectC', link: '/about' },
                ]
            },
            {
                text: '全栈', items: [
                    { text: 'ProjectD', link: '/' },
                    { text: 'ProjectE', link: '/about' },
                ]
            },
        ]
    },
    {
        text: '面试相关',
        items: [
            {
                text: 'Java', items: [
                    { text: 'basis', link: '/pages/java/basis/Java基础知识/' },
                    { text: 'basis', link: '/pages/java/basis/Java常见关键字总结/' },
                    { text: 'basis', link: '/pages/java/basis/Java基础知识疑难点/' },
                ]
            },
            {
                text: '后端', items: [
                    { text: 'ProjectC', link: '/about' },
                ]
            },
            {
                text: '全栈', items: [
                    { text: 'ProjectD', link: '/' },
                    { text: 'ProjectE', link: '/about' },
                ]
            },
        ]
    },
    { text: '基础知识', link: '/knowledge/', target: '_self', rel: '' },
    { text: 'leetcode算法', link: '/article/', target: '_self' },
    { text: '关于我', link: 'https://github.com/yitoumiemie/', target: '_blank' },
]