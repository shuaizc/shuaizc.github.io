webpackJsonp([12],{cTmn:function(t,e,a){var i=a("zwB1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("5c428b20",i,!0,{})},k0BH:function(t,e,a){"use strict";function i(t){a("cTmn")}Object.defineProperty(e,"__esModule",{value:!0});var n=(a("Au9i"),{name:"MonthlySalesStatistics",mounted:function(){this.drawLine(this.initData)},data:function(){return{initData:{x1:[3,5,7,23.2,57,76.7,135.6,162.2,32.6,20,6.4,3.3],x2:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}}},methods:{drawLine:function(t){var e=this.$echarts.init(document.getElementById("chart-1")),a={tooltip:{trigger:"axis"},calculable:!0,legend:{data:["目标完成率","发货量"]},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",axisLabel:{formatter:"{value}"}}],series:[{name:"目标完成率",type:"bar",data:t.x1,itemStyle:{normal:{label:{show:!0}}}},{name:"发货量",type:"line",data:t.x2,itemStyle:{normal:{label:{show:!0}}}}]};e.setOption(a)}}}),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"monthly-sales-statistics"},[t._v("\n  每月销量统计\n  "),a("div",{style:{width:"100%",height:"300px"},attrs:{id:"chart-1"}})])},l=[],r={render:s,staticRenderFns:l},o=r,c=a("VU/8"),u=i,d=c(n,o,!1,u,"data-v-47ca75cc",null);e.default=d.exports},zwB1:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"MonthlySalesStatistics.vue",sourceRoot:""}])}});
//# sourceMappingURL=MonthlySalesStatistics.571e8c5a7c07b920da5f.js.map