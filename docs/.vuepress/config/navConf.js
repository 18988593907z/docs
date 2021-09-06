module.exports = [//顶部导航栏
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
                ]
            }
        ]
    },
    { text: 'External', link: 'https://www.baidu.com', target: '_self', rel: '' },
    { text: 'Article', link: '/article/', target: '_self' },
    { text: 'Guide', link: '/guide/', target: '_blank' },
]