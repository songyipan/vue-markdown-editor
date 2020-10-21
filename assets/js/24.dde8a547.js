(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{385:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},386:function(e,t,n){"use strict";var r=n(15),i=n(55),a=n(14),o=n(41),s=n(22),c=Math.min,u=[].lastIndexOf,d=!!u&&1/[1].lastIndexOf(1,-0)<0,m=o("lastIndexOf"),l=s("indexOf",{ACCESSORS:!0,1:0}),p=d||!m||!l;e.exports=p?function(e){if(d)return u.apply(this,arguments)||0;var t=r(this),n=a(t.length),o=n-1;for(arguments.length>1&&(o=c(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:u},388:function(e,t,n){var r=n(1),i=n(386);r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},390:function(e,t,n){"use strict";var r=n(1),i=n(40).every,a=n(41),o=n(22),s=a("every"),c=o("every");r({target:"Array",proto:!0,forced:!s||!c},{every:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},396:function(e,t,n){var r=n(1),i=n(3),a=n(220).f;r({target:"Object",stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:a})},397:function(e,t,n){var r=n(1),i=n(3),a=n(5),o=Object.isFrozen;r({target:"Object",stat:!0,forced:i((function(){o(1)}))},{isFrozen:function(e){return!a(e)||!!o&&o(e)}})},406:function(e,t,n){"use strict";t.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Links\n\n- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/base-editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Usage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Refrence\n\n- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)\n- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)\n'},471:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);var r=n(385),i=n(463),a=n.n(i),o=(n(471),n(395)),s=n.n(o),c=n(406),u={components:Object(r.a)({},a.a.name,a.a),data:function(){return this.theme=s.a,{text:c.a}}},d=n(54),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-md-editor",{attrs:{theme:e.theme,height:"500px"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})}),[],!1,null,null,null);t.default=m.exports}}]);