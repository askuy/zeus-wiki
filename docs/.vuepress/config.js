module.exports = {
    dest: 'Zeus',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Zeus',
        description: 'Zeus 宙斯权限系统'
      },
      '/en/': {
        lang: 'en-US',
        title: 'Zeus',
        description: 'Unified Authority Control Background'
      }
    },
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
      repo: 'bullteam/zeus',
      editLinks: true,
      docsDir: 'docs',
      docsBranch: '0.x',
      locales: {
        '/': {
          label: '简体中文',
          selectText: '选择语言',
          editLinkText: '在 GitHub 上编辑此页',
          lastUpdated: '上次更新',
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新"
            }
          },
          nav: [
            {
              text: '指南',
              link: '/guide/',
            },
            {
              text: '官网',
              link: 'http://www.bullteam.cn'
            },
          ],
          sidebar: {
            '/guide/': genSidebarConfig('Guide')
          }
        },
      }
    }
  }

  function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'basic-config',
        //   'assets',
        //   'markdown',
        //   'using-vue',
        //   'custom-themes',
        //   'i18n',
        //   'deploy'
        ]
      }
    ]
  }
  