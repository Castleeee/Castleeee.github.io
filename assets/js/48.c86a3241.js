(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{469:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("details",[r("summary",[r("B",[r("I",{staticStyle:{cursor:"pointer",color:"#0e5870"}},[t._v("Rvm常用命令")])],1)],1),t._v(" "),t._m(4)]),t._v(" "),r("hr"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("details",[r("summary",[r("B",[r("I",{staticStyle:{cursor:"pointer",color:"#0e5870"}},[t._v("Ruby常用命令")])],1)],1),t._v(" "),t._m(7)]),t._v(" "),r("hr"),t._v(" "),r("br"),t._v("\n在rvm中安完了ruby默认都带了个gem  \n"),r("br"),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("br"),t._v(" "),r("details",[r("summary",[r("B",[r("I",{staticStyle:{cursor:"pointer",color:"#0e5870"}},[t._v("gem常用命令")])],1)],1),t._v(" "),t._m(10)]),t._v(" "),r("hr"),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("Valine")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Ruby")]),this._v(" "),e("p",[this._v("优♂雅著称的Ruby💎")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("ruby的环境win下和linux下是不一样的，安装方式自己去找。"),r("br"),t._v("\nwins下不建议使用，因为Rails和rvm gem在win下不好用。但ruby本身能用。主要说下Linux下。"),r("br"),t._v("\nlinux下使用rvm+gem管理ruby类比下py的virtualenv和pip conda"),r("br"),t._v(" "),r("br"),t._v("\n参考rubyChina"),r("a",{attrs:{href:"https://ruby-china.org/wiki/install_ruby_guide"}},[t._v("这一篇")]),t._v(",装之前先把自己该装的"),r("code",[t._v("libssl libssl-dev zlib build-essential openssl wget sudoer gnupg2")]),t._v("等等都装好\n有时候那个gpg密钥会失效，按照错误提示获取或者自己去网上找找还能用的密钥。按照上面说的修改下源。\n安装顺序为 rvm->ruby->gem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安装ruby，我看的博客上不成功换了root，我的成功了"),e("br"),this._v(" "),e("code",[this._v("rvm install ruby")]),e("br"),this._v("\n测试一下"),e("br"),this._v(" "),e("code",[this._v("ruby --version")]),this._v("一般会给你下载最新的稳定版\n"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-linux]"),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("gem")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("#RubyGems is a sophisticated package manager for Ruby.  This is a...(输出太长了不写")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("查看gem的源"),e("br"),this._v(" "),e("code",[this._v("gem sources -l")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("啥也没有，添加一个国内源"),e("br"),this._v(" "),e("code",[this._v("gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/")]),e("br"),this._v(" "),e("code",[this._v("gem sources -l")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("*** CURRENT SOURCES ***"),e("br"),this._v("\nhttps://gems.ruby-china.org/")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安装好ruby之后直接输入irb就进入了ruby的命令行，也是和py一样，exit，exit()，Ctrl+B退出"),e("br"),this._v("\nruby和rvm和gem都是 version，-v或--version 输出版本号。ruby文件后缀名为"),e("code",[this._v(".rb")]),e("br"),this._v("\nwin下用rubyMine会直接检测你的ruby环境，linux下先"),e("code",[this._v("source /etc/profile.d/rvm.sh")]),this._v(",会在当前session激活rvm。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rails","aria-hidden":"true"}},[this._v("#")]),this._v(" Rails")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("等你学完Ruby用到Rails的时候再来看，可以跳过。"),r("br"),t._v("\n还是参考rubyChina"),r("a",{attrs:{href:"https://ruby-china.org/wiki/install_ruby_guide"}},[t._v("这一篇")]),r("br"),t._v(" "),r("code",[t._v("gem install bundler")]),r("br"),t._v(" "),r("code",[t._v("gem install rails")]),r("br"),t._v("\n如果顺利的话就完成了，主要讲一下是啥，bundler也是用来管理包的，单独管理本项目的gem包")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"helloworld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#helloworld","aria-hidden":"true"}},[this._v("#")]),this._v(" HelloWorld")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v('puts "HelloWorld"')]),e("br"),this._v("\nruby的语法很少而且十分自由，")])}],!1,null,null,null);e.default=i.exports}}]);