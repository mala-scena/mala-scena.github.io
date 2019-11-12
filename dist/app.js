/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/values */ "./node_modules/babel-runtime/core-js/object/values.js");
/* harmony import */ var babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EventDate */ "./src/utils/EventDate.js");
/* harmony import */ var _CalendarBean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalendarBean */ "./src/components/CalendarBean.js");
/* harmony import */ var v_calendar_lib_v_calendar_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! v-calendar/lib/v-calendar.min.css */ "./node_modules/v-calendar/lib/v-calendar.min.css");
/* harmony import */ var v_calendar_lib_v_calendar_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(v_calendar_lib_v_calendar_min_css__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var eventsByDate = function eventsByDate(a, b) {
  return b.customData.start.getTime() - a.customData.start.getTime();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: {}
    };
  },

  computed: {
    attributes: function attributes() {
      return [
      // Today
      {
        contentStyle: {
          fontWeight: '800',
          color: '#114bad',
          borderColor: '#000',
          borderWidth: '2px',
          borderStyle: 'solid'
        },
        dates: new Date()
      }].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(this.events).sort(eventsByDate)));
    }
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      var now = new _utils_EventDate__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.fetchEvents(now.year, now.month);
    });
  },

  methods: {
    pageChanged: function pageChanged(page) {
      this.fetchEvents(page.year, page.month);
    },
    fetchEvents: function fetchEvents(year, month) {
      var _this = this;

      return _CalendarBean__WEBPACK_IMPORTED_MODULE_3__["default"].get(year, month).then(function (events) {
        if (events) {
          events.forEach(function (eventItem) {
            var start = eventItem.customData.event.start;
            var isLong = eventItem.dates.constructor === Array;
            var appendix = isLong ? ' L' : '';
            _this.$set(_this.events, start.date + ' ' + start.time + appendix, eventItem);
          });
        }
      });
    },
    goToEvent: function goToEvent(day) {
      if (day.attributes && day.attributes.length > 0) {
        var data = day.attributes[0].customData;
        window.location.href = this.buildEventUrl(data);
      }
    },
    buildEventUrl: function buildEventUrl(data) {
      return data.event.url + "#content";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DateSelect.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelect.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventDate */ "./src/utils/EventDate.js");
//
//
//
//
//
//
//
//
//
//
//
//




var defaultSelected = function defaultSelected(index) {
  var eventDate = new _utils_EventDate__WEBPACK_IMPORTED_MODULE_0__["default"]();

  var future = index.filter(function (value) {
    return value.year >= eventDate.year && value.month >= eventDate.month;
  }).reverse();

  var selected = future.length && future[0] || index.slice(-1)[0];

  return selected ? [selected.year, selected.month].join("/") : null;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    index: {
      type: Array,
      required: true
    },
    onChange: {
      type: Function,
      required: false,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      selected: defaultSelected(this.index)
    };
  },

  computed: {
    options: function options() {
      return this.index
      /*.sort((a, b) => {
        if ((a.year - b.year) === 0) {
          return a.month - b.month;
        } else {
          return b.year - a.year
        }
      })*/
      .reduce(function (result, event) {
        if (!result[event.year]) {
          result[event.year] = [];
        }

        result[event.year].push({
          id: event.month,
          label: _utils_EventDate__WEBPACK_IMPORTED_MODULE_0__["MONTH_LABELS"][event.month]
        });
        return result;
      }, {});
    }
  },
  mounted: function mounted() {
    this.onChange(this.selected);
  },

  watch: {
    selected: function selected(newValue) {
      this.onChange(newValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SeachDialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_SearchContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/SearchContainer */ "./src/components/search/SearchContainer.vue");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            opened: false
        };
    },

    computed: {
        showStyle: function showStyle() {
            return {
                show: this.opened
            };
        }
    },
    created: function created() {
        var _this = this;

        document.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                _this.close();
            }
        });
        this.$root.$on("openSearchDialog", function () {
            _this.$nextTick(function () {
                _this.opened = true;
            });
        });
    },

    methods: {
        close: function close() {
            this.opened = false;
        }
    },
    components: {
        SearchContainer: _search_SearchContainer__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_1__["mixin"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/EventDate */ "./src/utils/EventDate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    start: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    annotation: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    side: {
      type: String,
      required: true
    }
  },
  computed: {
    eventUrl: function eventUrl() {
      return this.url + '#content';
    },
    startDate: function startDate() {
      return _utils_EventDate__WEBPACK_IMPORTED_MODULE_0__["default"].fromDate(this.start).toDate();
    },
    classes: function classes() {
      return this.side === 'left' ? ['text-align-left'] : ['text-align-right'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgGTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ImgGTag */ "./src/components/ImgGTag.js");
//
//
//
//
//
//
//
//
//
//
//
//



var DEFAULT_IMAGE = 'assets/img/theatre.png';

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    side: {
      type: String,
      required: true
    }
  },
  computed: {
    fallbackUrl: function fallbackUrl() {
      return BASE_URL + '/' + DEFAULT_IMAGE;
    },
    classes: function classes() {
      return this.side === 'left' ? ['justify-content-md-start'] : ['justify-content-md-end'];
    }
  },
  directives: {
    gTag: _ImgGTag__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventImage */ "./src/components/events/EventImage.vue");
/* harmony import */ var _EventContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventContent */ "./src/components/events/EventContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    event: {
      type: Object,
      required: true
    },
    side: {
      type: String,
      required: true
    }
  },
  components: {
    EventImage: _EventImage__WEBPACK_IMPORTED_MODULE_0__["default"],
    EventContent: _EventContent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    classes: function classes() {
      return this.side === 'left' ? ['flex-row'] : ['flex-row-reverse'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/EventList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/EventList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventItem */ "./src/components/events/EventItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  components: {
    EventItem: _EventItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/FilmClub.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/FilmClub.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-async-data-2 */ "./node_modules/vue-async-data-2/src/main.es5.js");
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _program_EventList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../program/EventList */ "./src/components/events/program/EventList.vue");
/* harmony import */ var _FilmClubBean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilmClubBean */ "./src/components/events/program/FilmClubBean.js");
//
//
//
//
//
//
//
//
//
//
//






var filmClubBean = new _FilmClubBean__WEBPACK_IMPORTED_MODULE_2__["default"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  asyncData: {
    events: function events() {
      return filmClubBean.fetch();
    }
  },
  mixins: [vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__["AsyncDataMixin"]],
  components: {
    EventList: _program_EventList__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/Program.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_program_EventList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/program/EventList */ "./src/components/events/program/EventList.vue");
/* harmony import */ var _DateSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DateSelect */ "./src/components/DateSelect.vue");
/* harmony import */ var _ProgramBean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgramBean */ "./src/components/events/program/ProgramBean.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var programBean = new _ProgramBean__WEBPACK_IMPORTED_MODULE_4__["default"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selected: '',
      events: {}
    };
  },

  methods: {
    selectDate: function selectDate(date) {
      var _this = this;

      this.selected = date;
      programBean.fetch(date).then(function (events) {
        _this.events = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.events, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, date, events));
      });
    }
  },
  components: {
    DateSelect: _DateSelect__WEBPACK_IMPORTED_MODULE_3__["default"],
    EventList: _events_program_EventList__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-async-data-2 */ "./node_modules/vue-async-data-2/src/main.es5.js");
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/EventDate */ "./src/utils/EventDate.js");
/* harmony import */ var _TopNEventsBean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNEventsBean */ "./src/components/events/topn/TopNEventsBean.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var topNEventsBean = new _TopNEventsBean__WEBPACK_IMPORTED_MODULE_2__["default"](new _utils_EventDate__WEBPACK_IMPORTED_MODULE_1__["default"]());

/* harmony default export */ __webpack_exports__["default"] = ({
  asyncData: {
    event: function event() {
      return topNEventsBean.fetch(1).then(function (events) {
        return events.pop();
      });
    }
  },
  computed: {
    eventStartDate: function eventStartDate() {
      return _utils_EventDate__WEBPACK_IMPORTED_MODULE_1__["default"].fromDate(this.event.start).toDate();
    }
  },
  methods: {
    toUrl: function toUrl(url) {
      return url + '#content';
    }
  },
  mixins: [vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__["AsyncDataMixin"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-async-data-2 */ "./node_modules/vue-async-data-2/src/main.es5.js");
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopNEventsBean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNEventsBean */ "./src/components/events/topn/TopNEventsBean.js");
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EventItem */ "./src/components/events/EventItem.vue");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/EventDate */ "./src/utils/EventDate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    n: {
      type: Number,
      default: 10
    }
  },
  data: function data() {
    return {
      events: [],
      items: this.n
    };
  },

  asyncData: {
    events: function events() {
      return new _TopNEventsBean__WEBPACK_IMPORTED_MODULE_1__["default"](new _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"]()).fetch(this.items).catch(function (e) {
        reject(e);
      });
    }
  },
  computed: {
    done: function done() {
      return this.items > this.events.length + this.n;
    }
  },
  methods: {
    loadMore: function loadMore() {
      this.items = this.items + this.n;
      this.asyncReload('events');
    }
  },
  mixins: [vue_async_data_2__WEBPACK_IMPORTED_MODULE_0__["AsyncDataMixin"]],
  components: {
    EventItem: _EventItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DateSelect */ "./src/components/DateSelect.vue");
