module.exports = {
  title: 'Waffle Documentation',
  tagline: 'Simple, SOC 2-compliant AWS infrastructure for containerized backends',
  url: 'https://docs.wafflesoc2.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Waffle',
  projectName: 'waffle-templates',
  themeConfig: {
    navbar: {
      title: 'Waffle Documentation',
      logo: {
        alt: 'Waffle Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/index', label: 'Docs', position: 'left' },
        { href: 'https://github.com/WaffleCodeApp/waffle-templates', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Home', to: '/docs/index' },
            { label: 'Quickstart', to: '/docs/quickstart' },
            { label: 'Reference', to: '/docs/reference' },
            { label: 'FAQ', to: '/docs/faq' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/WaffleCodeApp/waffle-templates' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Waffle Team`,
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
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
