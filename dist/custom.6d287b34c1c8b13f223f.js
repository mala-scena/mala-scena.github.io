!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/msuo-showcase/dist",n(n.s=287)}({287:function(e,t){!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if((t=t.length?t:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:t.offset().top-56},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")});var t=e(".dynamic-nav-link");t.each(function(){e(this).attr("href",e(this).attr("data-href"))}),t.click(function(){e(".navbar-collapse").collapse("hide");var t=e(".id-content");return t.length&&e("html, body").animate({scrollTop:t.offset().top-56},1e3,"easeInOutExpo"),!0});var n=function(){e("#mainNav").offset().top>100?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};n(),e(window).scroll(n),e(".popup-gallery").each(function(){e(this).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})})}(jQuery)}});
//# sourceMappingURL=custom.6d287b34c1c8b13f223f.js.map