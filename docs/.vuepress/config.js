module.exports = {
    themeConfig: {
        logo: './public/assets/img/logo.png',
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
        sidebar: {
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
        nav: [
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