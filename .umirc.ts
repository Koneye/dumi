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
    exportStatic: {},
    resolve: {
        previewLangs: ['js', 'jsx', 'ts', 'tsx'],
    },
    publicPath: Dev ? '/' : '/c3-react-docs/',
    ignoreMomentLocale: true,
    base: Dev ? '/' : '/c3-react-docs/',
    dynamicImport: {},
    extraBabelPlugins: [
        [
            'import',
            { libraryName: 'antd', libraryDirectory: 'es', style: true },
        ],
    ],
    styles: [
        `th[align='center'] {
      text-align: center;
    }`,
    ],
    links: [
        {
            href: Dev ? '../common.css' : '/c3-react-docs/common.css',
            rel: 'stylesheet',
        },
    ],
    externals: {
        moment: 'moment',
        React: 'react',
    },
    scripts: [
        'https://cdn.bootcdn.net/ajax/libs/moment.js/2.27.0/moment.min.js',
        'https://cdn.bootcdn.net/ajax/libs/react/16.12.0/umd/react.production.min.js',
    ],
});