/* harmony import */ var _PhotoGalleryList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGalleryList */ "./src/components/photos/PhotoGalleryList.vue");
/* harmony import */ var _PhotoGalleriesBean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoGalleriesBean */ "./src/components/photos/PhotoGalleriesBean.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var photoGalleriesBean = new _PhotoGalleriesBean__WEBPACK_IMPORTED_MODULE_2__["default"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selected: '',
      galleries: {}
    };
  },

  methods: {
    selectDate: function selectDate(date) {
      var _this = this;

      this.selected = date;
      photoGalleriesBean.fetch(date).then(function (galleries) {
        _this.$set(_this.galleries, date, galleries);
      });
    }
  },
  components: {
    DateSelect: _DateSelect__WEBPACK_IMPORTED_MODULE_0__["default"],
    PhotoGalleryList: _PhotoGalleryList__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGalleryGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGalleryGrid */ "./src/components/photos/PhotoGalleryGrid.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    gallery: {
      type: Object,
      required: true
    }
  },
  methods: {
    parseDate: function parseDate(str) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(str, 'YYYY-MM-DD');
    }
  },
  components: {
    PhotoGalleryGrid: _PhotoGalleryGrid__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_images_loaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-images-loaded */ "./node_modules/vue-images-loaded/dist/vueimagesloaded.js");
/* harmony import */ var vue_images_loaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_images_loaded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PhotoGalleryGridBean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGalleryGridBean */ "./src/components/photos/PhotoGalleryGridBean.js");
/* harmony import */ var _ImgGTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImgGTag */ "./src/components/ImgGTag.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var COLUMNS_NUM = 3;

var splitColumns = function splitColumns(photos) {
  var result = {};
  if (photos.length) {
    var i = 0;
    do {
      var photo = photos.pop();
      var index = 'c' + i % COLUMNS_NUM;
      (result[index] || (result[index] = [])).push(photo);
      i++;
    } while (photos.length);
  }
  return result;
};

var gallery = function gallery(el) {
  $(el).magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      columns: splitColumns(this.photos.slice()),
      gridAdjusted: false
    };
  },

  methods: {
    loaded: function loaded() {
      if (!this.gridAdjusted) {
        this.gridAdjusted = true;

        var grid = _PhotoGalleryGridBean__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.$refs).adjustColumns();
        var columns = grid.columnImages;

        this.columns = columns;
      }
    }
  },
  directives: {
    imagesLoaded: vue_images_loaded__WEBPACK_IMPORTED_MODULE_0___default.a,
    gallery: gallery,
    gTag: _ImgGTag__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGallery */ "./src/components/photos/PhotoGallery.vue");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    galleries: {
      type: Array,
      required: true
    }
  },
  components: {
    PhotoGallery: _PhotoGallery__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/reservation/Reservation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/reservation/Reservation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_async_computed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-async-computed */ "./node_modules/vue-async-computed/dist/vue-async-computed.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-bootstrap-typeahead */ "./node_modules/vue-bootstrap-typeahead/src/components/VueBootstrapTypeahead.vue");
/* harmony import */ var _clients_eventsClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../clients/eventsClient */ "./src/clients/eventsClient.js");
/* harmony import */ var _clients_mailClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../clients/mailClient */ "./src/clients/mailClient.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/EventDate */ "./src/utils/EventDate.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var eventsByDate = function eventsByDate(a, b) {
  return _utils_EventDate__WEBPACK_IMPORTED_MODULE_11__["default"].fromDate(a.start).toDate() - _utils_EventDate__WEBPACK_IMPORTED_MODULE_11__["default"].fromDate(b.start).toDate();
};

vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_async_computed__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchText: null,
      form: {
        item: null,
        event: null,
        amount: 1,
        date: null,
        email: null,
        name: null
      },
      alerts: {
        success: {
          dismissSecs: 15,
          dismissCountDown: 0
        },
        error: {
          dismissSecs: 10,
          dismissCountDown: 0
        },
        progress: {
          dismissSecs: 3,
          dismissCountDown: 0
        }
      },
      disabled: false
    };
  },

  computed: {
    nextEvents: function nextEvents() {
      var now = new Date();
      return this.events.filter(function (e) {
        return _utils_EventDate__WEBPACK_IMPORTED_MODULE_11__["default"].fromDate(e.start).toDate() - now > 0;
      }).sort(eventsByDate).slice(0, 5);
    }
  },
  asyncComputed: {
    events: {
      get: function get() {
        var _this = this;

        return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var threshold, events;
          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  threshold = moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf('day');
                  _context.next = 3;
                  return _clients_eventsClient__WEBPACK_IMPORTED_MODULE_9__["default"].getReservations();

                case 3:
                  events = _context.sent;
                  return _context.abrupt('return', events.filter(function (e) {
                    var date = moment__WEBPACK_IMPORTED_MODULE_2___default()(_utils_EventDate__WEBPACK_IMPORTED_MODULE_11__["default"].fromDate(e.start).toDate());
                    return date.isAfter(threshold);
                  }));

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.disabled = true;
      this.showProgress();

      _clients_mailClient__WEBPACK_IMPORTED_MODULE_10__["default"].send({
        "date": this.form.date,
        "amount": this.form.amount,
        "name": this.form.name,
        "event": this.form.event,
        "email": this.form.email
      }).then(function () {
        _this2.reset();
        _this2.showSuccess();
      }).catch(function (e) {
        console.warn(e);
        _this2.showError();
      });
    },
    selectEvent: function selectEvent($event) {
      this.$refs.search.inputValue = $event.event;
      this.$v.form.item.$model = $event;
      this.$v.form.event.$model = $event.event;
      this.$v.form.date.$model = this.toDate($event.start).toLocaleString();
    },
    toDate: function toDate(date) {
      return _utils_EventDate__WEBPACK_IMPORTED_MODULE_11__["default"].fromDate(date).toDate();
    },
    reset: function reset() {
      this.$v.$reset();
      this.$set(this, 'form', {
        item: null,
        event: null,
        amount: 1,
        date: null,
        email: null,
        name: null
      });
      this.disabled = false;
    },
    showSuccess: function showSuccess() {
      this.alerts.success.dismissCountDown = this.alerts.success.dismissSecs;
    },
    showError: function showError() {
      this.alerts.error.dismissCountDown = this.alerts.error.dismissSecs;
    },
    showProgress: function showProgress() {
      this.alerts.progress.dismissCountDown = this.alerts.progress.dismissSecs;
    }
  },
  validations: {
    form: {
      item: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      },
      event: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      },
      amount: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"],
        minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["minValue"])(1),
        maxValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["maxValue"])(10)
      },
      date: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["email"]
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
      }
    }
  },
  components: {
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInput"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormInvalidFeedback"],
    BFormValidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BFormValidFeedback"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BAlert"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BListGroupItem"],
    typeahead: vue_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_6__["validationMixin"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/search/SearchContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search/SearchContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FuseSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuseSearch */ "./src/components/search/FuseSearch.js");
