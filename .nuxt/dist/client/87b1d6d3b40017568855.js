(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{386:function(t,e,n){var content=n(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("6dfb91fb",content,!0,{sourceMap:!1})},387:function(t,e,n){var content=n(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("3d4c54a4",content,!0,{sourceMap:!1})},418:function(t,e,n){var content=n(805);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("3f8de129",content,!0,{sourceMap:!1})},419:function(t,e,n){var content=n(807);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("42d7d620",content,!0,{sourceMap:!1})},420:function(t,e,n){var content=n(809);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("36873827",content,!0,{sourceMap:!1})},502:function(t,e,n){t.exports=n.p+"img/46fcfa0.png"},503:function(t,e,n){t.exports=n.p+"img/14c4989.png"},504:function(t,e,n){"use strict";var r=n(386);n.n(r).a},505:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".search-img[data-v-df1c2f6e]{width:40px;height:40px}.search-input[data-v-df1c2f6e]{width:400px;margin-left:20px}.search-btn[data-v-df1c2f6e]{width:100px;margin-left:20px}.search-errWrap[data-v-df1c2f6e]{height:40px}.search-err[data-v-df1c2f6e]{width:400px;margin-left:60px;margin-top:3px}",""])},506:function(t,e,n){"use strict";var r=n(387);n.n(r).a},507:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".bl-title[data-v-42a27d68]{margin:20px 0}.bl-standard[data-v-42a27d68]{margin:10px 0;color:#606266}.bl-tableWrap[data-v-42a27d68]{position:relative}.bl-tableWrap__unit[data-v-42a27d68]{position:absolute;right:0;top:-25px;color:#606266;padding:0 10px}",""])},804:function(t,e,n){"use strict";var r=n(418);n.n(r).a},805:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".id-chart[data-v-76e33252]{height:400px}.id-title[data-v-76e33252]{margin:20px 0}.id-standard[data-v-76e33252]{margin:10px 0;color:#606266}",""])},806:function(t,e,n){"use strict";var r=n(419);n.n(r).a},807:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".dcf-title[data-v-42949156]{margin:20px 0}.dcf-standard[data-v-42949156]{margin:10px 0;color:#606266}.dcf-chart[data-v-42949156]{height:400px;margin:30px 0}.dcf-model[data-v-42949156]{margin:30px 0;padding:20px 0;box-shadow:0 0 3px rgba(0,0,0,.3)}.dcf-model h4[data-v-42949156]{text-align:center;margin:20px 0}.dcf-model .el-col[data-v-42949156]{display:flex;justify-content:space-between;border:1px solid #dcdfe6;padding:10px 20px;box-sizing:border-box;border-radius:20px;margin:10px}.el-col span[data-v-42949156]:first-child{color:#606266}.el-col span[data-v-42949156]:last-child{color:#303133}.dcf-target[data-v-42949156]{background-color:#67c23a}.dcf-target span[data-v-42949156]{color:#fff!important}",""])},808:function(t,e,n){"use strict";var r=n(420);n.n(r).a},809:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".index{width:960px;margin:30px auto;display:flex;flex-direction:column;align-items:center}.index-symbol{margin:50px 0}.index-section{margin:50px 0;width:100%}.index-img{margin-top:60px;width:300px}",""])},810:function(t,e,n){"use strict";n.r(e);n(79),n(20),n(171);var r={data:function(){return{search:"",errTips:""}},methods:{inputChange:function(){this.errTips=""},clickSearch:function(){var t=this;if(this.search){var code=this.search.toUpperCase();this.$axios.get("/va/code?symbol=".concat(code)).then(function(e){var n=e.data;if(n.errCode)return Promise.reject(new Error("找不到该代码的信息"));t.$emit("search",n.data)}).catch(function(e){t.$emit("clear"),t.errTips=e.message})}else this.$emit("clear")},onCloseErrTips:function(){this.errTips=""}}},l=(n(504),n(28)),o=Object(l.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("el-row",{attrs:{type:"flex"}},[r("img",{staticClass:"search-img",attrs:{src:n(503)}}),t._v(" "),r("el-input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入股票代码:SZ000651"},on:{input:t.inputChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickSearch(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.clickSearch}},[t._v("搜索")])],1),t._v(" "),r("el-row",{staticClass:"search-errWrap"},[t.errTips?r("el-alert",{staticClass:"search-err",attrs:{title:t.errTips,type:"error"},on:{close:t.onCloseErrTips}}):t._e()],1)],1)},[],!1,null,"df1c2f6e",null).exports,c={props:["symbol"],data:function(){return{list:[]}},mounted:function(){this.analyze()},watch:{symbol:function(){this.analyze()}},methods:{analyze:function(){this.reqFiniance()},reqFiniance:function(){var t=this;this.$axios.get("/va/balance?symbol=".concat(this.symbol)).then(function(e){var n=e.data.data;t.list=n.list})}}},d=(n(506),Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bl"},[n("el-row",[n("h2",{staticClass:"bl-title"},[t._v("权益与负债")]),t._v(" "),n("p",{staticClass:"bl-standard"},[t._v("选取标准：1.债务权益比 < 0.5; 2.流动比率 > 1.5")])]),t._v(" "),n("div",{staticClass:"bl-tableWrap"},[n("el-table",{attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{prop:"report_name",label:"日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_current_liab",label:"流动负债合计"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_current_assets",label:"流动资产合计"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_assets",label:"资产合计"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_liab",label:"负债合计"}}),t._v(" "),n("el-table-column",{attrs:{prop:"total_quity_atsopc",label:"股东权益合计"}}),t._v(" "),n("el-table-column",{attrs:{label:"债务权益比"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s((e.row.total_liab/e.row.total_quity_atsopc).toFixed(2))+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"流动比率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s((e.row.total_current_assets/e.row.total_current_liab).toFixed(2))+"\n        ")]}}])})],1),t._v(" "),n("p",{staticClass:"bl-tableWrap__unit"},[t._v("单位：元")])],1)],1)},[],!1,null,"42a27d68",null).exports),f=n(421),h=n.n(f),v={props:["symbol"],data:function(){return{list:[]}},mounted:function(){this.analyze()},watch:{symbol:function(){this.analyze()}},methods:{analyze:function(){var t=this;this.reqFinance().then(function(e){t.renderChart()})},reqFinance:function(){var t=this;return this.$axios.get("/va/indicator?symbol=".concat(this.symbol)).then(function(e){var n=e.data.data;t.list=n.list})},renderChart:function(){var t=[],e=[],n=[];this.list.forEach(function(r){e.unshift(r.np_per_share),n.unshift(r.undistri_profit_ps),t.unshift(r.report_name)}),h.a.init(this.$refs.chart).setOption({title:{text:"成长性分析",left:"center"},legend:{data:["每股净资产","每股未分配利润"],right:10},tooltip:{},xAxis:{data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}元"}},series:[{name:"每股净资产",type:"bar",data:e,itemStyle:{color:"#409EFF"}},{name:"每股未分配利润",type:"bar",data:n,itemStyle:{color:"#F56C6C"}}]})}}},_=(n(804),Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"id"},[e("el-row",[e("h2",{staticClass:"id-title"},[this._v("成长性分析")]),this._v(" "),e("p",{staticClass:"id-standard"},[this._v("选取标准：净资产、净利润稳定增长，成长趋势可预测")])]),this._v(" "),e("div",{ref:"chart",staticClass:"id-chart"})],1)},[],!1,null,"76e33252",null).exports),m={props:["symbol"],data:function(){return{list:[],fcf:[],fcfPredict:[],dcfModel:null}},mounted:function(){this.analyze()},watch:{symbol:function(){this.analyze()}},methods:{analyze:function(){var t=this;this.reqFinance().then(function(e){t.fcf=t.list.map(function(t){return(t.ncf_from_oa-t.cash_paid_for_assets).toFixed(2)})}).then(function(){return t.reqRunDcf()}).then(function(){t.renderChart()})},reqFinance:function(){var t=this;return this.$axios.get("/va/cashflow?symbol=".concat(this.symbol)).then(function(e){var n=e.data.data;t.list=n.list})},reqRunDcf:function(){var t=this;return this.$axios.get("/va/rundcf?symbol=".concat(this.symbol)).then(function(e){var n=e.data.data;t.dcfModel=n})},calFcfAndPredict:function(){this.fcf=this.list.map(function(t){return(t.ncf_from_oa-t.cash_paid_for_assets).toFixed(2)})},renderChart:function(){var t=[],e=[];this.list.map(function(n){t.unshift(n.report_name),e.unshift(n.ncf_from_oa-n.cash_paid_for_assets)});var n=[],r=[];this.dcfModel.Cashflow.FutureValues.forEach(function(t){n.push(t.Year+"预测"),r.push(t.Value.toFixed(2))});var l=t.concat(n),o=e.concat(r);h.a.init(this.$refs.chart).setOption({title:{text:"自由现金流预测",left:"center"},xAxis:{data:l,axisLabel:{rotate:60}},yAxis:{type:"value",axisLabel:{formatter:"{value}元"}},tooltip:{},legend:{data:["自由现金流"],right:10},series:[{name:"自由现金流",type:"line",data:o,itemStyle:{color:"#409EFF"}}]})}}},x=(n(806),{components:{Search:o,Balance:d,Indicator:_,Dcf:Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dcf"},[n("el-row",[n("h2",{staticClass:"dcf-title"},[t._v("自由现金流分析")]),t._v(" "),n("p",{staticClass:"dcf-standard"},[t._v("选取标准：稳定，可预测的自由现金流量")])]),t._v(" "),n("el-table",{attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{prop:"report_name",label:"日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ncf_from_oa",label:"经营活动现金流净额"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cash_paid_for_assets",label:"购买固定，长期资产现金流出"}}),t._v(" "),n("el-table-column",{attrs:{label:"自由现金流"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.fcf[e.$index])+"\n      ")]}}])})],1),t._v(" "),n("div",{ref:"chart",staticClass:"dcf-chart"}),t._v(" "),t.dcfModel?n("div",{staticClass:"dcf-model"},[n("h4",[t._v("模型因子")]),t._v(" "),n("el-row",{attrs:{type:"flex"}},[n("el-col",{attrs:{span:5}},[n("span",[t._v("Beta")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.Beta))])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("span",[t._v("资金成本")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.CostOfEquity))])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("span",[t._v("债务成本")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.CostOfDebtAfterTax))])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("span",[t._v("WACC")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.WACC.toFixed(2)))])])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:5}},[n("span",[t._v("长期增长率")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.LongTermGrowthRate))])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("span",[t._v("总股本")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Factor.SharesOutstanding))])]),t._v(" "),n("el-col",{staticClass:"dcf-target",attrs:{span:5}},[n("span",[t._v("每股内含价值")]),t._v(" "),n("span",[t._v(t._s(t.dcfModel.Cashflow.IntrinsicPerShare.toFixed(2)))])])],1)],1):t._e()],1)},[],!1,null,"42949156",null).exports},data:function(){return{symbol:"",symbolName:""}},methods:{search:function(t){this.symbol=t.symbol,this.symbolName=t.name},clear:function(){this.symbol="",this.symbolName=""}}}),y=(n(808),Object(l.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("Search",{on:{search:t.search,clear:t.clear}}),t._v(" "),t.symbol?r("el-row",[r("h1",{staticClass:"index-symbol"},[t._v("\n      "+t._s(t.symbolName)+" "+t._s(t.symbol)+"\n    ")])]):t._e(),t._v(" "),t.symbol?[r("div",{staticClass:"index-section"},[r("Balance",{attrs:{symbol:t.symbol}})],1),t._v(" "),r("div",{staticClass:"index-section"},[r("Indicator",{attrs:{symbol:t.symbol}})],1),t._v(" "),r("div",{staticClass:"index-section"},[r("Dcf",{attrs:{symbol:t.symbol}})],1)]:[r("img",{staticClass:"index-img",attrs:{src:n(502)}})]],2)},[],!1,null,null,null));e.default=y.exports}}]);