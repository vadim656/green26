const dotenv = require('dotenv')
const isDev = process.env.NODE_ENV !== 'production'

dotenv.config()

module.exports = {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  head: {
    htmlAttrs: { lang: 'ru' },
    meta: [
      { name: 'format-detection', content: 'phone=no' },
      { name: 'google', content: 'notranslate' },
      { name: 'yandex-verification', content: '4ebc6b7d408804c0' }
    ]
  },
  build: {
    optimizeCss: false,
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    extractCSS: {
      ignoreOrder: true
    },
    extend (config, { isClient }) {
      if (isClient) {
        config.optimization = {
          splitChunks: {
            cacheGroups: {
              vendor: {
                test: /\/node_modules\//,
                name: 'vendor',
                chunks: 'all'
              }
            }
          }
        }
      }
    },
    postcss: {
      plugins: {
        cssnano: {
          preset: [
            'advanced',
            {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        'postcss-pxtorem': {
          propList: [
            '*',
            '!border-left',
            '!border-right',
            '!border-top',
            '!border-bottom',
            '!border',
            '!outline'
          ]
        }
      },
      preset: {
        browsers: 'cover 99.5%',
        autoprefixer: true
      },
      order: 'cssnanoLast'
    }
  },
  target: 'server',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  css: ['@/assets/styles/_main.less'],
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    // '@nuxtjs/yandex-metrika',
    [
      'nuxt-lazy-load',
      {
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        directiveOnly: true
      }
    ],
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '89093817',
        webvisor: true,
        clickmap: true,
        debug: false,
        noJS: true,
        disabled: false,
      },
    ],
  ],
  buildModules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/device',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
    '@nuxtjs/pwa'
  ],
  styleResources: {
    less: ['@/assets/styles/_vars.less', '@/assets/styles/_mixins.less'],
    hoistUseStatements: true
  },
  svgSprite: {
    input: '~/assets/images/icons'
  },
  plugins: [
    {
      src: '@/plugins/vue-js-modal.js',
      mode: 'client'
    },
    '@/plugins/vuelidate.js',
    '@/plugins/bem.js',
    '@/plugins/api.js'
  ],
  proxy: {
    '/api': {
      target: 'https://back.greengroup26.ru',
      secure: false
    }
  },
  axios: {
    credentials: true,
    proxy: true
  },
  router: {
    prefetchLinks: false
  },
  loading: {
    color: '#2ecc71',
    height: '5px'
  },
  pageTransition: 'page',
  page: 'page',
  pwa: {
    icon: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      lang: 'ru',
      author: '',
      ogHost: process.env.DOMAIN,
      ogTitle: '',
      ogDescription: '',
      ogImage: {
        path: '/images/sharing.jpg',
        width: 1024,
        height: 512
      }
    },
    manifest: {
      name: '',
      short_name: '',
      description: '',
      lang: 'ru'
    }
  },
  // yandexMetrika: {
  //   id: '89093817',
  //   webvisor: true,
  //   clickmap: true,
  //   useCDN: true,
  //   trackLinks: false,
  //   accurateTrackBounce: false,
  //   debug: true
  // }
}
