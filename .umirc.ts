import { defineConfig } from 'dumi';

const Dev = process.env.NODE_ENV === 'development';

// more config: https://d.umijs.org/config
export default defineConfig({
  // mode: 'site',
  favicon: 'http://pic1.win4000.com/wallpaper/e/59195160598b3_216_125.jpg',
  logo: 'http://pic1.win4000.com/wallpaper/e/59195160598b3_216_125.jpg',
  title: '车300组件文档',
  description: '车300-前端',
  outputPath: 'docs-dist',
  resolve: {
    previewLangs: ['js', 'jsx', 'ts', 'tsx'],
  },
  publicPath: Dev ? '/' : './',
  ignoreMomentLocale: true,
  base: Dev ? '/' : '/dumi/',
  dynamicImport: {},
  // exportStatic: {},
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  links: [
    {
      href: Dev ? '../common.css' : './common.css',
      rel: 'stylesheet',
    },
  ],
  externals: {
    moment: 'moment',
  },
  scripts: ['https://cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/moment.min.js'],
});
