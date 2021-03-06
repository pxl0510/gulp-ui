// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/ui/gulp-ui/src/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/ui/gulp-ui/src/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/ui/gulp-ui/src/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/ui/gulp-ui/src/alert/style/index.less?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'D:/ui/gulp-ui/src/alert/demo/basic.tsx')).default,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"../../alert","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":"17.0.2"},"prop-types":{"version":"15.7.2"}},"componentName":"alert","identifier":"alert-basic"},
  },
};
