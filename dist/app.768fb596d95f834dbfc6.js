!function(t){function e(e){for(var r,s,o=e[0],l=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(e);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={1:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/msuo-showcase/dist";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([495,0]),n()}({266:function(t,e,n){"use strict";var r=n(98);n.n(r).a},267:function(t,e,n){(t.exports=n(113)(!1)).push([t.i,".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter-active #program, .fade-leave-active #program {\n    transition: opacity 1s;\n}\n.fade-enter #program, .fade-leave-to #program {\n  opacity: 0;\n}\n",""])},290:function(t,e,n){"use strict";var r=n(99);n.n(r).a},291:function(t,e,n){(t.exports=n(113)(!1)).push([t.i,".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n",""])},495:function(t,e,n){"use strict";n.r(e);var r=n(34),a=n(208),i=n(209),s=n.n(i),o=n(210),l=n.n(o),u=n(10),c=n.n(u),f=n(11),d=n.n(f),v=function(){function t(e){c()(this,t),this.date=e||new Date}return d()(t,[{key:"toDate",value:function(){return this.date}},{key:"year",get:function(){return this.date.getFullYear()}},{key:"month",get:function(){return this.date.getMonth()+1}}],[{key:"fromSeconds",value:function(e){var n=new Date(1970,0,1);return n.setSeconds(e),new t(n)}}]),t}(),h={1:"Leden",2:"Únor",3:"Březen",4:"Duben",5:"Květen",6:"Červen",7:"Červenec",8:"Srpen",9:"Září",10:"Říjen",11:"Listopad",12:"Prosinec"},m=n(145),p=n.n(m),g=n(76),y=n.n(g),_={},b=function(t,e){return _[t]||(_[t]=e()),_[t]},C=n(211),E=n.n(C),w=function(){function t(){c()(this,t)}return d()(t,null,[{key:"relativeUrl",value:function(t){return E()(BASE_URL,{path:t})}}]),t}(),x=w.relativeUrl("/data/events"),k=w.relativeUrl("/program/film-club.json"),D=function(t,e){return b(t+"."+e,function(){return y.a.get(function(t,e){return[x,t,e,"/events.json"].join("/")}(t,e)).then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.url=w.relativeUrl(t.url),t})}).catch(function(t){console.warn(t)})})},j=function(){return y.a.get(k).then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.url=w.relativeUrl(t.url),t})}).catch(function(t){console.warn(t)})},S=function(){function t(){c()(this,t)}return d()(t,null,[{key:"createSingleEvent",value:function(t,e){return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"#ff8080",borderColor:"##ff8080",borderWidth:"2px",borderStyle:"solid"},customData:{event:t,start:e},dates:e}}},{key:"createLongEvent",value:function(t,e,n){var r=[{start:e,end:n}];return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"#ff165c",borderColor:"##ff8080",borderWidth:"2px",borderStyle:"solid"},customData:{event:t,start:e,end:n},dates:r}}},{key:"createEvent",value:function(e){var n=v.fromSeconds(e.startTime),r=e.endTime?v.fromSeconds(e.endTime):null;return r?t.createLongEvent(e,n.toDate(),r.toDate()):t.createSingleEvent(e,n.toDate())}}]),t}(),O=function(){function t(){c()(this,t)}return d()(t,null,[{key:"calendarEvent",value:function(t){return S.createEvent(t)}},{key:"get",value:function(e,n){return function(t,e){return EVENT_CALENDAR.filter(function(n){return n.year===t&&n.month===e}).length>0}(e,n)?D(e,n).then(function(e){return e?e.map(t.calendarEvent):[]}):p.a.resolve([])}}]),t}(),M=(n(260),{data:function(){return{events:[]}},computed:{attributes:function(){return[{contentStyle:{fontWeight:"800",color:"#66b3cc"},dates:new Date}].concat(l()(this.events))}},mounted:function(){this.$nextTick(function(){var t=new v;this.fetchEvents(t.year,t.month)})},methods:{pageChanged:function(t){this.fetchEvents(t.year,t.month)},fetchEvents:function(t,e){var n=this;return O.get(t,e).then(function(t){t&&t.forEach(function(t){n.events.push(t)})})},goToEvent:function(t){if(t.attributes&&t.attributes.length>0){var e=t.attributes[0].customData;window.location.href=this.buildEventUrl(e)}},buildEventUrl:function(t){return t.event.url+"#content"}}}),L=n(5),A=Object(L.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-calendar"},[n("v-calendar",{attrs:{attributes:t.attributes,"is-expanded":""},on:{"update:fromPage":t.pageChanged,"update:toPage":t.pageChanged},scopedSlots:t._u([{key:"event",fn:function(e){var r=e.customData;return n("div",{staticClass:"popover-row"},[n("span",{staticClass:"popover-content"},[n("a",{attrs:{href:t.buildEventUrl(r)}},[t._v(t._s(r.event.title))])]),t._v(" "),r.end?t._e():n("span",[t._v("(od: "+t._s(t._f("dateFormat")(r.start,"H:mm"))+")")])])}}])})],1)},[],!1,null,null,null);A.options.__file="Calendar.vue";var T=A.exports,I={data:function(){return{opened:!1}},mounted:function(){this.$nextTick(function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cse.google.com/cse.js?cx=012110265351671576307:em27sw6lj6g";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})},computed:{fieldStyle:function(){return{display:this.opened?"block":"none"}},buttonStyle:function(){return{display:this.opened?"none":"block"}}}},P=Object(L.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{style:t.fieldStyle},[t._m(0)]),t._v(" "),n("div",{staticClass:"p-3",style:t.buttonStyle},[n("div",{staticClass:"gsc-search-opener",on:{click:function(e){t.opened=!0}}},[t._m(1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"anim slideInUp"},[e("gcse:search",{pre:!0})],1)},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-outline-dark float-right",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-search fa-xs"})])}],!1,null,null,null);P.options.__file="GoogleSeach.vue";var N=P.exports,U=n(212),q=n.n(U),Y=n(213),R=n.n(Y),B={props:{title:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{classes:function(){return"left"===this.side?["justify-content-md-start"]:["justify-content-md-end"]},relativeUrl:function(){return this.url?w.relativeUrl(this.url):w.relativeUrl("/assets/img/theatre.png")}}},G=Object(L.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"img-wrap justify-content-sm-center",class:t.classes},[t.url?n("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:t.relativeUrl,alt:t.title,title:t.title}}):n("img",{staticClass:"img-fluid",attrs:{src:t.relativeUrl,alt:t.title,title:t.title}})])])},[],!1,null,null,null);G.options.__file="EventImage.vue";var H=G.exports,F={props:{title:{type:String,required:!0},start:{type:Number,required:!0},category:{type:String,required:!0},annotation:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{startDate:function(){return v.fromSeconds(this.start).toDate()},classes:function(){return"left"===this.side?["text-align-left"]:["text-align-right"]}}},V=Object(L.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"text-content mt-3"},[n("span",{staticClass:"event-title pt-2 h4 font-weight-bold",class:t.classes},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text pt-3",class:t.classes},[t._v("\n        "+t._s(t._f("dateFormat")(t.startDate,"D. M. H:mm"))+"\n        "),t.category?n("span",{staticClass:"badge badge-pill badge-secondary p-2 m-2"},[t._v("\n          "+t._s(t.category)+"\n        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text",class:t.classes},[t._v("\n        "+t._s(t.annotation)+"\n      ")])]),t._v(" "),n("div",{staticClass:"event-section-btn pt-3 pb-3",class:t.classes},[n("a",{staticClass:"btn btn-light btn-md sr-button",attrs:{href:t.url+"#content"}},[t._v("Detail")])])])])},[],!1,null,null,null);V.options.__file="EventContent.vue";var W=V.exports,J={props:{event:{type:Object,required:!0},side:{type:String,required:!0}},components:{EventImage:H,EventContent:W},computed:{classes:function(){return"left"===this.side?["flex-row"]:["flex-row-reverse"]}}},Z=Object(L.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row d-flex align-items-center event p-1 m-2 animated fadeInUp fast w-100",class:t.classes},[n("event-image",{attrs:{title:t.event.title,url:t.event.image,side:t.side}}),t._v(" "),n("event-content",{attrs:{title:t.event.title,annotation:t.event.annotation,url:t.event.url,category:t.event.category,start:t.event.startTime,side:t.side}})],1)},[],!1,null,null,null);Z.options.__file="EventItem.vue";var z=Z.exports,K={props:{events:{type:Array,required:!0}},components:{EventItem:z}},Q=Object(L.a)(K,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-4"},this._l(this.events,function(t,n){return e("event-item",{key:n,attrs:{event:t,side:n%2==0?"left":"right"}})}),1)},[],!1,null,null,null);Q.options.__file="EventList.vue";var X=Q.exports,tt={props:{index:{type:Array,required:!0},onChange:{type:Function,required:!1,default:function(){}}},data:function(){return{selected:(t=this.index,e=new v,n=t.filter(function(t){return t.year>=e.year&&t.month>=e.month}).reverse(),r=n.length&&n[0]||t.slice(-1)[0],[r.year,r.month].join("/"))};var t,e,n,r},computed:{options:function(){return this.index.reduce(function(t,e){return t[e.year]||(t[e.year]=[]),t[e.year].push({id:e.month,label:h[e.month]}),t},{})}},mounted:function(){this.onChange(this.selected)},watch:{selected:function(t){this.onChange(t)}}},et=Object(L.a)(tt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"mb-3 form-control custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},t._l(Object.keys(t.options).reverse(),function(e){return n("optgroup",{attrs:{label:e}},t._l(t.options[e],function(r){return n("option",{domProps:{value:e+"/"+r.id}},[t._v("\n      "+t._s(r.label)+"\n    ")])}),0)}),0)},[],!1,null,null,null);et.options.__file="DateSelect.vue";var nt=et.exports,rt=new(function(){function t(){c()(this,t)}return d()(t,[{key:"fetch",value:function(t){var e=t.split("/"),n={month:e[1],year:e[0]};return D(n.year,n.month)}}]),t}()),at={data:function(){return{selected:"",events:{}}},methods:{selectDate:function(t){var e=this;this.selected=t,rt.fetch(t).then(function(n){e.events=R()({},e.events,q()({},t,n))})}},components:{DateSelect:nt,EventList:X}},it=(n(266),Object(L.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("date-select",{attrs:{index:t.EVENT_CALENDAR,"on-change":t.selectDate}})],1),t._v(" "),t._l(t.events,function(e,r){return n("div",{staticClass:"row animated fadeIn slow"},[n("transition",{attrs:{name:"fade"}},[t.selected===r?n("event-list",{attrs:{events:e}}):t._e()],1)],1)})],2)},[],!1,null,null,null));it.options.__file="Program.vue";var st=it.exports,ot=n(100),lt=new(function(){function t(){c()(this,t)}return d()(t,[{key:"fetch",value:function(){return j().then(function(t){return t.filter(function(t){return new v(t.startTime).toDate()>=new Date})})}}]),t}()),ut={asyncData:{events:function(){return lt.fetch()}},mixins:[ot.AsyncDataMixin],components:{EventList:X}},ct=Object(L.a)(ut,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row animated fadeIn slow"},[e("transition",{attrs:{name:"fade"}},[e("event-list",{attrs:{events:this.events}})],1)],1)])},[],!1,null,null,null);ct.options.__file="FilmClub.vue";var ft=ct.exports,dt=n(214),vt=n.n(dt),ht=n(57),mt=n.n(ht),pt=n(146),gt=n.n(pt),yt=function(){function t(e,n){c()(this,t),this.el=e,this.column=n,this.columnNumber=n.attr("data-column")}return d()(t,[{key:"height",get:function(){return this.el.height()}},{key:"source",get:function(){return this.el.attr("src")}}]),t}(),_t=function(){function t(e){c()(this,t),this.items=e||[]}return d()(t,[{key:"copy",value:function(){return new t(this.items.slice())}},{key:"push",value:function(t){this.items.push(t)}},{key:"pop",value:function(){return this.items.pop()}},{key:"sources",get:function(){return this.items.map(function(t){return t.source})}},{key:"height",get:function(){return this.items.reduce(function(t,e){return t+e.height},0)}},{key:"maxItemHeight",get:function(){return this.items.reduce(function(t,e){return Math.max(t,e.height)},0)}},{key:"minItemHeight",get:function(){return this.items.reduce(function(t,e){return Math.min(t,e.height)},0)}}]),t}(),bt=function(){function t(e){c()(this,t),this.columns=e}return d()(t,[{key:"copy",value:function(){var e=this;return new t(mt()(this.columns).reduce(function(t,n){return t[n]=e.columns[n].copy(),t},{}))}},{key:"adjustColumns",value:function(){var t=this.copy(),e=t.computeMinMax(),n=e.min,r=e.max;return n.column.push(r.column.pop()),t}},{key:"computeMinMax",value:function(){var t=this.computeHeights();return{min:t.shift(),max:t.pop()}}},{key:"diff",value:function(){var t=this.computeHeights(),e=t.shift();return t.pop().column.height-e.column.height}},{key:"computeHeights",value:function(){var t=this;return mt()(this.columns).map(function(e){return{column:t.columns[e],height:t.columns[e].height}}).sort(function(t,e){return t.height-e.height})}},{key:"column",value:function(t){return this.columns[t]}}]),t}(),Ct=function(){function t(e){c()(this,t),this.grid=new bt(e)}return d()(t,[{key:"adjustColumns",value:function(){for(var e=this.grid,n=e.adjustColumns();e.diff()>n.diff();)n=(e=n).adjustColumns();return new t(e.columns)}},{key:"columnImages",get:function(){var t=this.grid.columns;return mt()(t).reduce(function(e,n){return e[n]=t[n].sources,e},{})}}],[{key:"create",value:function(e){return new t(function(t){return mt()(t).reduce(function(e,n){var r=t[n],a=r.columnNumber;return e[a]=e[a]||new _t,e[a].push(r),e},{})}(function(t){return mt()(t).reduce(function(e,n){e[n]=e[n]||{};var r=gt()(t[n].slice().pop()),a=gt()(r.parents(".gallery-column"));return e[n]=new yt(r,a),e},{})}(e)))}}]),t}(),Et=function(t){var e={},n=0;do{var r=t.pop(),a="c"+n%3;(e[a]||(e[a]=[])).push(w.relativeUrl(r)),n++}while(t.length);return e},wt={props:{gallery:{type:Object,required:!0}},data:function(){return{columns:Et(this.gallery.photos.slice()),gridAdjusted:!1}},methods:{loaded:function(){if(!this.gridAdjusted){this.gridAdjusted=!0;var t=Ct.create(this.$refs).adjustColumns().columnImages;this.columns=t}}},directives:{imagesLoaded:vt.a,gallery:function(t){$(t).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}}},xt=Object(L.a)(wt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5"},[n("div",{staticClass:"d-flex align-content-center"},[n("span",{staticClass:"h4 text-primary"},[t._v("\n      "+t._s(t.gallery.title)+"\n      "),t.gallery.author?n("span",{staticClass:"small text-dark"},[t._v("(autor: "+t._s(t.gallery.author)+")")]):t._e()]),t._v(" "),n("span",{staticClass:"badge badge-pill badge-secondary p-2 m-2 ml-auto align-self-center"},[t._v("\n      "+t._s(t._f("dateFormat")(new Date(t.gallery.date),"D. M."))+"\n    ")])]),t._v(" "),n("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:t.loaded,expression:"loaded"},{name:"gallery",rawName:"v-gallery"}],staticClass:"d-flex no-gutters popup-gallery"},t._l(t.columns,function(e,r){return n("div",{key:r,staticClass:"d-flex flex-column gallery-column",attrs:{"data-column":r}},t._l(e,function(e){return n("div",{staticClass:"p-1"},[n("a",{staticClass:"gallery-box",attrs:{href:e}},[n("img",{ref:e,refInFor:!0,staticClass:"img-fluid",attrs:{alt:t.gallery.title,src:e}})])])}),0)}),0)])},[],!1,null,null,null);xt.options.__file="PhotoGallery.vue";var kt=xt.exports,Dt={props:{galleries:{type:Array,required:!0}},components:{PhotoGallery:kt}},jt=Object(L.a)(Dt,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},this._l(this.galleries,function(t,n){return e("photo-gallery",{key:n,attrs:{gallery:t}})}),1)},[],!1,null,null,null);jt.options.__file="PhotoGalleryList.vue";var St=jt.exports,Ot=w.relativeUrl("/data/galleries"),Mt=function(t,e){return b(t+"."+e,function(){return y.a.get(function(t,e){return[Ot,t,e,"galleries.json"].join("/")}(t,e)).then(function(t){return t.data}).catch(function(t){console.warn(t)})})},Lt=new(function(){function t(){c()(this,t)}return d()(t,[{key:"fetch",value:function(t){var e=t.split("/"),n={month:e[1],year:e[0]};return Mt(n.year,n.month)}}]),t}()),At={data:function(){return{selected:"",galleries:{}}},methods:{selectDate:function(t){var e=this;this.selected=t,Lt.fetch(t).then(function(n){e.$set(e.galleries,t,n)})}},components:{DateSelect:nt,PhotoGalleryList:St}},Tt=(n(290),Object(L.a)(At,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("date-select",{attrs:{index:t.PHOTO_GALLERIES,"on-change":t.selectDate}})],1),t._v(" "),t._l(t.galleries,function(e,r){return n("div",{key:r,staticClass:"row animated fadeIn slow mt-3"},[n("transition",{attrs:{name:"fade"}},[t.selected===r?n("photo-gallery-list",{attrs:{galleries:e}}):t._e()],1)],1)})],2)},[],!1,null,null,null));Tt.options.__file="PhotoGalleries.vue";var It=Tt.exports,Pt=n(147),Nt=n.n(Pt),Ut=n(215),$t=n.n(Ut),qt=EVENT_CALENDAR.sort(function(t,e){return new Date(t.year,t.month-1)-new Date(e.year,e.month-1)}).reverse(),Yt=function(t,e){return new Date(t.startTime)-new Date(e.startTime)},Rt=function(){function t(e){c()(this,t),this.eventDate=e,this.futureEvents=qt.filter(function(t){return t.year>=e.year&&t.month>=e.month})}return d()(t,[{key:"fetch",value:function(){var t=$t()(Nt.a.mark(function t(e){var n,r,a,i,s=this;return Nt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=this.futureEvents,r=[];case 2:if(!(r.length<e&&n.length)){t.next=10;break}return a=n.pop(),t.next=6,D(a.year,a.month);case 6:i=t.sent,r=r.concat(i.filter(function(t){return v.fromSeconds(t.startTime).toDate()>s.eventDate.toDate()})),t.next=2;break;case 10:return t.abrupt("return",r.sort(Yt).slice(0,e));case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),Bt={props:{title:{type:String,required:!0},n:{type:Number,default:10}},data:function(){return{events:[],items:this.n}},asyncData:{events:function(){return new Rt(new v).fetch(this.items).catch(function(t){reject(t)})}},methods:{loadMore:function(){this.items=this.items+this.n,this.asyncReload("events")}},mixins:[ot.AsyncDataMixin],components:{EventItem:z}},Gt=Object(L.a)(Bt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col-lg-8 mx-auto text-center"},[n("h2",{staticClass:"section-heading text-white display-3"},[t._v("\n          "+t._s(t.title)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.events,function(t,e){return n("event-item",{key:e,attrs:{event:t,side:e%2==0?"left":"right"}})}),1),t._v(" "),n("div",{staticClass:"row text-center"},[n("div",{staticClass:"col-12 pt-5 pb-3 mb-5"},[n("a",{staticClass:"btn btn-light btn-md sr-button animated fadeInUp slower",on:{click:t.loadMore}},[t._v("\n          Načíst další ...\n        ")])])])])])},[],!1,null,null,null);Gt.options.__file="TopNEvents.vue";var Ht=Gt.exports;r.default.use(s.a,{formats:{title:"MMMM YYYY",weekdays:"W",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"L"},locale:"cs-CZ"}),r.default.use(a.a),r.default.mixin({data:function(){return{BASE_URL:BASE_URL,EVENT_CALENDAR:EVENT_CALENDAR,PHOTO_GALLERIES:PHOTO_GALLERIES}}}),new r.default({el:"#header",components:{Calendar:T,GSearch:N}}),document.getElementById("top-n")&&new r.default({el:"#top-n",components:{TopNEvents:Ht}}),document.getElementById("program")&&new r.default({el:"#program",components:{Program:st}}),document.getElementById("photo-gallery")&&new r.default({el:"#photo-gallery",components:{PhotoGalleries:It}}),document.getElementById("film-club")&&new r.default({el:"#film-club",components:{FilmClub:ft}})},98:function(t,e,n){var r=n(267);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(144).default)("239f261a",r,!0,{})},99:function(t,e,n){var r=n(291);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(144).default)("45699748",r,!0,{})}});
//# sourceMappingURL=app.768fb596d95f834dbfc6.js.map