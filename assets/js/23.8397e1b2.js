(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{583:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件目录"}},[t._v("#")]),t._v(" 文件目录")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/1.png")}})]),t._v(" "),a("p",[a("strong",[t._v("利用 pagehide 事件在用户刷新页面时将vuex的store存入sessionstorage中，然后在页面加载时，从sessionstorage中获取，replaceState store")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在页面加载时读取sessionStorage里的状态信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"store"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pagehide 解决ios移动端不支持beforeunload,安卓端两个都可以用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在页面刷新时将vuex里的信息保存到sessionStorage里")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pagehide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'store'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getUserInfo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("解析代码：")]),t._v(" "),a("ol",[a("li",[t._v("在App.vue 中的 create() 生命周期中加载，是因为 index.hxml 为 vue 项目默认首页，里面默认引用了 App.vue 根组件，每次页面初次打开、刷新、跳转等都会先加载根组件，在根组件上，进行页面事件的监听，这样就可以通过下面的方式防止 Vuex 中的 state 数据丢失")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/2.png")}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("window.addEventListener 事件监听 ，监听 onpagehide 事件（在用户离开网页时触发），本来想使用 beforeunload 事件，但是在ios不支持，则使用了 pagehide 替代")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/3.png")}})]),t._v(" "),a("p",[a("strong",[t._v("onunload离开网页触发")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/4.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/5.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/6.png")}})]),t._v(" "),a("p",[a("strong",[t._v("beforeunload事件")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/7.png")}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("刚开始打开 App时，sessionStorage 里面的数据为空（没有 store）、Vuex 里面的数据为原始状态")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/8.png")}})]),t._v(" "),a("p",[t._v("当我们在登录页面时，输入账号和密码后，点击登录时，跳转到我的页面，在这一过程中，我们设置了利用了Vuex中的调用异步的方法dispatch去调用 Vuex 里面的 action 方法–doLogin 方法、getUserInfo 方法，这两个方法里面，我们更改了 Vuex 中 state 的状态，这样 state 则保存了最新的数据，即代码效果的数据效果")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/9.png")}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v('当完成上面操作后，window.addEventListener 开始监听到 pagehide 页面跳转，这时候则在 sessionStorage 设置了 store 这个key 用来保存 当前 vuex 里面的 state 的状态，注意 sessionStorage.setItem() 里面的key 和 value 都要 " "，所以这里使用了 JSON.stringify()，把 JSON 对象 转化为 JSON 字符串，从而实现保存，这时的状态是这样的')])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/10.png")}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在进入页面时，首先执行 App.vue 根组件里面的create() 生命周期函数，设置一个变量 store 等于 当前页面中 window.sessionStorage.getItem() 获取到的 store 值，如果 store 不为空（不会为空–因为我们在事件监听中设置了store = Vuex 中的 state），则利用this.$store.replaceState()+ Object.assign() 把当前浏览器中 sessionStorage 里面的 存储的 store（即变量 store）、 this.$store.state 、{} 三者合并，当有重复的键值对时，Object.assign() 会使用后面值替代前面的")])]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/11.png")}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("这样每次页面有刷新、跳转、等操作时，都会保存到最新的状态值，存储在当前的页面（跳转后、刷新后，等，当前会话不关闭即可）")])]),t._v(" "),a("h2",{attrs:{id:"代码效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码效果"}},[t._v("#")]),t._v(" 代码效果")]),t._v(" "),a("p",[t._v("这里只在 Vuex 的 user 模块中设置了 state 状态，所以会显示 user ，这里是用了模块化的思想")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/12.png")}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/vue/replaceState-sessionStorage/13.png")}})])])}),[],!1,null,null,null);s.default=e.exports}}]);