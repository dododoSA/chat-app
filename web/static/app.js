(function(e){function t(t){for(var a,l,s=t[0],i=t[1],c=t[2],h=0,m=[];h<s.length;h++)l=s[h],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={main:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;r.push(["56d7","chunk-vendors"]),n()})({"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},4805:function(e,t,n){"use strict";var a=n("897e"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[n("router-link",{attrs:{to:"/"}},[e._v("Index")]),n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"}),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/login"}},[e._v("ログイン")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/signup"}},[e._v("ユーザー登録")])],1)])],1),n("router-view")],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],i={name:"HelloWorld",props:{msg:String}},c=i,u=(n("4805"),n("2877")),h=Object(u["a"])(c,l,s,!1,null,"b9167eee",null),m=h.exports,p={name:"app",components:{HelloWorld:m}},d=p,v=(n("034f"),Object(u["a"])(d,o,r,!1,null,null,null)),f=v.exports,g=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Top"},[n("channel")],1)},C=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel"},[n("router-link",{attrs:{to:"/channel/new"}},[e._v("+")]),n("ul",e._l(e.channels,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:{name:"Channel",params:{name:t.name}}}},[e._v(e._s(t.name))])],1)}),0),n("h2",[e._v(e._s(e.currentChannelName))]),e.currentChannelName?n("router-link",{attrs:{to:{name:"EditChannelForm",params:{name:e.currentChannelName}}}},[e._v(" チャンネル名を変更 ")]):e._e(),e.currentChannelName?n("a",{attrs:{href:"#"},on:{click:e.deleteChannel}},[e._v("チャンネルを削除")]):e._e(),n("thread-show",{attrs:{channelName:e.currentChannelName}})],1)},b=[],N=(n("7f7f"),n("bc3a")),k=n.n(N),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"thread"},[e._l(e.threads,function(t){return n("div",{key:t.id},[e._v("\n        "+e._s(t.content)+"\n        "),t.editMode?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editComment,expression:"editComment"}],attrs:{type:"text"},domProps:{value:e.editComment},on:{input:function(t){t.target.composing||(e.editComment=t.target.value)}}}),n("button",{on:{click:function(n){return e.postEditComment(t)}}},[e._v("変更")]),n("button",{on:{click:function(n){return e.exitEdit(t)}}},[e._v("X")])]):n("div",[n("a",{attrs:{href:"#"},on:{click:function(n){return e.startEdit(t)}}},[e._v("編集")])]),n("a",{attrs:{href:"#"},on:{click:function(n){return e.deleteThread(t)}}},[e._v("削除")])])}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{type:"text"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}),n("button",{on:{click:e.postComment}},[e._v("送信")])],2)},x=[],j=(n("ac4d"),n("8a81"),n("ac6a"),{name:"Thread",props:{channelName:String},data:function(){return{threads:[],newComment:"",editComment:""}},watch:{$props:{handler:function(e,t){var n=this;k.a.get("/channel/"+n.channelName+"/thread").then(function(e){n.threads=e.data}).catch(function(e){console.log(e)})},deep:!0}},methods:{postComment:function(){var e=this;if(""!=this.newComment){var t={content:this.newComment,channelName:this.channelName};k.a.post("/channel/"+e.channelName+"/thread/new",t).then(function(t){e.newComment="";var n=t.data;n.editMode=!1,e.threads.push(n)}).catch(function(e){console.log(e)})}},postEditComment:function(e){var t=this;if(""!=this.editComment){var n={content:this.editComment,threadId:e.id};k.a.post("/channel/"+t.channelName+"/thread/edit",n).then(function(n){e.content=t.editComment,t.editComment="",e.editMode=!1}).catch(function(e){console.log(e)})}},exitEdit:function(e){e.editMode=!1,this.editComment=""},startEdit:function(e){this.$set(e,"editMode",!0);var t=!0,n=!1,a=void 0;try{for(var o,r=this.threads[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var l=o.value;e.id!=l.id&&this.$set(l,"editMode",!1)}}catch(s){n=!0,a=s}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}this.editComment=e.content},deleteThread:function(e){var t=this,n={id:e.id};k.a.post("/channel/"+t.channelName+"/thread/delete",n).then(function(){k.a.get("/channel/"+t.channelName+"/thread").then(function(e){t.threads=e.data}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},created:function(){var e=this;console.log(this.channelName),k.a.get("/channel/"+e.channelName+"/thread").then(function(t){e.threads=t.data;var n=!0,a=!1,o=void 0;try{for(var r,l=e.threads[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var s=r.value;e.$set(s,"editMode",!1)}}catch(i){a=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}}).catch(function(e){console.log(e)})}}),E=j,$=Object(u["a"])(E,y,x,!1,null,null,null),O=$.exports,P={name:"Channel",data:function(){return{channels:[],currentChannelName:""}},created:function(){var e=this;this.currentChannelName=this.$route.params.name,k.a.get("/channel").then(function(t){e.channels=t.data}).catch(function(e){console.log(e)})},methods:{newChannel:function(){var e=this;k.a.post("/channel/new").then(function(t){k.a.get("/channel").then(function(t){e.channels=t.data}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},deleteChannel:function(){var e=this,t={name:this.currentChannelName};k.a.post("/channel/delete",t).then(function(){e.$router.push("/")}).catch(function(e){console.log(e)})}},components:{ThreadShow:O},beforeRouteUpdate:function(e,t,n){this.currentChannelName=e.params.name,n()}},S=P,M=Object(u["a"])(S,w,b,!1,null,null,null),T=M.exports,F={name:"Top",components:{Channel:T}},I=F,L=Object(u["a"])(I,_,C,!1,null,null,null),U=L.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h2",[e._v("Log in")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:e.logIn}},[e._v("ログイン")]),n("p",[e._v("\n        アカウントを持ってない方は\n        "),n("router-link",{attrs:{to:"/signup"}},[e._v("こちら")])],1)])},J=[],W={name:"Login",data:function(){return{username:"",password:""}},methods:{logIn:function(){}}},z=W,D=Object(u["a"])(z,H,J,!1,null,null,null),R=D.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup"},[n("h2",[e._v("SignUp")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],attrs:{type:"password",placeholder:"PasswordConfirmation"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}}),n("button",{on:{click:e.signUp}},[e._v("登録")]),n("p",[e._v("\n        アカウントを持っている方は\n        "),n("router-link",{attrs:{to:"/login"}},[e._v("こちら")])],1)])},q=[],A={name:"Signup",data:function(){return{username:"",password:"",passwordConfirmation:""}}},B=A,G=Object(u["a"])(B,X,q,!1,null,null,null),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-channel-form"},[n("h2",[e._v("新しいチャンネルを作成")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.channelName,expression:"channelName"}],attrs:{type:"text",placeholder:"NewChannelName"},domProps:{value:e.channelName},on:{input:function(t){t.target.composing||(e.channelName=t.target.value)}}}),n("button",{on:{click:e.postChannel}},[e._v("作成")])])},V=[],Y={name:"NewChannelForm",data:function(){return{channelName:""}},methods:{postChannel:function(){var e=this,t={name:this.channelName};""!=this.channelName&&k.a.post("http://localhost:8000/channel/new",t).then(function(t){e.$router.push({name:"Channel",params:{name:t.data.name}})}).catch(function(e){console.log(e)})}}},Z=Y,ee=Object(u["a"])(Z,Q,V,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"edit-channel-form"},[n("h2",[e._v("チャンネルの名前変更")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.channelName,expression:"channelName"}],attrs:{type:"text",placeholder:"EditChannelName"},domProps:{value:e.channelName},on:{input:function(t){t.target.composing||(e.channelName=t.target.value)}}}),n("button",{on:{click:e.postChannel}},[e._v("変更")])])},ae=[],oe={name:"EditChannelForm",data:function(){return{channelName:""}},methods:{postChannel:function(){var e=this,t={afterName:this.channelName,beforeName:this.$route.params["name"]};""!=this.channelName&&k.a.post("http://localhost:8000/channel/edit",t).then(function(t){e.$router.push({name:"Channel",params:{name:t.data.name}})}).catch(function(e){console.log(e)})}}},re=oe,le=Object(u["a"])(re,ne,ae,!1,null,null,null),se=le.exports;a["a"].use(g["a"]);var ie=new g["a"]({mode:"history",routes:[{path:"/",name:"Top",component:U},{path:"/login",name:"Login",component:R},{path:"/signup",name:"Signup",component:K},{path:"/channel/new",component:te},{path:"/channel/:name/edit",name:"EditChannelForm",component:se},{path:"/channel/:name",name:"Channel",component:T}]});a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({router:ie,render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,t,n){},"897e":function(e,t,n){}});
//# sourceMappingURL=app.js.map