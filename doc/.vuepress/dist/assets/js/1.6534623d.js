(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[a("router-link",{attrs:{to:"/quickstart/"}},[t._v("参见快速上手")]),t._v("\n基本的使用已经在快速上手中阐述了，这里根据 API 再详细的说明")],1),t._m(2),t._m(3),t._m(4),a("p",[t._v("每次修改 mutation 和 action 的时候支持传入额外参数\n比如我们发一个异步请求，并将请求的数据存到 state 内，就需要额外的参数了")]),t._m(5),a("p",[t._v("这个 API 主要用于性能优化，传入一个 state 对象，然后代理这个对象，然后再进行操作的时候，就会对 state 劫持\nsmox 内部已经做了相应处理，但是 produce 还可以用于组件外部 setState，比如：")]),t._m(6),t._m(7),t._m(8),a("p",[t._v("我推荐是这个结构：")]),t._m(9),a("p",[a("a",{attrs:{href:"https://github.com/132yse/idanmu-admin/tree/master/src/store",target:"_blank",rel:"noopener noreferrer"}},[t._v("参见已有的项目idanmu-admin"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#教程","aria-hidden":"true"}},[this._v("#")]),this._v(" 教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("store.state")])]),a("li",[a("p",[t._v("store.mutations")])]),a("li",[a("p",[t._v("store.actions")])]),a("li",[a("p",[t._v("store.commit(mutation,payload)")])]),a("li",[a("p",[t._v("store.dispatch(action,payload)")])]),a("li",[a("p",[t._v("store.subscribe(sub)")])]),a("li",[a("p",[t._v("connect([state],[mutations],[actions])")])]),a("li",[a("p",[t._v("produce(state,state=>{})")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"payload-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload-参数","aria-hidden":"true"}},[this._v("#")]),this._v(" payload 参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"produce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#produce","aria-hidden":"true"}},[this._v("#")]),this._v(" produce")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("produce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"推荐目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推荐目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 推荐目录结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们都知道 redux 中拆分 reducer、action，是不太好搞的，需要 combineReducers 来合并\n但是 smox 可以不用，因为 smox 对应的都是对象，所以我们直接 "),s("code",[this._v("export default {}")]),this._v("即可")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("├── index.js                #入口文件\n├── components              #业务组件\n│   ├── App.js \n│   └── ...\n└── store\n    ├── index.js            # 创建并导出 store 的地方\n    ├── mutations.js        # state  \n    ├── mutations.js        # mutation\n    └── actions.js          # actions\n")])])])}],!1,null,null,null);s.default=n.exports}}]);