exports.ids=[1],exports.modules=Array(28).concat([function(t,e,r){var content=r(36);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("6dfb91fb",content,!0,t)}},function(t,e,r){var content=r(38);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("3d4c54a4",content,!0,t)}},function(t,e,r){var content=r(40);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("3f8de129",content,!0,t)}},function(t,e,r){var content=r(42);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("42d7d620",content,!0,t)}},function(t,e,r){var content=r(44);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(4).default;t.exports.__inject__=function(t){n("36873827",content,!0,t)}},function(t,e,r){t.exports=r.p+"img/46fcfa0.png"},function(t,e,r){t.exports=r.p+"img/14c4989.png"},function(t,e,r){"use strict";r.r(e);var n=r(28),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".search-img[data-v-df1c2f6e]{width:40px;height:40px}.search-input[data-v-df1c2f6e]{width:400px;margin-left:20px}.search-btn[data-v-df1c2f6e]{width:100px;margin-left:20px}.search-errWrap[data-v-df1c2f6e]{height:40px}.search-err[data-v-df1c2f6e]{width:400px;margin-left:60px;margin-top:3px}",""])},function(t,e,r){"use strict";r.r(e);var n=r(29),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".bl-title[data-v-42a27d68]{margin:20px 0}.bl-standard[data-v-42a27d68]{margin:10px 0;color:#606266}.bl-tableWrap[data-v-42a27d68]{position:relative}.bl-tableWrap__unit[data-v-42a27d68]{position:absolute;right:0;top:-25px;color:#606266;padding:0 10px}",""])},function(t,e,r){"use strict";r.r(e);var n=r(30),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".id-chart[data-v-76e33252]{height:400px}.id-title[data-v-76e33252]{margin:20px 0}.id-standard[data-v-76e33252]{margin:10px 0;color:#606266}",""])},function(t,e,r){"use strict";r.r(e);var n=r(31),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".dcf-title[data-v-42949156]{margin:20px 0}.dcf-standard[data-v-42949156]{margin:10px 0;color:#606266}.dcf-chart[data-v-42949156]{height:400px;margin:30px 0}.dcf-model[data-v-42949156]{margin:30px 0;padding:20px 0;box-shadow:0 0 3px rgba(0,0,0,.3)}.dcf-model h4[data-v-42949156]{text-align:center;margin:20px 0}.dcf-model .el-col[data-v-42949156]{display:flex;justify-content:space-between;border:1px solid #dcdfe6;padding:10px 20px;box-sizing:border-box;border-radius:20px;margin:10px}.el-col span[data-v-42949156]:first-child{color:#606266}.el-col span[data-v-42949156]:last-child{color:#303133}.dcf-target[data-v-42949156]{background-color:#67c23a}.dcf-target span[data-v-42949156]{color:#fff!important}",""])},function(t,e,r){"use strict";r.r(e);var n=r(32),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".index{width:960px;margin:30px auto;display:flex;flex-direction:column;align-items:center}.index-symbol{margin:50px 0}.index-section{margin:50px 0;width:100%}.index-img{margin-top:60px;width:300px}",""])},function(t,e,r){"use strict";r.r(e);var n={data:()=>({search:"",errTips:""}),methods:{inputChange(){this.errTips=""},clickSearch(){if(!this.search)return void this.$emit("clear");const code=this.search.toUpperCase();this.$axios.get(`/va/code?symbol=${code}`).then(t=>{const e=t.data;if(e.errCode)return Promise.reject(new Error("找不到该代码的信息"));this.$emit("search",e.data)}).catch(t=>{this.$emit("clear"),this.errTips=t.message})},onCloseErrTips(){this.errTips=""}}},o=r(2);var l=Object(o.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("el-row",{attrs:{type:"flex"}},[n("img",{staticClass:"search-img",attrs:{src:r(34)}}),t._v(" "),n("el-input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入股票代码:SZ000651"},on:{input:t.inputChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickSearch(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.clickSearch}},[t._v("搜索")])],1),t._ssrNode(" "),n("el-row",{staticClass:"search-errWrap"},[t.errTips?n("el-alert",{staticClass:"search-err",attrs:{title:t.errTips,type:"error"},on:{close:t.onCloseErrTips}}):t._e()],1)],2)},[],!1,function(t){var e=r(35);e.__inject__&&e.__inject__(t)},"df1c2f6e","2e8cf3a4").exports,c={props:["symbol"],data:()=>({list:[]}),mounted(){this.analyze()},watch:{symbol(){this.analyze()}},methods:{analyze(){this.reqFiniance()},reqFiniance(){this.$axios.get(`/va/balance?symbol=${this.symbol}`).then(t=>{const e=t.data.data;this.list=e.list})}}};var d=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bl"},[r("el-row",[r("h2",{staticClass:"bl-title"},[t._v("权益与负债")]),t._v(" "),r("p",{staticClass:"bl-standard"},[t._v("选取标准：1.债务权益比 < 0.5; 2.流动比率 > 1.5")])]),t._ssrNode(" "),t._ssrNode('<div class="bl-tableWrap" data-v-42a27d68>',"</div>",[r("el-table",{attrs:{data:t.list,border:""}},[r("el-table-column",{attrs:{prop:"report_name",label:"日期"}}),t._v(" "),r("el-table-column",{attrs:{prop:"total_current_liab",label:"流动负债合计"}}),t._v(" "),r("el-table-column",{attrs:{prop:"total_current_assets",label:"流动资产合计"}}),t._v(" "),r("el-table-column",{attrs:{prop:"total_assets",label:"资产合计"}}),t._v(" "),r("el-table-column",{attrs:{prop:"total_liab",label:"负债合计"}}),t._v(" "),r("el-table-column",{attrs:{prop:"total_quity_atsopc",label:"股东权益合计"}}),t._v(" "),r("el-table-column",{attrs:{label:"债务权益比"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s((e.row.total_liab/e.row.total_quity_atsopc).toFixed(2))+"\n        ")]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"流动比率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s((e.row.total_current_assets/e.row.total_current_liab).toFixed(2))+"\n        ")]}}])})],1),t._ssrNode(' <p class="bl-tableWrap__unit" data-v-42a27d68>单位：元</p>')],2)],2)},[],!1,function(t){var e=r(37);e.__inject__&&e.__inject__(t)},"42a27d68","b0095ee0").exports,_=r(27),f=r.n(_),h={props:["symbol"],data:()=>({list:[]}),mounted(){this.analyze()},watch:{symbol(){this.analyze()}},methods:{analyze(){this.reqFinance().then(t=>{this.renderChart()})},reqFinance(){return this.$axios.get(`/va/indicator?symbol=${this.symbol}`).then(t=>{const e=t.data.data;this.list=e.list})},renderChart(){const t=[],e=[],r=[];this.list.forEach(n=>{e.unshift(n.np_per_share),r.unshift(n.undistri_profit_ps),t.unshift(n.report_name)}),f.a.init(this.$refs.chart).setOption({title:{text:"成长性分析",left:"center"},legend:{data:["每股净资产","每股未分配利润"],right:10},tooltip:{},xAxis:{data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}元"}},series:[{name:"每股净资产",type:"bar",data:e,itemStyle:{color:"#409EFF"}},{name:"每股未分配利润",type:"bar",data:r,itemStyle:{color:"#F56C6C"}}]})}}};var v={props:["symbol"],data:()=>({list:[],fcf:[],fcfPredict:[],dcfModel:null}),mounted(){this.analyze()},watch:{symbol(){this.analyze()}},methods:{analyze(){this.reqFinance().then(t=>{this.fcf=this.list.map(t=>{return(t.ncf_from_oa-t.cash_paid_for_assets).toFixed(2)})}).then(()=>this.reqRunDcf()).then(()=>{this.renderChart()})},reqFinance(){return this.$axios.get(`/va/cashflow?symbol=${this.symbol}`).then(t=>{const e=t.data.data;this.list=e.list})},reqRunDcf(){return this.$axios.get(`/va/rundcf?symbol=${this.symbol}`).then(t=>{const e=t.data.data;this.dcfModel=e})},calFcfAndPredict(){this.fcf=this.list.map(t=>{return(t.ncf_from_oa-t.cash_paid_for_assets).toFixed(2)})},renderChart(){const t=[],e=[];this.list.map(r=>{t.unshift(r.report_name),e.unshift(r.ncf_from_oa-r.cash_paid_for_assets)});const r=[],n=[];this.dcfModel.Cashflow.FutureValues.forEach(t=>{r.push(t.Year+"预测"),n.push(t.Value.toFixed(2))});const o=t.concat(r),l=e.concat(n);f.a.init(this.$refs.chart).setOption({title:{text:"自由现金流预测",left:"center"},xAxis:{data:o,axisLabel:{rotate:60}},yAxis:{type:"value",axisLabel:{formatter:"{value}元"}},tooltip:{},legend:{data:["自由现金流"],right:10},series:[{name:"自由现金流",type:"line",data:l,itemStyle:{color:"#409EFF"}}]})}}};var m={components:{Search:l,Balance:d,Indicator:Object(o.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"id"},[e("el-row",[e("h2",{staticClass:"id-title"},[this._v("成长性分析")]),this._v(" "),e("p",{staticClass:"id-standard"},[this._v("选取标准：净资产、净利润稳定增长，成长趋势可预测")])]),this._ssrNode(' <div class="id-chart" data-v-76e33252></div>')],2)},[],!1,function(t){var e=r(39);e.__inject__&&e.__inject__(t)},"76e33252","56f2117a").exports,Dcf:Object(o.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dcf"},[r("el-row",[r("h2",{staticClass:"dcf-title"},[t._v("自由现金流分析")]),t._v(" "),r("p",{staticClass:"dcf-standard"},[t._v("选取标准：稳定，可预测的自由现金流量")])]),t._ssrNode(" "),r("el-table",{attrs:{data:t.list,border:""}},[r("el-table-column",{attrs:{prop:"report_name",label:"日期"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ncf_from_oa",label:"经营活动现金流净额"}}),t._v(" "),r("el-table-column",{attrs:{prop:"cash_paid_for_assets",label:"购买固定，长期资产现金流出"}}),t._v(" "),r("el-table-column",{attrs:{label:"自由现金流"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.fcf[e.$index])+"\n      ")]}}])})],1),t._ssrNode(' <div class="dcf-chart" data-v-42949156></div> '),t.dcfModel?t._ssrNode('<div class="dcf-model" data-v-42949156>',"</div>",[t._ssrNode("<h4 data-v-42949156>模型因子</h4> "),r("el-row",{attrs:{type:"flex"}},[r("el-col",{attrs:{span:5}},[r("span",[t._v("Beta")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.Beta))])]),t._v(" "),r("el-col",{attrs:{span:5}},[r("span",[t._v("资金成本")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.CostOfEquity))])]),t._v(" "),r("el-col",{attrs:{span:5}},[r("span",[t._v("债务成本")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.CostOfDebtAfterTax))])]),t._v(" "),r("el-col",{attrs:{span:5}},[r("span",[t._v("WACC")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.WACC.toFixed(2)))])])],1),t._ssrNode(" "),r("el-row",[r("el-col",{attrs:{span:5}},[r("span",[t._v("长期增长率")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.LongTermGrowthRate))])]),t._v(" "),r("el-col",{attrs:{span:5}},[r("span",[t._v("总股本")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Factor.SharesOutstanding))])]),t._v(" "),r("el-col",{staticClass:"dcf-target",attrs:{span:5}},[r("span",[t._v("每股内含价值")]),t._v(" "),r("span",[t._v(t._s(t.dcfModel.Cashflow.IntrinsicPerShare.toFixed(2)))])])],1)],2):t._e()],2)},[],!1,function(t){var e=r(41);e.__inject__&&e.__inject__(t)},"42949156","0c46340a").exports},data:()=>({symbol:"",symbolName:""}),methods:{search(t){this.symbol=t.symbol,this.symbolName=t.name},clear(){this.symbol="",this.symbolName=""}}};var x=Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("Search",{on:{search:t.search,clear:t.clear}}),t._ssrNode(" "),t.symbol?n("el-row",[n("h1",{staticClass:"index-symbol"},[t._v("\n      "+t._s(t.symbolName)+" "+t._s(t.symbol)+"\n    ")])]):t._e(),t._ssrNode(" "),t.symbol?[t._ssrNode('<div class="index-section">',"</div>",[n("Balance",{attrs:{symbol:t.symbol}})],1),t._ssrNode(" "),t._ssrNode('<div class="index-section">',"</div>",[n("Indicator",{attrs:{symbol:t.symbol}})],1),t._ssrNode(" "),t._ssrNode('<div class="index-section">',"</div>",[n("Dcf",{attrs:{symbol:t.symbol}})],1)]:t._ssrNode("<img"+t._ssrAttr("src",r(33))+' class="index-img">')],2)},[],!1,function(t){var e=r(43);e.__inject__&&e.__inject__(t)},null,"6c2b066c");e.default=x.exports}]);
//# sourceMappingURL=638b7b026733621e0948.js.map