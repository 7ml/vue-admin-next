(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"1c82":function(e,t,a){},"2f67":function(e,t,a){},"34f4":function(e,t,a){"use strict";var l=a("1c82"),n=a.n(l);n.a},"3fdc":function(e,t,a){"use strict";var l=a("c272"),n=a.n(l);n.a},"841c":function(e,t,a){"use strict";var l=a("d784"),n=a("825a"),r=a("1d80"),i=a("129f"),o=a("14c3");l("search",1,(function(e,t,a){return[function(t){var a=r(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,a):new RegExp(t)[e](String(a))},function(e){var l=a(t,e,this);if(l.done)return l.value;var r=n(e),s=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var u=o(r,s);return i(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},"8ce3":function(e,t,a){"use strict";var l=a("2f67"),n=a.n(l);n.a},b15c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"margin-bottom-20"},[a("example-quick-query",{attrs:{table:e.table}}),a("el-divider",{staticClass:"transparent margin-top-bottom-10"}),a("example-query-form",{attrs:{table:e.table}}),a("el-divider",{staticClass:"transparent margin-top-bottom-10"}),a("example-toolbar",{attrs:{table:e.table}})],1),a("el-card",[a("transition",{attrs:{name:"fade"}},[e.showTopPager?a("example-query-page",{attrs:{mode:"top",table:e.table}}):e._e()],1),a("example-table",{attrs:{table:e.table}}),a("example-query-page",{attrs:{table:e.table}})],1)],1)},n=[],r=a("5530"),i=a("3d30"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{size:"medium"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}},[a("el-row",{staticClass:"vertical-space-10",attrs:{gutter:20}},[a("el-col",{attrs:{xl:4,lg:4,md:4,sm:8}},[a("example-query-id",{model:{value:e.state.filter.id,callback:function(t){e.$set(e.state.filter,"id",t)},expression:"state.filter.id"}})],1),a("el-col",{attrs:{xl:14,lg:12,md:10,sm:16}},[a("example-query-name",{model:{value:e.state.filter.q,callback:function(t){e.$set(e.state.filter,"q",t)},expression:"state.filter.q"}})],1),a("el-col",{attrs:{xl:6,lg:8,md:10,sm:24}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.search}},[e._v(" 搜索 ")]),a("el-button",{attrs:{size:"medium",title:"RESET"},on:{click:e.reset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"popover",rawName:"v-popover:moreQueryPopover",arg:"moreQueryPopover"}],attrs:{size:"medium",icon:"el-icon-arrow-down"}})],1)],1),a("el-popover",{ref:"moreQueryPopover",attrs:{placement:"bottom",title:"更多查询条件",width:.6*e.windowInnerWidth,trigger:"click"}},[a("el-tabs",{staticClass:"more-query-tab",attrs:{"tab-position":"right"}},[a("el-tab-pane",{attrs:{label:"常用"}},[a("example-frequent-query",{attrs:{table:e.table}})],1),a("el-tab-pane",{attrs:{label:"时间类"}},[a("example-time-query",{attrs:{table:e.table}})],1)],1)],1)],1)},s=[],c=(a("ac1f"),a("841c"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{attrs:{clearable:"",size:"medium",type:"text",value:e.localValue,placeholder:"ID"},on:{input:e.updateLocalValue}})}),u=[],p={name:"example-query-id",props:{name:String,value:{required:!1},formValues:{type:Object,required:!1}},setup:function(e,t){var a=Object(i["useFormElement"])(e,t),l=a.localValue,n=a.updateLocalValue;return{localValue:l,updateLocalValue:n}},data:function(){return{}}},m=p,d=a("2877"),f=Object(d["a"])(m,c,u,!1,null,"53796e9e",null),g=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{attrs:{clearable:"",size:"medium",type:"text",value:e.localValue,placeholder:"标题"},on:{input:e.updateLocalValue}})},h=[],v={name:"example-query-name",props:{name:String,value:{required:!1},formValues:{type:Object,required:!1}},setup:function(e,t){var a=Object(i["useFormElement"])(e,t),l=a.localValue,n=a.updateLocalValue;return{localValue:l,updateLocalValue:n}},data:function(){return{}}},x=v,y=Object(d["a"])(x,b,h,!1,null,"1b1a2e9b",null),w=y.exports,_={ExampleQueryId:g,ExampleQueryName:w},S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{size:"mini",inline:!0}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{size:"mini",label:"常用一"}},[a("el-input",{attrs:{clearable:""},model:{value:e.state.filter.A1,callback:function(t){e.$set(e.state.filter,"A1",t)},expression:"state.filter.A1"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{size:"mini",label:"常用一"}},[a("el-input",{attrs:{clearable:""},model:{value:e.state.filter.A2,callback:function(t){e.$set(e.state.filter,"A2",t)},expression:"state.filter.A2"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{size:"mini",label:"常用三"}},[a("el-input",{attrs:{clearable:""},model:{value:e.state.filter.A3,callback:function(t){e.$set(e.state.filter,"A3",t)},expression:"state.filter.A3"}})],1)],1)],1)],1)},k=[],C={name:"example-frequent-query",props:{table:{type:Object,required:!0}},setup:function(e,t){var a=e.table.state;return{state:a}},data:function(){return{}}},z=C,P=Object(d["a"])(z,S,k,!1,null,"8566cc54",null),$=P.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{size:"mini",inline:!0}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{size:"mini",label:"时间一"}},[a("el-date-picker",{attrs:{clearable:"",type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.state.filter.C1,callback:function(t){e.$set(e.state.filter,"C1",t)},expression:"state.filter.C1"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{size:"mini",label:"时间二"}},[a("el-date-picker",{attrs:{clearable:"",type:"date",placeholder:"选择日期，支持快速选择","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions},model:{value:e.state.filter.C2,callback:function(t){e.$set(e.state.filter,"C2",t)},expression:"state.filter.C2"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{size:"mini",label:"时间三"}},[a("el-date-picker",{attrs:{clearable:"",type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd","picker-options":e.pickerRangeOptions},model:{value:e.state.filter.C3,callback:function(t){e.$set(e.state.filter,"C3",t)},expression:"state.filter.C3"}})],1)],1)],1)],1)},T=[];function j(e){var t=e.year,a=void 0===t?0:t,l=e.month,n=void 0===l?0:l,r=e.day,i=void 0===r?0:r,o=new Date;return a&&o.setFullYear(o.getFullYear()-a),n&&o.setMonth(o.getMonth()-n),i&&o.setDate(o.getDate()-i),new Date(o.getFullYear(),o.getMonth(),o.getDate())}function q(){return[{text:"今天",onClick:function(e){var t=j({day:0});e.$emit("pick",t)}},{text:"昨天",onClick:function(e){var t=j({day:1});e.$emit("pick",t)}},{text:"前一周",onClick:function(e){var t=j({day:7});e.$emit("pick",t)}},{text:"前一月",onClick:function(e){var t=j({month:1});e.$emit("pick",t)}}]}function E(){return[{text:"今天",onClick:function(e){var t=j({day:0}),a=new Date;e.$emit("pick",[t,a])}},{text:"昨天",onClick:function(e){var t=j({day:1}),a=j({day:0});e.$emit("pick",[t,a])}},{text:"前一周",onClick:function(e){var t=j({day:7}),a=j({day:0});e.$emit("pick",[t,a])}},{text:"前一月",onClick:function(e){var t=j({month:1}),a=j({day:0});e.$emit("pick",[t,a])}}]}var I={name:"example-time-query",props:{table:{type:Object,required:!0}},setup:function(e,t){var a=e.table.state;return{state:a}},data:function(){return{}},computed:{pickerOptions:function(){return{shortcuts:q()}},pickerRangeOptions:function(){return{shortcuts:E()}}}},R=I,L=Object(d["a"])(R,O,T,!1,null,"106dfadc",null),N=L.exports,F={ExampleFrequentQuery:$,ExampleTimeQuery:N},V={name:"example-query-form",components:Object(r["a"])(Object(r["a"])({},_),F),props:{table:{type:Object,required:!0}},setup:function(e){var t=e.table,a=t.state,l=t.setPage,n=t.setFilter,r=t.resetFilter,o=t.setInitialFilter,s=t.triggerUpdate,c=Object(i["useResize"])(),u=c.windowInnerWidth;return{windowInnerWidth:u,state:a,setPage:l,setFilter:n,resetFilter:r,setInitialFilter:o,triggerUpdate:s}},data:function(){return{}},created:function(){this.setInitialFilter(this.getInitialValues())},methods:{getInitialValues:function(){return{id:"",q:""}},reset:function(){this.resetFilter(),this.search()},search:function(){this.setPage({pageNo:1}),this.triggerUpdate()}}},A=V,D=(a("cc66"),Object(d["a"])(A,o,s,!1,null,"2c242844",null)),B=D.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-pagination-wrapper",class:{"is-top-pagination":"top"===e.mode}},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","current-page":e.state.page.pageNo,"page-sizes":e.pageSizes,"page-size":e.state.page.pageSize,total:e.state.list.totalCount},on:{"size-change":e.setPageSize,"current-change":e.setPageNo}})],1)},M=[],U={name:"example-query-page",props:{table:{type:Object,required:!0},mode:{type:String,default:"bottom"}},setup:function(e){var t=e.table,a=t.state,l=t.setPageSize,n=t.setPageNo;return{state:a,setPageSize:l,setPageNo:n}},data:function(){return{pageSizes:[5,10,20,40,80]}}},W=U,Y=Object(d["a"])(W,Q,M,!1,null,null,null),J=Y.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("ul",{staticClass:"list-inline vertical-space-10 horizontal-space-10"},[a("li",[a("el-tooltip",{attrs:{effect:"dark",content:"快捷查询条件",placement:"top-start"}},[a("span",[e._v("常用查询：")])])],1),e._l(e.queries,(function(t){return a("li",{key:t.name},[a("a",{on:{click:function(a){return e.updateQuery(t)}}},[e._v(e._s(t.name))])])}))],2)])},G=[],H=(a("4de4"),{name:"example-quick-query",props:{table:{type:Object,required:!0}},setup:function(e){var t=e.table,a=t.state,l=t.setFilter,n=t.triggerUpdate;return{state:a,setFilter:l,triggerUpdate:n}},data:function(){return{queries:[{name:"ID - 2020",filter:{id:2020}},{name:"标题 - Next",filter:{q:"Next"}}]}},methods:{updateQuery:function(e){try{this.$logger.log("[updateQuery]","[query]",e.filter),this.setFilter(e.filter||{},{merge:!1}),this.triggerUpdate()}catch(t){this.$message({type:"error",message:"无效的查询条件！"})}}}}),X=H,Z=Object(d["a"])(X,K,G,!1,null,"0c3f1972",null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.state.list.result,"default-sort":e.customPageSorter,border:!0,stripe:""},on:{"sort-change":e.setPageSort,"selection-change":e.setSelection}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("div",{staticClass:"cell-block"},[a("span",[e._v(" 分类：")]),a("clipboard-text",[e._v(e._s(l.category))])],1),a("div",{staticClass:"cell-block"},[a("span",[e._v(" 地区：")]),a("clipboard-text",[e._v(e._s(l.place))])],1),a("div",{staticClass:"cell-block"},[a("span",[e._v(" 更多：")]),a("a",{on:{click:function(t){return e.publish(l)}}},[e._v(" 发布 ")]),a("a",{on:{click:function(t){return e.offline(l)}}},[e._v(" 下线 ")])])]}}])}),a("el-table-column",{attrs:{type:"selection",width:"50"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",sortable:"custom","show-overflow-tooltip":"",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("clipboard-text",[e._v(e._s(l.id))])]}}])}),a("el-table-column",{attrs:{prop:"pageId",label:"PAGE ID",sortable:"custom","show-overflow-tooltip":"",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("clipboard-text",[e._v(e._s(l.pageId))])]}}])}),a("el-table-column",{attrs:{prop:"title",label:"标题（点击复制）","show-overflow-tooltip":"","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("clipboard-text",[e._v(e._s(l.title))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",sortable:"custom","show-overflow-tooltip":"","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("clipboard-text",[e._v(e._s(l.createTime))])]}}])}),a("el-table-column",{attrs:{prop:"createUserName",label:"创建人","show-overflow-tooltip":"","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("clipboard-text",[e._v(e._s(l.createUserName))])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right","show-overflow-tooltip":"","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("span",{on:{mouseenter:function(t){e.currentRow=l}}},[a("el-popover",{attrs:{placement:"bottom",title:"详细信息 - 支持点击文本复制到剪贴板",width:.7*e.windowInnerWidth,trigger:"hover","open-delay":100,"close-delay":100}},[e.currentRow&&l.id===e.currentRow.id?a("example-more-column",{attrs:{row:l}}):e._e(),a("a",{attrs:{slot:"reference"},slot:"reference"},[e._v(" 查看详情 ")])],1)],1),a("span",{on:{mouseenter:function(t){e.currentRow=l}}},[a("el-popover",{attrs:{placement:"bottom",title:"全部操作",width:480,trigger:"hover","open-delay":100,"close-delay":100}},[e.currentRow&&l.id===e.currentRow.id?a("example-more-link",{attrs:{row:l}}):e._e(),a("a",{attrs:{slot:"reference"},slot:"reference"},[e._v(" 全部操作 ")])],1)],1),a("router-link",{attrs:{to:"/form/basic/"+l.pageId}},[e._v("修改")])]}}])})],1)],1)},ae=[],le=(a("96cf"),a("1da1")),ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"example-more-column-content",attrs:{size:"mini",inline:!0}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"ID"}},[a("clipboard-text",[e._v(e._s(e.row.id))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v(e._s(e.row.title))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"创建时间"}},[a("clipboard-text",[e._v(e._s(e.row.createTime))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"创建人"}},[a("clipboard-text",[e._v(e._s(e.row.createUserName))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"分类"}},[a("clipboard-text",[e._v(e._s(e.row.category))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"地区"}},[a("clipboard-text",[e._v(e._s(e.row.place))])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述描述")])],1)],1),a("el-col",{attrs:{xl:6,lg:8,md:8,sm:12,xs:12}},[a("el-form-item",{attrs:{size:"mini",label:"标题"}},[a("clipboard-text",[e._v("描述描述")])],1)],1)],1)],1)},re=[],ie={name:"example-more-column",props:{row:{type:Object,default:function(){return{}}}},data:function(){return{}}},oe=ie,se=(a("3fdc"),Object(d["a"])(oe,ne,re,!1,null,"664a2186",null)),ce=se.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tabs",{attrs:{"tab-position":"right"}},[a("el-tab-pane",{attrs:{label:"常用操作"}},[a("ul",{staticClass:"list-inline vertical-space-15 horizontal-space-20"},[a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作一")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作二")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作三")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作四")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作五")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作六")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作七")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作八")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作九")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十一")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十二")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十三")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十四")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十五")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十六")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十七")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作十八")])])])]),a("el-tab-pane",{attrs:{label:"运营类操作"}},[a("ul",{staticClass:"list-inline vertical-space-15 horizontal-space-20"},[a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作一")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作二")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作三")])])])]),a("el-tab-pane",{attrs:{label:"日志类操作"}},[a("ul",{staticClass:"list-inline vertical-space-15 horizontal-space-20"},[a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作一")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作二")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作三")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作四")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作五")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作六")])]),a("li",[a("a",{on:{click:e.doSomeThing}},[e._v("操作七")])])])])],1)},pe=[],me={name:"example-more-link",props:{row:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{doSomeThing:function(){var e="数据 ".concat(this.row.id," 操作成功！");this.$logger.log("[doSomeThing]","Success"),this.$message({type:"success",message:e})}}},de=me,fe=Object(d["a"])(de,ue,pe,!1,null,"70778d86",null),ge=fe.exports,be={ExampleMoreColumn:ce,ExampleMoreLink:ge},he={name:"example-table",components:Object(r["a"])({},be),props:{table:{type:Object,required:!0}},setup:function(e){var t=e.table,a=t.state,l=t.customPageSorter,n=t.setPageSort,r=t.setList,o=t.setSelection,s=t.watchUpdate,c=Object(i["useLoading"])(),u=c.loading,p=c.withLoading,m=Object(i["useResize"])(),d=m.windowInnerWidth;return{loading:u,withLoading:p,windowInnerWidth:d,state:a,customPageSorter:l,setPageSort:n,setList:r,setSelection:o,watchUpdate:s}},computed:{query:function(){var e=this.state,t=e.page,a=e.filter;return{page:t,filter:a}}},data:function(){return{currentRow:null}},created:function(){var e=this;this.watchUpdate((function(){e.fetchList()}))},methods:{fetchList:function(){var e=this;return Object(le["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.withLoading((function(){return e.$services.exampleListService.getList({data:e.query}).then((function(t){e.setList(t)})).catch((function(){e.$message({type:"error",message:"查询列表数据失败！"})}))}));case 1:case"end":return t.stop()}}),t)})))()},publish:function(e){this.$logger.log("[PublishRow]","[data]",e),this.$message({type:"success",message:"数据发布成功 (".concat(e.id,")")})},offline:function(e){this.$logger.log("[OfflineRow]","[data]",e),this.$message({type:"info",message:"数据下线成功 (".concat(e.id,")")})}}},ve=he,xe=Object(d["a"])(ve,te,ae,!1,null,"5b602f0b",null),ye=xe.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("ul",{staticClass:"list-inline vertical-space-10 horizontal-space-10"},[a("li",[a("el-dropdown",{attrs:{placement:"bottom-start"},on:{command:e.handleExportCommand}},[a("el-button",{attrs:{size:"small",type:"primary",plain:""}},[e._v(" 导出数据"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"all"}},[e._v(" 导出当前页 ")]),a("el-dropdown-item",{attrs:{command:"selected"}},[e._v(" 导出已选择的数据 ")])],1)],1)],1),a("li",[a("el-dropdown",{on:{command:e.handleBatchCommand}},[a("el-button",{attrs:{size:"small",type:"primary",plain:""}},[e._v(" 批量操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"publish"}},[e._v("批量发布")]),a("el-dropdown-item",{attrs:{command:"offline"}},[e._v("批量下线")]),a("el-dropdown-item",{attrs:{command:"relate"}},[e._v("批量关联")])],1)],1)],1),a("li",[a("table-selection-ultimate",{ref:"ultimateSelection",attrs:{btnText:"跨页数据选择",table:e.table,columns:[{prop:"id",label:"ID"},{prop:"title",label:"标题"}]}})],1)]),"publish"===e.batchState.command?a("example-batch-publish",{attrs:{list:e.batchState.list},on:{complete:function(t){e.batchState.command=null}}}):e._e(),"offline"===e.batchState.command?a("example-batch-offline",{attrs:{list:e.batchState.list},on:{complete:function(t){e.batchState.command=null}}}):e._e()],1)},_e=[],Se=a("eaf8"),ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-table-selection-ultimate"},[a("div",{staticClass:"app-table-selection-ultimate-dropdown"},[a("el-dropdown",{on:{command:e.handleSelectionCommand}},[a("el-badge",{staticClass:"item",attrs:{value:e.crossPageSelectionCount,max:99}},[a("el-button",{attrs:{size:e.btnSize,type:e.btnType,plain:e.btnPlain}},[e._v(" "+e._s(e.btnText)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{disabled:!e.selectionCount,command:"append"}},[a("i",{staticClass:"el-icon-plus"}),a("span",[e._v(" 添加当前选择项 "),a("span",[e._v(" ("+e._s(e.selectionCount)+") ")])])]),a("el-dropdown-item",{attrs:{disabled:!e.crossPageSelectionCount,divided:"",command:"show"}},[a("i",{staticClass:"el-icon-files"}),a("span",[e._v(" 查看全部 "),a("span",{staticClass:"selection-count"},[e._v(" ("+e._s(e.crossPageSelectionCount)+") ")])])]),a("el-dropdown-item",{attrs:{disabled:!e.crossPageSelectionCount,command:"clear"}},[a("i",{staticClass:"el-icon-delete"}),a("span",[e._v(" 清空全部 "),a("span",[e._v(" ("+e._s(e.crossPageSelectionCount)+") ")])])])],1)],1)],1),a("el-dialog",{attrs:{title:"查看跨页数据",visible:e.dialogCrossPageSelection,width:"80%"},on:{"update:visible":function(t){e.dialogCrossPageSelection=t}}},[a("table-with-pager",{attrs:{data:e.state.crossPageSelection,columns:e.columns},scopedSlots:e._u([{key:"default",fn:function(){return[a("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",disabled:!e.dialogSelection.length},on:{click:function(t){return e.deleteCrossPageSelection(e.dialogSelection)}}},[e._v(" 删除 ")])]},proxy:!0},{key:"table",fn:function(t){return[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data},on:{"selection-change":function(t){return e.dialogSelection=t}}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._l(t.columns,(function(e){return a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label}})})),a("el-table-column",{attrs:{fixed:"right",label:"操作","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.removeCrossPageSelection([t.row])}}},[e._v(" 移除 ")])]}}],null,!0)})],2)]}}])}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogCrossPageSelection=!1}}},[e._v(" 关闭 ")])],1)],1)],1)},Ce=[],ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-table-with-pager"},[e._t("default"),e._t("table",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentPageList}},e._l(e.columns,(function(e){return a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label}})})),1)],null,{data:e.currentPageList,columns:e.columns}),e._t("pager",[a("el-pagination",{attrs:{background:"","page-size":e.pageSize,"page-sizes":e.pageSizes,layout:e.pageLayout,total:e.totalCount},on:{"size-change":e.updatePageSize,"current-change":e.updatePageNo}})],null,{updatePageSize:e.updatePageSize,updatePageNo:e.updatePageNo,pageSize:e.pageSize,pageSizes:e.pageSizes,pageLayout:e.pageLayout,totalCount:e.totalCount})],2)},Pe=[],$e=(a("fb6a"),a("a9e3"),{name:"app-table-with-pager",props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[{prop:"id",label:"ID"}]}},defaultPageSize:{type:Number,default:10},pageLayout:{type:String,default:"sizes, prev, pager, next, jumper, ->, total"},pageSizes:{type:Array,default:function(){return[5,10,20,40,80]}}},data:function(){return{pageNo:1,pageSize:10}},watch:{totalCount:function(e){var t=Math.ceil(e/this.pageSize);this.pageNo>t&&(this.pageNo=Math.max(1,t))}},computed:{totalCount:function(){return this.data.length},currentPageList:function(){var e=this.data,t=this.pageNo,a=this.pageSize,l=a*(t-1);return e.slice(l,l+a)}},created:function(){this.pageSize=this.defaultPageSize},methods:{updatePageSize:function(e){this.pageSize=e},updatePageNo:function(e){this.pageNo=e}}}),Oe=$e,Te=(a("34f4"),Object(d["a"])(Oe,ze,Pe,!1,null,"f7bf13ba",null)),je=Te.exports,qe={name:"app-table-selection-ultimate",components:{TableWithPager:je},props:{table:{type:Object,required:!0},btnText:{type:String,default:"跨页数据选择"},btnSize:{type:String,default:"small"},btnType:{type:String,default:"primary"},btnPlain:{type:Boolean,default:!0},columns:{type:Array,default:function(){return[{prop:"id",label:"ID"}]}}},setup:function(e){var t=e.table,a=t.state,l=t.addCrossPageSelection,n=t.removeCrossPageSelection,r=t.clearCrossPageSelection;return{state:a,addCrossPageSelection:l,removeCrossPageSelection:n,clearCrossPageSelection:r}},data:function(){return{dialogSelection:[],dialogCrossPageSelection:!1}},computed:{selectionCount:function(){return this.state.selection.length},crossPageSelectionCount:function(){return this.state.crossPageSelection.length}},methods:{use:function(){var e=this.selectionCount,t=this.crossPageSelectionCount,a=this.state,l=a.selection,n=a.crossPageSelection;if(!t)return e?l:[];if(!e)return t?n:[];var r="存在 ".concat(t," 条跨页数据，请确认是否使用？");return this.$confirm(r,"数据确认",{showClose:!1,confirmButtonText:"使用跨页数据 (".concat(t,")"),cancelButtonText:"使用当前选择的数据 (".concat(e,")")}).then((function(){return n})).catch((function(){return l}))},handleSelectionCommand:function(e){switch(e){case"append":this.appendCrossPageSelection();break;case"delete":this.deleteCrossPageSelection();break;case"show":this.showCrossPageSelection();break;case"clear":this.confirmClearCrossPageSelection();break;default:break}},showCrossPageSelection:function(){this.dialogCrossPageSelection=!0},appendCrossPageSelection:function(e){if(e=e||this.state.selection,e.length){var t=this.addCrossPageSelection(e);this.$message({type:"success",message:"当前选择项已添加至跨页数据！有效数据 ".concat(t," 条。")})}else this.$message({type:"error",message:"未选择任何数据！"})},deleteCrossPageSelection:function(e){if(e=e||this.state.selection,e.length){var t=this.removeCrossPageSelection(e);this.$message({type:"info",message:"已从跨页数据中移除当前选择项！有效数据 ".concat(t," 条。")})}else this.$message({type:"error",message:"未选择任何数据！"})},confirmClearCrossPageSelection:function(){var e=this,t=this.crossPageSelectionCount,a="此操作将清空 ".concat(t," 条跨页数据，是否继续？");this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=e.clearCrossPageSelection();e.$message({type:"success",message:"清空跨页数据成功！共 ".concat(t," 条。")})})).catch((function(){e.$message({type:"info",message:"已取消操作！"})}))}}},Ee=qe,Ie=(a("8ce3"),Object(d["a"])(Ee,ke,Ce,!1,null,"0df791b6",null)),Re=Ie.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"批量下线",visible:e.visible,width:"80%"},on:{"update:visible":function(t){e.visible=t}}},[a("table-with-pager",{attrs:{data:e.list,columns:e.columns}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.offline}},[e._v("确定")])],1)],1)},Ne=[],Fe={name:"example-batch-offline",components:{TableWithPager:je},props:{list:{type:Array,default:function(){return[]}}},watch:{visible:function(e){e||this.$emit("complete")}},data:function(){return{visible:!0,columns:[{prop:"id",label:"ID"},{prop:"place",label:"地区"},{prop:"title",label:"标题"}]}},methods:{offline:function(){this.$logger.log("[BatchOffline]","[data]",this.list),this.$message({type:"success",message:"批量下线成功！"}),this.visible=!1}}},Ve=Fe,Ae=Object(d["a"])(Ve,Le,Ne,!1,null,"74a53a64",null),De=Ae.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"批量发布",visible:e.visible,width:"80%"},on:{"update:visible":function(t){e.visible=t}}},[a("table-with-pager",{attrs:{data:e.list,columns:e.columns}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.publish}},[e._v("确定")])],1)],1)},Qe=[],Me={name:"example-batch-publish",components:{TableWithPager:je},props:{list:{type:Array,default:function(){return[]}}},watch:{visible:function(e){e||this.$emit("complete")}},data:function(){return{visible:!0,columns:[{prop:"id",label:"ID"},{prop:"title",label:"标题"}]}},methods:{publish:function(){this.$logger.log("[BatchPublish]","[data]",this.list),this.$message({type:"success",message:"批量发布成功！"}),this.visible=!1}}},Ue=Me,We=Object(d["a"])(Ue,Be,Qe,!1,null,"1d213c28",null),Ye=We.exports,Je={ExampleBatchOffline:De,ExampleBatchPublish:Ye},Ke={name:"example-toolbar",components:Object(r["a"])({TableSelectionUltimate:Re},Je),props:{table:{type:Object,required:!0}},setup:function(e){var t=e.table.state;return{state:t}},data:function(){return{batchState:{list:[],command:null}}},methods:{handleBatchCommand:function(e){var t=this;return Object(le["a"])(regeneratorRuntime.mark((function a(){var l,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.ultimateSelection.use();case 2:if(t.batchState.list=a.sent,t.batchState.list.length){a.next=6;break}return t.$message({type:"error",message:"未选择任何数据！"}),a.abrupt("return");case 6:return l=function(){return t.batchState.command=e},n={publish:l,offline:l,relate:function(){t.$logger.log("[BatchRelate]","[data]",t.batchState.list),t.$message({type:"success",message:"跳转至批量关联页（未实现）！"})},error:function(){t.$message({type:"error",message:"无效的批量操作！"})}},r=n[e]||n["error"],a.abrupt("return",r());case 10:case"end":return a.stop()}}),a)})))()},handleExportCommand:function(e){var t=this;return Object(le["a"])(regeneratorRuntime.mark((function a(){var l,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return l=function(){var e=Object(le["a"])(regeneratorRuntime.mark((function e(){var a,l,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.length>0&&void 0!==n[0]?n[0]:[],l="ExampleCSV",a.length?Se["b"].downloadCSV(a,l):t.$message({type:"error",message:"当前导出数据为空！"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n={all:function(){var e=Object(le["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.state.list.result,n=void 0===a?[]:a,l(n);case 2:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}(),selected:function(){var e=Object(le["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.ultimateSelection.use();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}(),error:function(){t.$message({type:"error",message:"无效的导出操作！"})}},r=n[e]||n["error"],a.abrupt("return",r());case 4:case"end":return a.stop()}}),a)})))()}}},Ge=Ke,He=Object(d["a"])(Ge,we,_e,!1,null,"6ae7fcf7",null),Xe=He.exports,Ze={ExampleQueryForm:B,ExampleQueryPage:J,ExampleQuickQuery:ee,ExampleTable:ye,ExampleToolbar:Xe},et={name:"example-basic-list",components:Object(r["a"])({},Ze),setup:function(){var e=Object(i["useTable"])({uniqueKey:"id",sortKeys:{order:"order",orderBy:"prop",asc:"ascending",desc:"descending"}}),t=e.state,a=e.setInitialPage;return{table:e,state:t,setInitialPage:a}},data:function(){return{}},computed:{showTopPager:function(){return this.state.page.pageSize>=40}},created:function(){this.setInitialPage({pageNo:1,pageSize:10,orderBy:"id",order:"asc"})},methods:{}},tt=et,at=Object(d["a"])(tt,l,n,!1,null,"7034071c",null);t["default"]=at.exports},c272:function(e,t,a){},cc66:function(e,t,a){"use strict";var l=a("f295"),n=a.n(l);n.a},f295:function(e,t,a){}}]);
//# sourceMappingURL=table.afbf554f620a75e8472f.js.map