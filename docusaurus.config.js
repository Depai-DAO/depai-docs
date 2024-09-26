// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Depai Documentation',
  tagline: 'The World\'s First Supply-demand Balanced and Always-online AI Inference Network',
  favicon: 'img/favicon.ico',

  url: 'https://depai.online/',
  baseUrl: '/',

  organizationName: 'Depai-DAO',
  projectName: 'depai-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Depai-DAO/depai-docs/-/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Depai Documentation',
        logo: {
          alt: 'Depai Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/Depai-DAO',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://x.com/DepaiOnline',
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
          },
          {
            href: 'https://discord.gg/BpDPtU5Q',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Depai`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      //   insights: false,
      // },
    }),
};

export default config;
