(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/three/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("label",{attrs:{for:"speed"}},[e._v("speed")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.speed,expression:"speed",modifiers:{number:!0}}],attrs:{name:"speed",id:"speed",type:"range",min:"0.000",max:"0.1",step:"0.005"},domProps:{value:e.speed},on:{__r:function(t){e.speed=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}})]),n("rotate-box",{attrs:{speed:e.speed}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:"canvas",width:"600",height:"400"}})},s=[],u=(n("a9e3"),n("5a89")),c={name:"RotateBox",props:{speed:{required:!1,type:Number,default:.02}},data:function(){var e=new u["f"],t=null,n=new u["e"](75,1.5,.1,1e3),r=new u["b"](16777215),a=new u["a"](1,1,1),o=new u["d"],i=new u["c"](a,o);return{scene:e,renderer:t,camera:n,light:r,geometry:a,material:o,cube:i}},mounted:function(){var e=document.getElementById("canvas");this.renderer=new u["g"]({antialias:!0,canvas:e}),this.camera.position.set(0,0,2),this.light.position.set(0,0,10),this.scene.add(this.cube),this.scene.add(this.light),this.animate()},methods:{animate:function(){requestAnimationFrame(this.animate),this.cube.rotation.x+=this.speed,this.cube.rotation.y+=this.speed,this.renderer.render(this.scene,this.camera)}}},p=c,l=n("2877"),d=Object(l["a"])(p,i,s,!1,null,null,null),f=d.exports,h={name:"app",components:{RotateBox:f},data:function(){return{speed:.02}}},m=h,v=(n("034f"),Object(l["a"])(m,a,o,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.af0e1efa.js.map