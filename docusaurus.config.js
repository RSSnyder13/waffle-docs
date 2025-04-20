module.exports = {
  title: 'WaffleSOC2 Docs',
  tagline: 'Documentation for WaffleSOC2',
  url: 'https://docs.wafflesoc2.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-username',
  projectName: 'your-repo',
  themeConfig: {
    navbar: {
      title: 'WaffleSOC2 Docs',
      logo: {
        alt: 'WaffleSOC2 Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/index', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/your-username/your-repo', label: 'GitHub', position: 'right' },
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
