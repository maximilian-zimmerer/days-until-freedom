(function(t){function e(e){for(var s,i,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"089c":function(t,e,n){},"0f93":function(t,e,n){"use strict";n("1174")},1174:function(t,e,n){},"2e35":function(t,e,n){"use strict";n("cdbf")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper",on:{scroll:t.handleScroll}},[n("section",{staticClass:"snap"},[n("Header",{attrs:{phrases:t.phrases}})],1),n("section",{staticClass:"snap"},[n("Submission",{on:{addPhrase:function(e){return t.updatePhrases(e)}}})],1),n("section",{staticClass:"snap"},[n("About",{attrs:{phrases:t.phrases}})],1),n("section",{staticClass:"snap"},[n("Copyright")],1),n("transition",{attrs:{name:"fade"}},[t.fader&&!t.scrolled?n("section",{staticClass:"nav"},[n("span",[t._v("(Scroll to Add)")])]):t._e()])],1)},o=[],c=(n("4160"),n("159b"),n("e71f"),n("260b")),u={apiKey:"AIzaSyDGnBIZXEx4UyfSShMfdZE7niQvzb6B_QI",authDomain:"days-until-freedom.firebaseapp.com",projectId:"days-until-freedom",storageBucket:"days-until-freedom.appspot.com",messagingSenderId:"119315522838",appId:"1:119315522838:web:43fa335b3265ec327d5c37",measurementId:"G-SN5XJJZR85"},l=c["a"].initializeApp(u),p=l.firestore(),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper"},[n("section",{staticClass:"info"},[n("section",{staticClass:"info-header"},[n("span",[t._v("Wtf is this?")]),n("span",{on:{click:t.toggle}},[t._v(t._s(t.toggler))])]),t.toggleInfo?n("span",{staticClass:"info-body"},[t._v(" On February 2, 2021, the Prime Minister set out a roadmap to cautiously ease lockdown restrictions in the United Kingdom. By the last step, which is reached no earlier than June 21, all legal limits on social contact are hoped to be removed. This website lives to emphasize people's anticipation for a normal life and invites the public to submit things that they look forward to doing in a post-covid England. ")]):t._e()]),n("section",{staticClass:"phrases"},[n("span",[t._v("Not much longer until...")]),n("section",{staticClass:"scroll-container"},t._l(t.phrases,(function(e){return n("span",{key:e.id},[t._v(t._s(e.text)+" ")])})),0)])])},f=[],h={name:"About",props:["phrases"],data:function(){return{toggleInfo:!0}},methods:{toggle:function(){this.toggleInfo=!this.toggleInfo}},computed:{toggler:function(){return this.toggleInfo?"(Hide)":"(Show)"}}},m=h,v=(n("df94"),n("2877")),g=Object(v["a"])(m,d,f,!1,null,"a21362c4",null),b=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.timer?n("div",{staticClass:"main-wrapper"},[n("span",{attrs:{id:"countdown"}},[t._v(t._s(t.remaining))]),n("span",{attrs:{id:"until"}},[t._v("UNTIL")]),n("span",{attrs:{id:"phrase"}},[t._v(" "+t._s(t.currentPhrase)+" ")])]):t._e()])},x=[],w={name:"Header",props:["phrases"],data:function(){return{end:new Date("06/21/2021 12:00 AM"),remaining:"",timer:"",index:0}},methods:{showRemaining:function(){var t=1e3,e=60*t,n=60*e,s=24*n,a=new Date,r=this.end-a;if(r<0)return clearInterval(this.timer),void(this.remaining=0);var i=Math.floor(r/s),o=Math.floor(r%s/n),c=Math.floor(r%n/e),u=Math.floor(r%e/t);this.remaining=i+"d "+o+"h "+c+"m "+u+"s "},toggleIndex:function(){this.index<this.phrases.length-1?this.index++:this.index=0}},computed:{currentPhrase:function(){return this.phrases[this.index].text.toLowerCase()}},mounted:function(){this.phrases&&(this.timer=setInterval(this.showRemaining,1e3),setInterval(this.toggleIndex,3e3))}},y=w,C=(n("b1a0"),Object(v["a"])(y,_,x,!1,null,"439aad9a",null)),S=C.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper"},[n("form",{staticClass:"submission-form",on:{submit:function(e){return e.preventDefault(),t.addPhrase(e)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{rows:"15",type:"text",maxlength:t.max,onfocus:"this.placeholder = ''",placeholder:"Damn, I miss doing this...",onblur:"this.placeholder = 'Damn, I miss doing this...'"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("section",{staticClass:"buttons"},[n("span",{staticClass:"wordCount"},[t._v(t._s(this.remainingChars))]),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},O=[],j=n("ec26"),P={name:"Submission",data:function(){return{max:50,text:""}},methods:{addPhrase:function(){if(""!=this.text){var t=new Date,e=c["a"].firestore.Timestamp.fromDate(t),n={text:this.text,id:Object(j["a"])(),timeStamp:e.seconds};this.$emit("addPhrase",n),this.text=""}}},computed:{remainingChars:function(){var t=this.max-this.text.length;return t>0?t:"Less is more"}}},D=P,E=(n("2e35"),Object(v["a"])(D,I,O,!1,null,"0c5bb44f",null)),M=E.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-wrapper"},[n("a",{attrs:{href:"https://www.maxi.studio",target:"_blank"}},[t._v("maxi.studio")]),n("span",[t._v("©2021")])])}],A={name:"Copyright"},H=A,T=(n("0f93"),Object(v["a"])(H,k,$,!1,null,"6c4b4d22",null)),J=T.exports,z=p.collection("phrases"),B={name:"Home",components:{Header:S,Submission:M,About:b,Copyright:J},data:function(){return{phrases:[],fader:!1,scrolled:!1}},methods:{updatePhrases:function(t){z.doc().set(t).catch((function(t){console.error(t)}))},watchData:function(){var t=this;z.onSnapshot((function(e){var n=[];e.forEach((function(t){n.push(t.data())})),t.phrases=n,t.phrases.sort((function(t,e){return e.timeStamp-t.timeStamp}))}))},handleScroll:function(){this.scrolled=!0}},mounted:function(){this.watchData(),this.fader=!0}},N=B,L=(n("db48"),Object(v["a"])(N,i,o,!1,null,"442c789e",null)),R=L.exports,U={name:"App",components:{Home:R},data:function(){return{scrolled:!1}}},Z=U,G=(n("034f"),Object(v["a"])(Z,a,r,!1,null,null,null)),K=G.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(K)}}).$mount("#app")},6516:function(t,e,n){},"85ec":function(t,e,n){},a568:function(t,e,n){},b1a0:function(t,e,n){"use strict";n("6516")},cdbf:function(t,e,n){},db48:function(t,e,n){"use strict";n("089c")},df94:function(t,e,n){"use strict";n("a568")}});
//# sourceMappingURL=app.ff1a3f7f.js.map