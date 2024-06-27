(function(){"use strict";var o={7385:function(o,n,t){var e=t(5130),r=t(6768),a=t.p+"img/logo.3a8fe0df.png";const i={id:"app"},c=(0,r.Fv)('<header class="app-header"><img src="'+a+'" alt="Logo" class="app-logo"><nav class="nav-container"><ul class="nav-list"><li><a href="#">Menu</a></li><li><a href="#">Sign Up</a></li><li><a href="#">Log In</a></li></ul></nav></header>',1),s={class:"main-content"},u={class:"content-container"};function l(o,n,t,e,a,l){const d=(0,r.g2)("DogList");return(0,r.uX)(),(0,r.CE)("div",i,[c,(0,r.Lk)("main",s,[(0,r.Lk)("div",u,[(0,r.bF)(d)])])])}const d={class:"dog-list"};function f(o,n,t,e,a,i){const c=(0,r.g2)("DogCard");return(0,r.uX)(),(0,r.CE)("div",d,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.dogs,(o=>((0,r.uX)(),(0,r.Wv)(c,{key:o.id,dog:o,onFavorite:i.handleFavorite},null,8,["dog","onFavorite"])))),128))])}var g=t(4232);const v={class:"dog-card"},p=["src"],h={class:"dog-details"};function b(o,n,t,e,a,i){return(0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("img",{src:t.dog.photo,alt:"Dog picture"},null,8,p),(0,r.Lk)("h2",null,(0,g.v_)(t.dog.name),1),(0,r.Lk)("p",h,(0,g.v_)(t.dog.breed)+" | "+(0,g.v_)(t.dog.age)+" | "+(0,g.v_)(t.dog.sex),1),(0,r.Lk)("button",{onClick:n[0]||(n[0]=(...o)=>i.favoriteDog&&i.favoriteDog(...o))},"Favorite")])}var m={name:"DogCard",props:{dog:Object},methods:{favoriteDog(){console.log(this.dog),this.$emit("favorite",this.dog)}}},y=t(1241);const _=(0,y.A)(m,[["render",b],["__scopeId","data-v-0b067e70"]]);var O=_,k=t(4373),D={name:"DogList",components:{DogCard:O},data(){return{dogs:[]}},methods:{async fetchDogs(){try{const o=await k.A.get("http://localhost:8080/api/dogs");this.dogs=o.data}catch(o){console.error("Error fetching dogs:",o)}},handleFavorite(o){console.log(`Favorited dog: ${o.name}`)}},mounted(){this.fetchDogs()}};const w=(0,y.A)(D,[["render",f],["__scopeId","data-v-fe8418c6"]]);var L=w,C={name:"App",components:{DogList:L}};const F=(0,y.A)(C,[["render",l]]);var j=F;(0,e.Ef)(j).mount("#app")}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return o[e].call(a.exports,a,a.exports,t),a.exports}t.m=o,function(){var o=[];t.O=function(n,e,r,a){if(!e){var i=1/0;for(l=0;l<o.length;l++){e=o[l][0],r=o[l][1],a=o[l][2];for(var c=!0,s=0;s<e.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(o){return t.O[o](e[s])}))?e.splice(s--,1):(c=!1,a<i&&(i=a));if(c){o.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=o.length;l>0&&o[l-1][2]>a;l--)o[l]=o[l-1];o[l]=[e,r,a]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){t.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var o={524:0};t.O.j=function(n){return 0===o[n]};var n=function(n,e){var r,a,i=e[0],c=e[1],s=e[2],u=0;if(i.some((function(n){return 0!==o[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var l=s(t)}for(n&&n(e);u<i.length;u++)a=i[u],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(l)},e=self["webpackChunkpet_adoption_website"]=self["webpackChunkpet_adoption_website"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[504],(function(){return t(7385)}));e=t.O(e)})();
//# sourceMappingURL=app.57fa1cd8.js.map