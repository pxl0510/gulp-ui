(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"9kvl":function(e,r,n){"use strict";var t=n("FfOG");n.d(r,"a",(function(){return t["b"]}));n("bCY9")},JuhJ:function(e,r,n){"use strict";function t(){var e=o(n("T9Mk"));return t=function(){return e},e}function i(){var e=n("OS9G");return i=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=function(e,r){var n=[],o=e.match.params.uuid,a=void 0===e.location.query.wrapper,p=r[o];if(p){var s=c(c({},p.previewerProps),{},{hideActions:(p.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(s.motions=(s.motions||[]).slice(),s.motions.unshift("autoplay"),s.motions.every((function(e){return!e.startsWith("capture")}))&&s.motions.push("capture:[id|=root]")),n=a?[t().default.createElement((function(){return(0,i().useMotions)(s.motions||[],document.documentElement),t().default.createElement("div",{},t().default.createElement(p.component))}))]:[s,t().default.createElement(p.component)]}return n};r.default=s},Rsk4:function(e,r,n){"use strict";n.r(r);var t=n("nWs5"),i=n("TFir"),o=n.n(i),a=n("OFkz"),c="import React from 'react';\r\nimport Alert from '../../alert';\r\nimport '../style';\r\n\r\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",p="import React from 'react';\r\nimport t from 'prop-types';\r\n\r\nexport interface AlertProps {\r\n  /**\r\n   * @description       Alert \u7684\u7c7b\u578b\r\n   * @default           'info'\r\n   */\r\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\r\n}\r\n\r\n\r\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\r\n\r\nconst prefixCls = 'happy-alert';\r\n\r\nconst kinds: KindMap = {\r\n  info: '#5352ED',\r\n  positive: '#2ED573',\r\n  negative: '#FF4757',\r\n  warning: '#FFA502',\r\n};\r\n\r\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\r\n  <div\r\n    className={prefixCls}\r\n    style={{\r\n      background: kinds[kind],\r\n    }}\r\n    {...rest}\r\n  >\r\n    {children}\r\n  </div>\r\n);\r\n\r\nAlert.propTypes = {\r\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r\n};\r\n\r\nexport default Alert;",s="import './index.less';",u="@popupPrefix: happy-alert;\r\n\r\n.@{popupPrefix} {\r\n  padding: 20px;\r\n  background: white;\r\n  border-radius: 3px;\r\n  color: white;\r\n}";r["default"]={"alert-basic":{component:Object(a["dynamic"])({loader:function(){var e=Object(t["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function r(){return e.apply(this,arguments)}return r}()}),previewerProps:{sources:{_:{tsx:c},"index.tsx":{import:"../../alert",content:p},"style/index.ts":{import:"../style",content:s},"index.less":{import:"./index.less",content:u}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}}}},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);