(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{401:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2),this._m(3),this._m(4),s("Valine")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"go使用jsonrpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go使用jsonrpc","aria-hidden":"true"}},[this._v("#")]),this._v(" GO使用jsonRPC")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"一个服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个服务")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" DemoService "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Args "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DemoService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args Args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"divide by 0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('[root@iZuf6720onwdpnl2xfy65lZ ~]# telnet localhost 1234\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is \'^]\'.\n{"method":"DemoService.Div","params":[{"A":3,"B":4}],"id":1}\n{"id":1,"result":0.75,"error":null}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('[root@iZuf6720onwdpnl2xfy65lZ go]# docker run -p 1234:1234 -v $PWD/go:/usr/go -it golang\nroot@a55a89d65b42:/go# ls\nbin  src\nroot@a55a89d65b42:/go# cd /usr/go\nroot@a55a89d65b42:/usr/go# ls\njrpc\nroot@a55a89d65b42:/usr/go# cd jrpc\nroot@a55a89d65b42:/usr/go/jrpc# ls\nrpc.go\tserver\nroot@a55a89d65b42:/usr/go/jrpc# cd server/\nroot@a55a89d65b42:/usr/go/jrpc/server# ls\nserver.go\nroot@a55a89d65b42:/usr/go/jrpc/server# go build server.go\nroot@a55a89d65b42:/usr/go/jrpc/server# go run server\npackage server: cannot find package "server" in any of:\n\t/usr/local/go/src/server (from $GOROOT)\n\t/go/src/server (from $GOPATH)\nroot@a55a89d65b42:/usr/go/jrpc/server# go run server.go\n')])])])}],!1,null,null,null);s.default=n.exports}}]);