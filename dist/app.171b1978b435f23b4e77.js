!function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);f.length;)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={1:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([565,0]),n()}({102:function(t,e,n){var r=n(308);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("e152d86a",r,!0,{})},103:function(t,e,n){var r=n(312);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("0bd57ea1",r,!0,{})},104:function(t,e,n){var r=n(317);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("463e0694",r,!0,{})},105:function(t,e,n){var r=n(319);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("2dcfb7aa",r,!0,{})},126:function(t,e,n){var r=n(363);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(7).default)("25068356",r,!0,{})},307:function(t,e,n){"use strict";var r=n(102);n.n(r).a},308:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"\n.cse .gsc-webResult.gsc-result, .gsc-webResult.gsc-result, .gsc-webResult.gsc-result.gsc-promotion, .gsc-results .gsc-imageResult-classic, .gsc-results .gsc-imageResult-column {\n  border-left: 1px transparent;\n  border-color: #000000;\n}\n",""])},311:function(t,e,n){"use strict";var r=n(103);n.n(r).a},312:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".modal {\n  display: none;\n}\n.modal.show {\n  display: block;\n}\n.search-modal {\n  /* Important part */\n}\n.search-modal .modal {\n    display: block !important;\n    /* I added this to see the modal, you don't need this */\n}\n.search-modal .modal-dialog {\n    overflow-y: initial !important;\n}\n.search-modal .modal-body {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n}\n",""])},316:function(t,e,n){"use strict";var r=n(104);n.n(r).a},317:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter-active #program, .fade-leave-active #program {\n    transition: opacity 1s;\n}\n.fade-enter #program, .fade-leave-to #program {\n  opacity: 0;\n}\n",""])},318:function(t,e,n){"use strict";var r=n(105);n.n(r).a},319:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n",""])},362:function(t,e,n){"use strict";var r=n(126);n.n(r).a},363:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"\n.done[data-v-0299a515] {\n  background-color: #FFFFFF88;\n  cursor: initial !important;\n}\n.done[data-v-0299a515]:hover {\n  background-color: #FFFFFF88;\n}\n",""])},565:function(t,e,n){"use strict";n.r(e);var r=n(47),a=n(232),s=n(233),i=n.n(s),o=n(46),l=n.n(o),c=n(234),u=n.n(c),d=n(11),f=n.n(d),v=n(12),h=n.n(v),m=function(){function t(e){f()(this,t),this.date=e||new Date}return h()(t,[{key:"toDate",value:function(){return this.date}},{key:"year",get:function(){return this.date.getFullYear()}},{key:"month",get:function(){return this.date.getMonth()+1}}],[{key:"fromSeconds",value:function(e){return new t(new Date(1e3*e))}}]),t}(),p={1:"Leden",2:"Únor",3:"Březen",4:"Duben",5:"Květen",6:"Červen",7:"Červenec",8:"Srpen",9:"Září",10:"Říjen",11:"Listopad",12:"Prosinec"},g=n(169),y=n.n(g),_=n(80),b=n.n(_),C=function(){function t(){f()(this,t),this.cache={}}return h()(t,[{key:"get",value:function(t,e){return this.cache[t]||(this.cache[t]=e()),this.cache[t]}}]),t}(),w=n(235),x=n.n(w),E=function(){function t(){f()(this,t)}return h()(t,null,[{key:"relativeUrl",value:function(t){return x()(BASE_URL,{path:t})}}]),t}(),k=E.relativeUrl("/data/events"),D=E.relativeUrl("/program/film-club.json"),j=new C,S=function(t,e){return j.get(t+"."+e,function(){return b.a.get(function(t,e){return[k,t,e,"/events.json"].join("/")}(t,e)).then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.url=E.relativeUrl(t.url),t})}).catch(function(t){console.warn(t)})})},O=function(){return b.a.get(D).then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.url=E.relativeUrl(t.url),t})}).catch(function(t){console.warn(t)})},M=function(){function t(){f()(this,t)}return h()(t,null,[{key:"createSingleEvent",value:function(t,e){return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"#C04F30",borderColor:"#401a0f",borderWidth:"2px",borderStyle:"solid"},contentStyle:{color:"#fff"},customData:{event:t,start:e},dates:e}}},{key:"createLongEvent",value:function(t,e,n){var r=[{start:e,end:n}];return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"rgba(192,79,48,0.15)",borderColor:"rgba(64,26,15,0.15)",borderWidth:"1px",borderStyle:"solid"},customData:{event:t,start:e,end:n},dates:r}}},{key:"createEvent",value:function(e){var n=m.fromSeconds(e.startTime),r=e.endTime?m.fromSeconds(e.endTime):null;return r?t.createLongEvent(e,n.toDate(),r.toDate()):t.createSingleEvent(e,n.toDate())}}]),t}(),L=function(){function t(){f()(this,t)}return h()(t,null,[{key:"calendarEvent",value:function(t){return M.createEvent(t)}},{key:"get",value:function(e,n){return function(t,e){return EVENT_CALENDAR.filter(function(n){return n.year===t&&n.month===e}).length>0}(e,n)?S(e,n).then(function(e){return e?e.map(t.calendarEvent):[]}):y.a.resolve([])}}]),t}(),A=(n(305),{data:function(){return{events:[]}},computed:{attributes:function(){return[{contentStyle:{fontWeight:"1000",color:"#114bad"},dates:new Date}].concat(u()(this.events))}},mounted:function(){this.$nextTick(function(){var t=new m;this.fetchEvents(t.year,t.month)})},methods:{pageChanged:function(t){this.fetchEvents(t.year,t.month)},fetchEvents:function(t,e){var n=this;return L.get(t,e).then(function(t){t&&t.forEach(function(t){n.events.push(t)})})},goToEvent:function(t){if(t.attributes&&t.attributes.length>0){var e=t.attributes[0].customData;window.location.href=this.buildEventUrl(e)}},buildEventUrl:function(t){return t.event.url+"#content"}}}),T=n(1),P=Object(T.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-calendar"},[n("v-calendar",{attrs:{attributes:t.attributes,"is-expanded":""},on:{"update:fromPage":t.pageChanged,"update:toPage":t.pageChanged},scopedSlots:t._u([{key:"event",fn:function(e){var r=e.customData;return n("div",{staticClass:"popover-row"},[n("span",{staticClass:"popover-content"},[n("a",{attrs:{href:t.buildEventUrl(r)}},[t._v(t._s(r.event.title))])]),t._v(" "),r.end?t._e():n("span",[t._v("(od: "+t._s(t._f("dateFormat")(r.start,"H:mm"))+")")])])}}])})],1)},[],!1,null,null,null);P.options.__file="Calendar.vue";var N=P.exports,U={mounted:function(){this.$nextTick(function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cse.google.com/cse.js?cx=012110265351671576307:em27sw6lj6g";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})}},F=(n(307),Object(T.a)(U,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"gcse-search"})])},[],!1,null,null,null));F.options.__file="GoogleSearch.vue";var I={data:function(){return{opened:!1}},computed:{showStyle:function(){return{show:this.opened}}},created:function(){var t=this;document.addEventListener("keyup",function(e){27===e.keyCode&&t.close()}),this.$root.$on("openSearchDialog",function(){t.$nextTick(function(){t.opened=!0})})},methods:{close:function(){this.opened=!1}},components:{GoogleSearch:F.exports},mixins:[n(236).mixin]},q=(n(311),Object(T.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.opened?n("div",{staticClass:"modal-backdrop fade",class:t.showStyle}):t._e(),t._v(" "),n("div",{staticClass:"search-modal modal fade",class:t.showStyle,attrs:{tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog modal-dialog-scrollable modal-xl",attrs:{role:"document"}},[n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.close,expression:"close"}],staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"modal-title"},[t._v("\n            Vyhledávání\n          ")]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.close}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[n("google-search")],1),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.close}},[t._v("Zavřít")])])])])])])},[],!1,null,null,null));q.options.__file="SeachDialog.vue";var R=q.exports,G=n(237),Y=n.n(G),H=n(238),B=n.n(H),V={props:{title:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{fallbackUrl:function(){return BASE_URL+"/assets/img/theatre.png"},classes:function(){return"left"===this.side?["justify-content-md-start"]:["justify-content-md-end"]}}},z=Object(T.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"img-wrap justify-content-sm-center",class:t.classes},[t.url?n("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:t.url,alt:t.title,title:t.title}}):n("img",{staticClass:"img-fluid",attrs:{src:t.fallbackUrl,alt:t.title,title:t.title}})])])},[],!1,null,null,null);z.options.__file="EventImage.vue";var W=z.exports,Z={props:{title:{type:String,required:!0},start:{type:Number,required:!0},category:{type:String,required:!0},annotation:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{eventUrl:function(){return this.url+"#content"},startDate:function(){return m.fromSeconds(this.start).toDate()},classes:function(){return"left"===this.side?["text-align-left"]:["text-align-right"]}}},J=Object(T.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"text-content mt-3",class:t.classes},[n("a",{staticClass:"event-title pt-2 h4 font-weight-bold",attrs:{href:t.eventUrl}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text pt-3"},[t._v("\n        "+t._s(t._f("dateFormat")(t.startDate,"D. M. H:mm"))+"\n        "),t.category?n("span",{staticClass:"badge badge-pill badge-secondary p-2 pl-3 pr-3 m-2"},[t._v("\n          "+t._s(t.category)+"\n        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text"},[t._v("\n        "+t._s(t.annotation)+"\n      ")])]),t._v(" "),n("div",{staticClass:"event-section-btn pt-3 pb-3"},[n("a",{staticClass:"btn btn-light btn-md sr-button",attrs:{href:t.eventUrl}},[t._v("\n        Více zde\n      ")])])])])},[],!1,null,null,null);J.options.__file="EventContent.vue";var K=J.exports,Q={props:{event:{type:Object,required:!0},side:{type:String,required:!0}},components:{EventImage:W,EventContent:K},computed:{classes:function(){return"left"===this.side?["flex-row"]:["flex-row-reverse"]}}},X=Object(T.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row d-flex align-items-center event p-1 m-2 animated fadeInUp fast w-100",class:t.classes},[n("event-image",{attrs:{title:t.event.title,url:t.event.image,side:t.side}}),t._v(" "),n("event-content",{attrs:{title:t.event.title,annotation:t.event.annotation,url:t.event.url,category:t.event.category,start:t.event.startTime,side:t.side}})],1)},[],!1,null,null,null);X.options.__file="EventItem.vue";var tt=X.exports,et={props:{events:{type:Array,required:!0}},components:{EventItem:tt}},nt=Object(T.a)(et,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12"},this._l(this.events,function(t,n){return e("event-item",{key:n,attrs:{event:t,side:n%2==0?"left":"right"}})}),1)])},[],!1,null,null,null);nt.options.__file="EventList.vue";var rt=nt.exports,at={props:{index:{type:Array,required:!0},onChange:{type:Function,required:!1,default:function(){}}},data:function(){return{selected:(t=this.index,e=new m,n=t.filter(function(t){return t.year>=e.year&&t.month>=e.month}).reverse(),r=n.length&&n[0]||t.slice(-1)[0],[r.year,r.month].join("/"))};var t,e,n,r},computed:{options:function(){return this.index.reduce(function(t,e){return t[e.year]||(t[e.year]=[]),t[e.year].push({id:e.month,label:p[e.month]}),t},{})}},mounted:function(){this.onChange(this.selected)},watch:{selected:function(t){this.onChange(t)}}},st=Object(T.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"mb-3 form-control custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},t._l(Object.keys(t.options).reverse(),function(e){return n("optgroup",{attrs:{label:e}},t._l(t.options[e],function(r){return n("option",{domProps:{value:e+"/"+r.id}},[t._v("\n        "+t._s(r.label)+"\n      ")])}),0)}),0)])},[],!1,null,null,null);st.options.__file="DateSelect.vue";var it=st.exports,ot=new(function(){function t(){f()(this,t)}return h()(t,[{key:"fetch",value:function(t){var e=t.split("/"),n={month:e[1],year:e[0]};return S(n.year,n.month)}}]),t}()),lt={data:function(){return{selected:"",events:{}}},methods:{selectDate:function(t){var e=this;this.selected=t,ot.fetch(t).then(function(n){e.events=B()({},e.events,Y()({},t,n))})}},components:{DateSelect:it,EventList:rt}},ct=(n(316),Object(T.a)(lt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("date-select",{attrs:{index:t.EVENT_CALENDAR,"on-change":t.selectDate}})],1),t._v(" "),t._l(t.events,function(e,r){return n("div",{staticClass:"row animated fadeIn slow"},[n("div",{staticClass:"col-12"},[n("transition",{attrs:{name:"fade"}},[t.selected===r?n("event-list",{attrs:{events:e}}):t._e()],1)],1)])})],2)},[],!1,null,null,null));ct.options.__file="Program.vue";var ut=ct.exports,dt=new(function(){function t(){f()(this,t)}return h()(t,[{key:"fetch",value:function(){return O().then(function(t){return t.filter(function(t){return m.fromSeconds(t.startTime).toDate()>=new Date})})}}]),t}()),ft={asyncData:{events:function(){return dt.fetch()}},mixins:[o.AsyncDataMixin],components:{EventList:rt}},vt=Object(T.a)(ft,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row animated fadeIn slow"},[e("transition",{attrs:{name:"fade"}},[e("event-list",{attrs:{events:this.events}})],1)],1)])},[],!1,null,null,null);vt.options.__file="FilmClub.vue";var ht=vt.exports,mt=n(239),pt=n.n(mt),gt=n(61),yt=n.n(gt),_t=n(170),bt=n.n(_t),Ct=function(){function t(e,n){f()(this,t),this.el=e,this.column=n,this.columnNumber=n.attr("data-column")}return h()(t,[{key:"height",get:function(){return this.el.height()}},{key:"source",get:function(){return this.el.attr("src")}}]),t}(),wt=function(){function t(e){f()(this,t),this.items=e||[]}return h()(t,[{key:"copy",value:function(){return new t(this.items.slice())}},{key:"push",value:function(t){this.items.push(t)}},{key:"pop",value:function(){return this.items.pop()}},{key:"sources",get:function(){return this.items.map(function(t){return t.source})}},{key:"height",get:function(){return this.items.reduce(function(t,e){return t+e.height},0)}},{key:"maxItemHeight",get:function(){return this.items.reduce(function(t,e){return Math.max(t,e.height)},0)}},{key:"minItemHeight",get:function(){return this.items.reduce(function(t,e){return Math.min(t,e.height)},0)}}]),t}(),xt=function(){function t(e){f()(this,t),this.columns=e}return h()(t,[{key:"copy",value:function(){var e=this;return new t(yt()(this.columns).reduce(function(t,n){return t[n]=e.columns[n].copy(),t},{}))}},{key:"adjustColumns",value:function(){var t=this.copy(),e=t.computeMinMax(),n=e.min,r=e.max;return n&&r&&n.column.push(r.column.pop()),t}},{key:"computeMinMax",value:function(){var t=this.computeHeights();return{min:t.shift(),max:t.pop()}}},{key:"diff",value:function(){var t=this.computeHeights();if(t){var e=t.shift();return t.pop().column.height-e.column.height}return 0}},{key:"computeHeights",value:function(){var t=this;return yt()(this.columns).map(function(e){return{column:t.columns[e],height:t.columns[e].height}}).sort(function(t,e){return t.height-e.height})}},{key:"column",value:function(t){return this.columns[t]}}]),t}(),Et=function(){function t(e){f()(this,t),this.grid=new xt(e)}return h()(t,[{key:"adjustColumns",value:function(){for(var e=this.grid,n=e.adjustColumns();e.diff()>n.diff();)n=(e=n).adjustColumns();return new t(e.columns)}},{key:"columnImages",get:function(){var t=this.grid.columns;return yt()(t).reduce(function(e,n){return e[n]=t[n].sources,e},{})}}],[{key:"create",value:function(e){return new t(function(t){return yt()(t).reduce(function(e,n){var r=t[n],a=r.columnNumber;return e[a]=e[a]||new wt,e[a].push(r),e},{})}(function(t){return yt()(t).reduce(function(e,n){e[n]=e[n]||{};var r=bt()(t[n].slice().pop()),a=bt()(r.parents(".gallery-column"));return e[n]=new Ct(r,a),e},{})}(e)))}}]),t}(),kt=function(t){var e={};if(t.length){var n=0;do{var r=t.pop(),a="c"+n%3;(e[a]||(e[a]=[])).push(r),n++}while(t.length)}return e},Dt={props:{title:{type:String,required:!0},photos:{type:Array,required:!0}},data:function(){return{columns:kt(this.photos.slice()),gridAdjusted:!1}},methods:{loaded:function(){if(!this.gridAdjusted){this.gridAdjusted=!0;var t=Et.create(this.$refs).adjustColumns().columnImages;this.columns=t}}},directives:{imagesLoaded:pt.a,gallery:function(t){$(t).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}}},jt=Object(T.a)(Dt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:t.loaded,expression:"loaded"},{name:"gallery",rawName:"v-gallery"}],staticClass:"d-flex no-gutters popup-gallery"},t._l(t.columns,function(e,r){return n("div",{key:r,staticClass:"d-flex flex-column gallery-column",attrs:{"data-column":r}},t._l(e,function(e){return n("div",{staticClass:"p-1"},[n("a",{staticClass:"gallery-box",attrs:{href:e}},[n("img",{ref:e,refInFor:!0,staticClass:"img-fluid",attrs:{alt:t.title,src:e}})])])}),0)}),0)},[],!1,null,null,null);jt.options.__file="PhotoGalleryGrid.vue";var St=jt.exports,Ot={props:{gallery:{type:Object,required:!0}},components:{PhotoGalleryGrid:St}},Mt=Object(T.a)(Ot,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5"},[n("div",{staticClass:"row d-flex align-content-center"},[n("a",{staticClass:"h4 event-title font-weight-bold",attrs:{href:t.gallery.url}},[t._v("\n      "+t._s(t.gallery.title)+"\n    ")]),t._v(" "),n("span",{staticClass:"badge badge-pill badge-secondary p-2 m-1 ml-auto align-self-center"},[t._v("\n      "+t._s(t._f("dateFormat")(new Date(t.gallery.date),"D. M."))+"\n    ")])]),t._v(" "),t.gallery.author?n("div",{staticClass:"row justify-content-start text-left"},[n("div",{staticClass:"col-md-6"},[n("ul",{staticClass:"list-group list-group-flush w-100"},[n("li",{staticClass:"list-group-item"},[n("strong",[t._v("Autor")]),t._v(": "+t._s(t.gallery.author)+"\n        ")])])])]):t._e(),t._v(" "),n("photo-gallery-grid",{attrs:{title:t.gallery.title,photos:t.gallery.photos}})],1)},[],!1,null,null,null);Mt.options.__file="PhotoGallery.vue";var Lt=Mt.exports,At={props:{galleries:{type:Array,required:!0}},components:{PhotoGallery:Lt}},Tt=Object(T.a)(At,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},this._l(this.galleries,function(t,n){return e("photo-gallery",{key:n,attrs:{gallery:t}})}),1)},[],!1,null,null,null);Tt.options.__file="PhotoGalleryList.vue";var Pt=Tt.exports,Nt=E.relativeUrl("/data/galleries"),$t=new C,Ut=function(t,e){return $t.get(t+"."+e,function(){return b.a.get(function(t,e){return[Nt,t,e,"galleries.json"].join("/")}(t,e)).then(function(t){return t.data}).catch(function(t){console.warn(t)})})},Ft=new(function(){function t(){f()(this,t)}return h()(t,[{key:"fetch",value:function(t){var e=t.split("/"),n={month:e[1],year:e[0]};return Ut(n.year,n.month)}}]),t}()),It={data:function(){return{selected:"",galleries:{}}},methods:{selectDate:function(t){var e=this;this.selected=t,Ft.fetch(t).then(function(n){e.$set(e.galleries,t,n)})}},components:{DateSelect:it,PhotoGalleryList:Pt}},qt=(n(318),Object(T.a)(It,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("date-select",{attrs:{index:t.PHOTO_GALLERIES,"on-change":t.selectDate}})],1),t._v(" "),t._l(t.galleries,function(e,r){return n("div",{key:r,staticClass:"row animated fadeIn slow mt-3"},[n("div",{staticClass:"col-12"},[n("transition",{attrs:{name:"fade"}},[t.selected===r?n("photo-gallery-list",{attrs:{galleries:e}}):t._e()],1)],1)])})],2)},[],!1,null,null,null));qt.options.__file="PhotoGalleries.vue";var Rt=qt.exports,Gt=n(241),Yt=n(171),Ht=n.n(Yt),Bt=n(240),Vt=n.n(Bt),zt=EVENT_CALENDAR.sort(function(t,e){return new Date(t.year,t.month-1)-new Date(e.year,e.month-1)}).reverse(),Wt=function(t,e){return new Date(t.startTime)-new Date(e.startTime)},Zt=function(){function t(e){f()(this,t),this.eventDate=e,this.futureEventMonths=zt.filter(function(t){return new Date(t.year,t.month)-new Date(e.year,e.month)>=0})}return h()(t,[{key:"fetch",value:function(){var t=Vt()(Ht.a.mark(function t(e){var n,r,a,s,i=this;return Ht.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=this.futureEventMonths,r=[];case 2:if(!(r.length<e&&n.length)){t.next=10;break}return a=n.pop(),t.next=6,S(a.year,a.month);case 6:s=t.sent,r=r.concat(s.filter(function(t){return m.fromSeconds(t.startTime).toDate()>i.eventDate.toDate()})),t.next=2;break;case 10:return t.abrupt("return",r.sort(Wt).slice(0,e));case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),Jt={props:{title:{type:String,required:!0},n:{type:Number,default:10}},data:function(){return{events:[],items:this.n}},asyncData:{events:function(){return new Zt(new m).fetch(this.items).catch(function(t){reject(t)})}},computed:{done:function(){return this.items>this.events.length+this.n}},methods:{loadMore:function(){this.items=this.items+this.n,this.asyncReload("events")}},mixins:[o.AsyncDataMixin],components:{EventItem:tt,Spinner:Gt.a}},Kt=(n(362),Object(T.a)(Jt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col-lg-8 mx-auto text-center"},[n("h2",{staticClass:"section-heading text-white display-3"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t._m(0)])]),t._v(" "),t.eventsLoading?n("div",{staticClass:"row justify-content-center"},[n("spinner",{attrs:{"animation-duration":4e3,size:60,color:"#fff"}})],1):n("div",{staticClass:"row"},t._l(t.events,function(t,e){return n("event-item",{key:e,attrs:{event:t,side:e%2==0?"left":"right"}})}),1),t._v(" "),n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12 pt-5 pb-3 mb-5"},[n("a",{staticClass:"btn btn-light btn-md sr-button animated fadeInUp slower",class:t.done?"done":"",on:{click:t.loadMore}},[t._v("\n            Načíst další ...\n        ")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#events-anchor",id:"events-anchor"}},[e("i",{staticClass:"h2 fas fa-chevron-down text-white"})])}],!1,null,"0299a515",null));Kt.options.__file="TopNEvents.vue";var Qt=Kt.exports,Xt=new Zt(new m),te={asyncData:{event:function(){return Xt.fetch(1).then(function(t){return t.pop()})}},methods:{toDate:function(t){return m.fromSeconds(t).toDate()},toUrl:function(t){return t+"#content"}},mixins:[o.AsyncDataMixin]},ee=Object(T.a)(te,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.event?n("div",[n("h2",{staticClass:"font-weight-bold mt-3"},[n("a",{staticClass:"text-white",attrs:{href:t.toUrl(t.event.url)}},[t._v("\n      "+t._s(t.event.title)+"\n    ")])]),t._v(" "),n("span",{staticClass:"h3"},[t._v("\n    "+t._s(t._f("dateFormat")(t.toDate(t.event.startTime),"D. M. H:mm"))+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-3"},[t._v("\n    "+t._s(t.event.annotation)+"\n  ")]),t._v(" "),n("div",{staticClass:"mt-3"},[n("a",{staticClass:"btn btn-light btn-md sr-button",attrs:{href:t.toUrl(t.event.url)}},[t._v("\n      Více zde\n    ")])])]):t._e()},[],!1,null,null,null);ee.options.__file="NextEvent.vue";var ne=ee.exports;r.default.use(i.a,{formats:{title:"MMMM YYYY",weekdays:"W",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"L"},locale:"cs-CZ"}),r.default.use(a.a),r.default.use(l.a),r.default.mixin({data:function(){return{BASE_URL:BASE_URL,EVENT_CALENDAR:EVENT_CALENDAR,PHOTO_GALLERIES:PHOTO_GALLERIES}}}),new r.default({el:"#page-container",components:{Calendar:N,NextEvent:ne,SearchDialog:R,TopNEvents:Qt,Program:ut,PhotoGalleries:Rt,PhotoGalleryGrid:St,FilmClub:ht}})}});
//# sourceMappingURL=app.171b1978b435f23b4e77.js.map