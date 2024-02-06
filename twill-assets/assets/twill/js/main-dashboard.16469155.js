(function(){"use strict";var t={1432:function(t,e,a){var s=a(9016),r=a(7176),n=a(4540),i=(a(6760),a(9824)),o=a(7124),l=a(894),c=a(5572),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shortcutCreator"},[t.entities.length?e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper wrapper--reverse"},[e("div",{staticClass:"shortcutCreator__create"},[e("a17-dropdown",{ref:"createNewDropdown",staticClass:"shortcutCreator__dropdown",attrs:{position:"bottom-right",width:"full",offset:0}},[e("a17-button",{staticClass:"shortcutCreator__btn",attrs:{type:"button",variant:"action"},on:{click:function(e){return t.$refs.createNewDropdown.toggle()}}},[t._v(" "+t._s(t.$trans("dashboard.create-new","Create new"))+" "),e("span",{staticClass:"shortcutCreator__trigger"},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"dropdown_module"}})])]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[e("ul",[t._l(t.entities,(function(a,s){return[a.createUrl?e("li",{key:s},[e("a",{attrs:{href:a.createUrl}},[t._v(t._s(a.singular))])]):t._e()]}))],2)])],1)],1),e("div",{staticClass:"shortcutCreator__listing"},[t._l(t.entities,(function(a,s){return[a.number?e("a",{key:s,staticClass:"shortcutCreator__listingItem",attrs:{href:a.url}},[e("span",{staticClass:"shortcutCreator__label"},[t._v(t._s(a.label))]),e("h3",{staticClass:"shortcutCreator__sum f--heading"},[t._v(t._s(a.number))])]):t._e()]}))],2)])]):t._e()])},u=[],_={name:"A17ShortcutCreator",props:{entities:{type:Array,default:function(){return[]}}},computed:{},methods:{}},f=_,v=a(2528),p=(0,v.c)(f,d,u,!1,null,"f8a66ea8",null),h=p.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box activityFeed"},[e("header",{staticClass:"box__header"},[t._t("default"),e("ul",{staticClass:"box__filter"},t._l(t.navFilters,(function(a,s){return e("li",{key:s},[e("a",{class:{"s--on":t.navActive===s},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.filterStatus(s,a.slug)}}},[t._v(t._s(a.name))])])})),0)],2),e("div",{staticClass:"box__body"},[t.rows.data.length>0?e("table",{staticClass:"activityFeed__table"},[t._l(t.rows.data,(function(a,s){return[e("a17-activity-row",{key:a.id,attrs:{row:a,index:s,columns:t.columns}})]}))],2):[e("div",{staticClass:"activityFeed__empty"},[e("h4",[t._v(t._s(t.emptyMessage))])])],e("a17-paginate",{attrs:{max:t.rows.last_page,value:t.rows.current_page,offset:20,availableOffsets:[20]},on:{changePage:t.getData}})],2)])},b=[],y=a(6036),w=function(){var t=this,e=t._self._c;return e("tr",{staticClass:"activityRow"},[t._l(t.columns,(function(a){return e("td",{key:a.name,staticClass:"activityCell",class:t.cellClasses(a)},[t.isSpecificColumn(a)?["published"===a.name?e("span",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"activityCell__pubstate",class:{"activityCell__pubstate--live":t.row[a.name]},attrs:{"data-tooltip-title":t.row[a.name]?"Published":"Draft"}}):t._e(),t._v(" "),"thumbnail"===a.name?e("a",{staticClass:"activityCell__thumb",attrs:{href:t.row["edit"]}},[e("img",{attrs:{src:t.row[a.name]}})]):t._e()]:["name"===a.name?[e("a",{staticClass:"activityCell__link",attrs:{href:t.row["edit"]}},[t._v(t._s(t.row[a.name]))]),e("p",{staticClass:"activityCell__meta f--note"},[t._v(" "+t._s(t.row["activity"])+" "),e("timeago",{attrs:{"auto-update":1,datetime:new Date(t.row["date"])}}),t._v(" "+t._s(t.$trans("dashboard.activity-row.by","by"))+" "+t._s(t.row["author"])+" "),e("span",{staticClass:"activityCell__type"},[t._v(t._s(t.row["type"]))])],1)]:t._e()]],2)})),e("td",{staticClass:"activityCell activityCell--icon"},[e("a17-dropdown",{ref:"activityRowSetupDropdown",attrs:{position:"bottom-right"}},[e("a17-button",{attrs:{variant:"icon"},on:{click:function(e){return t.$refs.activityRowSetupDropdown.toggle()}}},[e("span",{directives:[{name:"svg",rawName:"v-svg"}],attrs:{symbol:"more-dots"}})]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[t.row.hasOwnProperty("permalink")?e("a",{attrs:{href:t.row["permalink"],target:"_blank"}},[t._v(t._s(t.$trans("dashboard.activity-row.view-permalink","View Permalink")))]):t._e(),t.row.hasOwnProperty("edit")?e("a",{attrs:{href:t.row["edit"]}},[t._v(t._s(t.$trans("dashboard.activity-row.edit","Edit")))]):t._e()])],1)],1)],2)},g=[],C={name:"A17ActivityRow",props:{index:{type:Number,default:0},row:{type:Object,default:function(){return{}}},columns:{type:Array,default:function(){return[]}}},computed:{},methods:{cellClasses:function(t){return{"activityCell--icon":"featured"===t.name||"published"===t.name,"activityCell--pub hide--xsmall":"published"===t.name,"activityCell--thumb hide--xsmall":"thumbnail"===t.name}},isSpecificColumn:function(t){return"featured"===t.name||"published"===t.name||"thumbnail"===t.name}}},x=C,F=(0,v.c)(x,w,g,!1,null,"44a9a60b",null),k=F.exports,P=a(624),O=a(7980),S={name:"A17ActivityFeed",components:{A17Paginate:O.c,"a17-activity-row":k},props:{ajaxBaseUrl:{type:String},emptyMessage:{type:String,default:"You don't have any activity yet."}},data:function(){return{navFilters:[{name:this.$trans("dashboard.all-activity","All activity"),slug:"all"},{name:this.$trans("dashboard.my-activity","My activity"),slug:"mine"}],navActive:0}},computed:{rows:{get(){return this.$store.state.datatable.data},set(t){this.$store.commit(P.ec.UPDATE_DATATABLE_DATA,t)}},...(0,y.ys)({page:t=>t.datatable.page,maxPage:t=>t.datatable.maxPage,columns:t=>t.datatable.columns})},methods:{getData(t){this.$http.get(this.ajaxBaseUrl+"?"+this.navFilters[this.navActive].slug+"="+t).then((t=>{let{data:e}=t;this.rows=e}))},filterStatus:function(t,e){this.navActive!==t&&(this.navActive=t,window["TWILL"].STORE.datatable&&window["TWILL"].STORE.datatable.hasOwnProperty(e)&&(this.rows=window["TWILL"].STORE.datatable[e]))}}},A=S,T=(0,v.c)(A,m,b,!1,null,"fc9d0cfc",null),j=T.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box statFeed"},[e("header",{staticClass:"box__header"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"col--double"},[e("b",[t._t("default")],2)]),e("div",{staticClass:"col--double"},[e("div",{staticClass:"statFeed__dropdown"},[e("a17-dropdown",{ref:"statPeriodDropdown",attrs:{position:"bottom-right"}},[e("a17-button",{attrs:{variant:"ghost"},on:{click:function(e){return t.$refs.statPeriodDropdown.toggle()}}},[t._v(t._s(t.selectedPeriodLabel)+" "),e("span",{directives:[{name:"svg",rawName:"v-svg"}],staticClass:"statFeed__dropdownIcon",attrs:{symbol:"dropdown_module"}})]),e("div",{attrs:{slot:"dropdown__content"},slot:"dropdown__content"},[t._l(t.periods,(function(a,s){return[a.value!==t.selectedPeriod?e("button",{key:s,attrs:{type:"button"},on:{click:function(e){return t.selectPeriod(a.value)}}},[t._v(t._s(a.label))]):t._e()]}))],2)],1)],1)])])]),e("div",{staticClass:"box__body"},[t._l(t.factsForSelectedPeriod,(function(a,s){return[e("a",{key:s,staticClass:"statFeed__item",attrs:{href:a.url,target:"_blank"}},[e("h3",{staticClass:"statFeed__numb f--heading",class:t.trending(s)},[t._v(t._s(a.figure))]),e("div",{staticClass:"statFeed__info"},[e("h4",{staticClass:"statFeed__label"},[t._v(t._s(a.label))]),e("p",{staticClass:"statFeed__meta f--note f--small"},[t._v(t._s(a.insight))])]),e("div",{staticClass:"statFeed__line"},[e("trend",{attrs:{data:a.data,gradient:["#cccccc"],"stroke-width":"2",padding:0,"auto-draw":"",smooth:"",width:"100",height:"50"}})],1)])]}))],2),t._m(0)])},L=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"box__footer statFeed__footer"},[e("a",{staticClass:"f--external",attrs:{href:"https://analytics.google.com/analytics/web",target:"_blank"}},[t._v("Google Analytics")])])}],M=a(2e3);s["default"].use(M.c);var $={name:"A17StatFeed",props:{facts:{type:Object,default:function(){return{}}}},data:function(){return{selectedPeriod:"yesterday",periods:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"This week",value:"week"},{label:"This month",value:"month"}]}},computed:{factsForSelectedPeriod(){return this.facts[this.selectedPeriod]},selectedPeriodLabel(){return this.periods.find((t=>t.value===this.selectedPeriod)).label}},methods:{trending:function(t){return"statFeed__numb--"+this.factsForSelectedPeriod[t].trend},selectPeriod:function(t){this.selectedPeriod=t}}},E=$,I=(0,v.c)(E,D,L,!1,null,"5d1b8a8c",null),N=I.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box genericFeed"},[e("header",{staticClass:"box__header"},[e("b",[t._t("default")],2)]),e("div",{staticClass:"box__body"},[e("ol",{staticClass:"genericFeed__list",class:{"genericFeed__list--numbered":t.hasNumber}},t._l(t.entities,(function(a,s){return e("li",{key:s},[e("a",{staticClass:"genericFeed__item",attrs:{href:a.url,target:t.target(a)}},[a.thumbnail?e("span",{staticClass:"genericFeed__thumbnails"},[e("img",{attrs:{src:a.thumbnail}})]):t._e(),e("span",{staticClass:"genericFeed__label"},[e("span",[e("span",{staticClass:"genericFeed__hover"},[t._v(t._s(a.name))])])]),a.number?e("span",{staticClass:"genericFeed__views f--tiny"},[t._v(t._s(a.number))]):t._e(),a.type?e("span",{staticClass:"genericFeed__type"},[t._v(t._s(a.type))]):t._e()])])})),0)])])},U=[],W={name:"A17GenericFeed",props:{entities:{type:Array,default:function(){return[]}}},computed:{hasNumber:function(){return this.entities.filter((t=>t.hasOwnProperty("number"))).length}},methods:{target:function(t){return!!t.hasOwnProperty("external")&&"_blank"}}},B=W,G=(0,v.c)(B,R,U,!1,null,"5723cbaf",null),Y=G.exports,V=a(7768),q=a(6188),z=a(6660);s["default"].use(l.c),s["default"].use(c.c),r.c.registerModule("datatable",V.c),r.c.registerModule("language",q.c),r.c.registerModule("form",z.c),(0,i.c)(),window["TWILL"].vm=window.vm=new s["default"]({store:r.c,el:"#app",components:{"a17-shortcut-creator":h,"a17-activity-feed":j,"a17-stat-feed":N,"a17-feed":Y},created:function(){(0,o.c)()}}),document.addEventListener("DOMContentLoaded",n.c)},4267:function(t,e,a){function s(){const t="test";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}}function r(t,e){const a="";window.TWILL.debug||(s()?localStorage.setItem(t,e):document.cookie=t+"="+e+a+"; path=/")}a.d(e,{st:function(){return r}})}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,n){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],n=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<i&&(i=n));if(o){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.j=4}(),function(){var t={4:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,i=s[0],o=s[1],l=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var d=l(a)}for(e&&e(s);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunk_area17_twill"]=self["webpackChunk_area17_twill"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[999,640],(function(){return a(1432)}));s=a.O(s)})();