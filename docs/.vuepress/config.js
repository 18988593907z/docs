module.exports = {
    themeConfig: {
        logo: './public/assets/img/logo.png',
        //navbar: false,禁用导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                items: [
                    { text: '中文', items: [
                        { text: '简中', link: '/about' },
                        { text: '繁中', link: '/' },
                    ] },
                    { text: 'English', items: [
                        { text: 'BritishEnglish', link: '/' },
                        { text: 'AmericaEnglish', link: '/' },
                    ] }
                ]
            },
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            { text: 'Guide', link: '/guide/', target: '_blank' },

        ]
    }
}