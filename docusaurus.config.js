const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MySQL支持',
  tagline: '数据治理',
  url: 'http://wubx.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wubx', // Usually your GitHub org/user name.
  projectName: 'wubx.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'MySQL支持',
      logo: {
        alt: 'MySQL支持',
        src: 'img/logo.svg',
      },
      items: [
      //  {
      //    type: 'doc',
      //    docId: 'intro',
      //    position: 'left',
      //    label: 'Tutorial',
      //  },
      //  {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: '/about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://github.com/wubx/wubx.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
/*       links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wubx/wubx.github.io',
            },
          ],
        },
      ], */
      copyright: `Copyright ©2021. Built with Docusaurus `,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
       // docs: {
       //   sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
       //   editUrl:
       //     'https://github.com/facebook/docusaurus/edit/master/website/',
       // },
        blog: {
          showReadingTime: true,
          path: "./blog",
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: 'https://github.com/wubx/wubx.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
