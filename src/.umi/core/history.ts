// @ts-nocheck
import { createBrowserHistory, History } from 'D:/ui/gulp-ui/node_modules/_@umijs_runtime@3.5.17@@umijs/runtime';

let options = {
  "basename": "/react-ui-library-tutorial"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
