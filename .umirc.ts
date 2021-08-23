import { defineConfig } from 'dumi';
// 此处更换为自己的仓库名
let base = '/gulp-ui';
let publicPath = '/gulp-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
    title: 'Happy UI',
    mode: 'site',
    outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
});
