module.exports = {
  title: 'Waffle Docs',
  tagline: 'Documentation for Waffle',
  url: 'https://docs.wafflesoc2.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-username',
  projectName: 'your-repo',
  themeConfig: {
    navbar: {
      title: 'Waffle Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/index', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/rssnyder13/waffle-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/index' },
          ],
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      ],
    ],
  ],
};
