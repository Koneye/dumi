import { defineConfig } from 'dumi';

const Dev = process.env.NODE_ENV === 'development';

// more config: https://d.umijs.org/config
export default defineConfig({
  // mode: 'site',
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  title: '车300组件文档',
  description: '车300-前端',
  outputPath: 'docs-dist',
  // exportStatic: {
  //   htmlSuffix: true
  // },
  resolve: {
    previewLangs: ['js', 'jsx', 'ts', 'tsx'],
  },
  publicPath: Dev ? '/' : './',
  ignoreMomentLocale: true,
  base: Dev ? '/' : '/dumi/',
  // dynamicImport: {},
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  styles: [
    `th[align='center'] {
      text-align: center;
    }`,
  ],
  // links: [
  //   {
  //     href: Dev ? '../common.css' : './common.css',
  //     rel: 'stylesheet',
  //   },
  // ],
  externals: {
    moment: 'moment',
  },
  scripts: ['https://cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/moment.min.js'],
});
