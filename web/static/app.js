(function(e){function n(n){for(var a,s,i=n[0],l=n[1],c=n[2],m=0,h=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(n);while(h.length)h.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},o={main:0},r=[];function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var u=l;r.push(["56d7","chunk-vendors"]),t()})({"034f":function(e,n,t){"use strict";var a=t("64a9"),o=t.n(a);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[t("router-link",{attrs:{to:"/"}},[e._v("Index")]),t("ul",{staticClass:"navbar-nav mr-auto"},[t("li",{staticClass:"nav-item"},[e.me?t("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:e.logout}},[e._v("ログアウト")]):e._e()]),e.me?e._e():t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{to:"/login"}},[e._v("ログイン")])],1),e.me?e._e():t("li",{staticClass:"nav-item"},[t("router-link",{attrs:{to:"/signup"}},[e._v("ユーザー登録")])],1)])],1),t("router-view")],1)},r=[],s=t("bc3a"),i=t.n(s),l={name:"app",methods:{logout:function(){var e=this;i.a.get("/logout").then(function(){e.$store.dispatch("getMe"),e.$router.push("/")}).catch(function(e){console.log(e)})}},computed:{me:function(){return console.log(this.$store.state.username),""!==this.$store.state.username}}},c=l,u=(t("034f"),t("2877")),m=Object(u["a"])(c,o,r,!1,null,null,null),h=m.exports,d=t("8c4f"),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Top"},[t("channel")],1)},f=[],v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"channel"},[t("router-link",{attrs:{to:"/channel/new"}},[e._v("+")]),t("ul",e._l(e.channels,function(n){return t("li",{key:n.id},[t("router-link",{attrs:{to:{name:"Channel",params:{name:n.name}}}},[e._v(e._s(n.name))])],1)}),0),t("h2",[e._v(e._s(e.currentChannelName))]),e.currentChannelName?t("router-link",{attrs:{to:{name:"EditChannelForm",params:{name:e.currentChannelName}}}},[e._v(" チャンネル名を変更 ")]):e._e(),e.currentChannelName?t("a",{attrs:{href:"#"},on:{click:e.deleteChannel}},[e._v("チャンネルを削除")]):e._e(),e.currentChannelName?t("div",[t("thread-show",{attrs:{channelName:e.currentChannelName}})],1):e._e()],1)},g=[],w=(t("7f7f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"thread"},[e._l(e.threads,function(n){return t("div",{key:n.id},[e._v("\n        "+e._s(n.content)+"\n        "),n.editMode?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editComment,expression:"editComment"}],attrs:{type:"text"},domProps:{value:e.editComment},on:{input:function(n){n.target.composing||(e.editComment=n.target.value)}}}),t("button",{on:{click:function(t){return e.postEditComment(n)}}},[e._v("変更")]),t("button",{on:{click:function(t){return e.exitEdit(n)}}},[e._v("X")])]):t("div",[t("a",{attrs:{href:"#"},on:{click:function(t){return e.startEdit(n)}}},[e._v("編集")])]),t("a",{attrs:{href:"#"},on:{click:function(t){return e.deleteThread(n)}}},[e._v("削除")])])}),e.canPost?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{type:"text"},domProps:{value:e.newComment},on:{input:function(n){n.target.composing||(e.newComment=n.target.value)}}}),t("button",{on:{click:e.postComment}},[e._v("送信")])]):e._e()],2)}),C=[],_=(t("ac4d"),t("8a81"),t("ac6a"),{name:"Thread",props:{channelName:String},data:function(){return{threads:[],newComment:"",editComment:""}},watch:{$props:{handler:function(e,n){var t=this;i.a.get("/channel/"+t.channelName+"/thread").then(function(e){t.threads=e.data}).catch(function(e){console.log(e)})},deep:!0}},computed:{canPost:function(){return""!=this.$store.getters.username&&this.channelName}},methods:{postComment:function(){var e=this;if(""!=this.newComment){var n={content:this.newComment,channelName:this.channelName};i.a.post("/channel/"+e.channelName+"/thread/new",n).then(function(n){e.newComment="";var t=n.data;t.editMode=!1,e.threads.push(t)}).catch(function(e){console.log(e)})}},postEditComment:function(e){var n=this;if(""!=this.editComment){var t={content:this.editComment,threadId:e.id};i.a.post("/channel/"+n.channelName+"/thread/edit",t).then(function(t){e.content=n.editComment,n.editComment="",e.editMode=!1}).catch(function(e){console.log(e)})}},exitEdit:function(e){e.editMode=!1,this.editComment=""},startEdit:function(e){this.$set(e,"editMode",!0);var n=!0,t=!1,a=void 0;try{for(var o,r=this.threads[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var s=o.value;e.id!=s.id&&this.$set(s,"editMode",!1)}}catch(i){t=!0,a=i}finally{try{n||null==r.return||r.return()}finally{if(t)throw a}}this.editComment=e.content},deleteThread:function(e){var n=this,t={id:e.id};i.a.post("/channel/"+n.channelName+"/thread/delete",t).then(function(){i.a.get("/channel/"+n.channelName+"/thread").then(function(e){n.threads=e.data}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},created:function(){var e=this;console.log(this.channelName),i.a.get("/channel/"+e.channelName+"/thread").then(function(n){e.threads=n.data;var t=!0,a=!1,o=void 0;try{for(var r,s=e.threads[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var i=r.value;e.$set(i,"editMode",!1)}}catch(l){a=!0,o=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw o}}}).catch(function(e){console.log(e)})}}),N=_,b=Object(u["a"])(N,w,C,!1,null,null,null),y=b.exports,x={name:"Channel",data:function(){return{channels:[],currentChannelName:""}},created:function(){var e=this;this.$store.dispatch("getMe"),this.currentChannelName=this.$route.params.name,i.a.get("/channel").then(function(n){e.channels=n.data}).catch(function(e){console.log(e)})},methods:{newChannel:function(){var e=this;i.a.post("/channel/new").then(function(n){i.a.get("/channel").then(function(n){e.channels=n.data}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},deleteChannel:function(){var e=this,n={name:this.currentChannelName};i.a.post("/channel/delete",n).then(function(){e.$router.push("/")}).catch(function(e){console.log(e)})}},components:{ThreadShow:y},beforeRouteUpdate:function(e,n,t){this.$store.dispatch("getMe"),this.currentChannelName=e.params.name,t()}},$=x,k=Object(u["a"])($,v,g,!1,null,null,null),P=k.exports,E={name:"Top",components:{Channel:P},created:function(){this.$store.dispatch("getMe")}},M=E,O=Object(u["a"])(M,p,f,!1,null,null,null),j=O.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("h2",[e._v("Log in")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),t("button",{staticClass:"btn btn-primary",on:{click:e.logIn}},[e._v("ログイン")]),t("p",[e._v("\n        アカウントを持ってない方は\n        "),t("router-link",{attrs:{to:"/signup"}},[e._v("こちら")])],1)])},T=[],U={name:"Login",data:function(){return{username:"",password:""}},methods:{logIn:function(){var e=this,n={username:this.username,password:this.password};""!=this.username&&""!=this.password&&i.a.post("/login",n).then(function(n){e.$router.push({name:"Top"})}).catch(function(e){console.log(e)})}}},F=U,I=Object(u["a"])(F,S,T,!1,null,null,null),L=I.exports,J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"signup"},[t("h2",[e._v("SignUp")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"E-Mail"},domProps:{value:e.email},on:{input:function(n){n.target.composing||(e.email=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],attrs:{type:"password",placeholder:"PasswordConfirmation"},domProps:{value:e.passwordConfirmation},on:{input:function(n){n.target.composing||(e.passwordConfirmation=n.target.value)}}}),t("button",{on:{click:e.signUp}},[e._v("登録")]),t("p",[e._v("\n        アカウントを持っている方は\n        "),t("router-link",{attrs:{to:"/login"}},[e._v("こちら")])],1)])},R=[],X={name:"Signup",data:function(){return{username:"",email:"",password:"",passwordConfirmation:""}},methods:{signUp:function(){var e=this,n={username:this.username,email:this.email,password:this.password,passwordConfirmation:this.passwordConfirmation};""!=this.username&&""!=this.password&&""!=this.email.email&&i.a.post("/register",n).then(function(n){e.$router.push({name:"Top"})}).catch(function(e){console.log(e)})}}},q=X,z=Object(u["a"])(q,J,R,!1,null,null,null),A=z.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"new-channel-form"},[t("h2",[e._v("新しいチャンネルを作成")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.channelName,expression:"channelName"}],attrs:{type:"text",placeholder:"NewChannelName"},domProps:{value:e.channelName},on:{input:function(n){n.target.composing||(e.channelName=n.target.value)}}}),t("button",{on:{click:e.postChannel}},[e._v("作成")])])},D=[],G={name:"NewChannelForm",data:function(){return{channelName:""}},methods:{postChannel:function(){var e=this,n={name:this.channelName};""!=this.channelName&&i.a.post("http://localhost:8000/channel/new",n).then(function(n){e.$router.push({name:"Channel",params:{name:n.data.name}})}).catch(function(e){console.log(e)})}}},H=G,K=Object(u["a"])(H,B,D,!1,null,null,null),Q=K.exports,V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"edit-channel-form"},[t("h2",[e._v("チャンネルの名前変更")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.channelName,expression:"channelName"}],attrs:{type:"text",placeholder:"EditChannelName"},domProps:{value:e.channelName},on:{input:function(n){n.target.composing||(e.channelName=n.target.value)}}}),t("button",{on:{click:e.postChannel}},[e._v("変更")])])},W=[],Y={name:"EditChannelForm",data:function(){return{channelName:""}},methods:{postChannel:function(){var e=this,n={afterName:this.channelName,beforeName:this.$route.params["name"]};""!=this.channelName&&i.a.post("/channel/edit",n).then(function(n){e.$router.push({name:"Channel",params:{name:n.data.name}})}).catch(function(e){console.log(e)})}}},Z=Y,ee=Object(u["a"])(Z,V,W,!1,null,null,null),ne=ee.exports;a["a"].use(d["a"]);var te=new d["a"]({mode:"history",routes:[{path:"/",name:"Top",component:j},{path:"/login",name:"Login",component:L},{path:"/signup",name:"Signup",component:A},{path:"/channel/new",component:Q},{path:"/channel/:name/edit",name:"EditChannelForm",component:ne},{path:"/channel/:name",name:"Channel",component:P}]}),ae=te,oe=t("2f62");a["a"].use(oe["a"]);var re=function(){return new oe["a"].Store({state:{username:""},getters:{username:function(e){return e.username}},mutations:{setMe:function(e,n){e.username=n.username}},actions:{getMe:function(e){var n={username:""};i.a.get("/get_me").then(function(t){n.username=t.data,e.commit("setMe",n)}).catch(function(e){console.log(e)})}}})},se=re;a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({store:se,router:ae,render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.js.map