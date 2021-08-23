(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},Rsk4:function(e,n,t){"use strict";t.r(n);var r=t("nWs5"),a=t("TFir"),i=t.n(a),l=t("OFkz"),c="import React from 'react';\r\nimport Alert from '../../alert';\r\nimport '../style';\r\n\r\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",o="import React from 'react';\r\nimport t from 'prop-types';\r\n\r\nexport interface AlertProps {\r\n  /**\r\n   * @description       Alert \u7684\u7c7b\u578b\r\n   * @default           'info'\r\n   */\r\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\r\n}\r\n\r\n\r\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\r\n\r\nconst prefixCls = 'happy-alert';\r\n\r\nconst kinds: KindMap = {\r\n  info: '#5352ED',\r\n  positive: '#2ED573',\r\n  negative: '#FF4757',\r\n  warning: '#FFA502',\r\n};\r\n\r\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\r\n  <div\r\n    className={prefixCls}\r\n    style={{\r\n      background: kinds[kind],\r\n    }}\r\n    {...rest}\r\n  >\r\n    {children}\r\n  </div>\r\n);\r\n\r\nAlert.propTypes = {\r\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r\n};\r\n\r\nexport default Alert;",s="import './index.less';",d="@popupPrefix: happy-alert;\r\n\r\n.@{popupPrefix} {\r\n  padding: 20px;\r\n  background: white;\r\n  border-radius: 3px;\r\n  color: white;\r\n}";n["default"]={"alert-basic":{component:Object(l["dynamic"])({loader:function(){var e=Object(r["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:c},"index.tsx":{import:"../../alert",content:o},"style/index.ts":{import:"../style",content:s},"index.less":{import:"./index.less",content:d}},dependencies:{react:{version:"17.0.2"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}}}},XcYI:function(e,n,t){"use strict";var r=t("T9Mk"),a=t.n(r),i=t("OS9G"),l={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};n["a"]=function(e){var n=e.identifier,t=e.export,c=Object(i["useApiData"])(n),o=Object(r["useContext"])(i["context"]),s=o.locale,d=/^zh|cn$/i.test(s)?l["zh-CN"]:l["en-US"];return a.a.createElement(a.a.Fragment,null,c&&a.a.createElement("table",{style:{marginTop:24}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,d.name),a.a.createElement("th",null,d.description),a.a.createElement("th",null,d.type),a.a.createElement("th",null,d.default))),a.a.createElement("tbody",null,c[t].map((function(e){return a.a.createElement("tr",{key:e.identifier},a.a.createElement("td",null,e.identifier),a.a.createElement("td",null,e.description||"--"),a.a.createElement("td",null,a.a.createElement("code",null,e.type)),a.a.createElement("td",null,a.a.createElement("code",null,e.default||e.required&&d.required||"--")))})))))}},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')},yf2O:function(e,n,t){"use strict";t.r(n);var r=t("T9Mk"),a=t.n(r),i=t("OS9G"),l=t("XcYI"),c=t("oSqR"),o=t("Rsk4"),s=a.a.memo(o["default"]["alert-basic"].component);n["default"]=e=>(a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"alert-\u8b66\u544a\u63d0\u793a"},a.a.createElement(i["AnchorLink"],{to:"#alert-\u8b66\u544a\u63d0\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Alert \u8b66\u544a\u63d0\u793a"),a.a.createElement("p",null,"\u8b66\u544a\u63d0\u793a\uff0c\u5c55\u73b0\u9700\u8981\u5173\u6ce8\u7684\u4fe1\u606f\u3002"),a.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.a.createElement(i["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},a.a.createElement(i["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),a.a.createElement(c["default"],o["default"]["alert-basic"].previewerProps,a.a.createElement(s,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(i["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(l["a"],{src:"./index.tsx",identifier:"alert",export:"default"})))))}}]);