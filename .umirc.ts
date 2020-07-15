import { defineConfig } from 'dumi';
import path from 'path'

// more config: https://d.umijs.org/config
export default defineConfig({
  title: '车300组件文档',
  description: "车300-前端",
  favicon: 'http://pic1.win4000.com/wallpaper/e/59195160598b3_216_125.jpg',
  logo: 'http://pic1.win4000.com/wallpaper/e/59195160598b3_216_125.jpg',
  outputPath: 'docs-dist',
  resolve: {
    previewLangs: ['js','jsx','ts','tsx'],
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  // styles: [
  //   `th[align="center"] { text-align: center }`,
  // ],
  links: [
    {
      href:"../common.css",
      rel:"stylesheet"
    }
  ],
  alias: {
    'utils': path.resolve(__dirname, 'src/utils')
  }
});
