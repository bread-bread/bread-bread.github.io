function init(){(myMap=new ymaps.Map("map",{center:[59.91740293,30.32712228],zoom:12})).behaviors.disable("scrollZoom"),myPlacemark1=new ymaps.Placemark([59.96019661,30.31823163],{hintContent:"Бургерная"},{iconLayout:"default#image",iconImageHref:"img/icons/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-28.5]}),myPlacemark2=new ymaps.Placemark([59.87314237,30.32093557],{hintContent:"Бургерная"},{iconLayout:"default#image",iconImageHref:"img/icons/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-28.5]}),myPlacemark3=new ymaps.Placemark([59.91514205,30.48395189],{hintContent:"Бургерная"},{iconLayout:"default#image",iconImageHref:"img/icons/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-28.5]}),myPlacemark4=new ymaps.Placemark([59.94183857,30.27320462],{hintContent:"Бургерная"},{iconLayout:"default#image",iconImageHref:"img/icons/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-28.5]}),myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4)}!function(e,t,n,i){function a(t,n){this.element=t,this.options=e.extend({},r,n),this._defaults=r,this._name=o,this.init()}var o="accordion",r={transitionSpeed:500,transitionEasing:"ease",controlElement:"[data-control]",contentElement:"[data-content]",groupElement:"[data-accordion-group]",singleOpen:!0};a.prototype.init=function(){function i(e,t,n){var i;return function(){function a(){n||e.apply(o,r),i=null}var o=this,r=arguments;i?clearTimeout(i):n&&e.apply(o,r),i=setTimeout(a,t||200)}}function a(e){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame?requestAnimationFrame(e)||webkitRequestAnimationFrame(e)||mozRequestAnimationFrame(e):setTimeout(e,1e3/60)}function o(e,t){t?v.css({"-webkit-transition":"",transition:""}):v.css({"-webkit-transition":"max-height "+h.transitionSpeed+"ms "+h.transitionEasing,transition:"max-height "+h.transitionSpeed+"ms "+h.transitionEasing})}function r(t){var n=0;t.children().each(function(){n+=e(this).outerHeight(!0)}),t.data("oHeight",n)}function c(t,n,i,a){var o,r=t.filter(".open").find("> [data-content]"),c=r.find("[data-accordion].open > [data-content]");h.singleOpen||(c=c.not(n.siblings("[data-accordion].open").find("> [data-content]"))),o=r.add(c),t.hasClass("open")&&o.each(function(){var t=e(this).data("oHeight");switch(a){case"+":e(this).data("oHeight",t+i);break;case"-":e(this).data("oHeight",t-i);break;default:throw"updateParentHeight method needs an operation"}e(this).css("max-height",e(this).data("oHeight"))})}function s(e){if(e.hasClass("open")){var t=e.find("> [data-content]"),n=t.find("[data-accordion].open > [data-content]"),i=t.add(n);r(i),i.css("max-height",i.data("oHeight"))}}function l(e,t){e.trigger("accordion.close"),b?(y&&c(e.parents("[data-accordion]"),e,t.data("oHeight"),"-"),t.css(k),e.removeClass("open")):(t.css("max-height",t.data("oHeight")),t.animate(k,h.transitionSpeed),e.removeClass("open"))}function d(e,t){e.trigger("accordion.open"),b?(o(t),y&&c(e.parents("[data-accordion]"),e,t.data("oHeight"),"+"),a(function(){t.css("max-height",t.data("oHeight"))}),e.addClass("open")):(t.animate({"max-height":t.data("oHeight")},h.transitionSpeed,function(){t.css({"max-height":"none"})}),e.addClass("open"))}function f(t){t.closest(h.groupElement);var n=t.siblings("[data-accordion]").filter(".open"),i=n.find("[data-accordion]").filter(".open"),a=n.add(i);a.each(function(){var t=e(this);l(t,t.find(h.contentElement))}),a.removeClass("open")}function u(){var e=!!h.singleOpen&&p.parents(h.groupElement).length>0;r(v),e&&f(p),p.hasClass("open")?l(p,v):d(p,v)}var m=this,h=m.options,p=e(m.element),g=p.find("> "+h.controlElement),v=p.find("> "+h.contentElement),y=p.parents("[data-accordion]").length>0,k={"max-height":0,overflow:"hidden"},b=function(){var e=(n.body||n.documentElement).style,t="transition";if("string"==typeof e[t])return!0;var i=["Moz","webkit","Webkit","Khtml","O","ms"];t="Transition";for(var a=0;a<i.length;a++)if("string"==typeof e[i[a]+t])return!0;return!1}();!function(){v.each(function(){var t=e(this);0!=t.css("max-height")&&(t.closest("[data-accordion]").hasClass("open")?(o(t),r(t),t.css("max-height",t.data("oHeight"))):t.css({"max-height":0,overflow:"hidden"}))}),p.attr("data-accordion")||(p.attr("data-accordion",""),p.find(h.controlElement).attr("data-control",""),p.find(h.contentElement).attr("data-content",""))}(),function(){g.on("click",u),g.on("accordion.toggle",function(){if(h.singleOpen&&g.length>1)return!1;u()}),g.on("accordion.refresh",function(){s(p)}),e(t).on("resize",i(function(){s(p)}))}()},e.fn[o]=function(t){return this.each(function(){e.data(this,"plugin_"+o)||e.data(this,"plugin_"+o,new a(this,t))})}}(jQuery,window,document),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,i=/iphone/i.test(n),a=/chrome/i.test(n),o=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,r){var c,s,l,d,f,u,m,h;if(!n&&this.length>0){var p=(c=e(this[0])).data(e.mask.dataName);return p?p():void 0}return r=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},r),s=e.mask.definitions,l=[],d=m=n.length,f=null,e.each(n.split(""),function(e,t){"?"==t?(m--,d=e):s[t]?(l.push(new RegExp(s[t])),null===f&&(f=l.length-1),d>e&&(u=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){function c(){if(r.completed){for(var e=f;u>=e;e++)if(l[e]&&S[e]===p(e))return;r.completed.call(H)}}function p(e){return r.placeholder.charAt(e<r.placeholder.length?e:0)}function g(e){for(;++e<m&&!l[e];);return e}function v(e){for(;--e>=0&&!l[e];);return e}function y(e,t){var n,i;if(!(0>e)){for(n=e,i=g(t);m>n;n++)if(l[n]){if(!(m>i&&l[n].test(S[i])))break;S[n]=S[i],S[i]=p(i),i=g(i)}C(),H.caret(Math.max(f,e))}}function k(e){var t,n,i,a;for(t=e,n=p(e);m>t;t++)if(l[t]){if(i=g(t),a=S[t],S[t]=n,!(m>i&&l[i].test(a)))break;n=a}}function b(){var e=H.val(),t=H.caret();if(h&&h.length&&h.length>e.length){for(E(!0);t.begin>0&&!l[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<f&&!l[t.begin];)t.begin++;H.caret(t.begin,t.begin)}else{for(E(!0);t.begin<m&&!l[t.begin];)t.begin++;H.caret(t.begin,t.begin)}c()}function x(){E(),H.val()!=T&&H.change()}function _(e){if(!H.prop("readonly")){var t,n,a,o=e.which||e.keyCode;h=H.val(),8===o||46===o||i&&127===o?(t=H.caret(),n=t.begin,(a=t.end)-n==0&&(n=46!==o?v(n):a=g(n-1),a=46===o?g(a):a),w(n,a),y(n,a-1),e.preventDefault()):13===o?x.call(this,e):27===o&&(H.val(T),H.caret(0,E()),e.preventDefault())}}function $(t){if(!H.prop("readonly")){var n,i,a,r=t.which||t.keyCode,s=H.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>r)&&r&&13!==r){if(s.end-s.begin!=0&&(w(s.begin,s.end),y(s.begin,s.end-1)),n=g(s.begin-1),m>n&&(i=String.fromCharCode(r),l[n].test(i))){if(k(n),S[n]=i,C(),a=g(n),o){var d=function(){e.proxy(e.fn.caret,H,a)()};setTimeout(d,0)}else H.caret(a);s.begin<=u&&c()}t.preventDefault()}}}function w(e,t){var n;for(n=e;t>n&&m>n;n++)l[n]&&(S[n]=p(n))}function C(){H.val(S.join(""))}function E(e){var t,n,i,a=H.val(),o=-1;for(t=0,i=0;m>t;t++)if(l[t]){for(S[t]=p(t);i++<a.length;)if(n=a.charAt(i-1),l[t].test(n)){S[t]=n,o=t;break}if(i>a.length){w(t+1,m);break}}else S[t]===a.charAt(i)&&i++,d>t&&(o=t);return e?C():d>o+1?r.autoclear||S.join("")===F?(H.val()&&H.val(""),w(0,m)):C():(C(),H.val(H.val().substring(0,o+1))),d?t:f}var H=e(this),S=e.map(n.split(""),function(e,t){return"?"!=e?s[e]?p(t):e:void 0}),F=S.join(""),T=H.val();H.data(e.mask.dataName,function(){return e.map(S,function(e,t){return l[t]&&e!=p(t)?e:null}).join("")}),H.one("unmask",function(){H.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!H.prop("readonly")){clearTimeout(t);var e;T=H.val(),e=E(),t=setTimeout(function(){H.get(0)===document.activeElement&&(C(),e==n.replace("?","").length?H.caret(0,e):H.caret(e))},10)}}).on("blur.mask",x).on("keydown.mask",_).on("keypress.mask",$).on("input.mask paste.mask",function(){H.prop("readonly")||setTimeout(function(){var e=E(!0);H.caret(e),c()},0)}),a&&o&&H.off("input.mask").on("input.mask",b),E()})}})}),$(function(){var e=function(e,t){var n=e.find(".slider__item"),i=n.filter(".active"),a=n.eq(t),o=a.index(),r=e.find(".slider");a.length&&r.animate({left:100*-o+"%"},500,function(){i.removeClass("active"),a.addClass("active")})};$(".slider__button").on("click",function(t){t.preventDefault();var n,i,a,o=$(this),r=$(".wrapper-carousel"),c=$(".slider__item",r),s=c.filter(".active");s.next(),s.prev();o.hasClass("slider__button-next")&&(n=s.next(),i=c.first()),o.hasClass("slider__button-prev")&&(n=s.prev(),i=c.last()),a=n.length?n.index():i.index(),e(r,a)})}),$(function(){var e=$(".section"),t=$(".maincontent"),n=!1,i=function(i){var a=0;n||(n=!0,a=-100*e.eq(i).index()+"%",e.eq(i).addClass("active").siblings().removeClass("active"),t.css({transform:"translate3d(0, "+a+", 0)"}),setTimeout(function(){n=!1,$(".aside-menu__item").eq(i).addClass("active").siblings().removeClass("active")},1300))};$(".wrapper").on("wheel",function(t){var n=t.originalEvent.deltaY,a=e.filter(".active"),o=a.next(),r=a.prev();n>0&&o.length&&i(o.index()),n<0&&r.length&&i(r.index())}),$(".arrow").on("click",function(e){e.preventDefault(),i(1)}),$(".aside-menu__link, .navigation__link, .order-link, .slider__buy").on("click",function(e){e.preventDefault();var t=parseInt($(this).attr("href"));i(t)}),$(document).on("keydown",function(t){var n=e.filter(".active"),a=n.next(),o=n.prev();switch(t.keyCode){case 40:a.length&&i(a.index());break;case 38:o.length&&i(o.index())}})}),$(function(){$(".accordion").accordion({transitionSpeed:500,groupElement:"[data-accordion-group]",transitionEasing:"ease"})}),$(function(){$(".menu__link").on("click",function(e){e.preventDefault();var t=$(this),n=t.closest(".menu__list"),i=t.closest(".menu__item"),a=n.find(".menu__item"),o=a.filter(".active"),r=i.find(".menu__content"),c=o.find(".menu__content");i.hasClass("active")?(i.removeClass("active"),r.animate({width:"0px"})):(a.removeClass("active"),i.addClass("active"),c.animate({width:"0px"}),r.animate({width:"550px"}))}),$(document).on("click",function(e){$(e.target).closest(".menu__list").length||($(".menu__content").animate({width:"0px"}),$(".menu__item").removeClass("active"))})}),$(function(){$(".order__form-input_phone").mask("+7(999) 999-99-99")}),$(function(){$(".review__button-link").fancybox({type:"inline",maxWidth:460,fitToView:!1,padding:0}),$(".full-review__close").on("click",function(e){e.preventDefault(),$.fancybox.close()})}),ymaps.ready(init);var myMap,validation=function(){function e(e){$(e).on("keydown",".error",t),$(e).on("click",".error",t),$(e).on("reset",i)}function t(){$(this).removeClass("error")}function n(e){e.addClass("error"),a(e,e.data("position"))}function i(){var e=$(this);e.find(".error").removeClass("error"),e.find("input[data-content]").trigger("hideTooltip")}function a(e,t){t=t||"left",position={left:{my:"center right",at:"center left"},right:{my:"center left",at:"center right"},bottom:{my:"bottom center",at:"top center"},top:{my:"bottom center",at:"top center"}},e.qtip({content:{text:function(){return $(this).data("content")}},show:{event:"show"},hide:{event:"keydown click hideTooltip",event:!1,inactive:2e3},position:position[t],style:{classes:"qtip-mystyle qtip-rounded",tip:{height:7,width:10}}}).trigger("show")}var o=[];return{validateForm:function(t){var i=t.attr("id");void 0==o[i]&&(o[i]=!0,e(t));var a=t.find("input[data-content]").not('input[type="hidden"]'),r=!0;return $.each(a,function(e,t){var i=$(t);i.val().length||(n(i),r=!1)}),r}}}(),MyForm=function(e,t){this.form=e,this.url=t,this.init=function(){this.addListener(this.form)}};if(MyForm.prototype.addListener=function(e){$(e).on("submit",$.proxy(this.submitForm,this))},MyForm.prototype.submitForm=function(e){e.preventDefault();var t=$(this.form),n=this.ajaxForm(t,this.url);n&&n.done(function(e){e.status?$.fancybox.open([{href:"#success"}],{type:"inline",maxWidth:196,fitToView:!1,padding:0,afterClose:function(){form.trigger("reset")}}):$.fancybox.open([{href:"#error"}],{type:"inline",maxWidth:196,fitToView:!1,padding:0,afterClose:function(){form.trigger("reset")}}),$(".modal__button").on("click",function(e){e.preventDefault(),$.fancybox.close()})})},MyForm.prototype.ajaxForm=function(e,t){if(!validation.validateForm(e))return!1;var n=e.serialize();return $.ajax({type:"POST",url:this.url,dataType:"JSON",data:n}).fail(function(e){console.log("Проблемы в PHP")})},$("#order").length){var formMail=new MyForm($("#order"),"../mailer.php");formMail.init()}
//# sourceMappingURL=maps/main.js.map
