webpackJsonp([4],{LffY:function(e,t,n){"use strict";function o(e){n("hAlb")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("xB1Q"),a={name:"SelectHeaderPage",components:{SelectHeader:i.a},data:function(){return{headerOption1:[{text:"收入",value:1},{text:"支出",value:2}],headerOption2:[{text:"洛杉矶湖人",value:1},{text:"休斯顿火箭",value:2},{text:"金州勇士",value:3}],op1Text:"",op2Text:""}},created:function(){this.$store.state.footerVisible&&this.$store.commit("TOGGLE_FOOTER")},methods:{clickOp1:function(e){this.op1Text=e.text},clickOp2:function(e){this.op2Text=e.text},goBack:function(){this.$router.go(-1)}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-header-page"},[n("select-header",{attrs:{options:e.headerOption1,tipTitle:"请选择类型"},on:{selectOption:e.clickOp1}},[n("div",{attrs:{slot:"left"},on:{click:e.goBack},slot:"left"},[n("i",{staticClass:"fa fa-chevron-left"})]),e._v(" "),n("div",{attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"fa fa-cog"})])]),e._v(" "),n("div",{staticClass:"content-box"},[e._v("\n    "+e._s("选择了:"+e.op1Text)+"\n  ")]),e._v(" "),n("div",{staticClass:"divider-line"}),e._v(" "),n("select-header",{attrs:{options:e.headerOption2,textColor:"blue",bgColor:"#79CDCD55"},on:{selectOption:e.clickOp2}},[n("div",{attrs:{slot:"left"},on:{click:e.goBack},slot:"left"},[e._v("返回")]),e._v(" "),n("div",{attrs:{slot:"right"},slot:"right"},[n("i",{staticClass:"fa fa-plus"})])]),e._v(" "),n("div",{staticClass:"content-box"},[e._v("\n    "+e._s("选择了:"+e.op2Text)+"\n  ")])],1)},A=[],r={render:s,staticRenderFns:A},l=r,c=n("VU/8"),d=o,p=c(a,l,!1,d,"data-v-2f094045",null);t.default=p.exports},R9m9:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".select-header-page .divider-line[data-v-2f094045]{height:100px}","",{version:3,sources:["C:/Users/77372/Desktop/vue-app-template-master/src/pages/test/SelectHeaderPage.vue"],names:[],mappings:"AACA,mDACE,YAAc,CACf",file:"SelectHeaderPage.vue",sourcesContent:["\n.select-header-page .divider-line[data-v-2f094045] {\n  height: 100px;\n}\n"],sourceRoot:""}])},YHRA:function(e,t,n){var o=n("pvaZ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("58688036",o,!0,{})},hAlb:function(e,t,n){var o=n("R9m9");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("0718c723",o,!0,{})},pvaZ:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".select-header[data-v-1b4b7ff0]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:45px;background-color:#cd2525;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 10px;color:#fff}.select-header .animated[data-v-1b4b7ff0]{-webkit-animation-duration:.5s;animation-duration:.5s}.select-header .center[data-v-1b4b7ff0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.select-header .center .center-text[data-v-1b4b7ff0]{float:left;margin-right:3px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.select-header .option-box[data-v-1b4b7ff0]{z-index:9999999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:45px;color:red;width:50%;left:25%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.select-header .option-box .option-arrow[data-v-1b4b7ff0]{margin-top:-20px;z-index:99999;width:0;height:0;border:10px solid transparent;border-bottom-color:hsla(0,0%,92%,.5)}.select-header .option-box .option-item[data-v-1b4b7ff0]{background-color:hsla(0,0%,92%,.5);width:100%;text-align:center;height:30px;line-height:30px;border-bottom:1px solid #eaeaea}.select-header .option-box[data-v-1b4b7ff0] :nth-child(2){border-radius:5px 5px 0 0}.select-header .option-box[data-v-1b4b7ff0] :last-child{border-radius:0 0 5px 5px}","",{version:3,sources:["C:/Users/77372/Desktop/vue-app-template-master/src/components/coms/select-header.vue"],names:[],mappings:"AAWA,gCAEE,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,YAAa,AACb,yBAA0B,AAC1B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,eAAgB,AAChB,UAAa,CACd,AACD,0CACI,+BAAiC,AACzB,sBAAyB,CACpC,AACD,wCACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,qDACM,WAAY,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACzB,AACD,4CACI,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,UAAW,AACX,SAAU,AACV,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAClC,AACD,0DACM,iBAAkB,AAClB,cAAe,AACf,QAAS,AACT,SAAU,AACV,8BAA+B,AAC/B,qCAA8C,CACnD,AACD,yDACM,mCAA2C,AAC3C,WAAY,AACZ,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACtC,AACD,0DACM,yBAA2B,CAChC,AACD,wDACM,yBAA2B,CAChC",file:"select-header.vue",sourcesContent:['\n@charset "UTF-8";\n/***************测试******************/\n/*********==组件使用共有样式==********/\n/**通用样式**/\n/**header样式**/\n/**按钮样式**/\n/** flex的居中显示*/\n/**固定的头部和底部**/\n/**文字超出后的省略号**/\n/**三角形**/\n.select-header[data-v-1b4b7ff0] {\n  background-color: #cd2525;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 45px;\n  background-color: #cd2525;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 10px;\n  color: white;\n}\n.select-header .animated[data-v-1b4b7ff0] {\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n}\n.select-header .center[data-v-1b4b7ff0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.select-header .center .center-text[data-v-1b4b7ff0] {\n      float: left;\n      margin-right: 3px;\n      max-width: 150px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n}\n.select-header .option-box[data-v-1b4b7ff0] {\n    z-index: 9999999;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: absolute;\n    top: 45px;\n    color: red;\n    width: 50%;\n    left: 25%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.select-header .option-box .option-arrow[data-v-1b4b7ff0] {\n      margin-top: -20px;\n      z-index: 99999;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: rgba(234, 234, 234, 0.5);\n}\n.select-header .option-box .option-item[data-v-1b4b7ff0] {\n      background-color: rgba(234, 234, 234, 0.5);\n      width: 100%;\n      text-align: center;\n      height: 30px;\n      line-height: 30px;\n      border-bottom: 1px solid #EAEAEA;\n}\n.select-header .option-box[data-v-1b4b7ff0] :nth-child(2) {\n      border-radius: 5px 5px 0 0;\n}\n.select-header .option-box[data-v-1b4b7ff0] :last-child {\n      border-radius: 0 0 5px 5px;\n}\n'],sourceRoot:""}])},xB1Q:function(e,t,n){"use strict";function o(e){n("YHRA")}var i={name:"SelectHeader",data:function(){return{arrow:"fa-angle-down",arrowDown:"fa-angle-down",arrowUp:"fa-angle-up",showOptions:!1,title:"请选择"}},props:{options:{type:Array,required:!0},tipTitle:{type:String},bgColor:{type:String,default:"#878787"},textColor:{type:String,default:"white"}},methods:{toggleOptions:function(){this.arrow===this.arrowDown?this.arrow=this.arrowUp:this.arrow=this.arrowDown,this.showOptions=!this.showOptions},clickOption:function(e){this.$emit("selectOption",e),this.toggleOptions(),this.title=e.text}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-header"},[n("div",{staticClass:"left"},[e._t("left")],2),e._v(" "),n("div",{staticClass:"center",on:{click:e.toggleOptions}},[n("div",{staticClass:"center-text"},[e._v(e._s(e.title))]),e._v(" "),n("span",[n("i",{class:["fa",e.arrow]})])]),e._v(" "),n("div",{staticClass:"right"},[e._t("right")],2),e._v(" "),n("transition",{attrs:{enterActiveClass:"animated zoomIn",leaveActiveClass:"animated zoomOut"}},[e.showOptions?n("div",{staticClass:"option-box"},[n("span",{staticClass:"option-arrow",style:{borderBottomColor:e.bgColor}}),e._v(" "),e._l(e.options,function(t,o){return[n("div",{key:o,staticClass:"option-item",style:{backgroundColor:e.bgColor,color:e.textColor},on:{click:function(n){e.clickOption(t)}}},[e._v("\n          "+e._s(t.text)+"\n        ")])]})],2):e._e()])],1)},s=[],A={render:a,staticRenderFns:s},r=A,l=n("VU/8"),c=o,d=l(i,r,!1,c,"data-v-1b4b7ff0",null);t.a=d.exports}});
//# sourceMappingURL=SelectHeaderPage.d850a0c70a914cf8fb02.js.map