/* harmony import */ var _fuseHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fuseHighlight */ "./src/components/search/fuseHighlight.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/EventDate */ "./src/utils/EventDate.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      term: '',
      results: [],
      searchedTerm: ''
    };
  },

  computed: {
    fuse: function fuse() {
      return _FuseSearch__WEBPACK_IMPORTED_MODULE_0__["default"].fetch();
    }
  },
  methods: {
    search: function search(term) {
      var _this = this;

      this.fuse.then(function (fuse) {
        return fuse.search(term);
      }).then(function (results) {
        return results.filter(function (item) {
          return item.matches.length;
        }).map(function (item) {
          Object(_fuseHighlight__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
          return item;
        });
      }).then(function (results) {
        _this.$set(_this, 'results', results);
        _this.$set(_this, 'searchedTerm', term);
        gtag('event', 'search_action', {
          'event_category': 'search',
          'event_label': "" + term,
          'value': results.length
        });
      });
    },
    toDate: function toDate(date) {
      return _utils_EventDate__WEBPACK_IMPORTED_MODULE_2__["default"].fromDate(date).toDate();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal {\n  display: none;\n}\n.modal.show {\n  display: block;\n}\n.search-modal {\n  /* Important part */\n}\n.search-modal .modal {\n    display: block !important;\n    /* I added this to see the modal, you don't need this */\n}\n.search-modal .modal-dialog {\n    overflow-y: initial !important;\n}\n.search-modal .modal-body {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter-active #program, .fade-leave-active #program {\n    transition: opacity 1s;\n}\n.fade-enter #program, .fade-leave-to #program {\n  opacity: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.done[data-v-7ef53262] {\n  background-color: #FFFFFF88;\n  cursor: initial !important;\n}\n.done[data-v-7ef53262]:hover {\n  background-color: #FFFFFF88;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar.vue?vue&type=template&id=12cb4c6e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar.vue?vue&type=template&id=12cb4c6e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-calendar" },
    [
      _c("v-calendar", {
        attrs: { attributes: _vm.attributes, "is-expanded": "" },
        on: {
          "update:fromPage": _vm.pageChanged,
          "update:toPage": _vm.pageChanged
        },
        scopedSlots: _vm._u([
          {
            key: "event",
            fn: function(ref) {
              var customData = ref.customData
              return _c("div", { staticClass: "popover-row" }, [
                _c("span", { staticClass: "popover-content" }, [
                  _c("a", { attrs: { href: _vm.buildEventUrl(customData) } }, [
                    _vm._v(_vm._s(customData.event.title))
                  ])
                ]),
                _vm._v(" "),
                !customData.end
                  ? _c("span", [
                      _vm._v(
                        "(od: " +
                          _vm._s(_vm._f("moment")(customData.start, "H:mm")) +
                          ")"
                      )
                    ])
                  : _vm._e()
              ])
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DateSelect.vue?vue&type=template&id=c36a090c&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DateSelect.vue?vue&type=template&id=c36a090c& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-12" }, [
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.selected,
            expression: "selected"
          }
        ],
        staticClass: "mb-3 form-control custom-select",
        on: {
          change: function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.selected = $event.target.multiple
              ? $$selectedVal
              : $$selectedVal[0]
          }
        }
      },
      _vm._l(Object.keys(_vm.options).reverse(), function(year) {
        return _c(
          "optgroup",
          { attrs: { label: year } },
          _vm._l(_vm.options[year].reverse(), function(month) {
            return _c(
              "option",
              { domProps: { value: year + "/" + month.id } },
              [_vm._v("\n        " + _vm._s(month.label) + "\n      ")]
            )
          }),
          0
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=template&id=66d5835c&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SeachDialog.vue?vue&type=template&id=66d5835c& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.opened
      ? _c("div", { staticClass: "modal-backdrop fade", class: _vm.showStyle })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "search-modal modal fade",
        class: _vm.showStyle,
        attrs: { tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-scrollable modal-xl",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("span", { staticClass: "modal-title" }, [
                  _vm._v("\n            Vyhledávání\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: { click: _vm.close }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-body" },
                [_c("search-container")],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.close }
                  },
                  [_vm._v("Zavřít")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventContent.vue?vue&type=template&id=0afccd16&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventContent.vue?vue&type=template&id=0afccd16& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6 col-sm-12" }, [
    _c("div", { staticClass: "text-content mt-3", class: _vm.classes }, [
      _c(
        "a",
        {
          staticClass: "event-title pt-2 h4 font-weight-bold",
          attrs: { href: _vm.eventUrl }
        },
        [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "event-section-text" }, [
        _c("p", { staticClass: "event-text pt-3" }, [
          _vm.start.time
            ? _c("span", { staticStyle: { "text-transform": "capitalize" } }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm._f("moment")(_vm.startDate, "dddd D. M. H:mm")) +
                    "\n        "
                )
              ])
            : _c("span", [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm._f("moment")(_vm.startDate, "dddd D. M.")) +
                    "\n        "
                )
              ]),
          _vm._v(" "),
          _vm.category
            ? _c(
                "span",
                {
                  staticClass:
                    "badge badge-pill badge-secondary p-2 pl-3 pr-3 m-2"
                },
                [_vm._v("\n          " + _vm._s(_vm.category) + "\n        ")]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "event-section-text" }, [
        _c("p", {
          staticClass: "event-text",
          domProps: { innerHTML: _vm._s(_vm.annotation) }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "event-section-btn pt-3 pb-3" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-light btn-md sr-button",
            attrs: { href: _vm.eventUrl }
          },
          [_vm._v("\n        Více zde\n      ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventImage.vue?vue&type=template&id=eac79352&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventImage.vue?vue&type=template&id=eac79352& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6 col-sm-12" }, [
    _c(
      "div",
      { staticClass: "img-wrap justify-content-sm-center", class: _vm.classes },
      [
        _vm.url
          ? _c("img", {
              directives: [
                {
                  name: "g-tag",
                  rawName: "v-g-tag",
                  value: "img-event",
                  expression: "'img-event'"
                }
              ],
              staticClass: "img-fluid img-thumbnail",
              attrs: { src: _vm.url, alt: _vm.title, title: _vm.title }
            })
          : _c("img", {
              staticClass: "img-fluid",
              attrs: { src: _vm.fallbackUrl, alt: _vm.title, title: _vm.title }
            })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "row d-flex align-items-center event p-1 m-2 animated fadeInUp fast w-100",
      class: _vm.classes
    },
    [
      _c("event-image", {
        attrs: { title: _vm.event.title, url: _vm.event.image, side: _vm.side }
      }),
      _vm._v(" "),
      _c("event-content", {
        attrs: {
          title: _vm.event.title,
          annotation: _vm.event.annotation,
          url: _vm.event.url,
          category: _vm.event.category,
          start: _vm.event.start,
          side: _vm.side
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row mt-4" }, [
    _c(
      "div",
      { staticClass: "col-12" },
      _vm._l(_vm.events, function(event, index) {
        return _c("event-item", {
          key: index,
          attrs: { event: event, side: index % 2 === 0 ? "left" : "right" }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "row animated fadeIn slow" },
      [
        _c(
          "transition",
          { attrs: { name: "fade" } },
          [_c("event-list", { attrs: { events: _vm.events || [] } })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=template&id=55516d1a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/Program.vue?vue&type=template&id=55516d1a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("date-select", {
            attrs: { index: _vm.EVENT_CALENDAR, "on-change": _vm.selectDate }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.events, function(list, date) {
        return _c("div", { staticClass: "row animated fadeIn slow" }, [
          _c(
            "div",
            { staticClass: "col-12" },
            [
              _c(
                "transition",
                { attrs: { name: "fade" } },
                [
                  _vm.selected === date
                    ? _c("event-list", { attrs: { events: list } })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.event
    ? _c("div", [
        _c("h2", { staticClass: "font-weight-bold mt-3" }, [
          _c(
            "a",
            {
              staticClass: "text-white",
              attrs: { href: _vm.toUrl(_vm.event.url) }
            },
            [_vm._v("\n      " + _vm._s(_vm.event.title) + "\n    ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "h3",
            staticStyle: { "text-transform": "capitalize" }
          },
          [
            _vm._v(
              "\n    " +
                _vm._s(
                  _vm._f("moment")(_vm.eventStartDate, "dddd D. M. H:mm")
                ) +
                "\n  "
            )
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "mt-3",
          domProps: { innerHTML: _vm._s(_vm.event.annotation) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "mt-3" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-light btn-md sr-button",
              attrs: { href: _vm.toUrl(_vm.event.url) }
            },
            [_vm._v("\n      Více zde\n    ")]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container timeline" }, [
      _c("div", { staticClass: "row mb-4" }, [
        _c("div", { staticClass: "col-lg-8 mx-auto text-center" }, [
          _c("h2", { staticClass: "section-heading text-white display-3" }, [
            _vm._v("\n          " + _vm._s(_vm.title) + "\n        ")
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]),
      _vm._v(" "),
      _vm.eventsLoading
        ? _c("div", { staticClass: "row justify-content-center" })
        : _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.events, function(event, index) {
              return _c("event-item", {
                key: index,
                attrs: {
                  event: event,
                  side: index % 2 === 0 ? "left" : "right"
                }
              })
            }),
            1
          ),
      _vm._v(" "),
      _c("div", { staticClass: "row text-center" }, [
        _c("div", { staticClass: "col-12 pt-5 pb-3 mb-5" }, [
          _c(
            "a",
            {
              staticClass:
                "btn btn-light btn-md sr-button animated fadeInUp slower",
              class: _vm.done ? "done" : "",
              on: { click: _vm.loadMore }
            },
            [_vm._v("\n            Načíst další ...\n        ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#events-anchor", id: "events-anchor" } }, [
      _c("i", { staticClass: "h2 fas fa-chevron-down text-white" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("date-select", {
            attrs: { index: _vm.PHOTO_GALLERIES, "on-change": _vm.selectDate }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.galleries, function(list, date) {
        return _c(
          "div",
          { key: date, staticClass: "row animated fadeIn slow mt-3" },
          [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c(
                  "transition",
                  { attrs: { name: "fade" } },
                  [
                    _vm.selected === date
                      ? _c("photo-gallery-list", { attrs: { galleries: list } })
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mb-5" },
    [
      _c("div", { staticClass: "row d-flex align-content-center" }, [
        _c(
          "a",
          {
            staticClass: "h4 event-title font-weight-bold",
            attrs: { href: _vm.gallery.url }
          },
          [_vm._v("\n      " + _vm._s(_vm.gallery.title) + "\n    ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "badge badge-pill badge-secondary p-2 m-1 ml-auto align-self-center"
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(
                  _vm._f("moment")(_vm.parseDate(_vm.gallery.date), "D. M.")
                ) +
                "\n    "
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-start text-left" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("ul", { staticClass: "list-group list-group-flush w-100" }, [
            _vm.gallery.author
              ? _c("li", { staticClass: "list-group-item" }, [
                  _c("strong", [_vm._v("Autor")]),
                  _vm._v(": " + _vm._s(_vm.gallery.author) + "\n        ")
                ])
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("photo-gallery-grid", {
        attrs: { title: _vm.gallery.title, photos: _vm.gallery.photos }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "images-loaded",
          rawName: "v-images-loaded",
          value: _vm.loaded,
          expression: "loaded"
        },
        { name: "gallery", rawName: "v-gallery" }
      ],
      staticClass: "d-flex no-gutters popup-gallery"
    },
    _vm._l(_vm.columns, function(column, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass: "d-flex flex-column gallery-column",
          attrs: { "data-column": index }
        },
        _vm._l(column, function(photo) {
          return _c("div", { staticClass: "p-1" }, [
            _c("a", { staticClass: "gallery-box", attrs: { href: photo } }, [
              _c("img", {
                directives: [
                  {
                    name: "g-tag",
                    rawName: "v-g-tag",
                    value: "img-gallery",
                    expression: "'img-gallery'"
                  }
                ],
                ref: photo,
                refInFor: true,
                staticClass: "img-fluid",
                attrs: { alt: _vm.title, src: photo }
              })
            ])
          ])
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-100" },
    _vm._l(_vm.galleries, function(gallery, index) {
      return _c("photo-gallery", { key: index, attrs: { gallery: gallery } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "p",
          [
            _c(
              "b-list-group",
              { attrs: { horizontal: "" } },
              _vm._l(_vm.nextEvents, function(event) {
                return _c(
                  "b-list-group-item",
                  {
                    key: _vm._f("moment")(_vm.toDate(event.start), "D. M. H:mm")
                  },
                  [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            $event.stopPropagation()
                            return _vm.selectEvent(event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(event.event) +
                            "\n            "
                        ),
                        _c(
                          "small",
                          { staticClass: "badge badge-primary badge-pill" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("moment")(
                                  _vm.toDate(event.start),
                                  "D. M. H:mm"
                                )
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              }),
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "alert-popup-wrapper" }, [
        _c(
          "div",
          { staticClass: "alert-popup" },
          [
            _c(
              "b-alert",
              {
                attrs: {
                  show: _vm.alerts.error.dismissCountDown,
                  dismissible: "",
                  fade: "",
                  variant: "danger"
                },
                on: {
                  "dismiss-count-down": function(countDown) {
                    return (_vm.alerts.error.dismissCountDown = countDown)
                  },
                  dismissed: function($event) {
                    _vm.alerts.error.dismissCountDown = 0
                  }
                }
              },
              [_vm._v("\n        Chyba při odesílání rezervace.\n      ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "alert-popup" },
          [
            _c(
              "b-alert",
              {
                attrs: {
                  show: _vm.alerts.success.dismissCountDown,
                  dismissible: "",
                  fade: "",
                  variant: "success"
                },
                on: {
                  "dismiss-count-down": function(countDown) {
                    return (_vm.alerts.success.dismissCountDown = countDown)
                  },
                  dismissed: function($event) {
                    _vm.alerts.success.dismissCountDown = 0
                  }
                }
              },
              [
                _vm._v(
                  "\n        Rezervace " +
                    _vm._s(_vm.form.event) +
                    " na jméno " +
                    _vm._s(_vm.form.name) +
                    " odeslána. "
                ),
                _c("strong", [
                  _vm._v(
                    "Rezervace bude platná po emailovém potvrzení na Vámi zadanou adresu"
                  )
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "alert-popup" },
          [
            _c(
              "b-alert",
              {
                attrs: {
                  show: _vm.alerts.progress.dismissCountDown,
                  dismissible: "",
                  fade: "",
                  variant: "info"
                },
                on: {
                  "dismiss-count-down": function(countDown) {
                    return (_vm.alerts.progress.dismissCountDown = countDown)
                  },
                  dismissed: function($event) {
                    _vm.alerts.progress.dismissCountDown = 0
                  }
                }
              },
              [_vm._v("\n        Odesílám ...\n      ")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-event",
                label: "Hledat:",
                "label-for": "input-event",
                description: "Dejte nám vědet o kterou událost máte zájem."
              }
            },
            [
              _c("typeahead", {
                ref: "search",
                attrs: {
                  data: _vm.events,
                  serializer: function(s) {
                    return s.event
                  },
                  placeholder: "Jméno události ...",
                  required: "",
                  inputClass: ""
                },
                on: {
                  hit: function($event) {
                    return _vm.selectEvent($event)
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "suggestion",
                    fn: function(ref) {
                      var data = ref.data
                      var htmlText = ref.htmlText
                      return [
                        _c("span", {
                          domProps: { innerHTML: _vm._s(htmlText) }
                        }),
                        _vm._v("\n           \n          "),
                        _c(
                          "small",
                          { staticClass: "badge badge-primary badge-pill" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("moment")(
                                  _vm.toDate(data.start),
                                  "D. M. H:mm"
                                )
                              )
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.item.$dirty
                      ? !_vm.$v.form.item.$error
                      : null
                  }
                },
                [_vm._v("\n        Vyberte událost\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-name",
                label: "Jméno:",
                "label-for": "input-email",
                description: "Jméno, na které bude rezervace"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-name",
                  type: "text",
                  required: "",
                  placeholder: "Jméno ..."
                },
                model: {
                  value: _vm.$v.form.name.$model,
                  callback: function($$v) {
                    _vm.$set(_vm.$v.form.name, "$model", $$v)
                  },
                  expression: "$v.form.name.$model"
                }
              }),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.name.$dirty
                      ? !_vm.$v.form.name.$error
                      : null
                  }
                },
                [_vm._v("\n        Zadejte jméno\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-email",
                label: "Email:",
                "label-for": "input-email",
                description: "Email, na který Vám potvrdíme rezervaci"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-email",
                  type: "email",
                  required: "",
                  placeholder: "Email ..."
                },
                model: {
                  value: _vm.$v.form.email.$model,
                  callback: function($$v) {
                    _vm.$set(_vm.$v.form.email, "$model", $$v)
                  },
                  expression: "$v.form.email.$model"
                }
              }),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.email.$dirty
                      ? !_vm.$v.form.email.$error
                      : null
                  }
                },
                [_vm._v("\n        Neplatný email.\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-event-amount",
                label: "Počet míst:",
                "label-for": "input-event-amount",
                description: "Kolik vás bude",
                placeholder: "Počet ..."
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-event-amount",
                  type: "number",
                  required: ""
                },
                model: {
                  value: _vm.$v.form.amount.$model,
                  callback: function($$v) {
                    _vm.$set(_vm.$v.form.amount, "$model", $$v)
                  },
                  expression: "$v.form.amount.$model"
                }
              }),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.amount.$dirty
                      ? _vm.$v.form.amount.required
                      : null
                  }
                },
                [_vm._v("\n        Zadejte počet\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.amount.$dirty
                      ? _vm.$v.form.amount.minValue
                      : null
                  }
                },
                [_vm._v("\n        Zadejte počet\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.amount.$dirty
                      ? _vm.$v.form.amount.maxValue
                      : null
                  }
                },
                [
                  _vm._v(
                    "\n        Pro vetší počet rezervací jak 10, nás prosím kontaktujte prostřednictvím kontaktu uvedeného v patičce stránky\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-event-name",
                label: "Akce:",
                "label-for": "input-event-name"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-event-name",
                  type: "text",
                  readonly: "",
                  required: ""
                },
                model: {
                  value: _vm.$v.form.event.$model,
                  callback: function($$v) {
                    _vm.$set(_vm.$v.form.event, "$model", $$v)
                  },
                  expression: "$v.form.event.$model"
                }
              }),
              _vm._v(" "),
              _c(
                "b-form-invalid-feedback",
                {
                  attrs: {
                    state: _vm.$v.form.event.$dirty
                      ? !_vm.$v.form.event.$error
                      : null
                  }
                },
                [_vm._v("\n        Vyhledejte událost\n      ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "input-group-event-date",
                label: "Datum:",
                "label-for": "input-event-date"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "input-event-date",
                  type: "text",
                  readonly: "",
                  required: ""
                },
                model: {
                  value: _vm.$v.form.date.$model,
                  callback: function($$v) {
                    _vm.$set(_vm.$v.form.date, "$model", $$v)
                  },
                  expression: "$v.form.date.$model"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              attrs: {
                disabled: _vm.$v.form.$invalid || _vm.disabled,
                type: "submit",
                variant: "primary"
              }
            },
            [_vm._v("Potvrdit")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("strong", [_vm._v("Rychlá volba")]),
      _vm._v(" následující akce s možností rezervace")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 py-2" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.lazy.trim",
              value: _vm.term,
              expression: "term",
              modifiers: { lazy: true, trim: true }
            }
          ],
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Hledat" },
          domProps: { value: _vm.term },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.search(_vm.term)
            },
            change: function($event) {
              _vm.term = $event.target.value.trim()
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row float-right" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-secondary my-1",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.search(_vm.term)
              }
            }
          },
          [_vm._v("Vyhledat událost")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "clearfix" }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "ul",
          { staticClass: "list-group list-group-flush" },
          _vm._l(_vm.results, function(result) {
            return _c(
              "li",
              {
                staticClass:
                  "list-group-item d-flex justify-content-between align-items-center"
              },
              [
                _c("a", { attrs: { href: result.item.href } }, [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        result.highlight.title || result.item.title
                      )
                    }
                  })
                ]),
                _vm._v(" "),
                _c("span", {
                  domProps: {
                    innerHTML: _vm._s(
                      result.highlight.content || result.item.content
                    )
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-primary badge-pill" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm._f("moment")(
                          _vm.toDate(result.item.start),
                          "D. M. YYYY"
                        )
                      ) +
                      "\n          "
                  )
                ])
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _vm.searchedTerm && !_vm.results.length
      ? _c("div", { staticClass: "row" }, [_vm._m(0)])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("ul", { staticClass: "list-group list-group-flush" }, [
        _c("li", { staticClass: "list-group-item" }, [
          _c("span", [_vm._v("Žádné události nenalezeny")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SeachDialog.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0bd57ea1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Program.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("463e0694", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleries.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2dcfb7aa", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cde191d8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/clients/eventsClient.js":
/*!*************************************!*\
  !*** ./src/clients/eventsClient.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Cache */ "./src/utils/Cache.js");
/* harmony import */ var _utils_Urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Urls */ "./src/utils/Urls.js");




var baseUrl = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl('/data/events');
var filmClubUrl = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl('/program/film-club.json');
var reservationsUrl = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl('/reservations.json');

var buildUrl = function buildUrl(year, month) {
  return [baseUrl, year, month, '/events.json'].join('/');
};

var cache = new _utils_Cache__WEBPACK_IMPORTED_MODULE_1__["default"]();

var makeEventGTags = function makeEventGTags(year, month) {
  var now = new Date();
  var thisYear = now.getFullYear();
  var thisMonth = now.getMonth() + 1;
  var history = 12 * (year - thisYear) + (month - thisMonth);

  gtag('event', 'history', {
    'event_category': 'eventProgram',
    'event_label': history + ' months'
  });
  gtag('event', 'ajax', {
    'event_category': 'eventsClient',
    'event_label': 'get(' + year + '.' + month + ')'
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(year, month) {
    makeEventGTags(year, month);

    return cache.get(year + '.' + month, function () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(buildUrl(year, month)).then(function (value) {
        return value.data;
      }).then(function (value) {
        return value.map(function (item) {
          item.url = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl(item.url);
          return item;
        });
      }).catch(function (e) {
        console.warn(e);
      });
    });
  },
  getFilmClub: function getFilmClub() {
    gtag('event', 'ajax', {
      'event_category': 'eventsClient',
      'event_label': 'getFilmClub()'
    });
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(filmClubUrl).then(function (value) {
      return value.data;
    }).then(function (value) {
      return value.map(function (item) {
        item.url = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl(item.url);
        return item;
      });
    }).catch(function (e) {
      console.warn(e);
    });
  },
  getReservations: function getReservations() {
    gtag('event', 'ajax', {
      'event_category': 'eventsClient',
      'event_label': 'getReservations()'
    });
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(reservationsUrl).then(function (value) {
      return value.data;
    }).catch(function (e) {
      console.warn(e);
    });
  }
});

/***/ }),

/***/ "./src/clients/galleriesClient.js":
/*!****************************************!*\
  !*** ./src/clients/galleriesClient.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Cache */ "./src/utils/Cache.js");
/* harmony import */ var _utils_Urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Urls */ "./src/utils/Urls.js");




var baseUrl = _utils_Urls__WEBPACK_IMPORTED_MODULE_2__["default"].relativeUrl('/data/galleries');

var buildUrl = function buildUrl(year, month) {
  return [baseUrl, year, month, 'galleries.json'].join('/');
};

var cache = new _utils_Cache__WEBPACK_IMPORTED_MODULE_1__["default"]();

var makeEventGTags = function makeEventGTags(year, month) {
  var now = new Date();
  var thisYear = now.getFullYear();
  var thisMonth = now.getMonth() + 1;
  var history = 12 * (year - thisYear) + (month - thisMonth);

  gtag('event', 'history', {
    'event_category': 'gallery',
    'event_label': history + ' months'
  });
  gtag('event', 'ajax', {
    'event_category': 'galleriesClient',
    'event_label': 'get(' + year + '.' + month + ')'
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(year, month) {
    makeEventGTags(year, month);
    return cache.get(year + '.' + month, function () {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(buildUrl(year, month)).then(function (value) {
        return value.data;
      }).catch(function (e) {
        console.warn(e);
      });
    });
  }
});

/***/ }),

/***/ "./src/clients/mailClient.js":
/*!***********************************!*\
  !*** ./src/clients/mailClient.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var URL = 'https://us-central1-msuo-e5cf2.cloudfunctions.net/sendMail';

var makeEventGTags = function makeEventGTags(data) {
  gtag('event', 'mail', {
    'event_category': 'reservation',
    'event_label': '' + data.title
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  send: function send(data) {
    makeEventGTags(data);

    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(URL, data).then(function (response) {
      if (response.status !== 200) {
        throw new Error(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response));
      }
      return response.data;
    });
  }
});

/***/ }),

/***/ "./src/components/Calendar.vue":
/*!*************************************!*\
  !*** ./src/components/Calendar.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=12cb4c6e& */ "./src/components/Calendar.vue?vue&type=template&id=12cb4c6e&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./src/components/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/Calendar.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar.vue?vue&type=template&id=12cb4c6e&":
/*!********************************************************************!*\
  !*** ./src/components/Calendar.vue?vue&type=template&id=12cb4c6e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=12cb4c6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar.vue?vue&type=template&id=12cb4c6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_12cb4c6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/CalendarBean.js":
/*!****************************************!*\
  !*** ./src/components/CalendarBean.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _clients_eventsClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clients/eventsClient */ "./src/clients/eventsClient.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/EventDate */ "./src/utils/EventDate.js");






var isPresentInCalendar = function isPresentInCalendar(year, month) {
  return EVENT_CALENDAR.filter(function (item) {
    return item.year === year && item.month === month;
  }).length > 0;
};

var EventFactory = function () {
  function EventFactory() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EventFactory);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EventFactory, null, [{
    key: 'createSingleEvent',
    value: function createSingleEvent(event, dates) {
      return {
        popover: {
          label: event.title,
          slot: 'event'
        },
        highlight: {
          backgroundColor: '#C04F30',
          borderColor: '#8c4126',
          borderWidth: '1px',
          borderStyle: 'solid'
        },
        contentStyle: {
          color: '#fff'
        },
        customData: {
          event: event,
          start: dates
        },
        dates: dates
      };
    }
  }, {
    key: 'createLongEvent',
    value: function createLongEvent(event, start, end) {
      var startEvent = EventFactory.createSingleEvent(event, start);
      var dates = [{
        start: start,
        end: end
      }];
      var longEvent = {
        popover: {
          label: event.title,
          slot: 'event'
        },
        highlight: {
          backgroundColor: 'rgba(192,79,48,0.15)',
          borderColor: 'rgba(64,26,15,0.15)',
          borderWidth: '1px',
          borderStyle: 'solid'
        },
        customData: {
          event: event,
          start: start,
          end: end
        },
        dates: dates
      };
      return [startEvent, longEvent];
    }
  }, {
    key: 'createEvent',
    value: function createEvent(event) {
      var startDate = _utils_EventDate__WEBPACK_IMPORTED_MODULE_4__["default"].fromDate(event.start);
      var endDate = event.end.date ? _utils_EventDate__WEBPACK_IMPORTED_MODULE_4__["default"].fromDate(event.end) : null;

      return endDate ? EventFactory.createLongEvent(event, startDate.toDate(), endDate.toDate()) : EventFactory.createSingleEvent(event, startDate.toDate());
    }
  }]);

  return EventFactory;
}();

var CalendarBean = function () {
  function CalendarBean() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CalendarBean);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CalendarBean, null, [{
    key: 'calendarEvent',
    value: function calendarEvent(event) {
      return EventFactory.createEvent(event);
    }
  }, {
    key: 'get',
    value: function get(year, month) {
      if (isPresentInCalendar(year, month)) {
        return _clients_eventsClient__WEBPACK_IMPORTED_MODULE_3__["default"].get(year, month).then(function (events) {
          if (!events) {
            return [];
          }
          return events.map(CalendarBean.calendarEvent).flat(1);
        });
      } else {
        return babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve([]);
      }
    }
  }]);

  return CalendarBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (CalendarBean);

/***/ }),

/***/ "./src/components/DateSelect.vue":
/*!***************************************!*\
  !*** ./src/components/DateSelect.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateSelect.vue?vue&type=template&id=c36a090c& */ "./src/components/DateSelect.vue?vue&type=template&id=c36a090c&");
/* harmony import */ var _DateSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateSelect.vue?vue&type=script&lang=js& */ "./src/components/DateSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DateSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DateSelect.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/DateSelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./DateSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/DateSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DateSelect.vue?vue&type=template&id=c36a090c&":
/*!**********************************************************************!*\
  !*** ./src/components/DateSelect.vue?vue&type=template&id=c36a090c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./DateSelect.vue?vue&type=template&id=c36a090c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/DateSelect.vue?vue&type=template&id=c36a090c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateSelect_vue_vue_type_template_id_c36a090c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ImgGTag.js":
/*!***********************************!*\
  !*** ./src/components/ImgGTag.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el, binding, vnode) {
    gtag('event', 'img', {
      'event_category': '' + binding.value,
      'event_label': el.getAttribute('alt') + ' - ' + el.getAttribute('src')
    });
  }
});

/***/ }),

/***/ "./src/components/SeachDialog.vue":
/*!****************************************!*\
  !*** ./src/components/SeachDialog.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SeachDialog.vue?vue&type=template&id=66d5835c& */ "./src/components/SeachDialog.vue?vue&type=template&id=66d5835c&");
/* harmony import */ var _SeachDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeachDialog.vue?vue&type=script&lang=js& */ "./src/components/SeachDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeachDialog.vue?vue&type=style&index=0&lang=scss& */ "./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SeachDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SeachDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SeachDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/SeachDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./SeachDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SeachDialog.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/SeachDialog.vue?vue&type=template&id=66d5835c&":
/*!***********************************************************************!*\
  !*** ./src/components/SeachDialog.vue?vue&type=template&id=66d5835c& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SeachDialog.vue?vue&type=template&id=66d5835c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SeachDialog.vue?vue&type=template&id=66d5835c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SeachDialog_vue_vue_type_template_id_66d5835c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/EventContent.vue":
/*!************************************************!*\
  !*** ./src/components/events/EventContent.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventContent.vue?vue&type=template&id=0afccd16& */ "./src/components/events/EventContent.vue?vue&type=template&id=0afccd16&");
/* harmony import */ var _EventContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventContent.vue?vue&type=script&lang=js& */ "./src/components/events/EventContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/EventContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/EventContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/events/EventContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./EventContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/EventContent.vue?vue&type=template&id=0afccd16&":
/*!*******************************************************************************!*\
  !*** ./src/components/events/EventContent.vue?vue&type=template&id=0afccd16& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EventContent.vue?vue&type=template&id=0afccd16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventContent.vue?vue&type=template&id=0afccd16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventContent_vue_vue_type_template_id_0afccd16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/EventImage.vue":
/*!**********************************************!*\
  !*** ./src/components/events/EventImage.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventImage.vue?vue&type=template&id=eac79352& */ "./src/components/events/EventImage.vue?vue&type=template&id=eac79352&");
/* harmony import */ var _EventImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventImage.vue?vue&type=script&lang=js& */ "./src/components/events/EventImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/EventImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/EventImage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/events/EventImage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./EventImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/EventImage.vue?vue&type=template&id=eac79352&":
/*!*****************************************************************************!*\
  !*** ./src/components/events/EventImage.vue?vue&type=template&id=eac79352& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EventImage.vue?vue&type=template&id=eac79352& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventImage.vue?vue&type=template&id=eac79352&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventImage_vue_vue_type_template_id_eac79352___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/EventItem.vue":
/*!*********************************************!*\
  !*** ./src/components/events/EventItem.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventItem.vue?vue&type=template&id=4c47dfc7& */ "./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7&");
/* harmony import */ var _EventItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventItem.vue?vue&type=script&lang=js& */ "./src/components/events/EventItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/EventItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/EventItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/events/EventItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./EventItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7&":
/*!****************************************************************************!*\
  !*** ./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EventItem.vue?vue&type=template&id=4c47dfc7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/EventItem.vue?vue&type=template&id=4c47dfc7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventItem_vue_vue_type_template_id_4c47dfc7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/program/EventList.vue":
/*!*****************************************************!*\
  !*** ./src/components/events/program/EventList.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventList.vue?vue&type=template&id=4446bcf2& */ "./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2&");
/* harmony import */ var _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventList.vue?vue&type=script&lang=js& */ "./src/components/events/program/EventList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/program/EventList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/program/EventList.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/components/events/program/EventList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/EventList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2&":
/*!************************************************************************************!*\
  !*** ./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventList.vue?vue&type=template&id=4446bcf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/EventList.vue?vue&type=template&id=4446bcf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_4446bcf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/program/FilmClub.vue":
/*!****************************************************!*\
  !*** ./src/components/events/program/FilmClub.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmClub.vue?vue&type=template&id=2d45927b& */ "./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b&");
/* harmony import */ var _FilmClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilmClub.vue?vue&type=script&lang=js& */ "./src/components/events/program/FilmClub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilmClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/program/FilmClub.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/program/FilmClub.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/events/program/FilmClub.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmClub.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/FilmClub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b&":
/*!***********************************************************************************!*\
  !*** ./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmClub.vue?vue&type=template&id=2d45927b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/FilmClub.vue?vue&type=template&id=2d45927b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmClub_vue_vue_type_template_id_2d45927b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/program/FilmClubBean.js":
/*!*******************************************************!*\
  !*** ./src/components/events/program/FilmClubBean.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clients_eventsClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clients/eventsClient */ "./src/clients/eventsClient.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/EventDate */ "./src/utils/EventDate.js");





var eventsByDate = function eventsByDate(a, b) {
  return _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"].fromDate(a.start).toDate() - _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"].fromDate(b.start).toDate();
};

var FilmClubBean = function () {
  function FilmClubBean() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FilmClubBean);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FilmClubBean, [{
    key: 'fetch',
    value: function fetch() {
      return _clients_eventsClient__WEBPACK_IMPORTED_MODULE_2__["default"].getFilmClub().then(function (events) {
        debugger;
        return events.filter(function (event) {
          var startTime = _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"].fromDate(event.start).toDate();
          return startTime >= new Date();
        }).sort(eventsByDate);
      });
    }
  }]);

  return FilmClubBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (FilmClubBean);

/***/ }),

/***/ "./src/components/events/program/Program.vue":
/*!***************************************************!*\
  !*** ./src/components/events/program/Program.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program.vue?vue&type=template&id=55516d1a& */ "./src/components/events/program/Program.vue?vue&type=template&id=55516d1a&");
/* harmony import */ var _Program_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Program.vue?vue&type=script&lang=js& */ "./src/components/events/program/Program.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Program.vue?vue&type=style&index=0&lang=scss& */ "./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Program_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/program/Program.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/program/Program.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/events/program/Program.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Program.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Program.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/events/program/Program.vue?vue&type=template&id=55516d1a&":
/*!**********************************************************************************!*\
  !*** ./src/components/events/program/Program.vue?vue&type=template&id=55516d1a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Program.vue?vue&type=template&id=55516d1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/program/Program.vue?vue&type=template&id=55516d1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Program_vue_vue_type_template_id_55516d1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/program/ProgramBean.js":
/*!******************************************************!*\
  !*** ./src/components/events/program/ProgramBean.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clients_eventsClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../clients/eventsClient */ "./src/clients/eventsClient.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/EventDate */ "./src/utils/EventDate.js");





var eventsByDate = function eventsByDate(a, b) {
  return _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"].fromDate(a.start).toDate() - _utils_EventDate__WEBPACK_IMPORTED_MODULE_3__["default"].fromDate(b.start).toDate();
};

var ProgramBean = function () {
  function ProgramBean() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProgramBean);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProgramBean, [{
    key: 'fetch',
    value: function fetch(key) {
      var parts = key.split("/");
      var date = {
        month: parts[1],
        year: parts[0]
      };
      return _clients_eventsClient__WEBPACK_IMPORTED_MODULE_2__["default"].get(date.year, date.month).then(function (events) {
        return events.sort(eventsByDate);
      });
    }
  }]);

  return ProgramBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (ProgramBean);

/***/ }),

/***/ "./src/components/events/topn/NextEvent.vue":
/*!**************************************************!*\
  !*** ./src/components/events/topn/NextEvent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NextEvent.vue?vue&type=template&id=3e8ce272& */ "./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272&");
/* harmony import */ var _NextEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextEvent.vue?vue&type=script&lang=js& */ "./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NextEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/topn/NextEvent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NextEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./NextEvent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/NextEvent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NextEvent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272&":
/*!*********************************************************************************!*\
  !*** ./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NextEvent.vue?vue&type=template&id=3e8ce272& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/NextEvent.vue?vue&type=template&id=3e8ce272&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextEvent_vue_vue_type_template_id_3e8ce272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/topn/TopNEvents.vue":
/*!***************************************************!*\
  !*** ./src/components/events/topn/TopNEvents.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true& */ "./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true&");
/* harmony import */ var _TopNEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNEvents.vue?vue&type=script&lang=js& */ "./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& */ "./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TopNEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ef53262",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/events/topn/TopNEvents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNEvents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=style&index=0&id=7ef53262&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_style_index_0_id_7ef53262_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/events/topn/TopNEvents.vue?vue&type=template&id=7ef53262&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNEvents_vue_vue_type_template_id_7ef53262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/events/topn/TopNEventsBean.js":
/*!******************************************************!*\
  !*** ./src/components/events/topn/TopNEventsBean.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _clients_eventsClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../clients/eventsClient */ "./src/clients/eventsClient.js");
/* harmony import */ var _utils_EventDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/EventDate */ "./src/utils/EventDate.js");







var EVENTS = EVENT_CALENDAR.sort(function (a, b) {
  return new Date(a.year, a.month - 1) - new Date(b.year, b.month - 1);
}).reverse();

var eventsByDate = function eventsByDate(a, b) {
  return _utils_EventDate__WEBPACK_IMPORTED_MODULE_5__["default"].fromDate(a.start).toDate() - _utils_EventDate__WEBPACK_IMPORTED_MODULE_5__["default"].fromDate(b.start).toDate();
};

var TopNEventsBean = function () {
  function TopNEventsBean(eventDate) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TopNEventsBean);

    this.eventDate = eventDate;
    this.futureEventMonths = EVENTS.filter(function (item) {
      return new Date(item.year, item.month) - new Date(eventDate.year, eventDate.month) >= 0;
    });
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TopNEventsBean, [{
    key: "fetch",
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(n) {
        var _this = this;

        var future, result, futureEvent, events;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                future = this.futureEventMonths;
                result = [];

              case 2:
                if (!(result.length < n && future.length)) {
                  _context.next = 10;
                  break;
                }

                futureEvent = future.pop();
                _context.next = 6;
                return _clients_eventsClient__WEBPACK_IMPORTED_MODULE_4__["default"].get(futureEvent.year, futureEvent.month);

              case 6:
                events = _context.sent;

                result = result.concat(events.filter(function (event) {
                  var startTime = _utils_EventDate__WEBPACK_IMPORTED_MODULE_5__["default"].fromDate(event.start).toDate();
                  return startTime > _this.eventDate.toDate();
                }));
                _context.next = 2;
                break;

              case 10:
                return _context.abrupt("return", result.sort(eventsByDate).slice(0, n));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref.apply(this, arguments);
      }

      return fetch;
    }()
  }]);

  return TopNEventsBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (TopNEventsBean);

/***/ }),

/***/ "./src/components/photos/PhotoGalleries.vue":
/*!**************************************************!*\
  !*** ./src/components/photos/PhotoGalleries.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGalleries.vue?vue&type=template&id=4efd0228& */ "./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228&");
/* harmony import */ var _PhotoGalleries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGalleries.vue?vue&type=script&lang=js& */ "./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhotoGalleries.vue?vue&type=style&index=0&lang=scss& */ "./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhotoGalleries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/photos/PhotoGalleries.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleries.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228&":
/*!*********************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleries.vue?vue&type=template&id=4efd0228& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleries.vue?vue&type=template&id=4efd0228&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleries_vue_vue_type_template_id_4efd0228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/photos/PhotoGalleriesBean.js":
/*!*****************************************************!*\
  !*** ./src/components/photos/PhotoGalleriesBean.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clients_galleriesClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clients/galleriesClient */ "./src/clients/galleriesClient.js");




var PhotoGalleriesBean = function () {
  function PhotoGalleriesBean() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotoGalleriesBean);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoGalleriesBean, [{
    key: "fetch",
    value: function fetch(key) {
      var parts = key.split("/");
      var date = {
        month: parts[1],
        year: parts[0]
      };
      return _clients_galleriesClient__WEBPACK_IMPORTED_MODULE_2__["default"].get(date.year, date.month);
    }
  }]);

  return PhotoGalleriesBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (PhotoGalleriesBean);

/***/ }),

/***/ "./src/components/photos/PhotoGallery.vue":
/*!************************************************!*\
  !*** ./src/components/photos/PhotoGallery.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGallery.vue?vue&type=template&id=586262ce& */ "./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce&");
/* harmony import */ var _PhotoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGallery.vue?vue&type=script&lang=js& */ "./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/photos/PhotoGallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce&":
/*!*******************************************************************************!*\
  !*** ./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGallery.vue?vue&type=template&id=586262ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGallery.vue?vue&type=template&id=586262ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_template_id_586262ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/photos/PhotoGalleryGrid.vue":
/*!****************************************************!*\
  !*** ./src/components/photos/PhotoGalleryGrid.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGalleryGrid.vue?vue&type=template&id=04ab3434& */ "./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434&");
/* harmony import */ var _PhotoGalleryGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGalleryGrid.vue?vue&type=script&lang=js& */ "./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoGalleryGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/photos/PhotoGalleryGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleryGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434&":
/*!***********************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleryGrid.vue?vue&type=template&id=04ab3434& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryGrid.vue?vue&type=template&id=04ab3434&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryGrid_vue_vue_type_template_id_04ab3434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/photos/PhotoGalleryGridBean.js":
/*!*******************************************************!*\
  !*** ./src/components/photos/PhotoGalleryGridBean.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);





var groupToColumns = function groupToColumns(refs) {
  return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(refs).reduce(function (result, key) {
    var ref = refs[key];
    var columnNumber = ref.columnNumber;

    result[columnNumber] = result[columnNumber] || new Column();

    result[columnNumber].push(ref);
    return result;
  }, {});
};

var createItems = function createItems(refs) {
  return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(refs).reduce(function (result, key) {
    result[key] = result[key] || {};

    var el = jquery__WEBPACK_IMPORTED_MODULE_3___default()(refs[key].slice().pop());
    var column = jquery__WEBPACK_IMPORTED_MODULE_3___default()(el.parents('.gallery-column'));

    result[key] = new Item(el, column);

    return result;
  }, {});
};

var Item = function () {
  function Item(el, column) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Item);

    this.el = el;
    this.column = column;
    this.columnNumber = column.attr('data-column');
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Item, [{
    key: 'height',
    get: function get() {
      return this.el.height();
    }
  }, {
    key: 'source',
    get: function get() {
      return this.el.attr('src');
    }
  }]);

  return Item;
}();

var Column = function () {
  function Column(items) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    this.items = items || [];
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Column, [{
    key: 'copy',
    value: function copy() {
      return new Column(this.items.slice());
    }
  }, {
    key: 'push',
    value: function push(item) {
      this.items.push(item);
    }
  }, {
    key: 'pop',
    value: function pop() {
      return this.items.pop();
    }
  }, {
    key: 'sources',
    get: function get() {
      return this.items.map(function (value) {
        return value.source;
      });
    }
  }, {
    key: 'height',
    get: function get() {
      return this.items.reduce(function (acc, val) {
        return acc + val.height;
      }, 0);
    }
  }, {
    key: 'maxItemHeight',
    get: function get() {
      return this.items.reduce(function (max, val) {
        return Math.max(max, val.height);
      }, 0);
    }
  }, {
    key: 'minItemHeight',
    get: function get() {
      return this.items.reduce(function (min, val) {
        return Math.min(min, val.height);
      }, 0);
    }
  }]);

  return Column;
}();

var Grid = function () {
  function Grid(columns) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Grid);

    this.columns = columns;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Grid, [{
    key: 'copy',
    value: function copy() {
      var _this = this;

      return new Grid(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.columns).reduce(function (result, name) {
        result[name] = _this.columns[name].copy();
        return result;
      }, {}));
    }
  }, {
    key: 'adjustColumns',
    value: function adjustColumns() {
      var grid = this.copy();

      var _grid$computeMinMax = grid.computeMinMax(),
          min = _grid$computeMinMax.min,
          max = _grid$computeMinMax.max;

      if (min && max) {
        min.column.push(max.column.pop());
      }

      return grid;
    }
  }, {
    key: 'computeMinMax',
    value: function computeMinMax() {
      var columnsWithHeight = this.computeHeights();
      return {
        min: columnsWithHeight.shift(),
        max: columnsWithHeight.pop()
      };
    }
  }, {
    key: 'diff',
    value: function diff() {
      var columnsWithHeight = this.computeHeights();
      if (columnsWithHeight) {
        var min = columnsWithHeight.shift();
        var max = columnsWithHeight.pop();
        if (max && min && max.column && min.column) {
          return max.column.height - min.column.height;
        }
      }
      return 0;
    }
  }, {
    key: 'computeHeights',
    value: function computeHeights() {
      var _this2 = this;

      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.columns).map(function (name) {
        return {
          column: _this2.columns[name],
          height: _this2.columns[name].height
        };
      }).sort(function (a, b) {
        return a.height - b.height;
      });
    }
  }, {
    key: 'column',
    value: function column(id) {
      return this.columns[id];
    }
  }]);

  return Grid;
}();

var PhotoGalleryGridBean = function () {
  function PhotoGalleryGridBean(columns) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotoGalleryGridBean);

    this.grid = new Grid(columns);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoGalleryGridBean, [{
    key: 'adjustColumns',
    value: function adjustColumns() {
      var currentGrid = this.grid;
      var newGrid = currentGrid.adjustColumns();

      while (currentGrid.diff() > newGrid.diff()) {
        currentGrid = newGrid;
        newGrid = currentGrid.adjustColumns();
      }
      return new PhotoGalleryGridBean(currentGrid.columns);
    }
  }, {
    key: 'columnImages',
    get: function get() {
      var columns = this.grid.columns;
      return babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(columns).reduce(function (result, key) {
        result[key] = columns[key].sources;
        return result;
      }, {});
    }
  }], [{
    key: 'create',
    value: function create(refs) {
      return new PhotoGalleryGridBean(groupToColumns(createItems(refs)));
    }
  }]);

  return PhotoGalleryGridBean;
}();

/* harmony default export */ __webpack_exports__["default"] = (PhotoGalleryGridBean);

/***/ }),

/***/ "./src/components/photos/PhotoGalleryList.vue":
/*!****************************************************!*\
  !*** ./src/components/photos/PhotoGalleryList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoGalleryList.vue?vue&type=template&id=41eaed8c& */ "./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c&");
/* harmony import */ var _PhotoGalleryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoGalleryList.vue?vue&type=script&lang=js& */ "./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhotoGalleryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/photos/PhotoGalleryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c&":
/*!***********************************************************************************!*\
  !*** ./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PhotoGalleryList.vue?vue&type=template&id=41eaed8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/photos/PhotoGalleryList.vue?vue&type=template&id=41eaed8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGalleryList_vue_vue_type_template_id_41eaed8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/reservation/Reservation.vue":
/*!****************************************************!*\
  !*** ./src/components/reservation/Reservation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation.vue?vue&type=template&id=5da89789& */ "./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789&");
/* harmony import */ var _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation.vue?vue&type=script&lang=js& */ "./src/components/reservation/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/reservation/Reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/reservation/Reservation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/reservation/Reservation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/reservation/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789&":
/*!***********************************************************************************!*\
  !*** ./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=template&id=5da89789& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/reservation/Reservation.vue?vue&type=template&id=5da89789&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_5da89789___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/search/FuseSearch.js":
/*!*********************************************!*\
  !*** ./src/components/search/FuseSearch.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Urls */ "./src/utils/Urls.js");






var index = function index() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_utils_Urls__WEBPACK_IMPORTED_MODULE_4__["default"].relativeUrl('/search-index.json')).then(function (value) {
    return value.data;
  }).catch(function (e) {
    console.warn(e);
  });
};

var FuseSearch = function () {
  function FuseSearch(fuse) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FuseSearch);

    this.fuse = fuse;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FuseSearch, [{
    key: "search",
    value: function search(term) {
      return this.fuse.search(term);
    }
  }], [{
    key: "fetch",
    value: function fetch() {
      var options = {
        shouldSort: true,
        // tokenize: false,
        // matchAllTokens: true,
        includeMatches: true,
        threshold: 0.1,
        // location: 0,
        distance: 100000,
        maxPatternLength: 32,
        minMatchCharLength: 3,
        keys: ["title"]
      };

      return index().then(function (i) {
        return new FuseSearch(new fuse_js__WEBPACK_IMPORTED_MODULE_2___default.a(i, options));
      });
    }
  }]);

  return FuseSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FuseSearch);

/***/ }),

/***/ "./src/components/search/SearchContainer.vue":
/*!***************************************************!*\
  !*** ./src/components/search/SearchContainer.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchContainer.vue?vue&type=template&id=42cb437c& */ "./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c&");
/* harmony import */ var _SearchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchContainer.vue?vue&type=script&lang=js& */ "./src/components/search/SearchContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/search/SearchContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search/SearchContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/search/SearchContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/search/SearchContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c&":
/*!**********************************************************************************!*\
  !*** ./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchContainer.vue?vue&type=template&id=42cb437c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/search/SearchContainer.vue?vue&type=template&id=42cb437c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchContainer_vue_vue_type_template_id_42cb437c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/search/fuseHighlight.js":
/*!************************************************!*\
  !*** ./src/components/search/fuseHighlight.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// export default function highlight(term, html) {
//   const query = new RegExp("(" + term + ")", "gim");
//   const result = html.replace(query, "<mark>$1</mark>");
//   return result;
// }

var fuseHighlight = function fuseHighlight(resultItem) {
  resultItem.highlight = resultItem.highlight || {};

  resultItem.matches.forEach(function (matchItem) {
    var text = resultItem.item[matchItem.key];
    var result = [];
    var matches = [].concat(matchItem.indices);
    var pair = matches.shift();

    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      if (pair && i === pair[0]) {
        result.push('<mark>');
      }
      result.push(char);
      if (pair && i === pair[1]) {
        result.push('</mark>');
        pair = matches.shift();
      }
    }
    resultItem.highlight[matchItem.key] = result.join('');

    if (resultItem.children && resultItem.children.length > 0) {
      resultItem.children.forEach(function (child) {
        fuseHighlight(child);
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (fuseHighlight);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var array_flat_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! array-flat-polyfill */ "./node_modules/array-flat-polyfill/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/lib/v-calendar.min.js");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-async-data-2 */ "./node_modules/vue-async-data-2/src/main.es5.js");
/* harmony import */ var vue_async_data_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_async_data_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Calendar */ "./src/components/Calendar.vue");
/* harmony import */ var _components_SeachDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SeachDialog */ "./src/components/SeachDialog.vue");
/* harmony import */ var _components_events_program_Program__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/events/program/Program */ "./src/components/events/program/Program.vue");
/* harmony import */ var _components_events_program_FilmClub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/events/program/FilmClub */ "./src/components/events/program/FilmClub.vue");
/* harmony import */ var _components_photos_PhotoGalleries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/photos/PhotoGalleries */ "./src/components/photos/PhotoGalleries.vue");
/* harmony import */ var _components_photos_PhotoGalleryGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/photos/PhotoGalleryGrid */ "./src/components/photos/PhotoGalleryGrid.vue");
/* harmony import */ var _components_events_topn_TopNEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/events/topn/TopNEvents */ "./src/components/events/topn/TopNEvents.vue");
/* harmony import */ var _components_events_topn_NextEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/events/topn/NextEvent */ "./src/components/events/topn/NextEvent.vue");
/* harmony import */ var _components_reservation_Reservation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reservation/Reservation */ "./src/components/reservation/Reservation.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment_locale_cs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment/locale/cs */ "./node_modules/moment/locale/cs.js");
/* harmony import */ var moment_locale_cs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment_locale_cs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mdn-polyfills/Object.assign */ "./node_modules/mdn-polyfills/Object.assign.js");
/* harmony import */ var mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Object_assign__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var mdn_polyfills_String_prototype_endsWith__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mdn-polyfills/String.prototype.endsWith */ "./node_modules/mdn-polyfills/String.prototype.endsWith.js");
/* harmony import */ var mdn_polyfills_String_prototype_endsWith__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_String_prototype_endsWith__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! mdn-polyfills/Array.prototype.includes */ "./node_modules/mdn-polyfills/Array.prototype.includes.js");
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var mdn_polyfills_String_prototype_includes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! mdn-polyfills/String.prototype.includes */ "./node_modules/mdn-polyfills/String.prototype.includes.js");
/* harmony import */ var mdn_polyfills_String_prototype_includes__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_String_prototype_includes__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_integrations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @sentry/integrations */ "./node_modules/@sentry/integrations/esm/index.js");





















/**
 * Polyfills
 */
es6_promise__WEBPACK_IMPORTED_MODULE_17___default.a.polyfill();








vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_14__["TabsPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_14__["CardPlugin"]);

vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(v_calendar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L'
  },
  locale: 'cs-CZ'
});

vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vue_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
  moment: moment__WEBPACK_IMPORTED_MODULE_15___default.a
});

vue__WEBPACK_IMPORTED_MODULE_1__["default"].mixin({
  data: function data() {
    return {
      BASE_URL: BASE_URL,
      EVENT_CALENDAR: EVENT_CALENDAR,
      PHOTO_GALLERIES: PHOTO_GALLERIES
    };
  }
});

_sentry_browser__WEBPACK_IMPORTED_MODULE_22__["init"]({
  dsn: 'https://df4168c585c445c5a137856cd9b9f0e8@sentry.io/1766208',
  integrations: [new _sentry_integrations__WEBPACK_IMPORTED_MODULE_23__["Vue"]({ Vue: vue__WEBPACK_IMPORTED_MODULE_1__["default"], attachProps: true })]
});

new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  el: '#page-container',
  components: {
    Calendar: _components_Calendar__WEBPACK_IMPORTED_MODULE_5__["default"],
    NextEvent: _components_events_topn_NextEvent__WEBPACK_IMPORTED_MODULE_12__["default"],

    SearchDialog: _components_SeachDialog__WEBPACK_IMPORTED_MODULE_6__["default"],

    TopNEvents: _components_events_topn_TopNEvents__WEBPACK_IMPORTED_MODULE_11__["default"],

    Program: _components_events_program_Program__WEBPACK_IMPORTED_MODULE_7__["default"],

    PhotoGalleries: _components_photos_PhotoGalleries__WEBPACK_IMPORTED_MODULE_9__["default"],
    PhotoGalleryGrid: _components_photos_PhotoGalleryGrid__WEBPACK_IMPORTED_MODULE_10__["default"],

    FilmClub: _components_events_program_FilmClub__WEBPACK_IMPORTED_MODULE_8__["default"],
    Reservation: _components_reservation_Reservation__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
});

/***/ }),

/***/ "./src/utils/Cache.js":
/*!****************************!*\
  !*** ./src/utils/Cache.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Cache = function () {
  function Cache() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cache);

    this.cache = {};
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cache, [{
    key: "get",
    value: function get(key, lambda) {
      if (!this.cache[key]) {
        this.cache[key] = lambda();
      }
      return this.cache[key];
    }
  }]);

  return Cache;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cache);

/***/ }),

/***/ "./src/utils/EventDate.js":
/*!********************************!*\
  !*** ./src/utils/EventDate.js ***!
  \********************************/
/*! exports provided: default, MONTH_LABELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_LABELS", function() { return MONTH_LABELS; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




var EventDate = function () {
  function EventDate(date) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventDate);

    this.date = date ? date : new Date();
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventDate, [{
    key: "toDate",
    value: function toDate() {
      return this.date;
    }
  }, {
    key: "year",
    get: function get() {
      return this.date.getFullYear();
    }
  }, {
    key: "month",
    get: function get() {
      return this.date.getMonth() + 1;
    }
  }], [{
    key: "fromDate",
    value: function fromDate(dateInput) {
      var date = new moment__WEBPACK_IMPORTED_MODULE_2___default.a(dateInput.date, "YYYY-MM-DD HH:mm:ss Z");
      var time = dateInput.time ? new moment__WEBPACK_IMPORTED_MODULE_2___default.a(dateInput.time, "HH:mm") : new moment__WEBPACK_IMPORTED_MODULE_2___default.a("00:00", "HH:mm");
      return new EventDate(new Date(date.year(), date.month(), date.date(), time.hour(), time.minute()));
    }
  }, {
    key: "fromSeconds",
    value: function fromSeconds(secs) {
      var date = new Date(secs * 1000);
      return new EventDate(date);
    }
  }]);

  return EventDate;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventDate);


var MONTH_LABELS = {
  1: "Leden",
  2: "Únor",
  3: "Březen",
  4: "Duben",
  5: "Květen",
  6: "Červen",
  7: "Červenec",
  8: "Srpen",
  9: "Září",
  10: "Říjen",
  11: "Listopad",
  12: "Prosinec"
};

/***/ }),

/***/ "./src/utils/Urls.js":
/*!***************************!*\
  !*** ./src/utils/Urls.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! build-url */ "./node_modules/build-url/dist/build-url.js");
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(build_url__WEBPACK_IMPORTED_MODULE_2__);




var Urls = function () {
  function Urls() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Urls);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Urls, null, [{
    key: 'relativeUrl',
    value: function relativeUrl(url) {
      return build_url__WEBPACK_IMPORTED_MODULE_2___default()(BASE_URL, {
        path: url
      });
    }
  }]);

  return Urls;
}();

/* harmony default export */ __webpack_exports__["default"] = (Urls);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map