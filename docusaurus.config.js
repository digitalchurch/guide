// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Digital Church Guide',
  tagline: 'Learn how to use the tools available on our Digital Church platform.',
  favicon: '/img/DigitalChurch_FullColorIcon.ico',

  // Set the production url of your site here
  url: 'https://digitalchurch.guide/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'digitalchurch', // Usually your GitHub org/user name.
  projectName: 'guide', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/digitalchurch/guide/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/js/intercom.js',
      async: false,
    }
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    require.resolve('./src/plugins/webpack-plugin')
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'ISLLHGAOWD',
    
        // Public API key: it is safe to commit it
        apiKey: 'f43d24a36b8c57135d4eb6db616d156c',
    
        indexName: 'digitalchurch',
    
        // Optional: see doc section below
        contextualSearch: true,
    
        // Optional: Algolia search parameters
        searchParameters: {},
    
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
    
        //... other Algolia params
        insights: true,

        // Set debug to true if you want to inspect the modal
        debug: false,
      },
      
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },

      // Replace with your project's social card
      image: 'img/digital-church-featured-image.jpg',
      navbar: {
        logo: {
          alt: 'Digital Church',
          src: '/img/DigitalChurch_FullColorLogo.svg',
          srcDark: '/img/DigitalChurch_DarkModeLogo.svg',
          href: 'https://digitalchurch.com/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'templateSidebar',
            position: 'left',
            label: 'Templates',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designSidebar',
            position: 'left',
            label: 'Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'brandSidebar',
            position: 'left',
            label: 'Brand',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {to: 'https://digitalchurch.help/', label: 'Support', position: 'left'},
          // {
          //   href: 'https://digitalchurch.com',
          //   label: 'digitalchurch.com',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                html: `
                    <a href="https://digitalchurch.com" target="_blank" rel="noreferrer noopener" aria-label="Digital Church">
                      <img src="/img/DigitalChurch_FullColorLogo.svg" alt="Digital Church Logo" width="180" height="51" />
                    </a>
                  `,
              },
              {
                label: 'Digital Church Limited',
                href: 'https://digitalchurch.limited/',
              },
              {
                label: 'Legal Information',
                href: 'https://digitalchurch.com/legal',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Digital Church Platform',
                href: 'https://digitalchurch.com/',
              },
              {
                label: 'Church Website Builder',
                href: 'https://digitalchurch.com/website',
              },
              {
                label: 'Church Native Applications',
                href: 'https://digitalchurch.com/app',
              },
              {
                label: 'Church Domain Registration',
                href: 'https://digitalchurch.domains/',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'Digital Church Agency',
                href: 'https://digitalchurch.agency/',
              },
              {
                label: 'Digital Church Consulting',
                href: 'https://digitalchurch.consulting/',
              },
              {
                label: 'Digital Church Marketing',
                href: 'https://digitalchurch.marketing/',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'User Guide',
                to: '/',
              },
              {
                label: 'Platform Status',
                href: 'https://status.digitalchurchplatform.com',
              },
              {
                label: 'Latest Changes',
                href: 'https://digitalchurch.com/changes/',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Blog',
                href: 'https://digitalchurch.blog/',
              },
              {
                label: 'Academy',
                href: 'https://digitalchurchacademy.com/',
              },
              {
                label: 'Podcast',
                href: 'https://digitalchurchpodcast.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digital Church Limited`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash'],
      },
    }),
};

module.exports = config;
