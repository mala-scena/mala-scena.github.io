!function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)i=o[d],s[i]&&v.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);v.length;)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={1:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/msuo-showcase/dist";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([482,0]),n()}({482:function(t,e,n){"use strict";n.r(e);var r=n(63),s=n(199),a=n(200),i=n.n(a),o=n(201),l=n.n(o),c=n(54),u=n.n(c),d=n(55),v=n.n(d),f=function(){function t(e){u()(this,t),this.date=e||new Date}return v()(t,[{key:"toDate",value:function(){return this.date}},{key:"year",get:function(){return this.date.getFullYear()}},{key:"month",get:function(){return this.date.getMonth()+1}}]),t}(),p=n(138),h=n.n(p),m=n(202),g=n.n(m),y={},b=n(74),_=n.n(b),E=BASE_URL+"/data/events/",w=function(t,e){return r=function(){return g.a.get(function(t,e){return E+t+"/"+e+"/events.json"}(t,e)).then(function(t){return t.data}).then(function(t){return t.map(function(t){return t.url=BASE_URL+t.url,t})}).catch(function(t){console.warn(t)})},y[n=t+"."+e]||(y[n]=r()),y[n];var n,r},C=function(){function t(){u()(this,t)}return v()(t,null,[{key:"createSingleEvent",value:function(t,e){return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"#ff8080",borderColor:"##ff8080",borderWidth:"2px",borderStyle:"solid"},customData:{event:t,start:e},dates:e}}},{key:"createLongEvent",value:function(t,e,n){var r=[{start:e,end:n}];return{popover:{label:t.title,slot:"event"},highlight:{backgroundColor:"#ff165c",borderColor:"##ff8080",borderWidth:"2px",borderStyle:"solid"},customData:{event:t,start:e,end:n},dates:r}}},{key:"createEvent",value:function(e){var n=new Date(e.startTime),r=e.endTime?new Date(e.endTime):null;return r?t.createLongEvent(e,n,r):t.createSingleEvent(e,n)}}]),t}(),x=function(){function t(){u()(this,t)}return v()(t,null,[{key:"calendarEvent",value:function(t){return C.createEvent(t)}},{key:"get",value:function(e,n){return function(t,e){return EVENT_CALENDAR.filter(function(n){return n.year===t&&n.month===e}).length>0}(e,n)?w(e,n).then(function(e){return e?e.map(t.calendarEvent):[]}):h.a.resolve([])}}]),t}(),S=(n(253),{data:function(){return{events:[]}},computed:{attributes:function(){return[{contentStyle:{fontWeight:"800",color:"#66b3cc"},dates:new Date}].concat(l()(this.events))}},mounted:function(){this.$nextTick(function(){var t=new f;this.fetchEvents(t.year,t.month)})},methods:{pageChanged:function(t){this.fetchEvents(t.year,t.month)},fetchEvents:function(t,e){var n=this;return x.get(t,e).then(function(t){t&&t.forEach(function(t){n.events.push(t)})})},goToEvent:function(t){if(t.attributes&&t.attributes.length>0){var e=t.attributes[0].customData;window.location.href=this.buildEventUrl(e)}},buildEventUrl:function(t){return BASE_URL+t.event.url+"#content"}}}),D=n(13),j=Object(D.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-calendar"},[n("v-calendar",{attrs:{attributes:t.attributes,"is-expanded":""},on:{"update:fromPage":t.pageChanged,"update:toPage":t.pageChanged,dayclick:t.goToEvent},scopedSlots:t._u([{key:"event",fn:function(e){var r=e.customData;return n("div",{staticClass:"popover-row"},[n("span",{staticClass:"popover-content"},[n("a",{attrs:{href:t.buildEventUrl(r)}},[t._v(t._s(r.event.title))])]),t._v(" "),r.end?t._e():n("span",[t._v("(od: "+t._s(t._f("dateFormat")(r.start,"H:mm"))+")")])])}}])})],1)},[],!1,null,null,null);j.options.__file="Calendar.vue";var k=j.exports,M={data:function(){return{opened:!1}},mounted:function(){this.$nextTick(function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cse.google.com/cse.js?cx=012110265351671576307:em27sw6lj6g";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})},computed:{fieldStyle:function(){return{display:this.opened?"block":"none"}},buttonStyle:function(){return{display:this.opened?"none":"block"}}}},O=Object(D.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{style:t.fieldStyle},[t._m(0)]),t._v(" "),n("div",{staticClass:"p-3",style:t.buttonStyle},[n("div",{staticClass:"gsc-search-opener",on:{click:function(e){t.opened=!0}}},[t._m(1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"anim slideInUp"},[e("gcse:search",{pre:!0})],1)},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-light btn-outline-dark float-right",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-search fa-xs"})])}],!1,null,null,null);O.options.__file="GoogleSeach.vue";var T=O.exports,Y=n(203),q=n(139),I=n.n(q),L=n(204),N=n.n(L),P=EVENT_CALENDAR.sort(function(t,e){return new Date(t.year,t.month-1)-new Date(e.year,e.month-1)}).reverse(),$=function(t,e){return new Date(t.startTime)-new Date(e.startTime)},A=function(){function t(e){u()(this,t),this.eventDate=e,this.futureEvents=P.filter(function(t){return t.year>=e.year&&t.month>=e.month})}return v()(t,[{key:"fetch",value:function(){var t=N()(I.a.mark(function t(e){var n,r,s,a,i=this;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=this.futureEvents,r=[];case 2:if(!(r.length<e&&n.length)){t.next=10;break}return s=n.pop(),t.next=6,w(s.year,s.month);case 6:a=t.sent,r=r.concat(a.filter(function(t){return new Date(t.startTime)>i.eventDate.toDate()})),t.next=2;break;case 10:return t.abrupt("return",r.sort($).slice(0,e));case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),U={props:{title:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{classes:function(){return"left"===this.side?["justify-content-md-start"]:["justify-content-md-end"]}}},B=Object(D.a)(U,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 col-sm-12"},[e("div",{staticClass:"img-wrap justify-content-sm-center",class:this.classes},[e("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:this.url,alt:this.title,title:this.title}})])])},[],!1,null,null,null);B.options.__file="EventImage.vue";var R=B.exports,W={props:{title:{type:String,required:!0},start:{type:String,required:!0},category:{type:String,required:!0},annotation:{type:String,required:!0},url:{type:String,required:!0},side:{type:String,required:!0}},computed:{classes:function(){return"left"===this.side?["text-align-left"]:["text-align-right"]}}},F=Object(D.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"text-content"},[n("h2",{staticClass:"event-title pt-2",class:t.classes},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text pt-3",class:t.classes},[t._v("\n        "+t._s(t._f("dateFormat")(new Date(t.start),"D. M. H:mm"))+"\n        "),n("span",{staticClass:"badge badge-pill badge-secondary p-2 m-2"},[t._v("\n          "+t._s(t.category)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"event-section-text"},[n("p",{staticClass:"event-text pt-3",class:t.classes},[t._v("\n        "+t._s(t.annotation)+"\n      ")])]),t._v(" "),n("div",{staticClass:"event-section-btn pt-3 pb-3",class:t.classes},[n("a",{staticClass:"btn btn-light btn-md sr-button",attrs:{href:t.url+"#content"}},[t._v("Více")])])])])},[],!1,null,null,null);F.options.__file="EventContent.vue";var V=F.exports,G={props:{event:{type:Object,required:!0},side:{type:String,required:!0}},components:{EventImage:R,EventContent:V},computed:{classes:function(){return"left"===this.side?["flex-row"]:["flex-row-reverse"]}}},H=Object(D.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row d-flex align-items-center event p-1 m-2 animated fadeInUp fast",class:t.classes},[n("event-image",{attrs:{title:t.event.title,url:t.event.image,side:t.side}}),t._v(" "),n("event-content",{attrs:{title:t.event.title,annotation:t.event.annotation,url:t.event.url,category:t.event.category,start:t.event.startTime,side:t.side}})],1)},[],!1,null,null,null);H.options.__file="EventItem.vue";var J=H.exports,Z={mixins:[Y.AsyncDataMixin],props:{title:{type:String,required:!0},n:{type:Number,default:10}},components:{EventItem:J},data:function(){return{events:[],items:this.n}},asyncData:{events:function(){return new A(new f).fetch(this.items).catch(function(t){reject(t)})}},methods:{loadMore:function(){this.items=this.items+this.n,this.asyncReload("events")}}},z=Object(D.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"col-lg-8 mx-auto text-center"},[n("h2",{staticClass:"section-heading text-white display-3"},[t._v("\n          "+t._s(t.title)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.events,function(t,e){return n("event-item",{key:e,attrs:{event:t,side:e%2==0?"left":"right"}})}),1),t._v(" "),n("div",{staticClass:"row text-center"},[n("div",{staticClass:"pt-5 pb-3 col-12"},[n("a",{staticClass:"btn btn-light btn-md sr-button animated fadeInUp slower",on:{click:t.loadMore}},[t._v("\n          Načíst další ...\n        ")])])])])])},[],!1,null,null,null);z.options.__file="TopNEvents.vue";var K=z.exports,Q={1:"Leden",2:"Únor",3:"Březen",4:"Duben",5:"Květen",6:"Červen",7:"Červenec",8:"Srpen",9:"Září",10:"Říjen",11:"Listopad",12:"Prosinec"},X={props:["eventsIndex"],data:function(){return{selected:null}},created:function(){var t=_()(window.location.href).pathname.split("/").filter(function(t){return!!t}).slice(-2);this.selected=t.join("/")},computed:{options:function(){return this.eventsIndex.reduce(function(t,e){return t[e.year]||(t[e.year]=[]),t[e.year].push({id:e.month,label:Q[e.month]}),t},{})}},methods:{redirect:function(){var t=_()(window.location.href).pathname.split("/").filter(function(t){return!!t}).slice(0,-2);t.push(this.selected),window.location.href="/"+t.join("/")+"#content"}}},tt=Object(D.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"mb-3 form-control custom-select",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]},t.redirect]}},t._l(Object.keys(t.options).reverse(),function(e){return n("optgroup",{attrs:{label:e}},t._l(t.options[e],function(r){return n("option",{domProps:{value:e+"/"+r.id}},[t._v("\n      "+t._s(r.label)+"\n    ")])}),0)}),0)},[],!1,null,null,null);tt.options.__file="EventsDateSelect.vue";var et=tt.exports;r.a.use(i.a,{formats:{title:"MMMM YYYY",weekdays:"W",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"L"},locale:"cs-CZ"}),r.a.use(s.a),new r.a({el:"#header",components:{Calendar:k,GSearch:T}}),document.getElementById("spa")&&new r.a({el:"#spa",components:{TopNEvents:K}}),document.getElementById("eventsDateSelect")&&new r.a({el:"#eventsDateSelect",components:{EventsDateSelect:et}})}});
//# sourceMappingURL=app.910fec92d5577900094a.js.map