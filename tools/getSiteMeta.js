export default (meta) => {
    return [
        // OpenGraph
        {
            hid: 'og:title',
            name: 'og:title',
            content: meta.og && meta.og.title ? meta.og.title : '',
        },
        {
            hid: 'og:description',
            name: 'og:description',
            content: meta.og && meta.og.description ? meta.og.description : '',
        },
        {
            hid: 'og:image',
            name: 'og:image',
            content: meta.og && meta.og.image.url ? meta.og.image.url : '',
        },
        {
            hid: 'og:image:width',
            name: 'og:image:width',
            content: meta.og && meta.og.image.width ? meta.og.image.width : '1024',
        },
        {
            hid: 'og:image:height',
            name: 'og:image:height',
            content: meta.og && meta.og.image.height ? meta.og.image.height : '512',
        },
        {
            hid: 'og:type',
            name: 'og:type',
            content: meta.og && meta.og.type ? meta.og.type : '',
        },
        {
            hide: 'og:site_name',
            name: 'og:site_name',
            content: meta.og && meta.og.site_name ? meta.og.site_name : '',
        },
        // Twitter
        {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: meta.twitter && meta.twitter.url ? meta.twitter.url : '',
        },
        {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: meta.twitter && meta.twitter.title ? meta.twitter.title : '',
        },
        {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: meta.twitter && meta.twitter.description ? meta.twitter.description : '',
        },
        {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: meta.twitter && meta.twitter.image ? meta.twitter.image : '',
        },
        {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: meta.twitter && meta.twitter.site ? meta.twitter.site : '',
        },
        {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: meta.twitter && meta.twitter.card ? meta.twitter.card : 'summary_large_image',
        },
        // Apple
        {
            hid: 'apple-mobile-web-app-title',
            name: 'apple-mobile-web-app-title',
            content: 'Название приложения'
        },
        {
            hid: 'apple-mobile-web-app-capable',
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        },
        // Pinterest
        {
            hide: 'pinterest',
            name: 'pinterest',
            content: 'nopin',
            description: 'Извините, вы не можете сохранить с моего сайта!'
        },
        // Other
        {
            hid: 'theme-color',
            name: 'theme-color',
            content: '#000000',
        },
        {
            hid: 'application-name',
            name: 'application-name',
            content: 'Название приложения',
        }
    ];
};