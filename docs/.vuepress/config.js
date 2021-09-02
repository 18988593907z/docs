const moment = require('moment');

moment.locale("zh-cn");//不考虑多语言

module.exports = {
    // base: "/docs/",
    title: "一个vuepress网站",
    description: "一个vuepress学习项目",
    head: [
        ['link',{rel:'icon', href: '/assets/img/ThinkingFace.png'}],
        ['meta',{name:'author', content: 'Zhang'}],
        ['meta',{name:'keywords', content: 'vuepress'}],
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) =>{
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
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
        sidebar: {//侧边栏
            '/html/': [
                'h-aaa',
                'h-bbb',
                'h-ccc',
            ],
            '/css/': [
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
            '/javascript/': [
                'j-aaa',
                'j-bbb',
                'j-ccc',
            ],
            '/': [
                '',
                'about',
                '/html/',
                '/css/',
                '/javascript/'
            ],
        },
        nav: [//顶部导航栏
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [
                    {
                        text: '中文', items: [
                            { text: '简中', link: '/' },
                            { text: '繁中', link: '/about' },
                        ]
                    },
                    {
                        text: 'English', items: [
                            { text: 'BritishEnglish', link: '/about' },
                            { text: 'AmericaEnglish', link: '/about' },
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com', target: '_self', rel: '' },
            { text: 'Guide', link: '/guide/', target: '_blank' },

        ]
    }
}