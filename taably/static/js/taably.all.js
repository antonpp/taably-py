/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
$(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});
/*
 * jQuery miniColors: A small color selector
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 *
*/
if(jQuery) (function($) {
	
	$.extend($.fn, {
		
		miniColors: function(o, data) {
			
			var create = function(input, o, data) {
				//
				// Creates a new instance of the miniColors selector
				//
				
				// Determine initial color (defaults to white)
				var color = expandHex(input.val());
				if( !color ) color = 'ffffff';
				var hsb = hex2hsb(color);
				
				// Create trigger
				var trigger = $('<a class="miniColors-trigger" style="background-color: #' + color + '" href="#"></a>');
				trigger.insertAfter(input);
				
				// Set input data and update attributes
				input
					.addClass('miniColors')
					.data('original-maxlength', input.attr('maxlength') || null)
					.data('original-autocomplete', input.attr('autocomplete') || null)
					.data('letterCase', 'uppercase')
					.data('trigger', trigger)
					.data('hsb', hsb)
					.data('change', o.change ? o.change : null)
					.attr('maxlength', 7)
					.attr('autocomplete', 'off')
					.val('#' + convertCase(color, o.letterCase));
				
				// Handle options
				if( o.readonly ) input.prop('readonly', true);
				if( o.disabled ) disable(input);
				
				// Show selector when trigger is clicked
				trigger.bind('click.miniColors', function(event) {
					event.preventDefault();
					if( input.val() === '' ) input.val('#');
					show(input);

				});
				
				// Show selector when input receives focus
				input.bind('focus.miniColors', function(event) {
					if( input.val() === '' ) input.val('#');
					show(input);
				});
				
				// Hide on blur
				input.bind('blur.miniColors', function(event) {
					var hex = expandHex(input.val());
					input.val( hex ? '#' + convertCase(hex, input.data('letterCase')) : '' );
				});
				
				// Hide when tabbing out of the input
				input.bind('keydown.miniColors', function(event) {
					if( event.keyCode === 9 ) hide(input);
				});
				
				// Update when color is typed in
				input.bind('keyup.miniColors', function(event) {
					setColorFromInput(input);
				});
				
				// Handle pasting
				input.bind('paste.miniColors', function(event) {
					// Short pause to wait for paste to complete
					setTimeout( function() {
						setColorFromInput(input);
					}, 5);
				});
				
			};
			
			var destroy = function(input) {
				//
				// Destroys an active instance of the miniColors selector
				//
				
				hide();
				input = $(input);
				
				// Restore to original state
				input.data('trigger').remove();
				input
					.attr('autocomplete', input.data('original-autocomplete'))
					.attr('maxlength', input.data('original-maxlength'))
					.removeData()
					.removeClass('miniColors')
					.unbind('.miniColors');
				$(document).unbind('.miniColors');
			};
			
			var enable = function(input) {
				//
				// Enables the input control and the selector
				//
				input
					.prop('disabled', false)
					.data('trigger')
					.css('opacity', 1);
			};
			
			var disable = function(input) {
				//
				// Disables the input control and the selector
				//
				hide(input);
				input
					.prop('disabled', true)
					.data('trigger')
					.css('opacity', 0.5);
			};
			
			var show = function(input) {
				//
				// Shows the miniColors selector
				//
				if( input.prop('disabled') ) return false;
				
				// Hide all other instances 
				hide();				
				
				// Generate the selector
				var selector = $('<div class="miniColors-selector"></div>');
				selector
					.append('<div class="miniColors-colors" style="background-color: #FFF;"><div class="miniColors-colorPicker"></div></div>')
					.append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>')
					.css({
						top: input.is(':visible') ? input.offset().top + input.outerHeight() : input.data('trigger').offset().top + input.data('trigger').outerHeight(),
						left: input.is(':visible') ? input.offset().left : input.data('trigger').offset().left,
						display: 'none'
					})
					.addClass( input.attr('class') );
				
				// Set background for colors
				var hsb = input.data('hsb');
				selector
					.find('.miniColors-colors')
					.css('backgroundColor', '#' + hsb2hex({ h: hsb.h, s: 100, b: 100 }));
				
				// Set colorPicker position
				var colorPosition = input.data('colorPosition');
				if( !colorPosition ) colorPosition = getColorPositionFromHSB(hsb);
				selector.find('.miniColors-colorPicker')
					.css('top', colorPosition.y + 'px')
					.css('left', colorPosition.x + 'px');
				
				// Set huePicker position
				var huePosition = input.data('huePosition');
				if( !huePosition ) huePosition = getHuePositionFromHSB(hsb);
				selector.find('.miniColors-huePicker').css('top', huePosition.y + 'px');
				
				// Set input data
				input
					.data('selector', selector)
					.data('huePicker', selector.find('.miniColors-huePicker'))
					.data('colorPicker', selector.find('.miniColors-colorPicker'))
					.data('mousebutton', 0);
					
				$('BODY').append(selector);
				selector.fadeIn(100);
				
				// Prevent text selection in IE
				selector.bind('selectstart', function() { return false; });
				
				$(document).bind('mousedown.miniColors touchstart.miniColors', function(event) {
					
					input.data('mousebutton', 1);
					
					if( $(event.target).parents().andSelf().hasClass('miniColors-colors') ) {
						event.preventDefault();
						input.data('moving', 'colors');
						moveColor(input, event);
					}
					
					if( $(event.target).parents().andSelf().hasClass('miniColors-hues') ) {
						event.preventDefault();
						input.data('moving', 'hues');
						moveHue(input, event);
					}
					
					if( $(event.target).parents().andSelf().hasClass('miniColors-selector') ) {
						event.preventDefault();
						return;
					}
					
					if( $(event.target).parents().andSelf().hasClass('miniColors') ) return;
					
					hide(input);
				});
				
				$(document)
					.bind('mouseup.miniColors touchend.miniColors', function(event) {
					    event.preventDefault();
						input.data('mousebutton', 0).removeData('moving');
					})
					.bind('mousemove.miniColors touchmove.miniColors', function(event) {
						event.preventDefault();
						if( input.data('mousebutton') === 1 ) {
							if( input.data('moving') === 'colors' ) moveColor(input, event);
							if( input.data('moving') === 'hues' ) moveHue(input, event);
						}
					});
				
			};
			
			var hide = function(input) {
				
				//
				// Hides one or more miniColors selectors
				//
				
				// Hide all other instances if input isn't specified
				if( !input ) input = '.miniColors';
				
				$(input).each( function() {
					var selector = $(this).data('selector');
					$(this).removeData('selector');
					$(selector).fadeOut(100, function() {
						$(this).remove();
					});
				});
				
				$(document)
					.unbind('mousedown.miniColors touchstart.miniColors')
					.unbind('mousemove.miniColors touchmove.miniColors');
				
			};
			
			var moveColor = function(input, event) {

				var colorPicker = input.data('colorPicker');
				
				colorPicker.hide();
				
				var position = {
					x: event.pageX,
					y: event.pageY
				};
				
				// Touch support
				if( event.originalEvent.changedTouches ) {
					position.x = event.originalEvent.changedTouches[0].pageX;
					position.y = event.originalEvent.changedTouches[0].pageY;
				}
				position.x = position.x - input.data('selector').find('.miniColors-colors').offset().left - 5;
				position.y = position.y - input.data('selector').find('.miniColors-colors').offset().top - 5;
				if( position.x <= -5 ) position.x = -5;
				if( position.x >= 144 ) position.x = 144;
				if( position.y <= -5 ) position.y = -5;
				if( position.y >= 144 ) position.y = 144;
				
				input.data('colorPosition', position);
				colorPicker.css('left', position.x).css('top', position.y).show();
				
				// Calculate saturation
				var s = Math.round((position.x + 5) * 0.67);
				if( s < 0 ) s = 0;
				if( s > 100 ) s = 100;
				
				// Calculate brightness
				var b = 100 - Math.round((position.y + 5) * 0.67);
				if( b < 0 ) b = 0;
				if( b > 100 ) b = 100;
				
				// Update HSB values
				var hsb = input.data('hsb');
				hsb.s = s;
				hsb.b = b;
				
				// Set color
				setColor(input, hsb, true);
			};
			
			var moveHue = function(input, event) {
				
				var huePicker = input.data('huePicker');
				
				huePicker.hide();
				
				var position = {
					y: event.pageY
				};
				
				// Touch support
				if( event.originalEvent.changedTouches ) {
					position.y = event.originalEvent.changedTouches[0].pageY;
				}
				
				position.y = position.y - input.data('selector').find('.miniColors-colors').offset().top - 1;
				if( position.y <= -1 ) position.y = -1;
				if( position.y >= 149 ) position.y = 149;
				input.data('huePosition', position);
				huePicker.css('top', position.y).show();
				
				// Calculate hue
				var h = Math.round((150 - position.y - 1) * 2.4);
				if( h < 0 ) h = 0;
				if( h > 360 ) h = 360;
				
				// Update HSB values
				var hsb = input.data('hsb');
				hsb.h = h;
				
				// Set color
				setColor(input, hsb, true);
				
			};
			
			var setColor = function(input, hsb, updateInput) {
				input.data('hsb', hsb);
				var hex = hsb2hex(hsb);	
				if( updateInput ) input.val( '#' + convertCase(hex, input.data('letterCase')) );
				input.data('trigger').css('backgroundColor', '#' + hex);
				if( input.data('selector') ) input.data('selector').find('.miniColors-colors').css('backgroundColor', '#' + hsb2hex({ h: hsb.h, s: 100, b: 100 }));
				
				// Fire change callback
				if( input.data('change') ) {
					if( hex === input.data('lastChange') ) return;
					input.data('change').call(input, '#' + hex, hsb2rgb(hsb));
					input.data('lastChange', hex);
				}
				
			};
			
			var setColorFromInput = function(input) {
				
				input.val('#' + cleanHex(input.val()));
				var hex = expandHex(input.val());
				if( !hex ) return false;
				
				// Get HSB equivalent
				var hsb = hex2hsb(hex);
				
				// If color is the same, no change required
				var currentHSB = input.data('hsb');
				if( hsb.h === currentHSB.h && hsb.s === currentHSB.s && hsb.b === currentHSB.b ) return true;
				
				// Set colorPicker position
				var colorPosition = getColorPositionFromHSB(hsb);
				var colorPicker = $(input.data('colorPicker'));
				colorPicker.css('top', colorPosition.y + 'px').css('left', colorPosition.x + 'px');
				input.data('colorPosition', colorPosition);
				
				// Set huePosition position
				var huePosition = getHuePositionFromHSB(hsb);
				var huePicker = $(input.data('huePicker'));
				huePicker.css('top', huePosition.y + 'px');
				input.data('huePosition', huePosition);
				
				setColor(input, hsb);
				
				return true;
				
			};
			
			var convertCase = function(string, letterCase) {
				if( letterCase === 'lowercase' ) return string.toLowerCase();
				if( letterCase === 'uppercase' ) return string.toUpperCase();
				return string;
			};
			
			var getColorPositionFromHSB = function(hsb) {				
				var x = Math.ceil(hsb.s / 0.67);
				if( x < 0 ) x = 0;
				if( x > 150 ) x = 150;
				var y = 150 - Math.ceil(hsb.b / 0.67);
				if( y < 0 ) y = 0;
				if( y > 150 ) y = 150;
				return { x: x - 5, y: y - 5 };
			};
			
			var getHuePositionFromHSB = function(hsb) {
				var y = 150 - (hsb.h / 2.4);
				if( y < 0 ) h = 0;
				if( y > 150 ) h = 150;				
				return { y: y - 1 };
			};
			
			var cleanHex = function(hex) {
				return hex.replace(/[^A-F0-9]/ig, '');
			};
			
			var expandHex = function(hex) {
				hex = cleanHex(hex);
				if( !hex ) return null;
				if( hex.length === 3 ) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
				return hex.length === 6 ? hex : null;
			};			
			
			var hsb2rgb = function(hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s === 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255 - s) * v / 255;
					var t3 = (t1 - t2) * (h % 60) / 60;
					if( h === 360 ) h = 0;
					if( h < 60 ) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3; }
					else if( h < 120 ) {rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3; }
					else if( h < 180 ) {rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3; }
					else if( h < 240 ) {rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3; }
					else if( h < 300 ) {rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3; }
					else if( h < 360 ) {rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3; }
					else { rgb.r = 0; rgb.g = 0; rgb.b = 0; }
				}
				return {
					r: Math.round(rgb.r),
					g: Math.round(rgb.g),
					b: Math.round(rgb.b)
				};
			};
			
			var rgb2hex = function(rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function(nr, val) {
					if (val.length === 1) hex[nr] = '0' + val;
				});
				return hex.join('');
			};
			
			var hex2rgb = function(hex) {
				hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				
				return {
					r: hex >> 16,
					g: (hex & 0x00FF00) >> 8,
					b: (hex & 0x0000FF)
				};
			};
			
			var rgb2hsb = function(rgb) {
				var hsb = { h: 0, s: 0, b: 0 };
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				hsb.s = max !== 0 ? 255 * delta / max : 0;
				if( hsb.s !== 0 ) {
					if( rgb.r === max ) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if( rgb.g === max ) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if( hsb.h < 0 ) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			};			
			
			var hex2hsb = function(hex) {
				var hsb = rgb2hsb(hex2rgb(hex));
				// Zero out hue marker for black, white, and grays (saturation === 0)
				if( hsb.s === 0 ) hsb.h = 360;
				return hsb;
			};
			
			var hsb2hex = function(hsb) {
				return rgb2hex(hsb2rgb(hsb));
			};

			
			// Handle calls to $([selector]).miniColors()
			switch(o) {
			
				case 'readonly':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						$(this).prop('readonly', data);
					});
					
					return $(this);
				
				case 'disabled':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						if( data ) {
							disable($(this));
						} else {
							enable($(this));
						}
					});
										
					return $(this);
			
				case 'value':
					
					// Getter
					if( data === undefined ) {
						if( !$(this).hasClass('miniColors') ) return;
						var input = $(this),
							hex = expandHex(input.val());
						return hex ? '#' + convertCase(hex, input.data('letterCase')) : null;
					}
					
					// Setter
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						$(this).val(data);
						setColorFromInput($(this));
					});
					
					return $(this);
					
				case 'destroy':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						destroy($(this));
					});
										
					return $(this);
				
				default:
					
					if( !o ) o = {};
					
					$(this).each( function() {
						
						// Must be called on an input element
						if( $(this)[0].tagName.toLowerCase() !== 'input' ) return;
						
						// If a trigger is present, the control was already created
						if( $(this).data('trigger') ) return;
						
						// Create the control
						create($(this), o, data);
						
					});
					
					return $(this);
					
			}
			
		}
			
	});
	
})(jQuery);/* build: `node build.js modules=ALL` */
/*! Fabric.js Copyright 2008-2012, Bitsonnet (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || { version: "0.8.32" };

if (typeof exports != 'undefined') {
  exports.fabric = fabric;
}

if (typeof document != 'undefined' && typeof window != 'undefined') {
  fabric.document = document;
  fabric.window = window;
}
else {
  // assume we're running under node.js when document/window are not present
  fabric.document = require("jsdom").jsdom("<!DOCTYPE html><html><head></head><body></body></html>");
  fabric.window = fabric.document.createWindow();
}

/**
 * True when in environment that supports touch events
 * @property isTouchSupported
 * @type boolean
 */
fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement;
/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*!
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 */

var Cufon = (function() {

  var api = function() {
    return api.replace.apply(null, arguments);
  };

  var DOM = api.DOM = {

    ready: (function() {

      var complete = false, readyStatus = { loaded: 1, complete: 1 };

      var queue = [], perform = function() {
        if (complete) return;
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Gecko, Opera, WebKit r26101+

      if (fabric.document.addEventListener) {
        fabric.document.addEventListener('DOMContentLoaded', perform, false);
        fabric.window.addEventListener('pageshow', perform, false); // For cached Gecko pages
      }

      // Old WebKit, Internet Explorer

      if (!fabric.window.opera && fabric.document.readyState) (function() {
        readyStatus[fabric.document.readyState] ? perform() : setTimeout(arguments.callee, 10);
      })();

      // Internet Explorer

      if (fabric.document.readyState && fabric.document.createStyleSheet) (function() {
        try {
          fabric.document.body.doScroll('left');
          perform();
        }
        catch (e) {
          setTimeout(arguments.callee, 1);
        }
      })();

      addEvent(fabric.window, 'load', perform); // Fallback

      return function(listener) {
        if (!arguments.length) perform();
        else complete ? listener() : queue.push(listener);
      };

    })()

  };

  var CSS = api.CSS = {

    Size: function(value, base) {

      this.value = parseFloat(value);
      this.unit = String(value).match(/[a-z%]*$/)[0] || 'px';

      this.convert = function(value) {
        return value / base * this.value;
      };

      this.convertFrom = function(value) {
        return value / this.value * base;
      };

      this.toString = function() {
        return this.value + this.unit;
      };

    },

    getStyle: function(el) {
      return new Style(el.style);
      /*
      var view = document.defaultView;
      if (view && view.getComputedStyle) return new Style(view.getComputedStyle(el, null));
      if (el.currentStyle) return new Style(el.currentStyle);
      return new Style(el.style);
      */
    },

    quotedList: cached(function(value) {
      // doesn't work properly with empty quoted strings (""), but
      // it's not worth the extra code.
      var list = [], re = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g, match;
      while (match = re.exec(value)) list.push(match[3] || match[1]);
      return list;
    }),

    ready: (function() {

      var complete = false;

      var queue = [], perform = function() {
        complete = true;
        for (var fn; fn = queue.shift(); fn());
      };

      // Safari 2 does not include <style> elements in document.styleSheets.
      // Safari 2 also does not support Object.prototype.propertyIsEnumerable.

      var styleElements = Object.prototype.propertyIsEnumerable ? elementsByTagName('style') : { length: 0 };
      var linkElements = elementsByTagName('link');

      DOM.ready(function() {
        // These checks are actually only needed for WebKit-based browsers, but don't really hurt other browsers.
        var linkStyles = 0, link;
        for (var i = 0, l = linkElements.length; link = linkElements[i], i < l; ++i) {
          // WebKit does not load alternate stylesheets.
          if (!link.disabled && link.rel.toLowerCase() == 'stylesheet') ++linkStyles;
        }
        if (fabric.document.styleSheets.length >= styleElements.length + linkStyles) perform();
        else setTimeout(arguments.callee, 10);
      });

      return function(listener) {
        if (complete) listener();
        else queue.push(listener);
      };

    })(),

    supports: function(property, value) {
      var checker = fabric.document.createElement('span').style;
      if (checker[property] === undefined) return false;
      checker[property] = value;
      return checker[property] === value;
    },

    textAlign: function(word, style, position, wordCount) {
      if (style.get('textAlign') == 'right') {
        if (position > 0) word = ' ' + word;
      }
      else if (position < wordCount - 1) word += ' ';
      return word;
    },

    textDecoration: function(el, style) {
      if (!style) style = this.getStyle(el);
      var types = {
        underline: null,
        overline: null,
        'line-through': null
      };
      for (var search = el; search.parentNode && search.parentNode.nodeType == 1; ) {
        var foundAll = true;
        for (var type in types) {
          if (types[type]) continue;
          if (style.get('textDecoration').indexOf(type) != -1) types[type] = style.get('color');
          foundAll = false;
        }
        if (foundAll) break; // this is rather unlikely to happen
        style = this.getStyle(search = search.parentNode);
      }
      return types;
    },

    textShadow: cached(function(value) {
      if (value == 'none') return null;
      var shadows = [], currentShadow = {}, result, offCount = 0;
      var re = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
      while (result = re.exec(value)) {
        if (result[0] == ',') {
          shadows.push(currentShadow);
          currentShadow = {}, offCount = 0;
        }
        else if (result[1]) {
          currentShadow.color = result[1];
        }
        else {
          currentShadow[[ 'offX', 'offY', 'blur' ][offCount++]] = result[2];
        }
      }
      shadows.push(currentShadow);
      return shadows;
    }),

    color: cached(function(value) {
      var parsed = {};
      parsed.color = value.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function($0, $1, $2) {
        parsed.opacity = parseFloat($2);
        return 'rgb(' + $1 + ')';
      });
      return parsed;
    }),

    textTransform: function(text, style) {
      return text[{
        uppercase: 'toUpperCase',
        lowercase: 'toLowerCase'
      }[style.get('textTransform')] || 'toString']();
    }

  };

  function Font(data) {

    var face = this.face = data.face;
    this.glyphs = data.glyphs;
    this.w = data.w;
    this.baseSize = parseInt(face['units-per-em'], 10);

    this.family = face['font-family'].toLowerCase();
    this.weight = face['font-weight'];
    this.style = face['font-style'] || 'normal';

    this.viewBox = (function () {
      var parts = face.bbox.split(/\s+/);
      var box = {
        minX: parseInt(parts[0], 10),
        minY: parseInt(parts[1], 10),
        maxX: parseInt(parts[2], 10),
        maxY: parseInt(parts[3], 10)
      };
      box.width = box.maxX - box.minX,
      box.height = box.maxY - box.minY;
      box.toString = function() {
        return [ this.minX, this.minY, this.width, this.height ].join(' ');
      };
      return box;
    })();

    this.ascent = -parseInt(face.ascent, 10);
    this.descent = -parseInt(face.descent, 10);

    this.height = -this.ascent + this.descent;

  }

  function FontFamily() {

    var styles = {}, mapping = {
      oblique: 'italic',
      italic: 'oblique'
    };

    this.add = function(font) {
      (styles[font.style] || (styles[font.style] = {}))[font.weight] = font;
    };

    this.get = function(style, weight) {
      var weights = styles[style] || styles[mapping[style]]
        || styles.normal || styles.italic || styles.oblique;
      if (!weights) return null;
      // we don't have to worry about "bolder" and "lighter"
      // because IE's currentStyle returns a numeric value for it,
      // and other browsers use the computed value anyway
      weight = {
        normal: 400,
        bold: 700
      }[weight] || parseInt(weight, 10);
      if (weights[weight]) return weights[weight];
      // http://www.w3.org/TR/CSS21/fonts.html#propdef-font-weight
      // Gecko uses x99/x01 for lighter/bolder
      var up = {
        1: 1,
        99: 0
      }[weight % 100], alts = [], min, max;
      if (up === undefined) up = weight > 400;
      if (weight == 500) weight = 400;
      for (var alt in weights) {
        alt = parseInt(alt, 10);
        if (!min || alt < min) min = alt;
        if (!max || alt > max) max = alt;
        alts.push(alt);
      }
      if (weight < min) weight = min;
      if (weight > max) weight = max;
      alts.sort(function(a, b) {
        return (up
          ? (a > weight && b > weight) ? a < b : a > b
          : (a < weight && b < weight) ? a > b : a < b) ? -1 : 1;
      });
      return weights[alts[0]];
    };

  }

  function HoverHandler() {

    function contains(node, anotherNode) {
      if (node.contains) return node.contains(anotherNode);
      return node.compareDocumentPosition(anotherNode) & 16;
    }

    function onOverOut(e) {
      var related = e.relatedTarget;
      if (!related || contains(this, related)) return;
      trigger(this);
    }

    function onEnterLeave(e) {
      trigger(this);
    }

    function trigger(el) {
      // A timeout is needed so that the event can actually "happen"
      // before replace is triggered. This ensures that styles are up
      // to date.
      setTimeout(function() {
        api.replace(el, sharedStorage.get(el).options, true);
      }, 10);
    }

    this.attach = function(el) {
      if (el.onmouseenter === undefined) {
        addEvent(el, 'mouseover', onOverOut);
        addEvent(el, 'mouseout', onOverOut);
      }
      else {
        addEvent(el, 'mouseenter', onEnterLeave);
        addEvent(el, 'mouseleave', onEnterLeave);
      }
    };

  }

  function Storage() {

    var map = {}, at = 0;

    function identify(el) {
      return el.cufid || (el.cufid = ++at);
    }

    this.get = function(el) {
      var id = identify(el);
      return map[id] || (map[id] = {});
    };

  }

  function Style(style) {

    var custom = {}, sizes = {};

    this.get = function(property) {
      return custom[property] != undefined ? custom[property] : style[property];
    };

    this.getSize = function(property, base) {
      return sizes[property] || (sizes[property] = new CSS.Size(this.get(property), base));
    };

    this.extend = function(styles) {
      for (var property in styles) custom[property] = styles[property];
      return this;
    };

  }

  function addEvent(el, type, listener) {
    if (el.addEventListener) {
      el.addEventListener(type, listener, false);
    }
    else if (el.attachEvent) {
      el.attachEvent('on' + type, function() {
        return listener.call(el, fabric.window.event);
      });
    }
  }

  function attach(el, options) {
    var storage = sharedStorage.get(el);
    if (storage.options) return el;
    if (options.hover && options.hoverables[el.nodeName.toLowerCase()]) {
      hoverHandler.attach(el);
    }
    storage.options = options;
    return el;
  }

  function cached(fun) {
    var cache = {};
    return function(key) {
      if (!cache.hasOwnProperty(key)) cache[key] = fun.apply(null, arguments);
      return cache[key];
    };
  }

  function getFont(el, style) {
    if (!style) style = CSS.getStyle(el);
    var families = CSS.quotedList(style.get('fontFamily').toLowerCase()), family;
    for (var i = 0, l = families.length; i < l; ++i) {
      family = families[i];
      if (fonts[family]) return fonts[family].get(style.get('fontStyle'), style.get('fontWeight'));
    }
    return null;
  }

  function elementsByTagName(query) {
    return fabric.document.getElementsByTagName(query);
  }

  function merge() {
    var merged = {}, key;
    for (var i = 0, l = arguments.length; i < l; ++i) {
      for (key in arguments[i]) merged[key] = arguments[i][key];
    }
    return merged;
  }

  function process(font, text, style, options, node, el) {

    var separate = options.separate;
    if (separate == 'none') return engines[options.engine].apply(null, arguments);
    var fragment = fabric.document.createDocumentFragment(), processed;
    var parts = text.split(separators[separate]), needsAligning = (separate == 'words');
    if (needsAligning && HAS_BROKEN_REGEXP) {
      // @todo figure out a better way to do this
      if (/^\s/.test(text)) parts.unshift('');
      if (/\s$/.test(text)) parts.push('');
    }
    for (var i = 0, l = parts.length; i < l; ++i) {
      processed = engines[options.engine](font,
        needsAligning ? CSS.textAlign(parts[i], style, i, l) : parts[i],
        style, options, node, el, i < l - 1);
      if (processed) fragment.appendChild(processed);
    }
    return fragment;
  }

  function replaceElement(el, options) {
    var font, style, nextNode, redraw;
    for (var node = attach(el, options).firstChild; node; node = nextNode) {
      nextNode = node.nextSibling;
      redraw = false;
      if (node.nodeType == 1) {
        if (!node.firstChild) continue;
        if (!/cufon/.test(node.className)) {
          arguments.callee(node, options);
          continue;
        }
        else redraw = true;
      }
      if (!style) style = CSS.getStyle(el).extend(options);
      if (!font) font = getFont(el, style);

      if (!font) continue;
      if (redraw) {
        engines[options.engine](font, null, style, options, node, el);
        continue;
      }
      var text = node.data;
      //for some reason, the carriage return is not stripped by IE but "\n" is, so let's keep \r as a new line marker...
      if (typeof G_vmlCanvasManager != 'undefined') {
          text = text.replace(/\r/g, "\n");
      }
      if (text === '') continue;
      var processed = process(font, text, style, options, node, el);
      if (processed) node.parentNode.replaceChild(processed, node);
      else node.parentNode.removeChild(node);
    }
  }

  var HAS_BROKEN_REGEXP = ' '.split(/\s+/).length == 0;

  var sharedStorage = new Storage();
  var hoverHandler = new HoverHandler();
  var replaceHistory = [];

  var engines = {}, fonts = {}, defaultOptions = {
    engine: null,
    //fontScale: 1,
    //fontScaling: false,
    hover: false,
    hoverables: {
      a: true
    },
    printable: true,
    //rotation: 0,
    //selectable: false,
    selector: (
        fabric.window.Sizzle
      ||  (fabric.window.jQuery && function(query) { return jQuery(query); }) // avoid noConflict issues
      ||  (fabric.window.dojo && dojo.query)
      ||  (fabric.window.$$ && function(query) { return $$(query); })
      ||  (fabric.window.$ && function(query) { return $(query); })
      ||  (fabric.document.querySelectorAll && function(query) { return fabric.document.querySelectorAll(query); })
      ||  elementsByTagName
    ),
    separate: 'words', // 'none' and 'characters' are also accepted
    textShadow: 'none'
  };

  var separators = {
    words: /\s+/,
    characters: ''
  };

  api.now = function() {
    DOM.ready();
    return api;
  };

  api.refresh = function() {
    var currentHistory = replaceHistory.splice(0, replaceHistory.length);
    for (var i = 0, l = currentHistory.length; i < l; ++i) {
      api.replace.apply(null, currentHistory[i]);
    }
    return api;
  };

  api.registerEngine = function(id, engine) {
    if (!engine) return api;
    engines[id] = engine;
    return api.set('engine', id);
  };

  api.registerFont = function(data) {
    var font = new Font(data), family = font.family;
    if (!fonts[family]) fonts[family] = new FontFamily();
    fonts[family].add(font);
    return api.set('fontFamily', '"' + family + '"');
  };

  api.replace = function(elements, options, ignoreHistory) {
    options = merge(defaultOptions, options);
    if (!options.engine) return api; // there's no browser support so we'll just stop here
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    if (!ignoreHistory) replaceHistory.push(arguments);
    if (elements.nodeType || typeof elements == 'string') elements = [ elements ];
    CSS.ready(function() {
      for (var i = 0, l = elements.length; i < l; ++i) {
        var el = elements[i];
        if (typeof el == 'string') api.replace(options.selector(el), options, true);
        else replaceElement(el, options);
      }
    });
    return api;
  };

  api.replaceElement = function(el, options) {
    options = merge(defaultOptions, options);
    if (typeof options.textShadow == 'string' && options.textShadow)
      options.textShadow = CSS.textShadow(options.textShadow);
    return replaceElement(el, options);
  };

  // ==>
  api.engines = engines;
  api.fonts = fonts;
  api.getOptions = function() {
    return merge(defaultOptions);
  }
  // <==

  api.set = function(option, value) {
    defaultOptions[option] = value;
    return api;
  };

  return api;

})();

Cufon.registerEngine('canvas', (function() {

  // Safari 2 doesn't support .apply() on native methods
  var HAS_INLINE_BLOCK = Cufon.CSS.supports('display', 'inline-block');

  // Firefox 2 w/ non-strict doctype (almost standards mode)
  var HAS_BROKEN_LINEHEIGHT = !HAS_INLINE_BLOCK && (fabric.document.compatMode == 'BackCompat' || /frameset|transitional/i.test(fabric.document.doctype.publicId));

  var styleSheet = fabric.document.createElement('style');
  styleSheet.type = 'text/css';

    var textNode = fabric.document.createTextNode(
        '.cufon-canvas{text-indent:0}' +
        '@media screen,projection{' +
          '.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle' +
          (HAS_BROKEN_LINEHEIGHT
            ? ''
            : ';font-size:1px;line-height:1px') +
          '}.cufon-canvas .cufon-alt{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden}' +
          (HAS_INLINE_BLOCK
            ? '.cufon-canvas canvas{position:relative}'
            : '.cufon-canvas canvas{position:absolute}') +
        '}' +
        '@media print{' +
          '.cufon-canvas{padding:0 !important}' +
          '.cufon-canvas canvas{display:none}' +
          '.cufon-canvas .cufon-alt{display:inline}' +
        '}'
      )

  try {
      styleSheet.appendChild(textNode);
  } catch(e) {
      //IE8- can't do this...
      styleSheet.setAttribute("type", "text/css");
      styleSheet.styleSheet.cssText = textNode.data;
  }
  fabric.document.getElementsByTagName('head')[0].appendChild(styleSheet);

  function generateFromVML(path, context) {
    var atX = 0, atY = 0;
    var code = [], re = /([mrvxe])([^a-z]*)/g, match;
    generate: for (var i = 0; match = re.exec(path); ++i) {
      var c = match[2].split(',');
      switch (match[1]) {
        case 'v':
          code[i] = { m: 'bezierCurveTo', a: [ atX + ~~c[0], atY + ~~c[1], atX + ~~c[2], atY + ~~c[3], atX += ~~c[4], atY += ~~c[5] ] };
          break;
        case 'r':
          code[i] = { m: 'lineTo', a: [ atX += ~~c[0], atY += ~~c[1] ] };
          break;
        case 'm':
          code[i] = { m: 'moveTo', a: [ atX = ~~c[0], atY = ~~c[1] ] };
          break;
        case 'x':
          code[i] = { m: 'closePath', a: [] };
          break;
        case 'e':
          break generate;
      }
      context[code[i].m].apply(context, code[i].a);
    }
    return code;
  }

  function interpret(code, context) {
    for (var i = 0, l = code.length; i < l; ++i) {
      var line = code[i];
      context[line.m].apply(context, line.a);
    }
  }

  return function(font, text, style, options, node, el) {

    var redraw = (text === null);

    var viewBox = font.viewBox;

    var size = style.getSize('fontSize', font.baseSize);

    var letterSpacing = style.get('letterSpacing');
    letterSpacing = (letterSpacing == 'normal') ? 0 : size.convertFrom(parseInt(letterSpacing, 10));

    var expandTop = 0, expandRight = 0, expandBottom = 0, expandLeft = 0;
    var shadows = options.textShadow, shadowOffsets = [];

    Cufon.textOptions.shadowOffsets = [ ];
    Cufon.textOptions.shadows = null;

    if (shadows) {
      Cufon.textOptions.shadows = shadows;
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        var x = size.convertFrom(parseFloat(shadow.offX));
        var y = size.convertFrom(parseFloat(shadow.offY));
        shadowOffsets[i] = [ x, y ];
        //if (y < expandTop) expandTop = y;
        //if (x > expandRight) expandRight = x;
        //if (y > expandBottom) expandBottom = y;
        //if (x < expandLeft) expandLeft = x;
      }
    }

    var chars = Cufon.CSS.textTransform(redraw ? node.alt : text, style).split('');

    var width = 0, lastWidth = null;

    var maxWidth = 0, lines = 1, lineWidths = [ ];
    for (var i = 0, l = chars.length; i < l; ++i) {
      if (chars[i] === '\n') {
        lines++;
        if (width > maxWidth) {
          maxWidth = width;
        }
        lineWidths.push(width);
        width = 0;
        continue;
      }
      var glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;
      width += lastWidth = Number(glyph.w || font.w) + letterSpacing;
    }
    lineWidths.push(width);

    width = Math.max(maxWidth, width);

    var lineOffsets = [ ];
    for (var i = lineWidths.length; i--; ) {
      lineOffsets[i] = width - lineWidths[i];
    }

    if (lastWidth === null) return null; // there's nothing to render

    expandRight += (viewBox.width - lastWidth);
    expandLeft += viewBox.minX;

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-canvas';
      wrapper.alt = text;

      canvas = fabric.document.createElement('canvas');
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style || { };

    var height = size.convert(viewBox.height - expandTop + expandBottom);
    var roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;

    canvas.width = Math.ceil(size.convert(width + expandRight - expandLeft) * roundingFactor);
    canvas.height = roundedHeight;

    expandTop += viewBox.minY;

    cStyle.top = Math.round(size.convert(expandTop - font.ascent)) + 'px';
    cStyle.left = Math.round(size.convert(expandLeft)) + 'px';

    var _width = Math.ceil(size.convert(width * roundingFactor));
    var wrapperWidth = _width + 'px';
    var _height = size.convert(font.height);
    var totalLineHeight = (options.lineHeight - 1) * size.convert(-font.ascent / 5) * (lines - 1);

    Cufon.textOptions.width = _width;
    Cufon.textOptions.height = (_height * lines) + totalLineHeight;
    Cufon.textOptions.lines = lines;
    Cufon.textOptions.totalLineHeight = totalLineHeight;

    if (HAS_INLINE_BLOCK) {
      wStyle.width = wrapperWidth;
      wStyle.height = _height + 'px';
    }
    else {
      wStyle.paddingLeft = wrapperWidth;
      wStyle.paddingBottom = (_height - 1) + 'px';
    }

    var g = Cufon.textOptions.context || canvas.getContext('2d'),
        scale = roundedHeight / viewBox.height;

    Cufon.textOptions.fontAscent = font.ascent * scale;
    Cufon.textOptions.boundaries = null;

    for (var offsets = Cufon.textOptions.shadowOffsets, i = shadowOffsets.length; i--; ) {
      offsets[i] = [ shadowOffsets[i][0] * scale, shadowOffsets[i][1] * scale ];
    }

    g.save();
    g.scale(scale, scale);

    g.translate(
      // we're at the center of an object and need to jump to the top left corner
      // where first character is to be drawn
      -expandLeft - ((1/scale * canvas.width) / 2) + (Cufon.fonts[font.family].offsetLeft || 0),
      -expandTop - ((Cufon.textOptions.height / scale) / 2) + (Cufon.fonts[font.family].offsetTop || 0)
    );

    g.lineWidth = font.face['underline-thickness'];

    g.save();

    function line(y, color) {
      g.strokeStyle = color;

      g.beginPath();

      g.moveTo(0, y);
      g.lineTo(width, y);

      g.stroke();
    }

    var textDecoration = Cufon.getTextDecoration(options),
        isItalic = options.fontStyle === 'italic';

    function renderBackground() {
      g.save();

      g.fillStyle = options.backgroundColor;

      var left = 0, lineNum = 0, boundaries = [{ left: 0 }];

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
        boundaries[0].left = lineOffsets[lineNum] * scale;
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
        boundaries[0].left = lineOffsets[lineNum] / 2 * scale;
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);
          var boundary = boundaries[boundaries.length - 1];
          var nextBoundary = { left: 0 };

          boundary.width = left * scale;
          boundary.height = (-font.ascent + font.descent) * scale;

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
            nextBoundary.left = lineOffsets[lineNum] * scale;
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
            nextBoundary.left = lineOffsets[lineNum] / 2 * scale;
          }
          else {
            g.translate(-left, topOffset);
          }

          /* push next boundary (for the next line) */
          boundaries.push(nextBoundary);

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        // only draw background when there's some kind of value
        if (options.backgroundColor) {
          g.save();
          g.translate(0, font.ascent);
          g.fillRect(0, 0, charWidth + 10, -font.ascent + font.descent);
          g.restore();
        }

        g.translate(charWidth, 0);
        left += charWidth;

        if (i == l-1) {
          boundaries[boundaries.length - 1].width = left * scale;
          boundaries[boundaries.length - 1].height = (-font.ascent + font.descent) * scale;
        }
      }
      g.restore();

      Cufon.textOptions.boundaries = boundaries;
    }

    function renderText(color) {
      g.fillStyle = color || Cufon.textOptions.color || style.get('color');

      var left = 0, lineNum = 0;

      if (options.textAlign === 'right') {
        g.translate(lineOffsets[lineNum], 0);
      }
      else if (options.textAlign === 'center') {
        g.translate(lineOffsets[lineNum] / 2, 0);
      }

      for (var i = 0, l = chars.length; i < l; ++i) {
        if (chars[i] === '\n') {

          lineNum++;

          var topOffset = -font.ascent - ((font.ascent / 5) * options.lineHeight);

          if (options.textAlign === 'right') {
            g.translate(-width, topOffset);
            g.translate(lineOffsets[lineNum], 0);
          }
          else if (options.textAlign === 'center') {
            // offset to the start of text in previous line AND half of its offset
            // (essentially moving caret to the left edge of bounding box)
            g.translate(-left - (lineOffsets[lineNum - 1] / 2), topOffset);
            g.translate(lineOffsets[lineNum] / 2, 0);
          }
          else {
            g.translate(-left, topOffset);
          }

          left = 0;

          continue;
        }
        var glyph = font.glyphs[chars[i]] || font.missingGlyph;
        if (!glyph) continue;

        var charWidth = Number(glyph.w || font.w) + letterSpacing;

        if (textDecoration) {
          g.save();
          g.strokeStyle = g.fillStyle;

          // add 2x more thickness — closer to SVG rendering
          g.lineWidth += g.lineWidth;

          g.beginPath();
          if (textDecoration.underline) {
            g.moveTo(0, -font.face['underline-position'] + 0.5);
            g.lineTo(charWidth, -font.face['underline-position'] + 0.5);
          }
          if (textDecoration.overline) {
            g.moveTo(0, font.ascent + 0.5);
            g.lineTo(charWidth, font.ascent + 0.5);
          }
          if (textDecoration['line-through']) {
            g.moveTo(0, -font.descent + 0.5);
            g.lineTo(charWidth, -font.descent + 0.5);
          }
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.save();
          g.transform(1, 0, -0.25, 1, 0, 0);
        }

        g.beginPath();
        if (glyph.d) {
          if (glyph.code) interpret(glyph.code, g);
          else glyph.code = generateFromVML('m' + glyph.d, g);
        }

        g.fill();

        if (options.strokeStyle) {
          g.closePath();
          g.save();
          g.lineWidth = options.strokeWidth;
          g.strokeStyle = options.strokeStyle;
          g.stroke();
          g.restore();
        }

        if (isItalic) {
          g.restore();
        }

        g.translate(charWidth, 0);
        left += charWidth;
      }
    }

    g.save();
    renderBackground();
    if (shadows) {
      for (var i = 0, l = shadows.length; i < l; ++i) {
        var shadow = shadows[i];
        g.save();
        g.translate.apply(g, shadowOffsets[i]);
        renderText(shadow.color);
        g.restore();
      }
    }
    renderText();
    g.restore();
    g.restore();
    g.restore();

    return wrapper;

  };

})());

Cufon.registerEngine('vml', (function() {

  if (!fabric.document.namespaces) return;

  var canvasEl = fabric.document.createElement('canvas');
  if (canvasEl && canvasEl.getContext && canvasEl.getContext.apply) return;

  if (fabric.document.namespaces.cvml == null) {
    fabric.document.namespaces.add('cvml', 'urn:schemas-microsoft-com:vml');
  }

  var check = fabric.document.createElement('cvml:shape');
  check.style.behavior = 'url(#default#VML)';
  if (!check.coordsize) return; // VML isn't supported
  check = null;

  fabric.document.write('<style type="text/css">' +
    '.cufon-vml-canvas{text-indent:0}' +
    '@media screen{' +
      'cvml\\:shape,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute}' +
      '.cufon-vml-canvas{position:absolute;text-align:left}' +
      '.cufon-vml{display:inline-block;position:relative;vertical-align:middle}' +
      '.cufon-vml .cufon-alt{position:absolute;left:-10000in;font-size:1px}' +
      'a .cufon-vml{cursor:pointer}' +
    '}' +
    '@media print{' +
      '.cufon-vml *{display:none}' +
      '.cufon-vml .cufon-alt{display:inline}' +
    '}' +
  '</style>');

  function getFontSizeInPixels(el, value) {
    return getSizeInPixels(el, /(?:em|ex|%)$/i.test(value) ? '1em' : value);
  }

  // Original by Dead Edwards.
  // Combined with getFontSizeInPixels it also works with relative units.
  function getSizeInPixels(el, value) {
    if (/px$/i.test(value)) return parseFloat(value);
    var style = el.style.left, runtimeStyle = el.runtimeStyle.left;
    el.runtimeStyle.left = el.currentStyle.left;
    el.style.left = value;
    var result = el.style.pixelLeft;
    el.style.left = style;
    el.runtimeStyle.left = runtimeStyle;
    return result;
  }

  return function(font, text, style, options, node, el, hasNext) {
    var redraw = (text === null);

    if (redraw) text = node.alt;

    // @todo word-spacing, text-decoration

    var viewBox = font.viewBox;

    var size = style.computedFontSize ||
      (style.computedFontSize = new Cufon.CSS.Size(getFontSizeInPixels(el, style.get('fontSize')) + 'px', font.baseSize));

    var letterSpacing = style.computedLSpacing;

    if (letterSpacing == undefined) {
      letterSpacing = style.get('letterSpacing');
      style.computedLSpacing = letterSpacing =
        (letterSpacing == 'normal') ? 0 : ~~size.convertFrom(getSizeInPixels(el, letterSpacing));
    }

    var wrapper, canvas;

    if (redraw) {
      wrapper = node;
      canvas = node.firstChild;
    }
    else {
      wrapper = fabric.document.createElement('span');
      wrapper.className = 'cufon cufon-vml';
      wrapper.alt = text;

      canvas = fabric.document.createElement('span');
      canvas.className = 'cufon-vml-canvas';
      wrapper.appendChild(canvas);

      if (options.printable) {
        var print = fabric.document.createElement('span');
        print.className = 'cufon-alt';
        print.appendChild(fabric.document.createTextNode(text));
        wrapper.appendChild(print);
      }

      // ie6, for some reason, has trouble rendering the last VML element in the document.
      // we can work around this by injecting a dummy element where needed.
      // @todo find a better solution
      if (!hasNext) wrapper.appendChild(fabric.document.createElement('cvml:shape'));
    }

    var wStyle = wrapper.style;
    var cStyle = canvas.style;

    var height = size.convert(viewBox.height), roundedHeight = Math.ceil(height);
    var roundingFactor = roundedHeight / height;
    var minX = viewBox.minX, minY = viewBox.minY;

    cStyle.height = roundedHeight;
    cStyle.top = Math.round(size.convert(minY - font.ascent));
    cStyle.left = Math.round(size.convert(minX));

    wStyle.height = size.convert(font.height) + 'px';

    var textDecoration = Cufon.getTextDecoration(options);

    var color = style.get('color');

    var chars = Cufon.CSS.textTransform(text, style).split('');

    var width = 0, offsetX = 0, advance = null;

    var glyph, shape, shadows = options.textShadow;

    // pre-calculate width
    for (var i = 0, k = 0, l = chars.length; i < l; ++i) {
      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (glyph) width += advance = ~~(glyph.w || font.w) + letterSpacing;
    }

    if (advance === null) return null;

    var fullWidth = -minX + width + (viewBox.width - advance);

    var shapeWidth = size.convert(fullWidth * roundingFactor), roundedShapeWidth = Math.round(shapeWidth);

    var coordSize = fullWidth + ',' + viewBox.height, coordOrigin;
    var stretch = 'r' + coordSize + 'nsnf';

    for (i = 0; i < l; ++i) {

      glyph = font.glyphs[chars[i]] || font.missingGlyph;
      if (!glyph) continue;

      if (redraw) {
        // some glyphs may be missing so we can't use i
        shape = canvas.childNodes[k];
        if (shape.firstChild) shape.removeChild(shape.firstChild); // shadow
      }
      else {
        shape = fabric.document.createElement('cvml:shape');
        canvas.appendChild(shape);
      }

      shape.stroked = 'f';
      shape.coordsize = coordSize;
      shape.coordorigin = coordOrigin = (minX - offsetX) + ',' + minY;
      shape.path = (glyph.d ? 'm' + glyph.d + 'xe' : '') + 'm' + coordOrigin + stretch;
      shape.fillcolor = color;

      // it's important to not set top/left or IE8 will grind to a halt
      var sStyle = shape.style;
      sStyle.width = roundedShapeWidth;
      sStyle.height = roundedHeight;

      if (shadows) {
        // due to the limitations of the VML shadow element there
        // can only be two visible shadows. opacity is shared
        // for all shadows.
        var shadow1 = shadows[0], shadow2 = shadows[1];
        var color1 = Cufon.CSS.color(shadow1.color), color2;
        var shadow = fabric.document.createElement('cvml:shadow');
        shadow.on = 't';
        shadow.color = color1.color;
        shadow.offset = shadow1.offX + ',' + shadow1.offY;
        if (shadow2) {
          color2 = Cufon.CSS.color(shadow2.color);
          shadow.type = 'double';
          shadow.color2 = color2.color;
          shadow.offset2 = shadow2.offX + ',' + shadow2.offY;
        }
        shadow.opacity = color1.opacity || (color2 && color2.opacity) || 1;
        shape.appendChild(shadow);
      }

      offsetX += ~~(glyph.w || font.w) + letterSpacing;

      ++k;

    }

    wStyle.width = Math.max(Math.ceil(size.convert(width * roundingFactor)), 0);

    return wrapper;

  };

})());

Cufon.getTextDecoration = function(options) {
  return {
    underline: options.textDecoration === 'underline',
    overline: options.textDecoration === 'overline',
    'line-through': options.textDecoration === 'line-through'
  };
};

if (typeof exports != 'undefined') {
  exports.Cufon = Cufon;
}

/**
 * Wrapper around `console.log` (when available)
 * @method log
 * @param {Any} Values to log
 */
fabric.log = function() { };

/**
 * Wrapper around `console.warn` (when available)
 * @method warn
 * @param {Any} Values to log as a warning
 */
fabric.warn = function() { };

if (typeof console !== 'undefined') {
  if (typeof console.log !== 'undefined' && console.log.apply) {
    fabric.log = function() { 
      return console.log.apply(console, arguments);
    };
  }
  if (typeof console.warn !== 'undefined' && console.warn.apply) {
    fabric.warn = function() { 
      return console.warn.apply(console, arguments);
    };
  }
}

/**
 * @namespace
 */
fabric.Observable = {

  /**
   * Observes specified event
   * @method observe
   * @param {String} eventName
   * @param {Function} handler
   */
  observe: function(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    // one object with key/value pairs was passed
    if (arguments.length === 1) {
      for (var prop in eventName) {
        this.observe(prop, eventName[prop]);
      }
    }
    else {
      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [ ];
      }
      this.__eventListeners[eventName].push(handler);
    }
  },

  /**
   * Stops event observing for a particular event handler
   * @method stopObserving
   * @param {String} eventName
   * @param {Function} handler
   */
  stopObserving: function(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    if (this.__eventListeners[eventName]) {
      fabric.util.removeFromArray(this.__eventListeners[eventName], handler);
    }
  },

  /**
   * Fires event with an optional options object
   * @method fire
   * @param {String} eventName
   * @param {Object} [options]
   */
  fire: function(eventName, options) {
    if (!this.__eventListeners) {
      this.__eventListeners = { }
    }
    var listenersForEvent = this.__eventListeners[eventName];
    if (!listenersForEvent) return;
    for (var i = 0, len = listenersForEvent.length; i < len; i++) {
      // avoiding try/catch for perf. reasons
      listenersForEvent[i](options || { });
    }
  }
};
(function() {

  /**
   * @namespace
   */
  fabric.util = { };

  /**
   * Removes value from an array.
   * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
   * @static
   * @memberOf fabric.util
   * @method removeFromArray
   * @param {Array} array
   * @param {Any} value
   * @return {Array} original array
   */
  function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
      array.splice(idx, 1);
    }
    return array;
  };

  /**
   * Returns random number between 2 specified ones.
   * @static
   * @method getRandomInt
   * @memberOf fabric.util
   * @param {Number} min lower limit
   * @param {Number} max upper limit
   * @return {Number} random value (between min and max)
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var PiBy180 = Math.PI / 180;

  /**
   * Transforms degrees to radians.
   * @static
   * @method degreesToRadians
   * @memberOf fabric.util
   * @param {Number} degrees value in degrees
   * @return {Number} value in radians
   */
  function degreesToRadians(degrees) {
    return degrees * PiBy180;
  }

  /**
   * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
   * @static
   * @method toFixed
   * @memberOf fabric.util
   * @param {Number | String} number number to operate on
   * @param {Number} fractionDigits number of fraction digits to "leave"
   * @return {Number}
   */
   function toFixed(number, fractionDigits) {
     return parseFloat(Number(number).toFixed(fractionDigits));
   }

   /**
    * Function which always returns `false`.
    * @static
    * @method falseFunction
    * @memberOf fabric.util
    * @return {Boolean}
    */
   function falseFunction() {
     return false;
   }

   /**
    * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
    * @method animate
    * @memberOf fabric.util
    * @param {Object} [options] Animation options
    * @param {Function} [options.onChange] Callback; invoked on every value change
    * @param {Function} [options.onComplete] Callback; invoked when value change is completed
    * @param {Number} [options.startValue=0] Starting value
    * @param {Number} [options.endValue=100] Ending value
    * @param {Number} [options.byValue=100] Value to modify the property by
    * @param {Function} [options.easing] Easing function
    * @param {Number} [options.duration=500] Duration of change
    */
  function animate(options) {

    options || (options = { });

    var start = +new Date(),
      duration = options.duration || 500,
      finish = start + duration, time, pos,
      onChange = options.onChange || function() { },
      abort = options.abort || function() { return false; },
      easing = options.easing || function(t, b, c, d) {return -c * Math.cos(t/d * (Math.PI/2)) + c + b;},
      startValue = 'startValue' in options ? options.startValue : 0,
      endValue = 'endValue' in options ? options.endValue : 100;
      byValue = options.byValue || endValue - startValue;

    options.onStart && options.onStart();

    (function tick() {
      time = +new Date();
      currentTime = time > finish ? duration : (time - start);
      onChange(easing(currentTime, startValue, byValue, duration));
      if (time > finish || abort()) {
        options.onComplete && options.onComplete();
        return;
      }
      requestAnimFrame(tick);
    })();
  }

  var _requestAnimFrame = fabric.window.requestAnimationFrame       ||
                          fabric.window.webkitRequestAnimationFrame ||
                          fabric.window.mozRequestAnimationFrame    ||
                          fabric.window.oRequestAnimationFrame      ||
                          fabric.window.msRequestAnimationFrame     ||
                          function(callback, element) {
                            fabric.window.setTimeout(callback, 1000 / 60);
                          };
  /**
    * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    * @method requestAnimFrame
    * @memberOf fabric.util
    * @param {Function} callback Callback to invoke
    * @param {DOMElement} element optional Element to associate with animation
    */
  var requestAnimFrame = function() {
    return _requestAnimFrame.apply(fabric.window, arguments);
  };

  /**
    * Loads image element from given url and passes it to a callback
    * @method loadImage
    * @memberOf fabric.util
    * @param {String} url URL representing an image
    * @param {Function} callback Callback; invoked with loaded image
    * @param {Any} context optional Context to invoke callback in
    */
  function loadImage(url, callback, context) {
    if (url) {
      var img = new Image();
      /** @ignore */
      img.onload = function () {
        callback && callback.call(context, img);
        img = img.onload = null;
      };
      img.src = url;
    }
    else {
      callback && callback.call(context, url);
    }
  }

  function enlivenObjects(objects, callback) {

    function getKlass(type) {
      return fabric[fabric.util.string.camelize(fabric.util.string.capitalize(type))];
    }

    var enlivenedObjects = [ ],
        numLoadedAsyncObjects = 0,
        // get length of all images
        numTotalAsyncObjects = objects.filter(function (o) {
          return getKlass(o.type).async;
        }).length;

    var _this = this;

    objects.forEach(function (o, index) {
      if (!o.type) {
        return;
      }
      var klass = getKlass(o.type);
      if (klass.async) {
        klass.fromObject(o, function (o) {
          enlivenedObjects[index] = o;
          if (++numLoadedAsyncObjects === numTotalAsyncObjects) {
            if (callback) {
              callback(enlivenedObjects);
            }
          }
        });
      }
      else {
        enlivenedObjects[index] = klass.fromObject(o);
      }
    });

    if (numTotalAsyncObjects === 0 && callback) {
      callback(enlivenedObjects);
    }
  }

  function groupSVGElements(elements, options, path) {
    var object = elements.length > 1
      ? new fabric.PathGroup(elements, options)
      : elements[0];

    if (typeof path !== 'undefined') {
      object.setSourcePath(path);
    }
    return object;
  }

  fabric.util.removeFromArray = removeFromArray;
  fabric.util.degreesToRadians = degreesToRadians;
  fabric.util.toFixed = toFixed;
  fabric.util.getRandomInt = getRandomInt;
  fabric.util.falseFunction = falseFunction;
  fabric.util.animate = animate;
  fabric.util.requestAnimFrame = requestAnimFrame;
  fabric.util.loadImage = loadImage;
  fabric.util.enlivenObjects = enlivenObjects;
  fabric.util.groupSVGElements = groupSVGElements;
})();
(function() {
  
  var slice = Array.prototype.slice;
  
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var t = Object(this), len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) { // shortcut for verifying if it's NaN
          n = 0;
        }
        else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          fn.call(context, this[i], i, this);
        }  
      }
    };
  }

  if (!Array.prototype.map) {
    Array.prototype.map = function(fn, context) {
      var result = [ ];
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          result[i] = fn.call(context, this[i], i, this);
        }
      }
      return result;
    };
  }

  if (!Array.prototype.every) {
    Array.prototype.every = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && !fn.call(context, this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  }

  if (!Array.prototype.some) {
    Array.prototype.some = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && fn.call(context, this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  }

  if (!Array.prototype.filter) {
    Array.prototype.filter = function(fn, context) {
      var result = [ ], val;
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          val = this[i]; // in case fn mutates this
          if (fn.call(context, val, i, this)) {
            result.push(val);
          }
        }
      }
      return result;
    };
  }

  if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(fn /*, initial*/) {
      var len = this.length >>> 0,
          i = 0,
          rv;

      if (arguments.length > 1) {
        rv = arguments[1];
      }
      else {
        do {
          if (i in this) {
            rv = this[i++];
            break;
          }
          // if array contains no values, no initial value to return
          if (++i >= len) {
            throw new TypeError();
          }
        }
        while (true);
      }
      for (; i < len; i++) {
        if (i in this) {
          rv = fn.call(null, rv, this[i], i, this);
        }
      }
      return rv;
    };
  }

  /**
   * Invokes method on all items in a given array
   * @method invoke
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   */
  function invoke(array, method) {
    var args = slice.call(arguments, 2), result = [ ];
    for (var i = 0, len = array.length; i < len; i++) {
      result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
    }
    return result;
  }

  /**
   * Finds maximum value in array (not necessarily "first" one)
   * @method max
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   */
  function max(array, byProperty) {
    if (!array || array.length === 0) return undefined;
    
    var i = array.length - 1, 
        result = byProperty ? array[i][byProperty] : array[i];
    if (byProperty) {
      while (i--) {
        if (array[i][byProperty] >= result) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (array[i] >= result) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @method min
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   */
  function min(array, byProperty) {
    if (!array || array.length === 0) return undefined;
    
    var i = array.length - 1, 
        result = byProperty ? array[i][byProperty] : array[i];

    if (byProperty) {
      while (i--) {
        if (array[i][byProperty] < result) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (array[i] < result) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /** @namespace */
  fabric.util.array = {
    invoke: invoke,
    min: min,
    max: max
  };
  
})();
(function(){
  
  /**
   * Copies all enumerable properties of one object to another
   * @memberOf fabric.util.object
   * @method extend
   * @param {Object} destination Where to copy to
   * @param {Object} source Where to copy from
   */
  function extend(destination, source) {
    // JScript DontEnum bug is not taken care of
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  }

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @method clone
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   */
  function clone(object) {
    return extend({ }, object);
  }

  /** @namespace fabric.util.object */
  fabric.util.object = {
    extend: extend,
    clone: clone
  };
  
})();
(function() {

if (!String.prototype.trim) {
  /**
   * Trims a string (removing whitespace from the beginning and the end)
   * @method trim
   * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/Trim">String#trim on MDN</a>
   */
  String.prototype.trim = function () {
    // this trim is not fully ES3 or ES5 compliant, but it should cover most cases for now
    return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
  };
}

/**
 * Camelizes a string
 * @memberOf fabric.util.string
 * @method camelize
 * @param {String} string String to camelize
 * @return {String} Camelized version of a string
 */
function camelize(string) {
  return string.replace(/-+(.)?/g, function(match, character) {
    return character ? character.toUpperCase() : '';
  });
}

/**
 * Capitalizes a string
 * @memberOf fabric.util.string
 * @method capitalize
 * @param {String} string String to capitalize
 * @return {String} Capitalized version of a string
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function escapeXml(string) {
  return string.replace(/&/g, '&amp;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&apos;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;');
}

/** @namespace */
fabric.util.string = {
  camelize: camelize,
  capitalize: capitalize,
  escapeXml: escapeXml
};
}());

(function() {
  
  var slice = Array.prototype.slice,
      apply = Function.prototype.apply,
      dummy = function() { };
  
  if (!Function.prototype.bind) {
    /**
     * Cross-browser approximation of ES5 Function.prototype.bind (not fully spec conforming)
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind">Function#bind on MDN</a>
     * @param {Object} thisArg Object to bind function to
     * @param {Any[]} [...] Values to pass to a bound function
     * @return {Function}
     */
     Function.prototype.bind = function(thisArg) {
       var fn = this, args = slice.call(arguments, 1), bound;
       if (args.length) {
         bound = function() { 
           return apply.call(fn, this instanceof dummy ? this : thisArg, args.concat(slice.call(arguments))); 
         };
       }
       else {
         bound = function() { 
           return apply.call(fn, this instanceof dummy ? this : thisArg, arguments);
         };
       }
       dummy.prototype = this.prototype;
       bound.prototype = new dummy;
       
       return bound;
     };
  }
  
})();
(function() {

  var slice = Array.prototype.slice, emptyFunction = function() { };

  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 }) {
      if (p === 'toString') return false;
    }
    return true;
  })();

  /** @ignore */
  var addMethods = function(klass, source, parent) {
    for (var property in source) {

      if (property in klass.prototype && typeof klass.prototype[property] == 'function') {

        klass.prototype[property] = (function(property) {
          return function() {

            var superclass = this.constructor.superclass;
            this.constructor.superclass = parent;
            var returnValue = source[property].apply(this, arguments);
            this.constructor.superclass = superclass;

            if (property !== 'initialize') {
              return returnValue;
            }
          }
        })(property);
      }
      else {
        klass.prototype[property] = source[property];
      }

      if (IS_DONTENUM_BUGGY) {
        if (source.toString !== Object.prototype.toString) {
          klass.prototype.toString = source.toString;
        }
        if (source.valueOf !== Object.prototype.valueOf) {
          klass.prototype.valueOf = source.valueOf;
        }
      }
    }
  };

  function subclass() { };

  /**
   * Helper for creation of "classes"
   * @method createClass
   * @memberOf fabric.util
   */
  function createClass() {
    var parent = null,
        properties = slice.call(arguments, 0);

    if (typeof properties[0] === 'function') {
      parent = properties.shift();
    }
    function klass() {
      this.initialize.apply(this, arguments);
    }

    klass.superclass = parent;
    klass.subclasses = [ ];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      parent.subclasses.push(klass);
    }
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i], parent);
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = emptyFunction;
    }
    klass.prototype.constructor = klass;
    return klass;
  }

  fabric.util.createClass = createClass;
})();
(function (global) {

  /* EVENT HANDLING */

  function areHostMethods(object) {
    var methodNames = Array.prototype.slice.call(arguments, 1),
        t, i, len = methodNames.length;
    for (i = 0; i < len; i++) {
      t = typeof object[methodNames[i]];
      if (!(/^(?:function|object|unknown)$/).test(t)) return false;
    }
    return true;
  }
  var getUniqueId = (function () {
    if (typeof fabric.document.documentElement.uniqueID !== 'undefined') {
      return function (element) {
        return element.uniqueID;
      };
    }
    var uid = 0;
    return function (element) {
      return element.__uniqueID || (element.__uniqueID = 'uniqueID__' + uid++);
    };
  })();

  /** @ignore */
  var getElement, setElement;

  (function () {
    var elements = { };
    /** @ignore */
    getElement = function (uid) {
      return elements[uid];
    };
    /** @ignore */
    setElement = function (uid, element) {
      elements[uid] = element;
    };
  })();

  function createListener(uid, handler) {
    return {
      handler: handler,
      wrappedHandler: createWrappedHandler(uid, handler)
    };
  }

  function createWrappedHandler(uid, handler) {
    return function (e) {
      handler.call(getElement(uid), e || fabric.window.event);
    };
  }

  function createDispatcher(uid, eventName) {
    return function (e) {
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          handlersForEvent[i].call(this, e || fabric.window.event);
        }
      }
    };
  }

  var shouldUseAddListenerRemoveListener = (
        areHostMethods(fabric.document.documentElement, 'addEventListener', 'removeEventListener') &&
        areHostMethods(fabric.window, 'addEventListener', 'removeEventListener')),

      shouldUseAttachEventDetachEvent = (
        areHostMethods(fabric.document.documentElement, 'attachEvent', 'detachEvent') &&
        areHostMethods(fabric.window, 'attachEvent', 'detachEvent')),

      // IE branch
      listeners = { },

      // DOM L0 branch
      handlers = { },

      addListener, removeListener;

  if (shouldUseAddListenerRemoveListener) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    };
  }

  else if (shouldUseAttachEventDetachEvent) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      setElement(uid, element);
      if (!listeners[uid]) {
        listeners[uid] = { };
      }
      if (!listeners[uid][eventName]) {
        listeners[uid][eventName] = [ ];

      }
      var listener = createListener(uid, handler);
      listeners[uid][eventName].push(listener);
      element.attachEvent('on' + eventName, listener.wrappedHandler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element), listener;
      if (listeners[uid] && listeners[uid][eventName]) {
        for (var i = 0, len = listeners[uid][eventName].length; i < len; i++) {
          listener = listeners[uid][eventName][i];
          if (listener && listener.handler === handler) {
            element.detachEvent('on' + eventName, listener.wrappedHandler);
            listeners[uid][eventName][i] = null;
          }
        }
      }
    };
  }
  else {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (!handlers[uid]) {
        handlers[uid] = { };
      }
      if (!handlers[uid][eventName]) {
        handlers[uid][eventName] = [ ];
        var existingHandler = element['on' + eventName];
        if (existingHandler) {
          handlers[uid][eventName].push(existingHandler);
        }
        element['on' + eventName] = createDispatcher(uid, eventName);
      }
      handlers[uid][eventName].push(handler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          if (handlersForEvent[i] === handler) {
            handlersForEvent.splice(i, 1);
          }
        }
      }
    };
  }

  /**
   * Adds an event listener to an element
   * @mthod addListener
   * @memberOf fabric.util
   * @function
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.addListener = addListener;

  /**
   * Removes an event listener from an element
   * @mthod removeListener
   * @memberOf fabric.util
   * @function
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.removeListener = removeListener;

  /**
   * Cross-browser wrapper for getting event's coordinates
   * @method getPointer
   * @memberOf fabric.util
   * @param {Event} event
   */
  function getPointer(event) {
    // TODO (kangax): this method needs fixing
    return { x: pointerX(event), y: pointerY(event) };
  }

  function pointerX(event) {
    var docElement = fabric.document.documentElement,
        body = fabric.document.body || { scrollLeft: 0 };

    // looks like in IE (<9) clientX at certain point (apparently when mouseup fires on VML element)
    // is represented as COM object, with all the consequences, like "unknown" type and error on [[Get]]
    // need to investigate later
    return event.pageX || ((typeof event.clientX != 'unknown' ? event.clientX : 0) +
      (docElement.scrollLeft || body.scrollLeft) -
      (docElement.clientLeft || 0));
  }

  function pointerY(event) {
    var docElement = fabric.document.documentElement,
        body = fabric.document.body || { scrollTop: 0 };

    return  event.pageY || ((typeof event.clientY != 'unknown' ? event.clientY : 0) +
       (docElement.scrollTop || body.scrollTop) -
       (docElement.clientTop || 0));
  }

  if (fabric.isTouchSupported) {
    pointerX = function(event) {
      return event.touches && event.touches[0] && event.touches[0].pageX || event.clientX;
    };
    pointerY = function(event) {
      return event.touches && event.touches[0] && event.touches[0].pageY || event.clientY;
    };
  }

  fabric.util.getPointer = getPointer;

  fabric.util.object.extend(fabric.util, fabric.Observable);

})(this);
(function () {
  
  /**
   * Cross-browser wrapper for setting element's style
   * @method setStyle
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {HTMLElement} Element that was passed as a first argument
   */
  function setStyle(element, styles) {
    var elementStyle = element.style, match;
    if (typeof styles === 'string') {
      element.style.cssText += ';' + styles;
      return styles.indexOf('opacity') > -1 
        ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) 
        : element;
    }
    for (var property in styles) {
      if (property === 'opacity') {
        setOpacity(element, styles[property]);
      }
      else {
        var normalizedProperty = (property === 'float' || property === 'cssFloat') 
          ? (typeof elementStyle.styleFloat === 'undefined' ? 'cssFloat' : 'styleFloat') 
          : property;
        elementStyle[normalizedProperty] = styles[property];
      }
    }
    return element;
  }

  var parseEl = fabric.document.createElement('div'),
      supportsOpacity = typeof parseEl.style.opacity === 'string', 
      supportsFilters = typeof parseEl.style.filter === 'string',
      view = fabric.document.defaultView,
      supportsGCS = view && typeof view.getComputedStyle !== 'undefined',
      reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
      
      /** @ignore */
      setOpacity = function (element) { return element; };

  if (supportsOpacity) {
    /** @ignore */
    setOpacity = function(element, value) {
      element.style.opacity = value;
      return element;
    };
  }
  else if (supportsFilters) {
    /** @ignore */
    setOpacity = function(element, value) {
      var es = element.style;
      if (element.currentStyle && !element.currentStyle.hasLayout) {
        es.zoom = 1;
      }
      if (reOpacity.test(es.filter)) {
        value = value >= 0.9999 ? '' : ('alpha(opacity=' + (value * 100) + ')');
        es.filter = es.filter.replace(reOpacity, value);
      }
      else {
        es.filter += ' alpha(opacity=' + (value * 100) + ')';
      }
      return element;
    };
  }

  fabric.util.setStyle = setStyle;
  
})();
(function() {
  
  var _slice = Array.prototype.slice;

  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @method getById
   * @memberOf fabric.util
   * @param {String|HTMLElement} id
   * @return {HTMLElement|null}
   */
  function getById(id) {
    return typeof id === 'string' ? fabric.document.getElementById(id) : id;
  }

  /**
   * Converts an array-like object (e.g. arguments or NodeList) to an array
   * @method toArray
   * @memberOf fabric.util
   * @param {Object} arrayLike
   * @return {Array}
   */
  function toArray(arrayLike) {
    return _slice.call(arrayLike, 0);
  }

  try {
    var sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
  }
  catch(err) { }

  if (!sliceCanConvertNodelists) {
    toArray = function(arrayLike) {
      var arr = new Array(arrayLike.length), i = arrayLike.length;
      while (i--) {
        arr[i] = arrayLike[i];
      }
      return arr;
    };
  }

  /**
   * Creates specified element with specified attributes
   * @method makeElement
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  function makeElement(tagName, attributes) {
    var el = fabric.document.createElement(tagName);
    for (var prop in attributes) {
      if (prop === 'class') {
        el.className = attributes[prop];
      }
      else if (prop === 'for') {
        el.htmlFor = attributes[prop];
      }
      else {
        el.setAttribute(prop, attributes[prop]);
      }
    }
    return el;
  }

  /**
   * Adds class to an element
   * @method addClass
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  function addClass(element, className) {
    if ((' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1) {
      element.className += (element.className ? ' ' : '') + className;
    }  
  }

  /**
   * Wraps element with another element
   * @method wrapElement
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   * @return {HTMLElement} wrapper
   */
  function wrapElement(element, wrapper, attributes) {
    if (typeof wrapper === 'string') {
      wrapper = makeElement(wrapper, attributes);
    }
    if (element.parentNode) {
      element.parentNode.replaceChild(wrapper, element);
    }
    wrapper.appendChild(element);
    return wrapper;
  }

  /**
   * Returns offset for a given element
   * @method getElementOffset
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get offset for
   * @return {Object} Object with "left" and "top" properties
   */
  function getElementOffset(element) {
    // TODO (kangax): need to fix this method
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } 
    while (element);
    return ({ left: valueL, top: valueT });
  }

  (function () {
    var style = fabric.document.documentElement.style;

    var selectProp = 'userSelect' in style
      ? 'userSelect'
      : 'MozUserSelect' in style 
        ? 'MozUserSelect' 
        : 'WebkitUserSelect' in style 
          ? 'WebkitUserSelect' 
          : 'KhtmlUserSelect' in style 
            ? 'KhtmlUserSelect' 
            : '';

    /**
     * Makes element unselectable
     * @method makeElementUnselectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make unselectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementUnselectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = fabric.util.falseFunction;
      }
      if (selectProp) {
        element.style[selectProp] = 'none';
      }
      else if (typeof element.unselectable == 'string') {
        element.unselectable = 'on';
      }
      return element;
    }

    /**
     * Makes element selectable
     * @method makeElementSelectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make selectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementSelectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = null;
      }
      if (selectProp) {
        element.style[selectProp] = '';
      }
      else if (typeof element.unselectable == 'string') {
        element.unselectable = '';
      }
      return element;
    }

    fabric.util.makeElementUnselectable = makeElementUnselectable;
    fabric.util.makeElementSelectable = makeElementSelectable;
  })();

  (function() {

    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @method getScript
     * @memberOf fabric.util
     * @param {String} url URL of a script to load
     * @param {Function} callback Callback to execute when script is finished loading
     */
    function getScript(url, callback) {
    	var headEl = fabric.document.getElementsByTagName("head")[0],
    	    scriptEl = fabric.document.createElement('script'), 
    	    loading = true;

    	scriptEl.type = 'text/javascript';
    	scriptEl.setAttribute('runat', 'server');

    	/** @ignore */
    	scriptEl.onload = /** @ignore */ scriptEl.onreadystatechange = function(e) {
    	  if (loading) {
    	    if (typeof this.readyState == 'string' && 
    	        this.readyState !== 'loaded' && 
    	        this.readyState !== 'complete') return;
      	  loading = false;
      		callback(e || fabric.window.event);
      		scriptEl = scriptEl.onload = scriptEl.onreadystatechange = null;
      	}
    	};
    	scriptEl.src = url;
    	headEl.appendChild(scriptEl);
    	// causes issue in Opera
    	// headEl.removeChild(scriptEl);
    }

    fabric.util.getScript = getScript;
  })();

  fabric.util.getById = getById;
  fabric.util.toArray = toArray;
  fabric.util.makeElement = makeElement;
  fabric.util.addClass = addClass;
  fabric.util.wrapElement = wrapElement;
  fabric.util.getElementOffset = getElementOffset;
  
})();
(function(){
  
  function addParamToUrl(url, param) {
    return url + (/\?/.test(url) ? '&' : '?') + param;
  }
  
  var makeXHR = (function() {
    var factories = [
      function() { return new ActiveXObject("Microsoft.XMLHTTP"); },
      function() { return new ActiveXObject("Msxml2.XMLHTTP"); },
      function() { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); },
      function() { return new XMLHttpRequest(); }
    ];
    for (var i = factories.length; i--; ) {
      try {
        var req = factories[i]();
        if (req) {
          return factories[i];
        }
      }
      catch (err) { }
    }
  })();

  function emptyFn() { };
  
  /**
   * Cross-browser abstraction for sending XMLHttpRequest
   * @method request
   * @memberOf fabric.util
   * @param {String} url URL to send XMLHttpRequest to
   * @param {Object} [options] Options object
   * @param {String} [options.method="GET"]
   * @param {Function} options.onComplete Callback to invoke when request is completed
   * @return {XMLHttpRequest} request
   */
  function request(url, options) {

    options || (options = { });

    var method = options.method ? options.method.toUpperCase() : 'GET',
        onComplete = options.onComplete || function() { },
        request = makeXHR(),
        body;
        
    /** @ignore */
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        onComplete(request);
        request.onreadystatechange = emptyFn;
      }
    };
    
    if (method === 'GET') {
      body = null;
      if (typeof options.parameters == 'string') {
        url = addParamToUrl(url, options.parameters);
      }
    }

    request.open(method, url, true);
    
    if (method === 'POST' || method === 'PUT') {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    request.send(body);
    return request;
  };
  
  fabric.util.request = request;
})();
(function(){

	/**
   * @namespace
   */
  fabric.util.ease = { };

	function easeInQuad(t, b, c, d) {
			return c*(t/=d)*t + b;
	}

	function easeOutQuad(t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	}

	function easeInOutQuad(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}

	function easeInCubic(t, b, c, d) {
		return c*(t/=d)*t*t + b;
	}

	function easeOutCubic(t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}

	function easeInOutCubic(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}

	function easeInQuart(t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	}

	function easeOutQuart(t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	}

	function easeInOutQuart(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	}

	function easeInQuint(t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	}

	function easeOutQuint(t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}

	function easeInOutQuint(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}

	function easeInSine(t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	}

	function easeOutSine(t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	}

	function easeInOutSine(t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	}

	function easeInExpo(t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	}

	function easeOutExpo(t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}

	function easeInOutExpo(t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}

	function easeInCirc(t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	}

	function easeOutCirc(t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	}

	function easeInOutCirc(t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	}

	function easeInElastic(t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	}

	function easeOutElastic(t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}

	function easeInOutElastic(t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	}

	function easeInBack(t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}

	function easeOutBack(t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}

	function easeInOutBack(t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}

	function easeInBounce(t, b, c, d) {
		return c - easeOutBounce (d-t, 0, c, d) + b;
	}

	function easeOutBounce(t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}

	function easeInOutBounce(t, b, c, d) {
		if (t < d/2) return easeInBounce (t*2, 0, c, d) * .5 + b;
		return easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
	}

	/** @namespace */
	fabric.util.ease = {
	  easeInQuad: easeInQuad,
	  easeOutQuad: easeOutQuad,
	  easeInOutQuad: easeInOutQuad,
	  easeInCubic: easeInCubic,
	  easeOutCubic: easeOutCubic,
	  easeInOutCubic: easeInOutCubic,
	  easeInQuart: easeInQuart,
	  easeOutQuart: easeOutQuart,
	  easeInOutQuart: easeInOutQuart,
	  easeInQuint: easeInQuint,
	  easeOutQuint: easeOutQuint,
	  easeInOutQuint: easeInOutQuint,
	  easeInSine: easeInSine,
	  easeOutSine: easeOutSine,
	  easeInOutSine: easeInOutSine,
	  easeInExpo: easeInExpo,
	  easeOutExpo: easeOutExpo,
	  easeInOutExpo: easeInOutExpo,
	  easeInCirc: easeInCirc,
	  easeOutCirc: easeOutCirc,
	  easeInOutCirc: easeInOutCirc,
	  easeInElastic: easeInElastic,
	  easeOutElastic: easeOutElastic,
	  easeInOutElastic: easeInOutElastic,
	  easeInBack: easeInBack,
	  easeOutBack: easeOutBack,
	  easeInOutBack: easeInOutBack,
	  easeInBounce: easeInBounce,
	  easeOutBounce: easeOutBounce,
	  easeInOutBounce: easeInOutBounce
	};

}());
(function(global) {

  "use strict";

  /**
   * @name fabric
   * @namespace
   */

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      capitalize = fabric.util.string.capitalize,
      clone = fabric.util.object.clone;

  var attributesMap = {
    'cx':             'left',
    'x':              'left',
    'cy':             'top',
    'y':              'top',
    'r':              'radius',
    'fill-opacity':   'opacity',
    'fill-rule':      'fillRule',
    'stroke-width':   'strokeWidth',
    'transform':      'transformMatrix'
  };

  function normalizeAttr(attr) {
    // transform attribute names
    if (attr in attributesMap) {
      return attributesMap[attr];
    }
    return attr;
  }

  /**
   * Returns an object of attributes' name/value, given element and an array of attribute names;
   * Parses parent "g" nodes recursively upwards.
   * @static
   * @memberOf fabric
   * @method parseAttributes
   * @param {DOMElement} element Element to parse
   * @param {Array} attributes Array of attributes to parse
   * @return {Object} object containing parsed attributes' names/values
   */
  function parseAttributes(element, attributes) {

    if (!element) {
      return;
    }

    var value,
        parsed,
        parentAttributes = { };

    // if there's a parent container (`g` node), parse its attributes recursively upwards
    if (element.parentNode && /^g$/i.test(element.parentNode.nodeName)) {
      parentAttributes = fabric.parseAttributes(element.parentNode, attributes);
    }

    var ownAttributes = attributes.reduce(function(memo, attr) {
      value = element.getAttribute(attr);
      parsed = parseFloat(value);
      if (value) {
        // "normalize" attribute values
        if ((attr === 'fill' || attr === 'stroke') && value === 'none') {
          value = '';
        }
        if (attr === 'fill-rule') {
          value = (value === 'evenodd') ? 'destination-over' : value;
        }
        if (attr === 'transform') {
          value = fabric.parseTransformAttribute(value);
        }
        attr = normalizeAttr(attr);
        memo[attr] = isNaN(parsed) ? value : parsed;
      }
      return memo;
    }, { });

    // add values parsed from style, which take precedence over attributes
    // (see: http://www.w3.org/TR/SVG/styling.html#UsingPresentationAttributes)

    ownAttributes = extend(ownAttributes, extend(getGlobalStylesForElement(element), fabric.parseStyleAttribute(element)));
    return extend(parentAttributes, ownAttributes);
  };

  /**
   * Parses "transform" attribute, returning an array of values
   * @static
   * @function
   * @memberOf fabric
   * @method parseTransformAttribute
   * @param attributeValue {String} string containing attribute value
   * @return {Array} array of 6 elements representing transformation matrix
   */
  fabric.parseTransformAttribute = (function() {
    function rotateMatrix(matrix, args) {
      var angle = args[0];

      matrix[0] = Math.cos(angle);
      matrix[1] = Math.sin(angle);
      matrix[2] = -Math.sin(angle);
      matrix[3] = Math.cos(angle);
    }

    function scaleMatrix(matrix, args) {
      var multiplierX = args[0],
          multiplierY = (args.length === 2) ? args[1] : args[0];

      matrix[0] = multiplierX;
      matrix[3] = multiplierY;
    }

    function skewXMatrix(matrix, args) {
      matrix[2] = args[0];
    }

    function skewYMatrix(matrix, args) {
      matrix[1] = args[0];
    }

    function translateMatrix(matrix, args) {
      matrix[4] = args[0];
      if (args.length === 2) {
        matrix[5] = args[1];
      }
    }

    // identity matrix
    var iMatrix = [
          1, // a
          0, // b
          0, // c
          1, // d
          0, // e
          0  // f
        ],

        // == begin transform regexp
        number = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)',
        comma_wsp = '(?:\\s+,?\\s*|,\\s*)',

        skewX = '(?:(skewX)\\s*\\(\\s*(' + number + ')\\s*\\))',
        skewY = '(?:(skewY)\\s*\\(\\s*(' + number + ')\\s*\\))',
        rotate = '(?:(rotate)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + ')' + comma_wsp + '(' + number + '))?\\s*\\))',
        scale = '(?:(scale)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + '))?\\s*\\))',
        translate = '(?:(translate)\\s*\\(\\s*(' + number + ')(?:' + comma_wsp + '(' + number + '))?\\s*\\))',

        matrix = '(?:(matrix)\\s*\\(\\s*' +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' + comma_wsp +
                  '(' + number + ')' +
                  '\\s*\\))',

        transform = '(?:' +
                    matrix + '|' +
                    translate + '|' +
                    scale + '|' +
                    rotate + '|' +
                    skewX + '|' +
                    skewY +
                    ')',

        transforms = '(?:' + transform + '(?:' + comma_wsp + transform + ')*' + ')',

        transform_list = '^\\s*(?:' + transforms + '?)\\s*$',

        // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        reTransformList = new RegExp(transform_list),
        // == end transform regexp

        reTransform = new RegExp(transform);

    return function(attributeValue) {

      // start with identity matrix
      var matrix = iMatrix.concat();

      // return if no argument was given or
      // an argument does not match transform attribute regexp
      if (!attributeValue || (attributeValue && !reTransformList.test(attributeValue))) {
        return matrix;
      }

      attributeValue.replace(reTransform, function(match) {

        var m = new RegExp(transform).exec(match).filter(function (match) {
              return (match !== '' && match != null);
            }),
            operation = m[1],
            args = m.slice(2).map(parseFloat);

        switch(operation) {
          case 'translate':
            translateMatrix(matrix, args);
            break;
          case 'rotate':
            rotateMatrix(matrix, args);
            break;
          case 'scale':
            scaleMatrix(matrix, args);
            break;
          case 'skewX':
            skewXMatrix(matrix, args);
            break;
          case 'skewY':
            skewYMatrix(matrix, args);
            break;
          case 'matrix':
            matrix = args;
            break;
        }
      })
      return matrix;
    }
  })();

  /**
   * Parses "points" attribute, returning an array of values
   * @static
   * @memberOf fabric
   * @method parsePointsAttribute
   * @param points {String} points attribute string
   * @return {Array} array of points
   */
  function parsePointsAttribute(points) {

    // points attribute is required and must not be empty
    if (!points) return null;

    points = points.trim();
    var asPairs = points.indexOf(',') > -1;

    points = points.split(/\s+/);
    var parsedPoints = [ ];

    // points could look like "10,20 30,40" or "10 20 30 40"
    if (asPairs) {
     for (var i = 0, len = points.length; i < len; i++) {
       var pair = points[i].split(',');
       parsedPoints.push({ x: parseFloat(pair[0]), y: parseFloat(pair[1]) });
     }
    }
    else {
      for (var i = 0, len = points.length; i < len; i+=2) {
        parsedPoints.push({ x: parseFloat(points[i]), y: parseFloat(points[i+1]) });
      }
    }

    // odd number of points is an error
    if (parsedPoints.length % 2 !== 0) {
      // return null;
    }

    return parsedPoints;
  };

  /**
   * Parses "style" attribute, retuning an object with values
   * @static
   * @memberOf fabric
   * @method parseStyleAttribute
   * @param {SVGElement} element Element to parse
   * @return {Object} Objects with values parsed from style attribute of an element
   */
  function parseStyleAttribute(element) {
    var oStyle = { },
        style = element.getAttribute('style');
    if (style) {
      if (typeof style == 'string') {
        style = style.replace(/;$/, '').split(';').forEach(function (current) {
            var attr = current.split(':');
            oStyle[normalizeAttr(attr[0].trim().toLowerCase())] = attr[1].trim();
        });
      } else {
        for (var prop in style) {
          if (typeof style[prop] !== 'undefined') {
            oStyle[normalizeAttr(prop.toLowerCase())] = style[prop];
          }
        }
      }
    }
    return oStyle;
  };

  function resolveGradients(instances) {
    var activeInstance = fabric.Canvas.activeInstance,
        ctx = activeInstance ? activeInstance.getContext() : null;

    if (!ctx) return;

    for (var i = instances.length; i--; ) {
      var instanceFillValue = instances[i].get('fill');

      if (/^url\(/.test(instanceFillValue)) {

        var gradientId = instanceFillValue.slice(5, instanceFillValue.length - 1);

        if (fabric.gradientDefs[gradientId]) {
          instances[i].set('fill',
            fabric.Gradient.fromElement(fabric.gradientDefs[gradientId], ctx, instances[i]));
        }
      }
    }
  }

  /**
   * Transforms an array of svg elements to corresponding fabric.* instances
   * @static
   * @memberOf fabric
   * @method parseElements
   * @param {Array} elements Array of elements to parse
   * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
   * @param {Object} options Options object
   */
  function parseElements(elements, callback, options) {
    var instances = Array(elements.length), i = elements.length;

    function checkIfDone() {
      if (--i === 0) {
        instances = instances.filter(function(el) {
          return el != null;
        });
        resolveGradients(instances);
        callback(instances);
      }
    }

    for (var index = 0, el, len = elements.length; index < len; index++) {
      el = elements[index];
      var klass = fabric[capitalize(el.tagName)];
      if (klass && klass.fromElement) {
        try {
          if (klass.async) {
            klass.fromElement(el, (function(index) {
              return function(obj) {
                instances.splice(index, 0, obj);
                checkIfDone();
              };
            })(index), options);
          }
          else {
            instances.splice(index, 0, klass.fromElement(el, options));
            checkIfDone();
          }
        }
        catch(e) {
          fabric.log(e.message || e);
        }
      }
      else {
        checkIfDone();
      }
    }
  };

  /**
   * Returns CSS rules for a given SVG document
   * @static
   * @function
   * @memberOf fabric
   * @method getCSSRules
   * @param {SVGDocument} doc SVG document to parse
   * @return {Object} CSS rules of this document
   */
  function getCSSRules(doc) {
    var styles = doc.getElementsByTagName('style'),
        allRules = { },
        rules;

    // very crude parsing of style contents
    for (var i = 0, len = styles.length; i < len; i++) {
      var styleContents = styles[0].textContent;

      // remove comments
      styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');

      rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
      rules = rules.map(function(rule) { return rule.trim() });

      rules.forEach(function(rule) {
        var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/),
            rule = match[1],
            declaration = match[2].trim(),
            propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);

        if (!allRules[rule]) {
          allRules[rule] = { };
        }

        for (var i = 0, len = propertyValuePairs.length; i < len; i++) {
          var pair = propertyValuePairs[i].split(/\s*:\s*/),
              property = pair[0],
              value = pair[1];

          allRules[rule][property] = value;
        }
      });
    }

    return allRules;
  }

  function getGlobalStylesForElement(element) {
    var nodeName = element.nodeName,
        className = element.getAttribute('class'),
        id = element.getAttribute('id'),
        styles = { };

    for (var rule in fabric.cssRules) {
      var ruleMatchesElement = (className && new RegExp('^\\.' + className).test(rule)) ||
                               (id && new RegExp('^#' + id).test(rule)) ||
                               (new RegExp('^' + nodeName).test(rule));

      if (ruleMatchesElement) {
        for (var property in fabric.cssRules[rule]) {
          styles[property] = fabric.cssRules[rule][property];
        }
      }
    }

    return styles;
  }

  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @static
   * @function
   * @memberOf fabric
   * @method parseSVGDocument
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   */
  fabric.parseSVGDocument = (function() {

    var reAllowedSVGTagNames = /^(path|circle|polygon|polyline|ellipse|rect|line|image)$/;

    // http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
    // \d doesn't quite cut it (as we need to match an actual float number)

    // matches, e.g.: +14.56e-12, etc.
    var reNum = '(?:[-+]?\\d+(?:\\.\\d+)?(?:e[-+]?\\d+)?)';

    var reViewBoxAttrValue = new RegExp(
      '^' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*,?' +
      '\\s*(' + reNum + '+)\\s*' +
      '$'
    );

    function hasAncestorWithNodeName(element, nodeName) {
      while (element && (element = element.parentNode)) {
        if (nodeName.test(element.nodeName)) {
          return true;
        }
      }
      return false;
    }

    return function(doc, callback) {
      if (!doc) return;

      var startTime = new Date(),
          descendants = fabric.util.toArray(doc.getElementsByTagName('*'));

      if (descendants.length === 0) {
        // we're likely in node, where "o3-xml" library fails to gEBTN("*")
        // https://github.com/ajaxorg/node-o3-xml/issues/21
        descendants = doc.selectNodes("//*[name(.)!='svg']");
        var arr = [ ];
        for (var i = 0, len = descendants.length; i < len; i++) {
          arr[i] = descendants[i];
        }
        descendants = arr;
      }

      var elements = descendants.filter(function(el) {
        return reAllowedSVGTagNames.test(el.tagName) &&
              !hasAncestorWithNodeName(el, /^(?:pattern|defs)$/); // http://www.w3.org/TR/SVG/struct.html#DefsElement
      });

      if (!elements || (elements && !elements.length)) return;

      var viewBoxAttr = doc.getAttribute('viewBox'),
          widthAttr = doc.getAttribute('width'),
          heightAttr = doc.getAttribute('height'),
          width = null,
          height = null,
          minX,
          minY;

      if (viewBoxAttr && (viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue))) {
        minX = parseInt(viewBoxAttr[1], 10);
        minY = parseInt(viewBoxAttr[2], 10);
        width = parseInt(viewBoxAttr[3], 10);
        height = parseInt(viewBoxAttr[4], 10);
      }

      // values of width/height attributes overwrite those extracted from viewbox attribute
      width = widthAttr ? parseFloat(widthAttr) : width;
      height = heightAttr ? parseFloat(heightAttr) : height;

      var options = {
        width: width,
        height: height
      };

      fabric.gradientDefs = fabric.getGradientDefs(doc);
      fabric.cssRules = getCSSRules(doc);

      // Precedence of rules:   style > class > attribute

      fabric.parseElements(elements, function(instances) {
        fabric.documentParsingTime = new Date() - startTime;
        if (callback) {
          callback(instances, options);
        }
      }, clone(options));
    };
  })();

  /**
    * Used for caching SVG documents (loaded via `fabric.Canvas#loadSVGFromURL`)
    * @property
    * @namespace
    */
   var svgCache = {

     /**
      * @method has
      * @param {String} name
      * @param {Function} callback
      */
     has: function (name, callback) {
       callback(false);
     },

     /**
      * @method get
      * @param {String} url
      * @param {Function} callback
      */
     get: function (url, callback) {
       /* NOOP */
     },

     /**
      * @method set
      * @param {String} url
      * @param {Object} object
      */
     set: function (url, object) {
       /* NOOP */
     }
   };

   /**
    * Takes url corresponding to an SVG document, and parses it into a set of fabric objects
    * @method loadSVGFromURL
    * @param {String} url
    * @param {Function} callback
    */
   function loadSVGFromURL(url, callback) {

     url = url.replace(/^\n\s*/, '').trim();

     svgCache.has(url, function (hasUrl) {
       if (hasUrl) {
         svgCache.get(url, function (value) {
           var enlivedRecord = _enlivenCachedObject(value);
           callback(enlivedRecord.objects, enlivedRecord.options);
         });
       }
       else {
         new fabric.util.request(url, {
           method: 'get',
           onComplete: onComplete
         });
       }
     });

     function onComplete(r) {

       var xml = r.responseXML;
       if (!xml.documentElement && fabric.window.ActiveXObject && r.responseText) {
         xml = new ActiveXObject('Microsoft.XMLDOM');
         xml.async = 'false';
         //IE chokes on DOCTYPE
         xml.loadXML(r.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,''));
       }
       if (!xml.documentElement) return;

       fabric.parseSVGDocument(xml.documentElement, function (results, options) {
         svgCache.set(url, {
           objects: fabric.util.array.invoke(results, 'toObject'),
           options: options
         });
         callback(results, options);
       });
     }
   }

  /**
  * @method _enlivenCachedObject
  */
  function _enlivenCachedObject(cachedObject) {

   var objects = cachedObject.objects,
       options = cachedObject.options;

   objects = objects.map(function (o) {
     return fabric[capitalize(o.type)].fromObject(o);
   });

   return ({ objects: objects, options: options });
  }

  /**
    * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
    * @method loadSVGFromString
    * @param {String} string
    * @param {Function} callback
    */
  function loadSVGFromString(string, callback) {
    string = string.trim();
    var doc;
    if (typeof DOMParser !== 'undefined') {
      var parser = new DOMParser();
      if (parser && parser.parseFromString) {
        doc = parser.parseFromString(string, 'text/xml');
      }
    }
    else if (fabric.window.ActiveXObject) {
      var doc = new ActiveXObject('Microsoft.XMLDOM');
      doc.async = 'false';
      //IE chokes on DOCTYPE
      doc.loadXML(string.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i,''));
    }

    fabric.parseSVGDocument(doc.documentElement, function (results, options) {
      callback(results, options);
    });
  }

  function createSVGFontFacesMarkup(objects) {
    var markup = '';

    for (var i = 0, len = objects.length; i < len; i++) {
      if (objects[i].type !== 'text' || !objects[i].path) continue;

      markup += [
        '@font-face {',
          'font-family: ', objects[i].fontFamily, '; ',
          'src: url(\'', objects[i].path, '\')',
        '}'
      ].join('');
    }

    if (markup) {
      markup = [
        '<defs>',
          '<style type="text/css">',
            '<![CDATA[',
              markup,
            ']]>',
          '</style>',
        '</defs>'
      ].join('');
    }

    return markup;
  }

  extend(fabric, {

    parseAttributes:          parseAttributes,
    parseElements:            parseElements,
    parseStyleAttribute:      parseStyleAttribute,
    parsePointsAttribute:     parsePointsAttribute,
    getCSSRules:              getCSSRules,

    loadSVGFromURL:           loadSVGFromURL,
    loadSVGFromString:        loadSVGFromString,

    createSVGFontFacesMarkup: createSVGFontFacesMarkup
  });

})(typeof exports != 'undefined' ? exports : this);

(function() {

  function getColorStopFromStyle(el) {
    var style = el.getAttribute('style');

    if (style) {
      var keyValuePairs = style.split(/\s*;\s*/);

      if (keyValuePairs[keyValuePairs.length-1] === '') {
        keyValuePairs.pop();
      }

      for (var i = keyValuePairs.length; i--; ) {

        var split = keyValuePairs[i].split(/\s*:\s*/),
            key = split[0].trim(),
            value = split[1].trim();

        if (key === 'stop-color') {
          return value;
        }
      }
    }
  }

  /** @namespace */

  fabric.Gradient = {

    /**
     * @method create
     * @static
     */
    create: function(ctx, options) {
      options || (options = { });

      var x1 = options.x1 || 0,
          y1 = options.y1 || 0,
          x2 = options.x2 || ctx.canvas.width,
          y2 = options.y2 || 0,
          colorStops = options.colorStops;

      var gradient = ctx.createLinearGradient(x1, y1, x2, y2);

      for (var position in colorStops) {
        var colorValue = colorStops[position];
        gradient.addColorStop(parseFloat(position), colorValue);
      }
      return gradient;
    },

    /**
     * @method fromElement
     * @static
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     */
    fromElement: function(el, ctx, instance) {

      /**
       *  @example:
       *
       *  <linearGradient id="grad1">
       *    <stop offset="0%" stop-color="white"/>
       *    <stop offset="100%" stop-color="black"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <linearGradient id="grad1">
       *    <stop offset="0%" style="stop-color:rgb(255,255,255)"/>
       *    <stop offset="100%" style="stop-color:rgb(0,0,0)"/>
       *  </linearGradient>
       *
       */

      var colorStopEls = el.getElementsByTagName('stop'),
          el,
          offset,
          colorStops = { },
          colorStopFromStyle,
          coords = {
            x1: el.getAttribute('x1') || 0,
            y1: el.getAttribute('y1') || 0,
            x2: el.getAttribute('x2') || '100%',
            y2: el.getAttribute('y2') || 0
          };

      for (var i = colorStopEls.length; i--; ) {
        el = colorStopEls[i];
        offset = el.getAttribute('offset');

        // convert percents to absolute values
        offset = parseFloat(offset) / (/%$/.test(offset) ? 100 : 1);
        colorStops[offset] = getColorStopFromStyle(el) || el.getAttribute('stop-color');
      }

      _convertPercentUnitsToValues(instance, coords);

      return fabric.Gradient.create(ctx, {
        x1: coords.x1,
        y1: coords.y1,
        x2: coords.x2,
        y2: coords.y2,
        colorStops: colorStops
      });
    },

    /**
     * @method forObject
     * @static
     */
    forObject: function(obj, ctx, options) {
      options || (options = { });

      _convertPercentUnitsToValues(obj, options);

      var gradient = fabric.Gradient.create(ctx, {
        x1: options.x1,
        y1: options.y1,
        x2: options.x2,
        y2: options.y2,
        colorStops: options.colorStops
      });

      return gradient;
    }
  };

  function _convertPercentUnitsToValues(object, options) {
    for (var prop in options) {
      if (typeof options[prop] === 'string' && /^\d+%$/.test(options[prop])) {
        var percents = parseFloat(options[prop], 10);
        if (prop === 'x1' || prop === 'x2') {
          options[prop] = object.width * percents / 100;
        }
        else if (prop === 'y1' || prop === 'y2') {
          options[prop] = object.height * percents / 100;
        }
      }
      // normalize rendering point (should be from top/left corner rather than center of the shape)
      if (prop === 'x1' || prop === 'x2') {
        options[prop] -= object.width / 2;
      }
      else if (prop === 'y1' || prop === 'y2') {
        options[prop] -= object.height / 2;
      }
    }
  }

  /**
   * Parses an SVG document, returning all of the gradient declarations found in it
   * @static
   * @function
   * @memberOf fabric
   * @method getGradientDefs
   * @param {SVGDocument} doc SVG document to parse
   * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
   */
  function getGradientDefs(doc) {
    var linearGradientEls = doc.getElementsByTagName('linearGradient'),
        radialGradientEls = doc.getElementsByTagName('radialGradient'),
        el,
        gradientDefs = { };

    for (var i = linearGradientEls.length; i--; ) {
      el = linearGradientEls[i];
      gradientDefs[el.id] = el;
    }

    for (var i = radialGradientEls.length; i--; ) {
      el = radialGradientEls[i];
      gradientDefs[el.id] = el;
    }

    return gradientDefs;
  }

  fabric.getGradientDefs = getGradientDefs;

})();
(function(global) {
  
  "use strict";
  
  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */
  
  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Point) {    
    fabric.warn('fabric.Point is already defined');
    return;
  }

  fabric.Point = Point;
  
  /**
   * @name Point
   * @memberOf fabric
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @return {fabric.Point} thisArg
   */
  function Point(x, y) {
    if (arguments.length > 0) {
      this.init(x, y);
    }
  }
  
  Point.prototype = /** @scope fabric.Point.prototype */ {
    
    constructor: Point,
    
    /**
     * @method init
     * @param {Number} x
     * @param {Number} y
     */
    init: function (x, y) {
      this.x = x;
      this.y = y;
    },
    
    /**
     * @method add
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add: function (that) {
      return new Point(this.x + that.x, this.y + that.y);
    },
    
    /**
     * @method addEquals
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    addEquals: function (that) {
      this.x += that.x;
      this.y += that.y;
      return this;
    },
    
    /**
     * @method scalarAdd
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd: function (scalar) {
      return new Point(this.x + scalar, this.y + scalar);
    },
    
    /**
     * @method scalarAddEquals
     * @param {Number} scalar
     * @param {fabric.Point} thisArg
     */
    scalarAddEquals: function (scalar) {
      this.x += scalar;
      this.y += scalar;
      return this;
    },
    
    /**
     * @method subtract
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract: function (that) {
      return new Point(this.x - that.x, this.y - that.y);
    },
    
    /**
     * @method subtractEquals
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     */
    subtractEquals: function (that) {
      this.x -= that.x;
      this.y -= that.y;
      return this;
    },
    
    scalarSubtract: function (scalar) {
      return new Point(this.x - scalar, this.y - scalar);
    },
    
    scalarSubtractEquals: function (scalar) {
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },
    
    multiply: function (scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    },
    
    multiplyEquals: function (scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },
    
    divide: function (scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    },
    
    divideEquals: function (scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },
    
    eq: function (that) {
      return (this.x == that.x && this.y == that.y);
    },
    
    lt: function (that) {
      return (this.x < that.x && this.y < that.y);
    },
    
    lte: function (that) {
      return (this.x <= that.x && this.y <= that.y);
    },
    
    gt: function (that) {
      return (this.x > that.x && this.y > that.y);
    },
    
    gte: function (that) {
      return (this.x >= that.x && this.y >= that.y);
    },
    
    lerp: function (that, t) {
      return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    },
    
    distanceFrom: function (that) {
      var dx = this.x - that.x,
          dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    
    min: function (that) {
      return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
    },
    
    max: function (that) {
      return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
    },
    
    toString: function () {
      return this.x + "," + this.y;
    },
    
    setXY: function (x, y) {
      this.x = x;
      this.y = y;
    },
    
    setFromPoint: function (that) {
      this.x = that.x;
      this.y = that.y;
    },
    
    swap: function (that) {
      var x = this.x,
          y = this.y;
      this.x = that.x;
      this.y = that.y;
      that.x = x;
      that.y = y;
    }
  };
  
})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Intersection) {
    fabric.warn('fabric.Intersection is already defined');
    return;
  }

  /**
   * @class Intersection
   * @memberOf fabric
   */
  function Intersection(status) {
    if (arguments.length > 0) {
      this.init(status);
    }
  }

  fabric.Intersection = Intersection;

  fabric.Intersection.prototype = /** @scope fabric.Intersection.prototype */ {

    /**
     * @method init
     * @param {String} status
     */
    init: function (status) {
      this.status = status;
      this.points = [];
    },

    /**
     * @method appendPoint
     * @param {String} status
     */
    appendPoint: function (point) {
      this.points.push(point);
    },

    /**
     * @method appendPoints
     * @param {String} status
     */
    appendPoints: function (points) {
      this.points = this.points.concat(points);
    }
  };

  /**
   * @static
   * @method intersectLineLine
   */
  fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
    var result,
        ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
        ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
        u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (u_b != 0) {
      var ua = ua_t / u_b,
          ub = ub_t / u_b;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
        result = new Intersection("Intersection");
        result.points.push(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
      }
      else {
        result = new Intersection("No Intersection");
      }
    }
    else {
      if (ua_t == 0 || ub_t == 0) {
        result = new Intersection("Coincident");
      }
      else {
        result = new Intersection("Parallel");
      }
    }
    return result;
  };

  /**
   * @method intersectLinePolygon
   */
  fabric.Intersection.intersectLinePolygon = function(a1,a2,points){
    var result = new Intersection("No Intersection"),
        length = points.length;

    for (var i = 0; i < length; i++) {
      var b1 = points[i],
          b2 = points[(i+1) % length],
          inter = Intersection.intersectLineLine(a1, a2, b1, b2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = "Intersection";
    }
    return result;
  };

  /**
   * @method intersectPolygonPolygon
   */
  fabric.Intersection.intersectPolygonPolygon = function (points1, points2) {
    var result = new Intersection("No Intersection"),
        length = points1.length;

    for (var i = 0; i < length; i++) {
      var a1 = points1[i],
          a2 = points1[(i+1) % length],
          inter = Intersection.intersectLinePolygon(a1, a2, points2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = "Intersection";
    }
    return result;
  };

  /**
   * @method intersectPolygonRectangle
   */
  fabric.Intersection.intersectPolygonRectangle = function (points, r1, r2) {
    var min = r1.min(r2),
        max = r1.max(r2),
        topRight = new fabric.Point(max.x, min.y),
        bottomLeft = new fabric.Point(min.x, max.y),
        inter1 = Intersection.intersectLinePolygon(min, topRight, points),
        inter2 = Intersection.intersectLinePolygon(topRight, max, points),
        inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points),
        inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points),
        result = new Intersection("No Intersection");

    result.appendPoints(inter1.points);
    result.appendPoints(inter2.points);
    result.appendPoints(inter3.points);
    result.appendPoints(inter4.points);
    if (result.points.length > 0) {
      result.status="Intersection";
    }
    return result;
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {
  
  "use strict";
  
  var fabric = global.fabric || (global.fabric = { });
  
  if (fabric.Color) {
    fabric.warn('fabric.Color is already defined.');
    return;
  }
  
  /**
   * The purpose of {@link fabric.Color} is to abstract and encapsulate common color operations;
   * {@link fabric.Color} is a constructor and creates instances of {@link fabric.Color} objects.
   *
   * @class Color
   * @memberOf fabric
   * @param {String} color (optional) in hex or rgb(a) format
   */
  function Color(color) {
    if (!color) {
      this.setSource([0, 0, 0, 1]);
    }
    else {
      this._tryParsingColor(color);
    }
  }
  
  fabric.Color = Color;
  
  fabric.Color.prototype = /** @scope fabric.Color.prototype */ {
    
    /**
     * @private
     * @method _tryParsingColor
     */
    _tryParsingColor: function(color) {
      var source = Color.sourceFromHex(color);
      if (!source) {
        source = Color.sourceFromRgb(color);
      }
      if (source) {
        this.setSource(source);
      }
    },

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @method getSource
     * @return {Array}
     */
    getSource: function() {
      return this._source;
    },

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @method setSource
     * @param {Array} source
     */
    setSource: function(source) {
      this._source = source;
    },

    /**
     * Returns color represenation in RGB format
     * @method toRgb
     * @return {String} ex: rgb(0-255,0-255,0-255)
     */
    toRgb: function() {
      var source = this.getSource();
      return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
    },

    /**
     * Returns color represenation in RGBA format
     * @method toRgba
     * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba: function() {
      var source = this.getSource();
      return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
    },

    /**
     * Returns color represenation in HEX format
     * @method toHex
     * @return {String} ex: FF5555
     */
    toHex: function() {
      var source = this.getSource();

      var r = source[0].toString(16);
      r = (r.length == 1) ? ('0' + r) : r;

      var g = source[1].toString(16);
      g = (g.length == 1) ? ('0' + g) : g;

      var b = source[2].toString(16);
      b = (b.length == 1) ? ('0' + b) : b;

      return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },

    /**
     * Gets value of alpha channel for this color 
     * @method getAlpha
     * @return {Number} 0-1
     */
    getAlpha: function() {
      return this.getSource()[3];
    },

    /**
     * Sets value of alpha channel for this color
     * @method setAlpha
     * @param {Number} 0-1
     * @return {fabric.Color} thisArg
     */
    setAlpha: function(alpha) {
      var source = this.getSource();
      source[3] = alpha;
      this.setSource(source);
      return this;
    },

    /**
     * Transforms color to its grayscale representation
     * @method toGrayscale
     * @return {fabric.Color} thisArg
     */
    toGrayscale: function() {
      var source = this.getSource(),
          average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
          currentAlpha = source[3];
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Transforms color to its black and white representation
     * @method toGrayscale
     * @return {fabric.Color} thisArg
     */
    toBlackWhite: function(threshold) {
      var source = this.getSource(),
          average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
          currentAlpha = source[3],
          threshold = threshold || 127;

      average = (Number(average) < Number(threshold)) ? 0 : 255;
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Overlays color with another color
     * @method overlayWith
     * @param {String|fabric.Color} otherColor
     * @return {fabric.Color} thisArg
     */
    overlayWith: function(otherColor) {
      if (!(otherColor instanceof Color)) {
        otherColor = new Color(otherColor);
      }

      var result = [],
          alpha = this.getAlpha(),
          otherAlpha = 0.5,
          source = this.getSource(),
          otherSource = otherColor.getSource();

      for (var i = 0; i < 3; i++) {
        result.push(Math.round((source[i] * (1 - otherAlpha)) + (otherSource[i] * otherAlpha)));
      }

      result[3] = alpha;
      this.setSource(result);
      return this;
    }
  };
  
  /**
   * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgb(255, 100, 10, 0.5), rgb(1,1,1))
   * @static
   * @field
   */
  fabric.Color.reRGBa = /^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d+(?:\.\d+)?))?\)$/;
  
  /**
   * Regex matching color in HEX format (ex: #FF5555, 010155, aff)
   * @static
   * @field
   */
  fabric.Color.reHex = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;

  /**
   * Returns new color object, when given a color in RGB format
   * @method fromRgb
   * @param {String} color ex: rgb(0-255,0-255,0-255)
   * @return {fabric.Color}
   */
  fabric.Color.fromRgb = function(color) {
    return Color.fromSource(Color.sourceFromRgb(color));
  };
  
  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
   * @method sourceFromRgb
   * @param {String} color ex: rgb(0-255,0-255,0-255)
   * @return {Array} source
   */
  fabric.Color.sourceFromRgb = function(color) {
    var match = color.match(Color.reRGBa);
    if (match) {
      return [
        parseInt(match[1], 10),
        parseInt(match[2], 10),
        parseInt(match[3], 10),
        match[4] ? parseFloat(match[4]) : 1
      ];
    }
  };

  /**
   * Returns new color object, when given a color in RGBA format
   * @static
   * @function
   * @method fromRgba
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromRgba = Color.fromRgb;

  /**
   * Returns new color object, when given a color in HEX format
   * @static
   * @method fromHex
   * @return {fabric.Color}
   */
  fabric.Color.fromHex = function(color) {
    return Color.fromSource(Color.sourceFromHex(color));
  };
  
  /**
   * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
   * @static
   * @method sourceFromHex
   * @param {String} color ex: FF5555
   * @return {Array} source
   */
  fabric.Color.sourceFromHex = function(color) {
    if (color.match(Color.reHex)) {
      var value = color.slice(color.indexOf('#') + 1),
          isShortNotation = (value.length === 3),
          r = isShortNotation ? (value.charAt(0) + value.charAt(0)) : value.substring(0, 2),
          g = isShortNotation ? (value.charAt(1) + value.charAt(1)) : value.substring(2, 4),
          b = isShortNotation ? (value.charAt(2) + value.charAt(2)) : value.substring(4, 6);

      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        1
      ];
    }
  };
  
  /**
   * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
   * @static
   * @method fromSource
   * @return {fabric.Color}
   */
  fabric.Color.fromSource = function(source) {
    var oColor = new Color();
    oColor.setSource(source);
    return oColor;
  };

})(typeof exports != 'undefined' ? exports : this);
(function (global) {

  "use strict";

  if (fabric.StaticCanvas) {
    fabric.warn('fabric.StaticCanvas is already defined.');
    return;
  }

  // aliases for faster resolution
  var extend = fabric.util.object.extend,
      getElementOffset = fabric.util.getElementOffset,
      removeFromArray = fabric.util.removeFromArray,
      removeListener = fabric.util.removeListener,

      CANVAS_INIT_ERROR = new Error('Could not initialize `canvas` element');

  /**
   * @class fabric.StaticCanvas
   * @constructor
   * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
   * @param {Object} [options] Options object
   */
  fabric.StaticCanvas = function (el, options) {
    options || (options = { });

    this._initStatic(el, options);
    fabric.StaticCanvas.activeInstance = this;
  };

  extend(fabric.StaticCanvas.prototype, fabric.Observable);

  extend(fabric.StaticCanvas.prototype, /** @scope fabric.StaticCanvas.prototype */ {

    /**
     * Background color of canvas instance
     * @property
     * @type String
     */
    backgroundColor: 'rgba(0, 0, 0, 0)',

    /**
     * Background image of canvas instance
     * Should be set via `setBackgroundImage`
     * @property
     * @type String
     */
    backgroundImage: '',

    /**
     * Opacity of the background image of the canvas instance
     * @property
     * @type Float
     */
    backgroundImageOpacity: 1.0,

    /**
     * Indicatus whether the background image should be stretched to fit the
     * dimensions of the canvas instance.
     * @property
     * @type Boolean
     */
    backgroundImageStretch: true,

    /**
     * Indicates whether toObject/toDatalessObject should include default values
     * @property
     * @type Boolean
     */
    includeDefaultValues: true,

    /**
     * Indicates whether objects' state should be saved
     * @property
     * @type Boolean
     */
    stateful: true,

    /**
     * Indicates whether fabric.Canvas#add should also re-render canvas.
     * Disabling this option could give a great performance boost when adding a lot of objects to canvas at once
     * (followed by a manual rendering after addition)
     */
    renderOnAddition: true,

    /**
     * Function that determines clipping of entire canvas area
     * Being passed context as first argument. See clipping canvas area in https://github.com/kangax/fabric.js/wiki/FAQ
     * @property
     * @type Function
     */
    clipTo: null,

    /**
     * Callback; invoked right before object is about to be scaled/rotated
     * @method onBeforeScaleRotate
     * @param {fabric.Object} target Object that's about to be scaled/rotated
     */
    onBeforeScaleRotate: function (target) {
      /* NOOP */
    },

    /**
     * Callback; invoked on every redraw of canvas and is being passed a number indicating current fps
     * @method onFpsUpdate
     * @param {Number} fps
     */
    onFpsUpdate: null,

    _initStatic: function(el, options) {
      this._objects = [];

      this._createLowerCanvas(el);
      this._initOptions(options);

      if (options.overlayImage) {
        this.setOverlayImage(options.overlayImage, this.renderAll.bind(this));
      }
      if (options.backgroundImage) {
        this.setBackgroundImage(options.backgroundImage, this.renderAll.bind(this));
      }
      this.calcOffset();
    },

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @method calcOffset
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset: function () {
      this._offset = getElementOffset(this.lowerCanvasEl);
      return this;
    },

    /**
     * Sets overlay image for this canvas
     * @method setOverlayImage
     * @param {String} url url of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setOverlayImage: function (url, callback) { // TODO (kangax): test callback
      fabric.util.loadImage(url, function(img) {
        this.overlayImage = img;
        callback && callback();
      }, this);
      return this;
    },

    /**
     * Sets background image for this canvas
     * @method setBackgroundImage
     * @param {String} url url of an image to set background to
     * @param {Function} callback callback to invoke when image is loaded and set as background
     * @param {Object} options optional options to set for the background image
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setBackgroundImage: function (url, callback, options) {
      return fabric.util.loadImage(url, function(img) {
        this.backgroundImage = img;
        if (options && ('backgroundImageOpacity' in options)) {
            this.backgroundImageOpacity = options.backgroundImageOpacity;
        }
        if (options && ('backgroundImageStretch' in options)) {
            this.backgroundImageStretch = options.backgroundImageStretch;
        }
        callback && callback();
      }, this);
    },

    /**
     * @private
     * @method _createCanvasElement
     * @param {Element} element
     */
    _createCanvasElement: function() {
      var element = fabric.document.createElement('canvas');
      if (!element.style) {
        element.style = { };
      }
      if (!element) {
        throw CANVAS_INIT_ERROR;
      }
      this._initCanvasElement(element);
      return element;
    },

    _initCanvasElement: function(element) {
      if (typeof element.getContext === 'undefined' &&
          typeof G_vmlCanvasManager !== 'undefined' &&
          G_vmlCanvasManager.initElement) {

        G_vmlCanvasManager.initElement(element);
      }
      if (typeof element.getContext === 'undefined') {
        throw CANVAS_INIT_ERROR;
      }
    },

    /**
     * @method _initOptions
     * @param {Object} options
     */
    _initOptions: function (options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.width = parseInt(this.lowerCanvasEl.width, 10) || 0;
      this.height = parseInt(this.lowerCanvasEl.height, 10) || 0;

      this.lowerCanvasEl.style.width = this.width + 'px';
      this.lowerCanvasEl.style.height = this.height + 'px';
    },

    /**
     * Creates a secondary canvas
     * @method _createLowerCanvas
     */
    _createLowerCanvas: function (canvasEl) {
      this.lowerCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
      this._initCanvasElement(this.lowerCanvasEl);

      fabric.util.addClass(this.lowerCanvasEl, 'lower-canvas');

      if (this.interactive) {
        this._applyCanvasStyle(this.lowerCanvasEl);
      }

      this.contextContainer = this.lowerCanvasEl.getContext('2d');
    },

    /**
     * Returns canvas width
     * @method getWidth
     * @return {Number}
     */
    getWidth: function () {
      return this.width;
    },

    /**
     * Returns canvas height
     * @method getHeight
     * @return {Number}
     */
    getHeight: function () {
      return this.height;
    },

    /**
     * Sets width of this canvas instance
     * @method setWidth
     * @param {Number} width value to set width to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth: function (value) {
      return this._setDimension('width', value);
    },

    /**
     * Sets height of this canvas instance
     * @method setHeight
     * @param {Number} height value to set height to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight: function (value) {
      return this._setDimension('height', value);
    },

    /**
     * Sets dimensions (width, height) of this canvas instance
     * @method setDimensions
     * @param {Object} dimensions
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions: function(dimensions) {
      for (var prop in dimensions) {
        this._setDimension(prop, dimensions[prop]);
      }
      return this;
    },

    /**
     * Helper for setting width/height
     * @private
     * @method _setDimensions
     * @param {String} prop property (width|height)
     * @param {Number} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;
      this.lowerCanvasEl.style[prop] = value + 'px';

      if (this.upperCanvasEl) {
        this.upperCanvasEl[prop] = value;
        this.upperCanvasEl.style[prop] = value + 'px';
      }

      if (this.wrapperEl) {
        this.wrapperEl.style[prop] = value + 'px';
      }

      this[prop] = value;

      this.calcOffset();
      this.renderAll();

      return this;
    },

    /**
     * Returns &lt;canvas> element corresponding to this instance
     * @method getElement
     * @return {HTMLCanvasElement}
     */
    getElement: function () {
      return this.lowerCanvasEl;
    },

    // placeholder
    getActiveObject: function() {
      return null;
    },

    // placeholder
    getActiveGroup: function() {
      return null;
    },

    /**
     * Given a context, renders an object on that context
     * @param ctx {Object} context to render object on
     * @param object {Object} object to render
     * @private
     */
    _draw: function (ctx, object) {
      object && object.render(ctx);
    },

    /**
     * Adds objects to canvas, then renders canvas;
     * Objects should be instances of (or inherit from) fabric.Object
     * @method add
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    add: function () {
      this._objects.push.apply(this._objects, arguments);
      for (var i = arguments.length; i--; ) {
        this.stateful && arguments[i].setupState();
        arguments[i].setCoords();
        this.fire('object:added', { target: arguments[i] });
      }
      this.renderOnAddition && this.renderAll();
      return this;
    },

    /**
     * Inserts an object to canvas at specified index and renders canvas.
     * An object should be an instance of (or inherit from) fabric.Object
     * @method insertAt
     * @param object {Object} Object to insert
     * @param index {Number} index to insert object at
     * @param nonSplicing {Boolean} when `true`, no splicing (shifting) of objects occurs
     * @return {fabric.Canvas} instance
     */
    insertAt: function (object, index, nonSplicing) {
      if (nonSplicing) {
        this._objects[index] = object;
      }
      else {
        this._objects.splice(index, 0, object);
      }
      this.stateful && object.setupState();
      object.setCoords();
      this.renderAll();
      this.fire('object:added', { target: object });
      return this;
    },

    /**
     * Returns an array of objects this instance has
     * @method getObjects
     * @return {Array}
     */
    getObjects: function () {
      return this._objects;
    },

    /**
     * Clears specified context of canvas element
     * @method clearContext
     * @param context {Object} ctx context to clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clearContext: function(ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      return this;
    },

    /**
     * Returns context of canvas where objects are drawn
     * @method getContext
     * @return {CanvasRenderingContext2D}
     */
    getContext: function () {
      return this.contextContainer;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @method clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this._objects.length = 0;
      this.clearContext(this.contextContainer);
      if (this.contextTop) {
        this.clearContext(this.contextTop);
      }
      this.renderAll();
      return this;
    },

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @method renderAll
     * @param allOnTop {Boolean} optional Whether we want to force all images to be rendered on the top canvas
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function (allOnTop) {

      var canvasToDrawOn = this[(allOnTop === true && this.interactive) ? 'contextTop' : 'contextContainer'];

      if (this.contextTop) {
        this.clearContext(this.contextTop);
      }

      if (allOnTop === false || (typeof allOnTop === 'undefined')) {
        this.clearContext(canvasToDrawOn);
      }

      var length = this._objects.length,
          activeGroup = this.getActiveGroup(),
          startTime = new Date();

      if (this.clipTo) {
        canvasToDrawOn.save();
        canvasToDrawOn.beginPath();
        this.clipTo(canvasToDrawOn);
        canvasToDrawOn.clip();
      }

      canvasToDrawOn.fillStyle = this.backgroundColor;
      canvasToDrawOn.fillRect(0, 0, this.width, this.height);

      if (typeof this.backgroundImage == 'object') {
        canvasToDrawOn.save();
        canvasToDrawOn.globalAlpha = this.backgroundImageOpacity;

        if (this.backgroundImageStretch) {
            canvasToDrawOn.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
        }
        else {
            canvasToDrawOn.drawImage(this.backgroundImage, 0, 0);
        }
        canvasToDrawOn.restore();
      }

      if (length) {
        for (var i = 0; i < length; ++i) {
          if (!activeGroup ||
              (activeGroup && this._objects[i] && !activeGroup.contains(this._objects[i]))) {
            this._draw(canvasToDrawOn, this._objects[i]);
          }
        }
      }

      if (this.clipTo) {
        canvasToDrawOn.restore();
      }

      // delegate rendering to group selection (if one exists)
      if (activeGroup) {
        this._draw(this.contextTop, activeGroup);
      }

      if (this.overlayImage) {
        (this.contextTop || this.contextContainer).drawImage(this.overlayImage, 0, 0);
      }

      if (this.onFpsUpdate) {
        var elapsedTime = new Date() - startTime;
        this.onFpsUpdate(~~(1000 / elapsedTime));
      }

      this.fire('after:render');

      return this;
    },

    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @method renderTop
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop: function () {
      this.clearContext(this.contextTop || this.contextContainer);

      if (this.overlayImage) {
        (this.contextTop || this.contextContainer).drawImage(this.overlayImage, 0, 0);
      }

      // we render the top context - last object
      if (this.selection && this._groupSelector) {
        this._drawSelection();
      }

      // delegate rendering to group selection if one exists
      // used for drawing selection borders/corners
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.render(this.contextTop);
      }

      this.fire('after:render');

      return this;
    },

    /**
     * Exports canvas element to a dataurl image.
     * @method toDataURL
     * @param {String} format the format of the output image. Either "jpeg" or "png".
     * @return {String}
     */
    toDataURL: function (format) {
      this.renderAll(true);
      var data = (this.upperCanvasEl || this.lowerCanvasEl).toDataURL('image/' + format);
      this.renderAll();
      return data;
    },

    /**
     * Exports canvas element to a dataurl image (allowing to change image size via multiplier).
     * @method toDataURLWithMultiplier
     * @param {String} format (png|jpeg)
     * @param {Number} multiplier
     * @return {String}
     */
    toDataURLWithMultiplier: function (format, multiplier) {

      var origWidth = this.getWidth(),
          origHeight = this.getHeight(),
          scaledWidth = origWidth * multiplier,
          scaledHeight = origHeight * multiplier,
          activeObject = this.getActiveObject(),
          activeGroup = this.getActiveGroup();

      this.setWidth(scaledWidth).setHeight(scaledHeight);
      this.contextTop.scale(multiplier, multiplier);

      if (activeGroup) {
        // not removing group due to complications with restoring it with correct state afterwords
        this._tempRemoveBordersCornersFromGroup(activeGroup);
      }
      else if (activeObject) {
        this.deactivateAll();
      }

      // restoring width, height for `renderAll` to draw
      // background properly (while context is scaled)
      this.width = origWidth;
      this.height = origHeight;

      this.renderAll(true);

      var dataURL = this.toDataURL(format);

      this.contextTop.scale(1 / multiplier,  1 / multiplier);
      this.setWidth(origWidth).setHeight(origHeight);

      if (activeGroup) {
        this._restoreBordersCornersOnGroup(activeGroup);
      }
      else if (activeObject) {
        this.setActiveObject(activeObject);
      }

      this.renderAll();

      return dataURL;
    },

    _tempRemoveBordersCornersFromGroup: function(group) {
      group.origHideCorners = group.hideCorners;
      group.origBorderColor = group.borderColor;

      group.hideCorners = true;
      group.borderColor = 'rgba(0,0,0,0)';

      group.forEachObject(function(o) {
        o.origBorderColor = o.borderColor;
        o.borderColor = 'rgba(0,0,0,0)';
      });
    },
    _restoreBordersCornersOnGroup: function(group) {
      group.hideCorners = group.origHideCorners;
      group.borderColor = group.origBorderColor;

      group.forEachObject(function(o) {
        o.borderColor = o.origBorderColor;
        delete o.origBorderColor;
      });
    },

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @method getCenter
     * @return {Object} object with "top" and "left" number values
     */
    getCenter: function () {
      return {
        top: this.getHeight() / 2,
        left: this.getWidth() / 2
      };
    },

    /**
     * Centers object horizontally.
     * @method centerObjectH
     * @param {fabric.Object} object Object to center
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH: function (object) {
      object.set('left', this.getCenter().left);
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically.
     * @method centerObjectH
     * @param {fabric.Object} object Object to center
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV: function (object) {
      object.set('top', this.getCenter().top);
      this.renderAll();
      return this;
    },

    /**
     * Centers object vertically and horizontally.
     * @method centerObject
     * @param {fabric.Object} object Object to center
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObject: function (object) {
      return this.centerObjectH(object).centerObjectV(object);
    },

    /**
     * Returs dataless JSON representation of canvas
     * @method toDatalessJSON
     * @return {String} json string
     */
    toDatalessJSON: function () {
      return this.toDatalessObject();
    },

    /**
     * Returns object representation of canvas
     * @method toObject
     * @return {Object}
     */
    toObject: function () {
      return this._toObjectMethod('toObject');
    },

    /**
     * Returns dataless object representation of canvas
     * @method toDatalessObject
     * @return {Object}
     */
    toDatalessObject: function () {
      return this._toObjectMethod('toDatalessObject');
    },

    /**
     * @private
     * @method _toObjectMethod
     */
    _toObjectMethod: function (methodName) {
      var data = {
        objects: this._objects.map(function (instance) {
          // TODO (kangax): figure out how to clean this up
          if (!this.includeDefaultValues) {
            var originalValue = instance.includeDefaultValues;
            instance.includeDefaultValues = false;
          }
          var object = instance[methodName]();
          if (!this.includeDefaultValues) {
            instance.includeDefaultValues = originalValue;
          }
          return object;
        }, this),
        background: this.backgroundColor
      };
      if (this.backgroundImage) {
        data.backgroundImage = this.backgroundImage.src;
        data.backgroundImageOpacity = this.backgroundImageOpacity;
        data.backgroundImageStretch = this.backgroundImageStretch;
      }
      return data;
    },

    /**
     * Returns SVG representation of canvas
     * @function
     * @method toSVG
     * @return {String}
     */
    toSVG: function() {
      var markup = [
        '<?xml version="1.0" standalone="no" ?>',
          '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" ',
            '"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">',
          '<svg ',
            'xmlns="http://www.w3.org/2000/svg" ',
            'xmlns:xlink="http://www.w3.org/1999/xlink" ',
            'version="1.1" ',
            'width="', this.width, '" ',
            'height="', this.height, '" ',
            'xml:space="preserve">',
          '<desc>Created with Fabric.js ', fabric.version, '</desc>',
          fabric.createSVGFontFacesMarkup(this.getObjects())
      ];

      if (this.backgroundImage) {
        markup.push(
          '<image x="0" y="0" ',
            'width="', this.width,
            '" height="', this.height,
            '" preserveAspectRatio="', (this.backgroundImageStretch ? 'none' : 'defer'),
            '" xlink:href="', this.backgroundImage.src,
            '" style="opacity:', this.backgroundImageOpacity,
          '"></image>'
        );
      }

      for (var i = 0, objects = this.getObjects(), len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG());
      }
      markup.push('</svg>');

      return markup.join('');
    },

    /**
     * Returns true if canvas contains no objects
     * @method isEmpty
     * @return {Boolean} true if canvas is empty
     */
    isEmpty: function () {
      return this._objects.length === 0;
    },

    /**
     * Removes an object from canvas and returns it
     * @method remove
     * @param object {Object} Object to remove
     * @return {Object} removed object
     */
    remove: function (object) {
      removeFromArray(this._objects, object);
      if (this.getActiveObject() === object) {

        // removing active object should fire "selection:cleared" events
        this.fire('before:selection:cleared', { target: object });
        this.discardActiveObject();
        this.fire('selection:cleared');
      }
      this.renderAll();
      return object;
    },

    /**
     * Moves an object to the bottom of the stack of drawn objects
     * @method sendToBack
     * @param object {fabric.Object} Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack: function (object) {
      removeFromArray(this._objects, object);
      this._objects.unshift(object);
      return this.renderAll();
    },

    /**
     * Moves an object to the top of the stack of drawn objects
     * @method bringToFront
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront: function (object) {
      removeFromArray(this._objects, object);
      this._objects.push(object);
      return this.renderAll();
    },

    /**
     * Moves an object one level down in stack of drawn objects
     * @method sendBackwards
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards: function (object) {
      var idx = this._objects.indexOf(object),
          nextIntersectingIdx = idx;

      // if object is not on the bottom of stack
      if (idx !== 0) {

        // traverse down the stack looking for the nearest intersecting object
        for (var i=idx-1; i>=0; --i) {
          if (object.intersectsWithObject(this._objects[i]) || object.isContainedWithinObject(this._objects[i])) {
            nextIntersectingIdx = i;
            break;
          }
        }
        removeFromArray(this._objects, object);
        this._objects.splice(nextIntersectingIdx, 0, object);
      }
      return this.renderAll();
    },

    /**
     * Moves an object one level up in stack of drawn objects
     * @method bringForward
     * @param object {fabric.Object} Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward: function (object) {
      var objects = this.getObjects(),
          idx = objects.indexOf(object),
          nextIntersectingIdx = idx;


      // if object is not on top of stack (last item in an array)
      if (idx !== objects.length-1) {

        // traverse up the stack looking for the nearest intersecting object
        for (var i = idx + 1, l = this._objects.length; i < l; ++i) {
          if (object.intersectsWithObject(objects[i]) || object.isContainedWithinObject(this._objects[i])) {
            nextIntersectingIdx = i;
            break;
          }
        }
        removeFromArray(objects, object);
        objects.splice(nextIntersectingIdx, 0, object);
      }
      this.renderAll();
    },

    /**
     * Returns object at specified index
     * @method item
     * @param {Number} index
     * @return {fabric.Object}
     */
    item: function (index) {
      return this.getObjects()[index];
    },

    /**
     * Returns number representation of an instance complexity
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function () {
      return this.getObjects().reduce(function (memo, current) {
        memo += current.complexity ? current.complexity() : 0;
        return memo;
      }, 0);
    },

    /**
     * Iterates over all objects, invoking callback for each one of them
     * @method forEachObject
     * @return {fabric.Canvas} thisArg
     */
    forEachObject: function(callback, context) {
      var objects = this.getObjects(),
          i = objects.length;
      while (i--) {
        callback.call(context, objects[i], i, objects);
      }
      return this;
    },

    /**
     * Clears a canvas element and removes all event handlers.
     * @method dispose
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.clear();
      if (this.interactive) {
        removeListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
        removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
        removeListener(fabric.window, 'resize', this._onResize);
      }
      return this;
    },

    /**
     * @private
     * @method _resizeImageToFit
     * @param {HTMLImageElement} imgEl
     */
    _resizeImageToFit: function (imgEl) {

      var imageWidth = imgEl.width || imgEl.offsetWidth,
          widthScaleFactor = this.getWidth() / imageWidth;

      // scale image down so that it has original dimensions when printed in large resolution
      if (imageWidth) {
        imgEl.width = imageWidth * widthScaleFactor;
      }
    }
  });

  /**
   * Returns a string representation of an instance
   * @method toString
   * @return {String} string representation of an instance
   */
  fabric.StaticCanvas.prototype.toString = function () { // Assign explicitly since `extend` doesn't take care of DontEnum bug yet
    return '#<fabric.Canvas (' + this.complexity() + '): '+
           '{ objects: ' + this.getObjects().length + ' }>';
  };

  extend(fabric.StaticCanvas, /** @scope fabric.StaticCanvas */ {

    /**
     * @static
     * @property EMPTY_JSON
     * @type String
     */
    EMPTY_JSON: '{"objects": [], "background": "white"}',

    /**
     * Takes &lt;canvas> element and transforms its data in such way that it becomes grayscale
     * @static
     * @method toGrayscale
     * @param {HTMLCanvasElement} canvasEl
     */
    toGrayscale: function (canvasEl) {
       var context = canvasEl.getContext('2d'),
           imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
           data = imageData.data,
           iLen = imageData.width,
           jLen = imageData.height,
           index, average, i, j;

       for (i = 0; i < iLen; i++) {
         for (j = 0; j < jLen; j++) {

           index = (i * 4) * jLen + (j * 4);
           average = (data[index] + data[index + 1] + data[index + 2]) / 3;

           data[index]     = average;
           data[index + 1] = average;
           data[index + 2] = average;
         }
       }

       context.putImageData(imageData, 0, 0);
     },

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @method supports
     * @param methodName {String} Method to check support for;
     *                            Could be one of "getImageData" or "toDataURL"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    supports: function (methodName) {
      var el = fabric.document.createElement('canvas');

      if (typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(el);
      }
      if (!el || !el.getContext) {
        return null;
      }

      var ctx = el.getContext('2d');
      if (!ctx) {
        return null;
      }

      switch (methodName) {

        case 'getImageData':
          return typeof ctx.getImageData !== 'undefined';

        case 'toDataURL':
          return typeof el.toDataURL !== 'undefined';

        default:
          return null;
      }
    }
  });

  /**
   * Returs JSON representation of canvas
   * @function
   * @method toJSON
   * @return {String} json string
   */
  fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject;

})(typeof exports != 'undefined' ? exports : this);

(function() {

  var extend = fabric.util.object.extend,
      getPointer = fabric.util.getPointer,
      addListener = fabric.util.addListener,
      removeListener = fabric.util.removeListener,
      cursorMap = {
        'tr': 'ne-resize',
        'br': 'se-resize',
        'bl': 'sw-resize',
        'tl': 'nw-resize',
        'ml': 'w-resize',
        'mt': 'n-resize',
        'mr': 'e-resize',
        'mb': 's-resize'
      },

      utilMin = fabric.util.array.min,
      utilMax = fabric.util.array.max,

      sqrt = Math.sqrt,
      pow = Math.pow,
      atan2 = Math.atan2,
      abs = Math.abs,
      min = Math.min,
      max = Math.max,

      STROKE_OFFSET = 0.5;

  /**
   * @class fabric.Canvas
   * @constructor
   * @extends fabric.StaticCanvas
   * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
   * @param {Object} [options] Options object
   */
  fabric.Canvas = function(el, options) {
    options || (options = { });

    this._initStatic(el, options);
    this._initInteractive();

    fabric.Canvas.activeInstance = this;
  };

  function ProtoProxy(){ }
  ProtoProxy.prototype = fabric.StaticCanvas.prototype;
  fabric.Canvas.prototype = new ProtoProxy;

  var InteractiveMethods = /** @scope fabric.Canvas.prototype */ {

    /**
     * Indicates that canvas is interactive. This property should not be changed.
     * @property
     * @type Boolean
     */
    interactive:            true,

    /**
     * Indicates whether group selection should be enabled
     * @property
     * @type Boolean
     */
    selection:              true,

    /**
     * Color of selection
     * @property
     * @type String
     */
    selectionColor:         'rgba(100, 100, 255, 0.3)', // blue

    /**
     * Color of the border of selection (usually slightly darker than color of selection itself)
     * @property
     * @type String
     */
    selectionBorderColor:   'rgba(255, 255, 255, 0.3)',

    /**
     * Width of a line used in object/group selection
     * @property
     * @type Number
     */
    selectionLineWidth:     1,

    /**
     * Color of the line used in free drawing mode
     * @property
     * @type String
     */
    freeDrawingColor:       'rgb(0, 0, 0)',

    /**
     * Width of a line used in free drawing mode
     * @property
     * @type Number
     */
    freeDrawingLineWidth:   1,

    /**
     * Default cursor value used when hovering over an object on canvas
     * @property
     * @type String
     */
    hoverCursor:            'move',

    /**
     * Default cursor value used for the entire canvas
     * @property
     * @type String
     */
    defaultCursor:          'default',

    /**
     * Cursor value used for rotation point
     * @property
     * @type String
     */
    rotationCursor:         'crosshair',

    /**
     * Default element class that's given to wrapper (div) element of canvas
     * @property
     * @type String
     */
    containerClass:        'canvas-container',

    _initInteractive: function() {
      this._currentTransform = null;
      this._groupSelector = null;
      this._freeDrawingXPoints = [ ];
      this._freeDrawingYPoints = [ ];
      this._initWrapperElement();
      this._createUpperCanvas();
      this._initEvents();
      this.calcOffset();
    },

    /**
     * Adds mouse listeners to  canvas
     * @method _initEvents
     * @private
     * See configuration documentation for more details.
     */
    _initEvents: function () {
      var _this = this;

      this._onMouseDown = function (e) {
        _this.__onMouseDown(e);

        addListener(fabric.document, 'mouseup', _this._onMouseUp);
        fabric.isTouchSupported && addListener(fabric.document, 'touchend', _this._onMouseUp);

        addListener(fabric.document, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && addListener(fabric.document, 'touchmove', _this._onMouseMove);

        removeListener(_this.upperCanvasEl, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && removeListener(_this.upperCanvasEl, 'touchmove', _this._onMouseMove);
      };

      this._onMouseUp = function (e) {
        _this.__onMouseUp(e);

        removeListener(fabric.document, 'mouseup', _this._onMouseUp);
        fabric.isTouchSupported && removeListener(fabric.document, 'touchend', _this._onMouseUp);

        removeListener(fabric.document, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && removeListener(fabric.document, 'touchmove', _this._onMouseMove);

        addListener(_this.upperCanvasEl, 'mousemove', _this._onMouseMove);
        fabric.isTouchSupported && addListener(_this.upperCanvasEl, 'touchmove', _this._onMouseMove);
      };

      this._onMouseMove = function (e) {
        e.preventDefault && e.preventDefault();
        _this.__onMouseMove(e);
      };

      this._onResize = function (e) {
        _this.calcOffset();
      };


      addListener(fabric.window, 'resize', this._onResize);

      if (fabric.isTouchSupported) {
        addListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
        addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);
      }
      else {
        addListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
        addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      }
    },

    /**
     * Method that defines the actions when mouse is released on canvas.
     * The method resets the currentTransform parameters, store the image corner
     * position in the image object and render the canvas on top.
     * @method __onMouseUp
     * @param {Event} e Event object fired on mouseup
     *
     */
    __onMouseUp: function (e) {

      if (this.isDrawingMode && this._isCurrentlyDrawing) {
        this._finalizeDrawingPath();
        this.fire('mouse:up', { e: e });
        return;
      }

      if (this._currentTransform) {

        var transform = this._currentTransform,
            target = transform.target;

        if (target._scaling) {
          target._scaling = false;
        }

        // determine the new coords everytime the image changes its position
        var i = this._objects.length;
        while (i--) {
          this._objects[i].setCoords();
        }

        // only fire :modified event if target coordinates were changed during mousedown-mouseup
        if (this.stateful && target.hasStateChanged()) {
          target.isMoving = false;
          this.fire('object:modified', { target: target });
        }
      }

      this._currentTransform = null;

      if (this._groupSelector) {
        // group selection was completed, determine its bounds
        this._findSelectedObjects(e);
      }
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.setObjectsCoords();
        activeGroup.set('isMoving', false);
        this._setCursor(this.defaultCursor);
      }

      // clear selection
      this._groupSelector = null;
      this.renderAll();

      this._setCursorFromEvent(e, target);

      // fix for FF
      this._setCursor('');

      var _this = this;
      setTimeout(function () {
        _this._setCursorFromEvent(e, target);
      }, 50);

      this.fire('mouse:up', { target: target, e: e });
    },

    /**
     * Method that defines the actions when mouse is clic ked on canvas.
     * The method inits the currentTransform parameters and renders all the
     * canvas so the current image can be placed on the top canvas and the rest
     * in on the container one.
     * @method __onMouseDown
     * @param e {Event} Event object fired on mousedown
     *
     */
    __onMouseDown: function (e) {

      // accept only left clicks
      var isLeftClick  = 'which' in e ? e.which == 1 : e.button == 1;
      if (!isLeftClick && !fabric.isTouchSupported) return;

      if (this.isDrawingMode) {
        this._prepareForDrawing(e);

        // capture coordinates immediately; this allows to draw dots (when movement never occurs)
        this._captureDrawingPath(e);
        this.fire('mouse:down', { e: e });

        this.fire('mouse:down', { e: e });
        return;
      }

      // ignore if some object is being transformed at this moment
      if (this._currentTransform) return;

      var target = this.findTarget(e),
          pointer = this.getPointer(e),
          activeGroup = this.getActiveGroup(),
          corner;

      if (this._shouldClearSelection(e)) {

        this._groupSelector = {
          ex: pointer.x,
          ey: pointer.y,
          top: 0,
          left: 0
        };

        this.deactivateAllWithDispatch();
      }
      else {
        // determine if it's a drag or rotate case
        // rotate and scale will happen at the same time
        this.stateful && target.saveState();

        if (corner = target._findTargetCorner(e, this._offset)) {
          this.onBeforeScaleRotate(target);
        }

        this._setupCurrentTransform(e, target);

        var shouldHandleGroupLogic = e.shiftKey && (activeGroup || this.getActiveObject()) && this.selection;
        if (shouldHandleGroupLogic) {
          this._handleGroupLogic(e, target);
        }
        else {
          if (target !== this.getActiveGroup()) {
            this.deactivateAll();
          }
          this.setActiveObject(target, e);
        }
      }
      // we must renderAll so that active image is placed on the top canvas
      this.renderAll();

      this.fire('mouse:down', { target: target, e: e });
    },

    /**
      * Method that defines the actions when mouse is hovering the canvas.
      * The currentTransform parameter will definde whether the user is rotating/scaling/translating
      * an image or neither of them (only hovering). A group selection is also possible and would cancel
      * all any other type of action.
      * In case of an image transformation only the top canvas will be rendered.
      * @method __onMouseMove
      * @param e {Event} Event object fired on mousemove
      *
      */
    __onMouseMove: function (e) {

      if (this.isDrawingMode) {
        if (this._isCurrentlyDrawing) {
          this._captureDrawingPath(e);
        }
        this.fire('mouse:move', { e: e });
        return;
      }

      var groupSelector = this._groupSelector;

      // We initially clicked in an empty area, so we draw a box for multiple selection.
      if (groupSelector !== null) {
        var pointer = getPointer(e);
        groupSelector.left = pointer.x - this._offset.left - groupSelector.ex;
        groupSelector.top = pointer.y - this._offset.top - groupSelector.ey;
        this.renderTop();
      }
      else if (!this._currentTransform) {

        // alias style to elimintate unnecessary lookup
        var style = this.upperCanvasEl.style;

        // Here we are hovering the canvas then we will determine
        // what part of the pictures we are hovering to change the caret symbol.
        // We won't do that while dragging or rotating in order to improve the
        // performance.
        var target = this.findTarget(e);

        if (!target) {
          // image/text was hovered-out from, we remove its borders
          for (var i = this._objects.length; i--; ) {
            if (this._objects[i] && !this._objects[i].active) {
              this._objects[i].setActive(false);
            }
          }
          style.cursor = this.defaultCursor;
        }
        else {
          // set proper cursor
          this._setCursorFromEvent(e, target);
          if (target.isActive()) {
            // display corners when hovering over an image
            target.setCornersVisibility && target.setCornersVisibility(true);
          }
        }
      }
      else {
        // object is being transformed (scaled/rotated/moved/etc.)
        var pointer = getPointer(e),
            x = pointer.x,
            y = pointer.y;

        this._currentTransform.target.isMoving = true;

        if (this._currentTransform.action === 'rotate') {
          // rotate object only if shift key is not pressed
          // and if it is not a group we are transforming

          if (!e.shiftKey) {
            this._rotateObject(x, y);

            this.fire('object:rotating', {
              target: this._currentTransform.target
            });
          }
          if (!this._currentTransform.target.hasRotatingPoint) {
            this._scaleObject(x, y);
            this.fire('object:scaling', {
              target: this._currentTransform.target
            });
          }
        }
        else if (this._currentTransform.action === 'scale') {
          this._scaleObject(x, y);
          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else if (this._currentTransform.action === 'scaleX') {
          this._scaleObject(x, y, 'x');

          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else if (this._currentTransform.action === 'scaleY') {
          this._scaleObject(x, y, 'y');

          this.fire('object:scaling', {
            target: this._currentTransform.target
          });
        }
        else {
          this._translateObject(x, y);

          this.fire('object:moving', {
            target: this._currentTransform.target
          });
        }
        // only commit here. when we are actually moving the pictures
        this.renderAll();
      }
      this.fire('mouse:move', { target: target, e: e });
    },

    /**
     * Applies one implementation of 'point inside polygon' algorithm
     * @method containsPoint
     * @param e { Event } event object
     * @param target { fabric.Object } object to test against
     * @return {Boolean} true if point contains within area of given object
     */
    containsPoint: function (e, target) {
      var pointer = this.getPointer(e),
          xy = this._normalizePointer(target, pointer),
          x = xy.x,
          y = xy.y;

      // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
      // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html

      // we iterate through each object. If target found, return it.
      var iLines = target._getImageLines(target.oCoords),
          xpoints = target._findCrossPoints(x, y, iLines);

      // if xcount is odd then we clicked inside the object
      // For the specific case of square images xcount === 1 in all true cases
      if ((xpoints && xpoints % 2 === 1) || target._findTargetCorner(e, this._offset)) {
        return true;
      }
      return false;
    },

    /**
     * @private
     * @method _normalizePointer
     */
    _normalizePointer: function (object, pointer) {

      var activeGroup = this.getActiveGroup(),
          x = pointer.x,
          y = pointer.y;

      var isObjectInGroup = (
        activeGroup &&
        object.type !== 'group' &&
        activeGroup.contains(object)
      );

      if (isObjectInGroup) {
        x -= activeGroup.left;
        y -= activeGroup.top;
      }
      return { x: x, y: y };
    },

    /**
     * @private
     * @method _shouldClearSelection
     */
    _shouldClearSelection: function (e) {
      var target = this.findTarget(e),
          activeGroup = this.getActiveGroup();
      return (
        !target || (
          target &&
          activeGroup &&
          !activeGroup.contains(target) &&
          activeGroup !== target &&
          !e.shiftKey
        )
      );
    },

    /**
     * @private
     * @method _setupCurrentTransform
     */
    _setupCurrentTransform: function (e, target) {
      var action = 'drag',
          corner,
          pointer = getPointer(e);

      if (corner = target._findTargetCorner(e, this._offset)) {
        action = (corner === 'ml' || corner === 'mr')
          ? 'scaleX'
          : (corner === 'mt' || corner === 'mb')
            ? 'scaleY'
            : corner === 'mtr'
              ? 'rotate'
              : (target.hasRotatingPoint)
                ? 'scale'
                : 'rotate';
      }

      this._currentTransform = {
        target: target,
        action: action,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        offsetX: pointer.x - target.left,
        offsetY: pointer.y - target.top,
        ex: pointer.x,
        ey: pointer.y,
        left: target.left,
        top: target.top,
        theta: target.theta,
        width: target.width * target.scaleX
      };

      this._currentTransform.original = {
        left: target.left,
        top: target.top
      };
    },

    _handleGroupLogic: function (e, target) {
      if (target === this.getActiveGroup()) {
        // if it's a group, find target again, this time skipping group
        target = this.findTarget(e, true);
        // if even object is not found, bail out
        if (!target || target.isType('group')) {
          return;
        }
      }
      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        if (activeGroup.contains(target)) {
          activeGroup.removeWithUpdate(target);
          target.setActive(false);
          if (activeGroup.size() === 1) {
            // remove group alltogether if after removal it only contains 1 object
            this.discardActiveGroup();
          }
        }
        else {
          activeGroup.addWithUpdate(target);
        }
        this.fire('selection:created', { target: activeGroup, e: e });
        activeGroup.setActive(true);
      }
      else {
        // group does not exist
        if (this._activeObject) {
          // only if there's an active object
          if (target !== this._activeObject) {
            // and that object is not the actual target
            var group = new fabric.Group([ this._activeObject, target ]);
            this.setActiveGroup(group);
            activeGroup = this.getActiveGroup();
          }
        }
        // activate target object in any case
        target.setActive(true);
      }

      if (activeGroup) {
        activeGroup.saveCoords();
      }
    },

    /**
     * @private
     * @method _prepareForDrawing
     */
    _prepareForDrawing: function(e) {

      this._isCurrentlyDrawing = true;

      this.discardActiveObject().renderAll();

      var pointer = this.getPointer(e);

      this._freeDrawingXPoints.length = this._freeDrawingYPoints.length = 0;

      this._freeDrawingXPoints.push(pointer.x);
      this._freeDrawingYPoints.push(pointer.y);

      this.contextTop.beginPath();
      this.contextTop.moveTo(pointer.x, pointer.y);
      this.contextTop.strokeStyle = this.freeDrawingColor;
      this.contextTop.lineWidth = this.freeDrawingLineWidth;
      this.contextTop.lineCap = this.contextTop.lineJoin = 'round';
    },

    /**
     * @private
     * @method _captureDrawingPath
     */
    _captureDrawingPath: function(e) {
      var pointer = this.getPointer(e);

      this._freeDrawingXPoints.push(pointer.x);
      this._freeDrawingYPoints.push(pointer.y);

      this.contextTop.lineTo(pointer.x, pointer.y);
      this.contextTop.stroke();
    },

    /**
     * @private
     * @method _finalizeDrawingPath
     */
    _finalizeDrawingPath: function() {

      this.contextTop.closePath();

      this._isCurrentlyDrawing = false;

      var minX = utilMin(this._freeDrawingXPoints),
          minY = utilMin(this._freeDrawingYPoints),
          maxX = utilMax(this._freeDrawingXPoints),
          maxY = utilMax(this._freeDrawingYPoints),
          ctx = this.contextTop,
          path = [ ],
          xPoint,
          yPoint,
          xPoints = this._freeDrawingXPoints,
          yPoints = this._freeDrawingYPoints;

      path.push('M ', xPoints[0] - minX, ' ', yPoints[0] - minY, ' ');

      for (var i = 1; xPoint = xPoints[i], yPoint = yPoints[i]; i++) {
        path.push('L ', xPoint - minX, ' ', yPoint - minY, ' ');
      }

      // TODO (kangax): maybe remove Path creation from here, to decouple fabric.Canvas from fabric.Path,
      // and instead fire something like "drawing:completed" event with path string

      path = path.join('');

      if (path === "M 0 0 L 0 0 ") {
        // do not create 0 width/height paths, as they are rendered inconsistently across browsers
        // Firefox 4, for example, renders a dot, whereas Chrome 10 renders nothing
        return;
      }

      var p = new fabric.Path(path);

      p.fill = null;
      p.stroke = this.freeDrawingColor;
      p.strokeWidth = this.freeDrawingLineWidth;
      this.add(p);
      p.set("left", minX + (maxX - minX) / 2).set("top", minY + (maxY - minY) / 2).setCoords();
      this.renderAll();
      this.fire('path:created', { path: p });
    },

    /**
     * Translates object by "setting" its left/top
     * @method _translateObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _translateObject: function (x, y) {
      var target = this._currentTransform.target;
      target.lockMovementX || target.set('left', x - this._currentTransform.offsetX);
      target.lockMovementY || target.set('top', y - this._currentTransform.offsetY);
    },

    /**
     * Scales object by invoking its scaleX/scaleY methods
     * @method _scaleObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     * @param by {String} Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
     *                    When not provided, an object is scaled by both dimensions equally
     */
    _scaleObject: function (x, y, by) {
      var t = this._currentTransform,
          offset = this._offset,
          target = t.target;

      if (target.lockScalingX && target.lockScalingY) return;

      var lastLen = sqrt(pow(t.ey - t.top - offset.top, 2) + pow(t.ex - t.left - offset.left, 2)),
          curLen = sqrt(pow(y - t.top - offset.top, 2) + pow(x - t.left - offset.left, 2));

      target._scaling = true;

      if (!by) {
        target.lockScalingX || target.set('scaleX', t.scaleX * curLen/lastLen);
        target.lockScalingY || target.set('scaleY', t.scaleY * curLen/lastLen);
      }
      else if (by === 'x' && !target.lockUniScaling) {
        target.lockScalingX || target.set('scaleX', t.scaleX * curLen/lastLen);
      }
      else if (by === 'y' && !target.lockUniScaling) {
        target.lockScalingY || target.set('scaleY', t.scaleY * curLen/lastLen);
      }
    },

    /**
     * Rotates object by invoking its rotate method
     * @method _rotateObject
     * @param x {Number} pointer's x coordinate
     * @param y {Number} pointer's y coordinate
     */
    _rotateObject: function (x, y) {

      var t = this._currentTransform,
          o = this._offset;

      if (t.target.lockRotation) return;

      var lastAngle = atan2(t.ey - t.top - o.top, t.ex - t.left - o.left),
          curAngle = atan2(y - t.top - o.top, x - t.left - o.left);

      t.target.set('theta', (curAngle - lastAngle) + t.theta);
    },

    /**
     * @method _setCursor
     */
    _setCursor: function (value) {
      this.upperCanvasEl.style.cursor = value;
    },

    /**
     * Sets the cursor depending on where the canvas is being hovered.
     * Note: very buggy in Opera
     * @method _setCursorFromEvent
     * @param e {Event} Event object
     * @param target {Object} Object that the mouse is hovering, if so.
     */
    _setCursorFromEvent: function (e, target) {
      var s = this.upperCanvasEl.style;
      if (!target) {
        s.cursor = this.defaultCursor;
        return false;
      }
      else {
        var activeGroup = this.getActiveGroup();
        // only show proper corner when group selection is not active
        var corner = !!target._findTargetCorner
                      && (!activeGroup || !activeGroup.contains(target))
                      && target._findTargetCorner(e, this._offset);

        if (!corner) {
          s.cursor = this.hoverCursor;
        }
        else {
          if (corner in cursorMap) {
            s.cursor = cursorMap[corner];
          } else if (corner === 'mtr' && target.hasRotatingPoint) {
            s.cursor = this.rotationCursor;
          } else {
            s.cursor = this.defaulCursor;
            return false;
          }
        }
      }
      return true;
    },

    /**
     * @method _drawSelection
     * @private
     */
    _drawSelection: function () {
      var groupSelector = this._groupSelector,
          left = groupSelector.left,
          top = groupSelector.top,
          aleft = abs(left),
          atop = abs(top);

      this.contextTop.fillStyle = this.selectionColor;

      this.contextTop.fillRect(
        groupSelector.ex - ((left > 0) ? 0 : -left),
        groupSelector.ey - ((top > 0) ? 0 : -top),
        aleft,
        atop
      );

      this.contextTop.lineWidth = this.selectionLineWidth;
      this.contextTop.strokeStyle = this.selectionBorderColor;

      this.contextTop.strokeRect(
        groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0 : aleft),
        groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0 : atop),
        aleft,
        atop
      );
    },

    _findSelectedObjects: function (e) {
      var target,
          targetRegion,
          group = [ ],
          x1 = this._groupSelector.ex,
          y1 = this._groupSelector.ey,
          x2 = x1 + this._groupSelector.left,
          y2 = y1 + this._groupSelector.top,
          currentObject,
          selectionX1Y1 = new fabric.Point(min(x1, x2), min(y1, y2)),
          selectionX2Y2 = new fabric.Point(max(x1, x2), max(y1, y2));

      for (var i = 0, len = this._objects.length; i < len; ++i) {
        currentObject = this._objects[i];

        if (!currentObject) continue;

        if (currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2) ||
            currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2)) {

          if (this.selection && currentObject.selectable) {
            currentObject.setActive(true);
            group.push(currentObject);
          }
        }
      }

      // do not create group for 1 element only
      if (group.length === 1) {
        this.setActiveObject(group[0], e);
      }
      else if (group.length > 1) {
        var group = new fabric.Group(group);
        this.setActiveGroup(group);
        group.saveCoords();
        this.fire('selection:created', { target: group });
      }

      this.renderAll();
    },

    /**
     * Method that determines what object we are clicking on
     * @method findTarget
     * @param {Event} e mouse event
     * @param {Boolean} skipGroup when true, group is skipped and only objects are traversed through
     */
    findTarget: function (e, skipGroup) {

      var target,
          pointer = this.getPointer(e);

      // first check current group (if one exists)
      var activeGroup = this.getActiveGroup();

      if (activeGroup && !skipGroup && this.containsPoint(e, activeGroup)) {
        target = activeGroup;
        return target;
      }

      // then check all of the objects on canvas
      for (var i = this._objects.length; i--; ) {
        if (this._objects[i] && this.containsPoint(e, this._objects[i])) {
          target = this._objects[i];
          this.relatedTarget = target;
          break;
        }
      }
      if (target && target.selectable) {
        return target;
      }
    },

    /**
     * Returns pointer coordinates relative to canvas.
     * @method getPointer
     * @return {Object} object with "x" and "y" number values
     */
    getPointer: function (e) {
      var pointer = getPointer(e);
      return {
        x: pointer.x - this._offset.left,
        y: pointer.y - this._offset.top
      };
    },

    /**
     * @method _createUpperCanvas
     * @param {HTMLElement|String} canvasEl Canvas element
     * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
     */
    _createUpperCanvas: function () {
      this.upperCanvasEl = this._createCanvasElement();
      this.upperCanvasEl.className = 'upper-canvas';

      this.wrapperEl.appendChild(this.upperCanvasEl);

      this._applyCanvasStyle(this.upperCanvasEl);
      this.contextTop = this.upperCanvasEl.getContext('2d');
    },

    /**
     * @private
     * @method _initWrapperElement
     * @param {Number} width
     * @param {Number} height
     */
    _initWrapperElement: function () {
      this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, 'div', {
        'class': this.containerClass
      });
      fabric.util.setStyle(this.wrapperEl, {
        width: this.getWidth() + 'px',
        height: this.getHeight() + 'px',
        position: 'relative'
      });
      fabric.util.makeElementUnselectable(this.wrapperEl);
    },

    /**
     * @private
     * @method _applyCanvasStyle
     * @param {Element} element
     */
    _applyCanvasStyle: function (element) {
      var width = this.getWidth() || element.width,
          height = this.getHeight() || element.height;

      fabric.util.setStyle(element, {
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        left: 0,
        top: 0
      });
      element.width = width;
      element.height = height;
      fabric.util.makeElementUnselectable(element);
    },

    /**
     * Returns context of canvas where object selection is drawn
     * @method getContext
     * @return {CanvasRenderingContext2D}
     */
    getSelectionContext: function() {
      return this.contextTop;
    },

    /**
     * Returns &lt;canvas> element on which object selection is drawn
     * @method getElement
     * @return {HTMLCanvasElement}
     */
    getSelectionElement: function () {
      return this.upperCanvasEl;
    },

    /**
     * Sets given object as active
     * @method setActiveObject
     * @param object {fabric.Object} Object to set as an active one
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveObject: function (object, e) {
      if (this._activeObject) {
        this._activeObject.setActive(false);
      }
      this._activeObject = object;
      object.setActive(true);

      this.renderAll();

      this.fire('object:selected', { target: object, e: e });
      return this;
    },

    /**
     * Returns currently active object
     * @method getActiveObject
     * @return {fabric.Object} active object
     */
    getActiveObject: function () {
      return this._activeObject;
    },

    /**
     * Discards currently active object
     * @method discardActiveObject
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveObject: function () {
      if (this._activeObject) {
        this._activeObject.setActive(false);
      }
      this._activeObject = null;
      return this;
    },

    /**
     * Sets active group to a speicified one
     * @method setActiveGroup
     * @param {fabric.Group} group Group to set as a current one
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveGroup: function (group) {
      this._activeGroup = group;
      group && group.setActive(true);
      return this;
    },

    /**
     * Returns currently active group
     * @method getActiveGroup
     * @return {fabric.Group} Current group
     */
    getActiveGroup: function () {
      return this._activeGroup;
    },

    /**
     * Removes currently active group
     * @method discardActiveGroup
     * @return {fabric.Canvas} thisArg
     */
    discardActiveGroup: function () {
      var g = this.getActiveGroup();
      if (g) {
        g.destroy();
      }
      return this.setActiveGroup(null);
    },

    /**
     * Deactivates all objects by calling their setActive(false)
     * @method deactivateAll
     * @return {fabric.Canvas} thisArg
     */
    deactivateAll: function () {
      var allObjects = this.getObjects(),
          i = 0,
          len = allObjects.length;
      for ( ; i < len; i++) {
        allObjects[i].setActive(false);
      }
      this.discardActiveGroup();
      this.discardActiveObject();
      return this;
    },

    /**
     * Deactivates all objects and dispatches appropriate events
     * @method deactivateAllWithDispatch
     * @return {fabric.Canvas} thisArg
     */
    deactivateAllWithDispatch: function () {
      var activeObject = this.getActiveGroup() || this.getActiveObject();
      if (activeObject) {
        this.fire('before:selection:cleared', { target: activeObject });
      }
      this.deactivateAll();
      if (activeObject) {
        this.fire('selection:cleared');
      }
      return this;
    }
  };

  fabric.Canvas.prototype.toString = fabric.StaticCanvas.prototype.toString;
  extend(fabric.Canvas.prototype, InteractiveMethods);

  // iterating manually to workaround Opera's bug
  // where "prototype" property is enumerable and overrides existing prototype
  for (var prop in fabric.StaticCanvas) {
    if (prop !== 'prototype') {
      fabric.Canvas[prop] = fabric.StaticCanvas[prop];
    }
  }

  if (fabric.isTouchSupported) {
    fabric.Canvas.prototype._setCursorFromEvent = function() { };
  }

  /**
   * @class fabric.Element
   * @alias fabric.Canvas
   * @deprecated
   * @constructor
   */
  fabric.Element = fabric.Canvas;
})();
fabric.util.object.extend(fabric.StaticCanvas.prototype, {

  FX_DURATION: 500,

  /**
   * Centers object horizontally with animation.
   * @method fxCenterObjectH
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectH: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('left'),
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('left', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Centers object vertically with animation.
   * @method fxCenterObjectV
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectV: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('top'),
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('top', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Same as `fabric.Canvas#remove` but animated
   * @method fxRemove
   * @param {fabric.Object} object Object to remove
   * @param {Function} callback Callback, invoked on effect completion
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxRemove: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('opacity'),
      endValue: 0,
      duration: this.FX_DURATION,
      onStart: function() {
        object.setActive(false);
      },
      onChange: function(value) {
        object.set('opacity', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function () {
        _this.remove(object);
        onComplete();
      }
    });

    return this;
  }
});
fabric.util.object.extend(fabric.StaticCanvas.prototype, {

  /**
   * Populates canvas with data from the specified dataless JSON
   * JSON format must conform to the one of `fabric.Canvas#toDatalessJSON`
   * @method loadFromDatalessJSON
   * @param {String} json JSON string
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: fabric.Image)
   *                            are initialized
   * @return {fabric.Canvas} instance
   * @chainable
   */
  loadFromDatalessJSON: function (json, callback) {

    if (!json) {
      return;
    }

    // serialize if it wasn't already
    var serialized = (typeof json === 'string')
      ? JSON.parse(json)
      : json;

    if (!serialized || (serialized && !serialized.objects)) return;

    this.clear();

    // TODO: test this
    this.backgroundColor = serialized.background;
    this._enlivenDatalessObjects(serialized.objects, callback);
  },

  /**
   * @method _enlivenDatalessObjects
   * @param {Array} objects
   * @param {Function} callback
   */
  _enlivenDatalessObjects: function (objects, callback) {

    /** @ignore */
    function onObjectLoaded(object, index) {
      _this.insertAt(object, index, true);
      object.setCoords();
      if (++numLoadedObjects === numTotalObjects) {
        callback && callback();
      }
    }

    var _this = this,
        numLoadedObjects = 0,
        numTotalObjects = objects.length;

    if (numTotalObjects === 0 && callback) {
      callback();
    }

    try {
      objects.forEach(function (obj, index) {

        var pathProp = obj.paths ? 'paths' : 'path';
        var path = obj[pathProp];

        delete obj[pathProp];

        if (typeof path !== 'string') {
          switch (obj.type) {
            case 'image':
              fabric[fabric.util.string.capitalize(obj.type)].fromObject(obj, function (o) {
                onObjectLoaded(o, index);
              });
              break;
            default:
              var klass = fabric[fabric.util.string.camelize(fabric.util.string.capitalize(obj.type))];
              if (klass && klass.fromObject) {
                // restore path
                if (path) {
                  obj[pathProp] = path;
                }
                onObjectLoaded(klass.fromObject(obj), index);
              }
              break;
          }
        }
        else {
          if (obj.type === 'image') {
            fabric.util.loadImage(path, function (image) {
              var oImg = new fabric.Image(image);

              oImg.setSourcePath(path);

              fabric.util.object.extend(oImg, obj);
              oImg.setAngle(obj.angle);

              onObjectLoaded(oImg, index);
            });
          }
          else if (obj.type === 'text') {

            obj.path = path;
            var object = fabric.Text.fromObject(obj);
            var onscriptload = function () {
              // TODO (kangax): find out why Opera refuses to work without this timeout
              if (Object.prototype.toString.call(fabric.window.opera) === '[object Opera]') {
                setTimeout(function () {
                  onObjectLoaded(object, index);
                }, 500);
              }
              else {
                onObjectLoaded(object, index);
              }
            }

            fabric.util.getScript(path, onscriptload);
          }
          else {
            fabric.loadSVGFromURL(path, function (elements, options) {
              var object = fabric.util.groupSVGElements(elements, obj, path);

              // copy parameters from serialied json to object (left, top, scaleX, scaleY, etc.)
              // skip this step if an object is a PathGroup, since we already passed it options object before
              if (!(object instanceof fabric.PathGroup)) {
                fabric.util.object.extend(object, obj);
                if (typeof obj.angle !== 'undefined') {
                  object.setAngle(obj.angle);
                }
              }

              onObjectLoaded(object, index);
            });
          }
        }
      }, this);
    }
    catch(e) {
      fabric.log(e.message);
    }
  },

  /**
   * Populates canvas with data from the specified JSON
   * JSON format must conform to the one of `fabric.Canvas#toJSON`
   * @method loadFromJSON
   * @param {String} json JSON string
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: fabric.Image)
   *                            are initialized
   * @return {fabric.Canvas} instance
   * @chainable
   */
  loadFromJSON: function (json, callback) {
    if (!json) return;

    var serialized = JSON.parse(json);
    if (!serialized || (serialized && !serialized.objects)) return;

    this.clear();
    var _this = this;
    this._enlivenObjects(serialized.objects, function () {
      _this.backgroundColor = serialized.background;

      if (serialized.backgroundImage) {
        _this.setBackgroundImage(serialized.backgroundImage, function() {

          _this.backgroundImageOpacity = serialized.backgroundImageOpacity;
          _this.backgroundImageStretch = serialized.backgroundImageStretch;

          _this.renderAll();

          callback && callback();
        });
      }
      else {
        callback && callback();
      }
    });

    return this;
  },

  /**
   * @method _enlivenObjects
   * @param {Array} objects
   * @param {Function} callback
   */
  _enlivenObjects: function (objects, callback) {
    var _this = this;
    fabric.util.enlivenObjects(objects, function(enlivenedObjects) {
      enlivenedObjects.forEach(function(obj, index) {
        _this.insertAt(obj, index, true);
      });
      callback && callback();
    });
  },

  /**
   * @private
   * @method _toDataURL
   * @param {String} format
   * @param {Function} callback
   */
  _toDataURL: function (format, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURL(format));
    });
  },

  /**
   * @private
   * @method _toDataURLWithMultiplier
   * @param {String} format
   * @param {Number} multiplier
   * @param {Function} callback
   */
  _toDataURLWithMultiplier: function (format, multiplier, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURLWithMultiplier(format, multiplier));
    });
  },

  /**
   * Clones canvas instance
   * @method clone
   * @param {Object} [callback] Receives cloned instance as a first argument
   */
  clone: function (callback) {
    var data = JSON.stringify(this);
    this.cloneWithoutData(function(clone) {
      clone.loadFromJSON(data, function() {
        callback && callback(clone);
      });
    });
  },

  /**
   * Clones canvas instance without cloning existing data.
   * This essentially copies canvas dimensions, clipping properties, etc.
   * but leaves data empty (so that you can populate it with your own)
   * @method cloneWithoutData
   * @param {Object} [callback] Receives cloned instance as a first argument
   */
  cloneWithoutData: function(callback) {
    var el = fabric.document.createElement('canvas');

    el.width = this.getWidth();
    el.height = this.getHeight();

    var clone = new fabric.Canvas(el);
    clone.clipTo = this.clipTo;
    if (this.backgroundImage) {
      clone.setBackgroundImage(this.backgroundImage.src, function() {
        clone.renderAll();
        callback && callback(clone);
      });
      clone.backgroundImageOpacity = this.backgroundImageOpacity;
      clone.backgroundImageStretch = this.backgroundImageStretch;
    }
    else {
      callback && callback(clone);
    }
  }
});
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      capitalize = fabric.util.string.capitalize,
      getPointer = fabric.util.getPointer,
      degreesToRadians = fabric.util.degreesToRadians,
      slice = Array.prototype.slice;

  if (fabric.Object) {
    return;
  }

  /**
   * @class Object
   * @memberOf fabric
   */
  fabric.Object = fabric.util.createClass(/** @scope fabric.Object.prototype */ {

    /**
     * Type of an object (rect, circle, path, etc)
     * @property
     * @type String
     */
    type:                       'object',

    /**
     * @property
     * @type Boolean
     */
    includeDefaultValues:       true,

    /**
     * @constant
     * @type Number
     */
    NUM_FRACTION_DIGITS:        2,

    /**
     * @constant
     * @type Number
     */
    MIN_SCALE_LIMIT:            0.1,

    /**
     * List of properties to consider when checking if state of an object is changed (fabric.Object#hasStateChanged);
     * as well as for history (undo/redo) purposes
     * @property
     * @type Array
     */
    stateProperties:  ('top left width height scaleX scaleY flipX flipY ' +
                      'theta angle opacity cornersize fill overlayFill stroke ' +
                      'strokeWidth fillRule borderScaleFactor transformMatrix ' +
                      'selectable').split(' '),

    top:                      0,
    left:                     0,
    width:                    0,
    height:                   0,
    scaleX:                   1,
    scaleY:                   1,
    flipX:                    false,
    flipY:                    false,
    theta:                    0,
    opacity:                  1,
    angle:                    0,
    cornersize:               12,
    padding:                  0,
    borderColor:              'rgba(102,153,255,0.75)',
    cornerColor:              'rgba(102,153,255,0.5)',
    fill:                     'rgb(0,0,0)',
    fillRule:                 'source-over',
    overlayFill:              null,
    stroke:                   null,
    strokeWidth:              1,
    borderOpacityWhenMoving:  0.4,
    borderScaleFactor:        1,
    transformMatrix:          null,

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection)
     * @property
     * @type Boolean
     */
    selectable:               true,

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     * @property
     * @type Boolean
     */
    hasControls:              true,

    /**
     * When set to `false`, object's borders are not rendered
     * @property
     * @type Boolean
     */
    hasBorders:               true,

    /**
     * When set to `false`, object's rotating point will not be visible or selectable
     * @property
     * @type Boolean
     */
    hasRotatingPoint:         false,

    /**
     * Offset for object's rotating point (when enabled)
     * @property
     * @type Number
     */
    rotatingPointOffset:      40,

    /**
     * @method callSuper
     * @param {String} methodName
     */
    callSuper: function(methodName) {
      var fn = this.constructor.superclass.prototype[methodName];
      return (arguments.length > 1)
        ? fn.apply(this, slice.call(arguments, 1))
        : fn.call(this);
    },

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     */
    initialize: function(options) {
      options && this.setOptions(options);
    },

    /**
     * @method setOptions
     * @param {Object} [options]
     */
    setOptions: function(options) {
      var i = this.stateProperties.length, prop;
      while (i--) {
        prop = this.stateProperties[i];
        if (prop in options) {
          this.set(prop, options[prop]);
        }
      }
    },

    /**
     * @method transform
     * @param {CanvasRenderingContext2D} ctx Context
     */
    transform: function(ctx) {
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.left, this.top);
      ctx.rotate(this.theta);
      ctx.scale(
        this.scaleX * (this.flipX ? -1 : 1),
        this.scaleY * (this.flipY ? -1 : 1)
      );
    },

    /**
     * Returns an object representation of an instance
     * @method toObject
     * @return {Object}
     */
    toObject: function() {

      var object = {
        type:             this.type,
        left:             toFixed(this.left, this.NUM_FRACTION_DIGITS),
        top:              toFixed(this.top, this.NUM_FRACTION_DIGITS),
        width:            toFixed(this.width, this.NUM_FRACTION_DIGITS),
        height:           toFixed(this.height, this.NUM_FRACTION_DIGITS),
        fill:             this.fill,
        overlayFill:      this.overlayFill,
        stroke:           this.stroke,
        strokeWidth:      this.strokeWidth,
        scaleX:           toFixed(this.scaleX, this.NUM_FRACTION_DIGITS),
        scaleY:           toFixed(this.scaleY, this.NUM_FRACTION_DIGITS),
        angle:            toFixed(this.getAngle(), this.NUM_FRACTION_DIGITS),
        flipX:            this.flipX,
        flipY:            this.flipY,
        opacity:          toFixed(this.opacity, this.NUM_FRACTION_DIGITS),
        selectable:       this.selectable,
        hasControls:      this.hasControls,
        hasBorders:       this.hasBorders,
        hasRotatingPoint: this.hasRotatingPoint
      };

      if (!this.includeDefaultValues) {
        object = this._removeDefaultValues(object);
      }

      return object;
    },

    /**
     * Returns (dataless) object representation of an instance
     * @method toDatalessObject
     */
    toDatalessObject: function() {
      // will be overwritten by subclasses
      return this.toObject();
    },

    /**
     * Returns styles-string for svg-export
     * @method getSvgStyles
     * @return {string}
     */
    getSvgStyles: function() {
      return [
        "stroke: ", (this.stroke ? this.stroke : 'none'), "; ",
        "stroke-width: ", (this.strokeWidth ? this.strokeWidth : '0'), "; ",
        "fill: ", (this.fill ? this.fill : 'none'), "; ",
        "opacity: ", (this.opacity ? this.opacity : '1'), ";"
      ].join("");
    },

    /**
     * Returns transform-string for svg-export
     * @method getSvgTransform
     * @return {string}
     */
    getSvgTransform: function() {
      var angle = this.getAngle();
      return [
        "translate(", toFixed(this.left, 2), " ", toFixed(this.top, 2), ")",
        angle !== 0 ? (" rotate(" + toFixed(angle, 2) + ")") : '',
        (this.scaleX === 1 && this.scaleY === 1) ? '' : (" scale(" + toFixed(this.scaleX, 2) + " " + toFixed(this.scaleY, 2) + ")")
      ].join('');
    },

    /**
     * @private
     * @method _removeDefaultValues
     */
    _removeDefaultValues: function(object) {
      var defaultOptions = fabric.Object.prototype.options;
      if (defaultOptions) {
        this.stateProperties.forEach(function(prop) {
          if (object[prop] === defaultOptions[prop]) {
            delete object[prop];
          }
        });
      }
      return object;
    },

    /**
     * Returns true if an object is in its active state
     * @return {Boolean} true if an object is in its active state
     */
    isActive: function() {
      return !!this.active;
    },

    /**
     * Sets state of an object - `true` makes it active, `false` - inactive
     * @param {Boolean} active
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setActive: function(active) {
      this.active = !!active;
      return this;
    },

    /**
     * Returns a string representation of an instance
     * @return {String}
     */
    toString: function() {
      return "#<fabric." + capitalize(this.type) + ">";
    },

    /**
     * Basic setter
     * @param {Any} property
     * @param {Any} value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(property, value) {
      var shouldConstrainValue = (property === 'scaleX' || property === 'scaleY') && value < this.MIN_SCALE_LIMIT;
      if (shouldConstrainValue) {
        value = this.MIN_SCALE_LIMIT;
      }
      if (typeof property == 'object') {
        for (var prop in property) {
          this.set(prop, property[prop]);
        }
      }
      else {
        if (property === 'angle') {
          this.setAngle(value);
        }
        else {
          this[property] = value;
        }
      }

      return this;
    },

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @method toggle
     * @param {String} property property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(property) {
      var value = this.get(property);
      if (typeof value === 'boolean') {
        this.set(property, !value);
      }
      return this;
    },

    /**
     * @method setSourcePath
     * @param {String} value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setSourcePath: function(value) {
      this.sourcePath = value;
      return this;
    },

    /**
     * Basic getter
     * @method get
     * @param {Any} property
     * @return {Any} value of a property
     */
    get: function(property) {
      return (property === 'angle')
        ? this.getAngle()
        : this[property];
    },

    /**
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} noTransform
     */
    render: function(ctx, noTransform) {

      // do not render if width or height are zeros
      if (this.width === 0 || this.height === 0) return;

      ctx.save();

      var m = this.transformMatrix;
      if (m) {
        ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }

      if (!noTransform) {
        this.transform(ctx);
      }

      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.stroke;
      }

      if (this.overlayFill) {
        ctx.fillStyle = this.overlayFill;
      }
      else if (this.fill) {
        ctx.fillStyle = this.fill;
      }

      // TODO: this breaks some shapes, need to look into it
      // if (this.group) {
        // ctx.translate(
        //    -this.group.width / 2 + this.width / 2,
        //    -this.group.height / 2 + this.height / 2
        // );
      // }
      this._render(ctx, noTransform);

      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns width of an object
     * @method getWidth
     * @return {Number} width value
     */
    getWidth: function() {
      return this.width * this.scaleX;
    },

    /**
     * Returns height of an object
     * @method getHeight
     * @return {Number} height value
     */
    getHeight: function() {
      return this.height * this.scaleY;
    },

    /**
     * Scales an object (equally by x and y)
     * @method scale
     * @param value {Number} scale factor
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scale: function(value) {
      this.scaleX = value;
      this.scaleY = value;
      return this;
    },

    /**
     * Scales an object to a given width (scaling by x/y equally)
     * @method scaleToWidth
     * @param value {Number} new width value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToWidth: function(value) {
      return this.scale(value / this.width);
    },

    /**
     * Scales an object to a given height (scaling by x/y equally)
     * @method scaleToHeight
     * @param value {Number} new height value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToHeight: function(value) {
      return this.scale(value / this.height);
    },

    /**
     * Sets object opacity
     * @method setOpacity
     * @param value {Number} value 0-1
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setOpacity: function(value) {
      this.set('opacity', value);
      return this;
    },

    /**
     * Returns object's angle value
     * @method getAngle
     * @return {Number} angle value
     */
    getAngle: function() {
      return this.theta * 180 / Math.PI;
    },

    /**
     * Sets object's angle
     * @method setAngle
     * @param value {Number} angle value
     * @return {Object} thisArg
     */
    setAngle: function(value) {
      this.theta = value / 180 * Math.PI;
      this.angle = value;
      return this;
    },

    /**
     * Sets corner position coordinates based on current angle, width and height.
     * @method setCoords
     * return {fabric.Object} thisArg
     * @chainable
     */
    setCoords: function() {

      this.currentWidth = this.width * this.scaleX;
      this.currentHeight = this.height * this.scaleY;

      this._hypotenuse = Math.sqrt(
        Math.pow(this.currentWidth / 2, 2) +
        Math.pow(this.currentHeight / 2, 2));

      this._angle = Math.atan(this.currentHeight / this.currentWidth);

      // offset added for rotate and scale actions
      var offsetX = Math.cos(this._angle + this.theta) * this._hypotenuse,
          offsetY = Math.sin(this._angle + this.theta) * this._hypotenuse,
          theta = this.theta,
          sinTh = Math.sin(theta),
          cosTh = Math.cos(theta);

      var tl = {
        x: this.left - offsetX,
        y: this.top - offsetY
      };
      var tr = {
        x: tl.x + (this.currentWidth * cosTh),
        y: tl.y + (this.currentWidth * sinTh)
      };
      var br = {
        x: tr.x - (this.currentHeight * sinTh),
        y: tr.y + (this.currentHeight * cosTh)
      };
      var bl = {
        x: tl.x - (this.currentHeight * sinTh),
        y: tl.y + (this.currentHeight * cosTh)
      };
      var ml = {
        x: tl.x - (this.currentHeight/2 * sinTh),
        y: tl.y + (this.currentHeight/2 * cosTh)
      };
      var mt = {
        x: tl.x + (this.currentWidth/2 * cosTh),
        y: tl.y + (this.currentWidth/2 * sinTh)
      };
      var mr = {
        x: tr.x - (this.currentHeight/2 * sinTh),
        y: tr.y + (this.currentHeight/2 * cosTh)
      };
      var mb = {
        x: bl.x + (this.currentWidth/2 * cosTh),
        y: bl.y + (this.currentWidth/2 * sinTh)
      };
      var mtr = {
        x: tl.x + (this.currentWidth/2 * cosTh),
        y: tl.y + (this.currentWidth/2 * sinTh)
      };

      // debugging

      // setTimeout(function() {
      //         canvas.contextTop.fillStyle = 'green';
      //         canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
      //         canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
      //         canvas.contextTop.fillRect(br.x, br.y, 3, 3);
      //         canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
      //         canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
      //         canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
      //         canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
      //         canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
      //       }, 50);

      // clockwise
      this.oCoords = { tl: tl, tr: tr, br: br, bl: bl, ml: ml, mt: mt, mr: mr, mb: mb, mtr: mtr };

      // set coordinates of the draggable boxes in the corners used to scale/rotate the image
      this._setCornerCoords();

      return this;
    },

     /**
     * Returns width of an object's bounding rectangle
     * @method getBoundingRectWidth
     * @return {Number} width value
     */
    getBoundingRectWidth: function() {
      var xCoords = [this.oCoords.tl.x, this.oCoords.tr.x, this.oCoords.br.x, this.oCoords.bl.x];
      var minX = fabric.util.array.min(xCoords);
      var maxX = fabric.util.array.max(xCoords);
      return Math.abs(minX - maxX);
    },

    /**
     * Returns height of an object's bounding rectangle
     * @method getBoundingRectHeight
     * @return {Number} height value
     */
    getBoundingRectHeight: function() {
      var yCoords = [this.oCoords.tl.y, this.oCoords.tr.y, this.oCoords.br.y, this.oCoords.bl.y];
      var minY = fabric.util.array.min(yCoords);
      var maxY = fabric.util.array.max(yCoords);
      return Math.abs(minY - maxY);
    },

    /**
     * Draws borders of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @method drawBorders
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBorders: function(ctx) {
      if (!this.hasBorders) return;

      var padding = this.padding,
          padding2 = padding * 2;

      ctx.save();

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = this.borderColor;

      var scaleX = 1 / (this.scaleX < this.MIN_SCALE_LIMIT ? this.MIN_SCALE_LIMIT : this.scaleX),
          scaleY = 1 / (this.scaleY < this.MIN_SCALE_LIMIT ? this.MIN_SCALE_LIMIT : this.scaleY);

      ctx.lineWidth = 1 / this.borderScaleFactor;

      ctx.scale(scaleX, scaleY);

      var w = this.getWidth(),
          h = this.getHeight();

      ctx.strokeRect(
        ~~(-(w / 2) - padding) + 0.5, // offset needed to make lines look sharper
        ~~(-(h / 2) - padding) + 0.5,
        ~~(w + padding2),
        ~~(h + padding2)
      );

      if (this.hasRotatingPoint && !this.hideCorners && !this.lockRotation) {
        var rotateHeight = (this.flipY ? h : -h) / 2;
        var rotateWidth = (-w/2);

        ctx.beginPath();
        ctx.moveTo(0, rotateHeight);
        ctx.lineTo(0, rotateHeight + (this.flipY ? this.rotatingPointOffset : -this.rotatingPointOffset));
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
      return this;
    },

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height, scaleX, scaleY
     * Requires public options: cornersize, padding
     * @method drawCorners
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawCorners: function(ctx) {
      if (!this.hasControls) return;

      var size = this.cornersize,
          size2 = size / 2,
          padding = this.padding,
          left = -(this.width / 2),
          top = -(this.height / 2),
          _left,
          _top,
          sizeX = size / this.scaleX,
          sizeY = size / this.scaleY,
          scaleOffsetY = (padding + size2) / this.scaleY,
          scaleOffsetX = (padding + size2) / this.scaleX,
          scaleOffsetSizeX = (padding + size2 - size) / this.scaleX,
          scaleOffsetSizeY = (padding + size2 - size) / this.scaleY,
          height = this.height;

      ctx.save();

      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.fillStyle = this.cornerColor;

      // top-left
      _left = left - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // top-right
      _left = left + this.width - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // bottom-left
      _left = left - scaleOffsetX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // bottom-right
      _left = left + this.width + scaleOffsetSizeX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-top
      _left = left + this.width/2 - scaleOffsetX;
      _top = top - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-bottom
      _left = left + this.width/2 - scaleOffsetX;
      _top = top + height + scaleOffsetSizeY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-right
      _left = left + this.width + scaleOffsetSizeX;
      _top = top + height/2 - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-left
      _left = left - scaleOffsetX;
      _top = top + height/2 - scaleOffsetY;
      ctx.fillRect(_left, _top, sizeX, sizeY);

      // middle-top-rotate
      if (this.hasRotatingPoint) {
        // _left = left + this.width/2;
        // _top = top - (45 / this.scaleY) + scaleOffsetY;

        // ctx.save();
        // ctx.beginPath();
        // ctx.arc(_left, _top, sizeX / 2, 0, Math.PI * 2, false);
        // ctx.fill();
        // ctx.restore();

        _left = left + this.width/2 - scaleOffsetX;

        _top = this.flipY ?
          (top + height + (this.rotatingPointOffset / this.scaleY) - sizeY/2)
          : (top - (this.rotatingPointOffset / this.scaleY) - sizeY/2);

        ctx.fillRect(_left, _top, sizeX, sizeY);
      }

      ctx.restore();

      return this;
    },

    /**
     * Clones an instance
     * @method clone
     * @param {Object} options object
     * @return {fabric.Object} clone of an instance
     */
    clone: function(options) {
      if (this.constructor.fromObject) {
        return this.constructor.fromObject(this.toObject(), options);
      }
      return new fabric.Object(this.toObject());
    },

    /**
     * Creates an instance of fabric.Image out of an object
     * @method cloneAsImage
     * @param callback {Function} callback, invoked with an instance as a first argument
     * @return {fabric.Object} thisArg
     * @chainable
     */
    cloneAsImage: function(callback) {
      if (fabric.Image) {
        var i = new Image();

        /** @ignore */
        i.onload = function() {
          if (callback) {
            callback(new fabric.Image(i), orig);
          }
          i = i.onload = null;
        };

        var orig = {
          angle: this.get('angle'),
          flipX: this.get('flipX'),
          flipY: this.get('flipY')
        };

        // normalize angle
        this.set('angle', 0).set('flipX', false).set('flipY', false);
        this.toDataURL(function(dataURL) {
          i.src = dataURL;
        });
      }
      return this;
    },

    /**
     * Converts an object into a data-url-like string
     * @method toDataURL
     * @return {String} string of data
     */
    toDataURL: function(callback) {
      var el = fabric.document.createElement('canvas');
      if (!el.getContext && typeof G_vmlCanvasManager != 'undefined') {
        G_vmlCanvasManager.initElement(el);
      }

      this.setCoords();
      el.width  = this.getBoundingRectWidth();
      el.height = this.getBoundingRectHeight();

      fabric.util.wrapElement(el, 'div');

      var canvas = new fabric.Canvas(el);
      canvas.backgroundColor = 'transparent';
      canvas.renderAll();

      if (this.constructor.async) {
        this.clone(proceed);
      }
      else {
        proceed(this.clone());
      }

      function proceed(clone) {
        clone.left = el.width / 2;
        clone.top = el.height / 2;

        clone.setActive(false);

        canvas.add(clone);
        var data = canvas.toDataURL('png');

        canvas.dispose();
        canvas = clone = null;

        callback && callback(data);
      }
    },

    /**
     * @method hasStateChanged
     * @return {Boolean} true if instance' state has changed
     */
    hasStateChanged: function() {
      return this.stateProperties.some(function(prop) {
        return this[prop] !== this.originalState[prop];
      }, this);
    },

    /**
     * @method saveState
     * @return {fabric.Object} thisArg
     * @chainable
     */
    saveState: function() {
      this.stateProperties.forEach(function(prop) {
        this.originalState[prop] = this.get(prop);
      }, this);
      return this;
    },

    /**
     * @method setupState
     */
    setupState: function() {
      this.originalState = { };
      this.saveState();
    },

    /**
     * Returns true if object intersects with an area formed by 2 points
     * @method intersectsWithRect
     * @param {Object} selectionTL
     * @param {Object} selectionBR
     * @return {Boolean}
     */
    intersectsWithRect: function(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br = new fabric.Point(oCoords.br.x, oCoords.br.y);

      var intersection = fabric.Intersection.intersectPolygonRectangle(
        [tl, tr, br, bl],
        selectionTL,
        selectionBR
      );
      return (intersection.status === 'Intersection');
    },

    /**
     * Returns true if object intersects with another object
     * @method intersectsWithObject
     * @param {Object} other Object to test
     * @return {Boolean}
     */
    intersectsWithObject: function(other) {
      // extracts coords
      function getCoords(oCoords) {
        return {
          tl: new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr: new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl: new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br: new fabric.Point(oCoords.br.x, oCoords.br.y)
        }
      }
      var thisCoords = getCoords(this.oCoords),
          otherCoords = getCoords(other.oCoords);

      var intersection = fabric.Intersection.intersectPolygonPolygon(
        [thisCoords.tl, thisCoords.tr, thisCoords.br, thisCoords.bl],
        [otherCoords.tl, otherCoords.tr, otherCoords.br, otherCoords.bl]
      );

      return (intersection.status === 'Intersection');
    },

    /**
     * Returns true if object is fully contained within area of another object
     * @method isContainedWithinObject
     * @param {Object} other Object to test
     * @return {Boolean}
     */
    isContainedWithinObject: function(other) {
      return this.isContainedWithinRect(other.oCoords.tl, other.oCoords.br);
    },

    /**
     * Returns true if object is fully contained within area formed by 2 points
     * @method isContainedWithinRect
     * @param {Object} selectionTL
     * @param {Object} selectionBR
     * @return {Boolean}
     */
    isContainedWithinRect: function(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new fabric.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new fabric.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new fabric.Point(oCoords.bl.x, oCoords.bl.y),
          br = new fabric.Point(oCoords.br.x, oCoords.br.y);

      return tl.x > selectionTL.x
        && tr.x < selectionBR.x
        && tl.y > selectionTL.y
        && bl.y < selectionBR.y;
    },

    /**
     * @method isType
     * @param type {String} type to check against
     * @return {Boolean} true if specified type is identical to the type of instance
     */
    isType: function(type) {
      return this.type === type;
    },

    /**
     * Determines which one of the four corners has been clicked
     * @method _findTargetCorner
     * @private
     * @param e {Event} event object
     * @param offset {Object} canvas offset
     * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
     */
    _findTargetCorner: function(e, offset) {
      if (!this.hasControls) return false;

      var pointer = getPointer(e),
          ex = pointer.x - offset.left,
          ey = pointer.y - offset.top,
          xpoints,
          lines;

      for (var i in this.oCoords) {
        if (i === 'mtr' && !this.hasRotatingPoint) {
          return false;
        }

        lines = this._getImageLines(this.oCoords[i].corner, i);
        // debugging
        // canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);
        //
        //         canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
        //         canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);

        xpoints = this._findCrossPoints(ex, ey, lines);
        if (xpoints % 2 == 1 && xpoints != 0) {
          this.__corner = i;
          return i;
        }
      }
      return false;
    },

    /**
     * Helper method to determine how many cross points are between the 4 image edges
     * and the horizontal line determined by the position of our mouse when clicked on canvas
     * @method _findCrossPoints
     * @private
     * @param ex {Number} x coordinate of the mouse
     * @param ey {Number} y coordinate of the mouse
     * @param oCoords {Object} Coordinates of the image being evaluated
     */
    _findCrossPoints: function(ex, ey, oCoords) {
      var b1, b2, a1, a2, xi, yi,
          xcount = 0,
          iLine;

      for (var lineKey in oCoords) {
        iLine = oCoords[lineKey];
        // optimisation 1: line below dot. no cross
        if ((iLine.o.y < ey) && (iLine.d.y < ey)) {
          continue;
        }
        // optimisation 2: line above dot. no cross
        if ((iLine.o.y >= ey) && (iLine.d.y >= ey)) {
          continue;
        }
        // optimisation 3: vertical line case
        if ((iLine.o.x == iLine.d.x) && (iLine.o.x >= ex)) {
          xi = iLine.o.x;
          yi = ey;
        }
        // calculate the intersection point
        else {
          b1 = 0;
          b2 = (iLine.d.y-iLine.o.y)/(iLine.d.x-iLine.o.x);
          a1 = ey-b1*ex;
          a2 = iLine.o.y-b2*iLine.o.x;

          xi = - (a1-a2)/(b1-b2);
          yi = a1+b1*xi;
        }
        // dont count xi < ex cases
        if (xi >= ex) {
          xcount += 1;
        }
        // optimisation 4: specific for square images
        if (xcount == 2) {
          break;
        }
      }
      return xcount;
    },

    /**
     * Method that returns an object with the image lines in it given the coordinates of the corners
     * @method _getImageLines
     * @private
     * @param oCoords {Object} coordinates of the image corners
     */
    _getImageLines: function(oCoords, i) {
      return {
        topline: {
          o: oCoords.tl,
          d: oCoords.tr
        },
        rightline: {
          o: oCoords.tr,
          d: oCoords.br
        },
        bottomline: {
          o: oCoords.br,
          d: oCoords.bl
        },
        leftline: {
          o: oCoords.bl,
          d: oCoords.tl
        }
      }
    },

    /**
     * Sets the coordinates of the draggable boxes in the corners of
     * the image used to scale/rotate it.
     * @method _setCornerCoords
     * @private
     */
    _setCornerCoords: function() {
      var coords = this.oCoords,
          theta = degreesToRadians(45 - this.getAngle()),
          cornerHypotenuse = Math.sqrt(2 * Math.pow(this.cornersize, 2)) / 2,
          cosHalfOffset = cornerHypotenuse * Math.cos(theta),
          sinHalfOffset = cornerHypotenuse * Math.sin(theta),
          sinTh = Math.sin(this.theta),
          cosTh = Math.cos(this.theta);

      coords.tl.corner = {
        tl: {
          x: coords.tl.x - sinHalfOffset,
          y: coords.tl.y - cosHalfOffset
        },
        tr: {
          x: coords.tl.x + cosHalfOffset,
          y: coords.tl.y - sinHalfOffset
        },
        bl: {
          x: coords.tl.x - cosHalfOffset,
          y: coords.tl.y + sinHalfOffset
        },
        br: {
          x: coords.tl.x + sinHalfOffset,
          y: coords.tl.y + cosHalfOffset
        }
      };

      coords.tr.corner = {
        tl: {
          x: coords.tr.x - sinHalfOffset,
          y: coords.tr.y - cosHalfOffset
        },
        tr: {
          x: coords.tr.x + cosHalfOffset,
          y: coords.tr.y - sinHalfOffset
        },
        br: {
          x: coords.tr.x + sinHalfOffset,
          y: coords.tr.y + cosHalfOffset
        },
        bl: {
          x: coords.tr.x - cosHalfOffset,
          y: coords.tr.y + sinHalfOffset
        }
      };

      coords.bl.corner = {
        tl: {
          x: coords.bl.x - sinHalfOffset,
          y: coords.bl.y - cosHalfOffset
        },
        bl: {
          x: coords.bl.x - cosHalfOffset,
          y: coords.bl.y + sinHalfOffset
        },
        br: {
          x: coords.bl.x + sinHalfOffset,
          y: coords.bl.y + cosHalfOffset
        },
        tr: {
          x: coords.bl.x + cosHalfOffset,
          y: coords.bl.y - sinHalfOffset
        }
      };

      coords.br.corner = {
        tr: {
          x: coords.br.x + cosHalfOffset,
          y: coords.br.y - sinHalfOffset
        },
        bl: {
          x: coords.br.x - cosHalfOffset,
          y: coords.br.y + sinHalfOffset
        },
        br: {
          x: coords.br.x + sinHalfOffset,
          y: coords.br.y + cosHalfOffset
        },
        tl: {
          x: coords.br.x - sinHalfOffset,
          y: coords.br.y - cosHalfOffset
        }
      };

      coords.ml.corner = {
        tl: {
          x: coords.ml.x - sinHalfOffset,
          y: coords.ml.y - cosHalfOffset
        },
        tr: {
          x: coords.ml.x + cosHalfOffset,
          y: coords.ml.y - sinHalfOffset
        },
        bl: {
          x: coords.ml.x - cosHalfOffset,
          y: coords.ml.y + sinHalfOffset
        },
        br: {
          x: coords.ml.x + sinHalfOffset,
          y: coords.ml.y + cosHalfOffset
        }
      };

      coords.mt.corner = {
        tl: {
          x: coords.mt.x - sinHalfOffset,
          y: coords.mt.y - cosHalfOffset
        },
        tr: {
          x: coords.mt.x + cosHalfOffset,
          y: coords.mt.y - sinHalfOffset
        },
        bl: {
          x: coords.mt.x - cosHalfOffset,
          y: coords.mt.y + sinHalfOffset
        },
        br: {
          x: coords.mt.x + sinHalfOffset,
          y: coords.mt.y + cosHalfOffset
        }
      };

      coords.mr.corner = {
        tl: {
          x: coords.mr.x - sinHalfOffset,
          y: coords.mr.y - cosHalfOffset
        },
        tr: {
          x: coords.mr.x + cosHalfOffset,
          y: coords.mr.y - sinHalfOffset
        },
        bl: {
          x: coords.mr.x - cosHalfOffset,
          y: coords.mr.y + sinHalfOffset
        },
        br: {
          x: coords.mr.x + sinHalfOffset,
          y: coords.mr.y + cosHalfOffset
        }
      };

      coords.mb.corner = {
        tl: {
          x: coords.mb.x - sinHalfOffset,
          y: coords.mb.y - cosHalfOffset
        },
        tr: {
          x: coords.mb.x + cosHalfOffset,
          y: coords.mb.y - sinHalfOffset
        },
        bl: {
          x: coords.mb.x - cosHalfOffset,
          y: coords.mb.y + sinHalfOffset
        },
        br: {
          x: coords.mb.x + sinHalfOffset,
          y: coords.mb.y + cosHalfOffset
        }
      };

      coords.mtr.corner = {
        tl: {
          x: coords.mtr.x - sinHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y - cosHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        tr: {
          x: coords.mtr.x + cosHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y - sinHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        bl: {
          x: coords.mtr.x - cosHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y + sinHalfOffset - (cosTh * this.rotatingPointOffset)
        },
        br: {
          x: coords.mtr.x + sinHalfOffset + (sinTh * this.rotatingPointOffset),
          y: coords.mtr.y + cosHalfOffset - (cosTh * this.rotatingPointOffset)
        }
      };
    },

    /**
     * Makes object's color grayscale
     * @method toGrayscale
     * @return {fabric.Object} thisArg
     */
    toGrayscale: function() {
      var fillValue = this.get('fill');
      if (fillValue) {
        this.set('overlayFill', new fabric.Color(fillValue).toGrayscale().toRgb());
      }
      return this;
    },

    /**
     * @method complexity
     * @return {Number}
     */
    complexity: function() {
      return 0;
    },

    /**
     * Returns a JSON representation of an instance
     * @method toJSON
     * @return {String} json
     */
    toJSON: function() {
      // delegate, not alias
      return this.toObject();
    },

    setGradientFill: function(ctx, options) {
      this.set('fill', fabric.Gradient.forObject(this, ctx, options));
    },

    animate: function(property, to, options) {
      var obj = this;

      options || (options = { });

      if (!('from' in options)) {
        options.from = this.get(property);
      }

      if (/[+-]/.test((to + '').charAt(0))) {
        to = this.get(property) + parseFloat(to);
      }

      fabric.util.animate({
        startValue: options.from,
        endValue: to,
        byValue: options.by,
        easing: options.easing,
        duration: options.duration,
        onChange: function(value) {
          obj.set(property, value);
          options.onChange && options.onChange();
        },
        onComplete: function() {
          obj.setCoords();
          options.onComplete && options.onComplete();
        }
      });
    }
  });

  /**
   * @alias rotate -> setAngle
   */
  fabric.Object.prototype.rotate = fabric.Object.prototype.setAngle;

  var proto = fabric.Object.prototype;
  for (var i = proto.stateProperties.length; i--; ) {

    var propName = proto.stateProperties[i],
        capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1),
        setterName = 'set' + capitalizedPropName,
        getterName = 'get' + capitalizedPropName;

    // using `new Function` for better introspection
    if (!proto[getterName]) {
      proto[getterName] = (function(property) {
        return new Function('return this.get("' + property + '")');
      })(propName);
    }
    if (!proto[setterName]) {
      proto[setterName] = (function(property) {
        return new Function('value', 'return this.set("' + property + '", value)');
      })(propName);
    }
  }

})(typeof exports != 'undefined' ? exports : this);

(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      parentSet = fabric.Object.prototype.set,
      coordProps = { 'x1': 1, 'x2': 1, 'y1': 1, 'y2': 1 };

  if (fabric.Line) {
    fabric.warn('fabric.Line is already defined');
    return;
  }

  /**
   * @class Line
   * @extends fabric.Object
   */
  fabric.Line = fabric.util.createClass(fabric.Object, /** @scope fabric.Line.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'line',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Line} thisArg
     */
    initialize: function(points, options) {
      if (!points) {
        points = [0, 0, 0, 0];
      }

      this.callSuper('initialize', options);

      this.set('x1', points[0]);
      this.set('y1', points[1]);
      this.set('x2', points[2]);
      this.set('y2', points[3]);

      this._setWidthHeight(options);
    },

    _setWidthHeight: function(options) {
      options || (options = { });

      this.set('width', (this.x2 - this.x1) || 1);
      this.set('height', (this.y2 - this.y1) || 1);

      this.set('left', 'left' in options ? options.left : (this.x1 + this.width / 2));
      this.set('top', 'top' in options ? options.top : (this.y1 + this.height / 2));
    },

    set: function(name, value) {
      parentSet.call(this, name, value);
      if (name in coordProps) {
        this._setWidthHeight();
      }
      return this;
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      ctx.beginPath();

      // move from center (of virtual box) to its left/top corner
      ctx.moveTo(this.width === 1 ? 0 : (-this.width / 2), this.height === 1 ? 0 : (-this.height / 2));
      ctx.lineTo(this.width === 1 ? 0 : (this.width / 2), this.height === 1 ? 0 : (this.height / 2));

      ctx.lineWidth = this.strokeWidth;

      // TODO: test this
      // make sure setting "fill" changes color of a line
      // (by copying fillStyle to strokeStyle, since line is stroked, not filled)
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.stroke();
      ctx.strokeStyle = origStrokeStyle;
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @return {Object}
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        x1: this.get('x1'),
        y1: this.get('y1'),
        x2: this.get('x2'),
        y2: this.get('y2')
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      return [
        '<line ',
          'x1="', this.get('x1'), '" ',
          'y1="', this.get('y1'), '" ',
          'x2="', this.get('x2'), '" ',
          'y2="', this.get('y2'), '" ',
          'style="', this.getSvgStyles(), '" ',
        '/>'
      ].join('');
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Line.fromElement`)
   * @static
   * @see http://www.w3.org/TR/SVG/shapes.html#LineElement
   */
  fabric.Line.ATTRIBUTE_NAMES = 'x1 y1 x2 y2 stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Line instance from an SVG element
   * @static
   * @method fabric.Line.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES);
    var points = [
      parsedAttributes.x1 || 0,
      parsedAttributes.y1 || 0,
      parsedAttributes.x2 || 0,
      parsedAttributes.y2 || 0
    ];
    return new fabric.Line(points, extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Line instance from an object representation
   * @static
   * @method fabric.Line.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromObject = function(object) {
    var points = [object.x1, object.y1, object.x2, object.y2];
    return new fabric.Line(points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric  = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Circle) {
    fabric.warn('fabric.Circle is already defined.');
    return;
  }

  /**
   * @class Circle
   * @extends fabric.Object
   */
  fabric.Circle = fabric.util.createClass(fabric.Object, /** @scope fabric.Circle.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'circle',

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     * @return {fabric.Circle} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.set('radius', options.radius || 0);
      this.callSuper('initialize', options);

      var diameter = this.get('radius') * 2;
      this.set('width', diameter).set('height', diameter);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        radius: this.get('radius')
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      return ('<circle ' +
        'cx="0" cy="0" ' +
        'r="' + this.radius + '" ' +
        'style="' + this.getSvgStyles() + '" ' +
        'transform="' + this.getSvgTransform() + '" ' +
        '/>');
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      // multiply by currently set alpha (the one that was set by path group where this object is contained, for example)
      ctx.globalAlpha *= this.opacity;
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.radius, 0, piBy2, false);
      ctx.closePath();
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @method getRadiusX
     * @return {Number}
     */
    getRadiusX: function() {
      return this.get('radius') * this.get('scaleX');
    },

    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @method getRadiusY
     * @return {Number}
     */
    getRadiusY: function() {
      return this.get('radius') * this.get('scaleY');
    },

    /**
     * Sets radius of an object (and updates width accordingly)
     * @method setRadius
     * @return {Number}
     */
    setRadius: function(value) {
      this.radius = value;
      this.set('width', value * 2).set('height', value * 2);
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#CircleElement
   */
  fabric.Circle.ATTRIBUTE_NAMES = 'cx cy r fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns {@link fabric.Circle} instance from an SVG element
   * @static
   * @method fabric.Circle.fromElement
   * @param element {SVGElement} element to parse
   * @param options {Object} options object
   * @throws {Error} If value of `r` attribute is missing or invalid
   * @return {Object} instance of fabric.Circle
   */
  fabric.Circle.fromElement = function(element, options) {
    options || (options = { });
    var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);
    if (!isValidRadius(parsedAttributes)) {
      throw Error('value of `r` attribute is required and can not be negative');
    }
    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }
    return new fabric.Circle(extend(parsedAttributes, options));
  };

  /**
   * @private
   */
  function isValidRadius(attributes) {
    return (('radius' in attributes) && (attributes.radius > 0));
  }

  /**
   * Returns {@link fabric.Circle} instance from an object representation
   * @static
   * @method fabric.Circle.fromObject
   * @param {Object} object Object to create an instance from
   * @return {Object} Instance of fabric.Circle
   */
  fabric.Circle.fromObject = function(object) {
    return new fabric.Circle(object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {
  
  "use strict";
  
  var fabric = global.fabric || (global.fabric = { });
  
  if (fabric.Triangle) {
    fabric.warn('fabric.Triangle is already defined');
    return;
  }
  
  /** 
   * @class Triangle
   * @extends fabric.Object
   */
  fabric.Triangle = fabric.util.createClass(fabric.Object, /** @scope fabric.Triangle.prototype */ {
    
    /**
     * @property
     * @type String
     */
    type: 'triangle',
    
    /**
     * Constructor
     * @method initialize
     * @param options {Object} options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };
      
      this.callSuper('initialize', options);
      
      this.set('width', options.width || 100)
          .set('height', options.height || 100);
    },
    
    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} Context to render on
     */
    _render: function(ctx) {      
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;
      
      ctx.beginPath();
      ctx.moveTo(-widthBy2, heightBy2);
      ctx.lineTo(0, -heightBy2);
      ctx.lineTo(widthBy2, heightBy2);
      ctx.closePath();
      
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },
    
    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    },
    
    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {

      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      var points = [
        -widthBy2 + " " + heightBy2,
        "0 " + -heightBy2,
        widthBy2 + " " + heightBy2
      ].join(",");

      return '<polygon ' +
              'points="' + points + '" ' +
              'style="' + this.getSvgStyles() + '" ' +
              'transform="' + this.getSvgTransform() + '" ' +
              '/>';
    }
  });
  
  /**
   * Returns fabric.Triangle instance from an object representation
   * @static
   * @method Canvas.Trangle.fromObject
   * @param object {Object} object to create an instance from
   * @return {Object} instance of Canvas.Triangle
   */
  fabric.Triangle.fromObject = function(object) {
    return new fabric.Triangle(object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global){

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Ellipse) {
    fabric.warn('fabric.Ellipse is already defined.');
    return;
  }

  /**
   * @class Ellipse
   * @extends fabric.Object
   */
  fabric.Ellipse = fabric.util.createClass(fabric.Object, /** @scope fabric.Ellipse.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'ellipse',

    /**
     * Constructor
     * @method initialize
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('rx', options.rx || 0);
      this.set('ry', options.ry || 0);

      this.set('width', this.get('rx') * 2);
      this.set('height', this.get('ry') * 2);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        rx: this.get('rx'),
        ry: this.get('ry')
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      return [
        '<ellipse ',
          'rx="', this.get('rx'), '" ',
          'ry="', this.get('ry'), '" ',
          'style="', this.getSvgStyles(), '" ',
          'transform="', this.getSvgTransform(), '" ',
        '/>'
      ].join('');
    },

    /**
     * Renders this instance on a given context
     * @method render
     * @param ctx {CanvasRenderingContext2D} context to render on
     * @param noTransform {Boolean} context is not transformed when set to true
     */
    render: function(ctx, noTransform) {
      // do not use `get` for perf. reasons
      if (this.rx === 0 || this.ry === 0) return;
      return this.callSuper('render', ctx, noTransform);
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.save();
      ctx.globalAlpha *= this.opacity;
      ctx.transform(1, 0, 0, this.ry/this.rx, 0, 0);
      ctx.arc(noTransform ? this.left : 0, noTransform ? this.top : 0, this.rx, 0, piBy2, false);
      if (this.stroke) {
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fill();
      }
      ctx.restore();
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   * @static
   * @see http://www.w3.org/TR/SVG/shapes.html#EllipseElement
   */
  fabric.Ellipse.ATTRIBUTE_NAMES = 'cx cy rx ry fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns {@link fabric.Ellipse} instance from an SVG element
   * @static
   * @method fabric.Ellipse.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromElement = function(element, options) {
    options || (options = { });
    var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);
    if ('left' in parsedAttributes) {
      parsedAttributes.left -= (options.width / 2) || 0;
    }
    if ('top' in parsedAttributes) {
      parsedAttributes.top -= (options.height / 2) || 0;
    }
    return new fabric.Ellipse(extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Ellipse instance from an object representation
   * @static
   * @method fabric.Ellipse.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromObject = function(object) {
    return new fabric.Ellipse(object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Rect) {
    console.warn('fabric.Rect is already defined');
    return;
  }

  /**
   * @class Rect
   * @extends fabric.Object
   */
  fabric.Rect = fabric.util.createClass(fabric.Object, /** @scope fabric.Rect.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'rect',

    /**
     * @property
     * @type Object
     */
    options: {
      rx: 0,
      ry: 0
    },

    /**
     * Constructor
     * @method initialize
     * @param options {Object} options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      this._initStateProperties();
      this.callSuper('initialize', options);
      this._initRxRy();
    },

    /**
     * Creates `stateProperties` list on an instance, and adds `fabric.Rect` -specific ones to it
     * (such as "rx", "ry", etc.)
     * @private
     * @method _initStateProperties
     */
    _initStateProperties: function() {
      this.stateProperties = this.stateProperties.concat(['rx', 'ry']);
    },

    /**
     * @private
     * @method _initRxRy
     */
    _initRxRy: function() {
      if (this.rx && !this.ry) {
        this.ry = this.rx;
      }
      else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx) {
      var rx = this.rx || 0,
          ry = this.ry || 0,
          x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.beginPath();
      ctx.globalAlpha *= this.opacity;

      if (this.group) {
        ctx.translate(this.x || 0, this.y || 0);
      }

      ctx.moveTo(x+rx, y);
      ctx.lineTo(x+w-rx, y);
      ctx.quadraticCurveTo(x+w, y, x+w, y+ry, x+w, y+ry);
      ctx.lineTo(x+w, y+h-ry);
      ctx.quadraticCurveTo(x+w,y+h,x+w-rx,y+h,x+w-rx,y+h);
      ctx.lineTo(x+rx,y+h);
      ctx.quadraticCurveTo(x,y+h,x,y+h-ry,x,y+h-ry);
      ctx.lineTo(x,y+ry);
      ctx.quadraticCurveTo(x,y,x+rx,y,x+rx,y);
      ctx.closePath();

      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    // since our coordinate system differs from that of SVG
    _normalizeLeftTopProperties: function(parsedAttributes) {
      if (parsedAttributes.left) {
        this.set('left', parsedAttributes.left + this.getWidth() / 2);
      }
      this.set('x', parsedAttributes.left || 0);
      if (parsedAttributes.top) {
        this.set('top', parsedAttributes.top + this.getHeight() / 2);
      }
      this.set('y', parsedAttributes.top || 0);
      return this;
    },

    /**
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        rx: this.get('rx') || 0,
        ry: this.get('ry') || 0
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      return '<rect ' +
              'x="' + (-1 * this.width / 2) + '" y="' + (-1 * this.height / 2) + '" ' +
              'rx="' + this.get('rx') + '" ry="' + this.get('ry') + '" ' +
              'width="' + this.width + '" height="' + this.height + '" ' +
              'style="' + this.getSvgStyles() + '" ' +
              'transform="' + this.getSvgTransform() + '" ' +
              '/>';
    }
  });

  // TODO (kangax): implement rounded rectangles (both parsing and rendering)

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   * @static
   */
  fabric.Rect.ATTRIBUTE_NAMES = 'x y width height rx ry fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * @private
   */
  function _setDefaultLeftTopValues(attributes) {
    attributes.left = attributes.left || 0;
    attributes.top  = attributes.top  || 0;
    return attributes;
  }

  /**
   * Returns fabric.Rect instance from an SVG element
   * @static
   * @method fabric.Rect.fromElement
   * @param element {SVGElement} element to parse
   * @param options {Object} options object
   * @return {fabric.Rect} instance of fabric.Rect
   */
  fabric.Rect.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);
    parsedAttributes = _setDefaultLeftTopValues(parsedAttributes);

    var rect = new fabric.Rect(fabric.util.object.extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
    rect._normalizeLeftTopProperties(parsedAttributes);

    return rect;
  };

  /**
   * Returns fabric.Rect instance from an object representation
   * @static
   * @method fabric.Rect.fromObject
   * @param object {Object} object to create an instance from
   * @return {Object} instance of fabric.Rect
   */
  fabric.Rect.fromObject = function(object) {
    return new fabric.Rect(object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      toFixed = fabric.util.toFixed;

  if (fabric.Polyline) {
    fabric.warn('fabric.Polyline is already defined');
    return;
  }

  /**
   * @class Polyline
   * @extends fabric.Object
   */
  fabric.Polyline = fabric.util.createClass(fabric.Object, /** @scope fabric.Polyline.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'polyline',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points array of points
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.set('points', points);
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     * @method _calcDimensions
     */
    _calcDimensions: function() {
      return fabric.Polygon.prototype._calcDimensions.call(this);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return fabric.Polygon.prototype.toObject.call(this);
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      var points = [];
      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      return [
        '<polyline ',
          'points="', points.join(''), '" ',
          'style="', this.getSvgStyles(), '" ',
          'transform="', this.getSvgTransform(), '" ',
        '/>'
      ].join('');
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.stroke();
      }
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.get('points').length;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polyline.fromElement`)
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement
   */
  fabric.Polyline.ATTRIBUTE_NAMES = 'fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Polyline instance from an SVG element
   * @static
   * @method fabric.Polyline.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {Object} instance of fabric.Polyline
   */
  fabric.Polyline.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polyline.ATTRIBUTE_NAMES);

    for (var i = 0, len = points.length; i < len; i++) {
      // normalize coordinates, according to containing box (dimensions of which are passed via `options`)
      points[i].x -= (options.width / 2) || 0;
      points[i].y -= (options.height / 2) || 0;
    }

    return new fabric.Polyline(points, fabric.util.object.extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Polyline instance from an object representation
   * @static
   * @method fabric.Polyline.fromObject
   * @param {Object} [object] Object to create an instance from
   * @return {fabric.Polyline}
   */
  fabric.Polyline.fromObject = function(object) {
    var points = object.points;
    return new fabric.Polyline(points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      toFixed = fabric.util.toFixed;

  if (fabric.Polygon) {
    fabric.warn('fabric.Polygon is already defined');
    return;
  }

  function byX(p) { return p.x; }
  function byY(p) { return p.y; }

  /**
   * @class Polygon
   * @extends fabric.Object
   */
  fabric.Polygon = fabric.util.createClass(fabric.Object, /** @scope fabric.Polygon.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'polygon',

    /**
     * Constructor
     * @method initialize
     * @param {Array} points Array of points
     * @param {Object} options Options object
     * @return {fabric.Polygon} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.points = points;
      this.callSuper('initialize', options);
      this._calcDimensions();
    },

    /**
     * @private
     * @method _calcDimensions
     */
    _calcDimensions: function() {

      var points = this.points,
          minX = min(points, 'x'),
          minY = min(points, 'y'),
          maxX = max(points, 'x'),
          maxY = max(points, 'y');

      this.width = maxX - minX;
      this.height = maxY - minY;
      this.minX = minX;
      this.minY = minY;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        points: this.points.concat()
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      var points = [];
      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }

      return [
        '<polygon ',
          'points="', points.join(''), '" ',
          'style="', this.getSvgStyles(), '" ',
          'transform="', this.getSvgTransform(), '" ',
        '/>'
      ].join('');
    },

    /**
     * @private
     * @method _render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    _render: function(ctx) {
      var point;
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0, len = this.points.length; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.closePath();
        ctx.stroke();
      }
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.points.length;
    }
  });

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
   * @static
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
   */
  fabric.Polygon.ATTRIBUTE_NAMES = 'fill fill-opacity opacity stroke stroke-width transform'.split(' ');

  /**
   * Returns fabric.Polygon instance from an SVG element
   * @static
   * @method fabric.Polygon.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Object} options Options object
   * @return {fabric.Polygon}
   */
  fabric.Polygon.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polygon.ATTRIBUTE_NAMES);

    for (var i = 0, len = points.length; i < len; i++) {
      // normalize coordinates, according to containing box (dimensions of which are passed via `options`)
      points[i].x -= (options.width / 2) || 0;
      points[i].y -= (options.height / 2) || 0;
    }

    return new fabric.Polygon(points, extend(parsedAttributes, options));
  };

  /**
   * Returns fabric.Polygon instance from an object representation
   * @static
   * @method fabric.Polygon.fromObject
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polygon}
   */
  fabric.Polygon.fromObject = function(object) {
    return new fabric.Polygon(object.points, object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  var commandLengths = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7
  };

  function drawArc(ctx, x, y, coords) {
    var rx = coords[0];
    var ry = coords[1];
    var rot = coords[2];
    var large = coords[3];
    var sweep = coords[4];
    var ex = coords[5];
    var ey = coords[6];
    var segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
    for (var i=0; i<segs.length; i++) {
     var bez = segmentToBezier.apply(this, segs[i]);
     ctx.bezierCurveTo.apply(ctx, bez);
    }
  }

  var arcToSegmentsCache = { },
      segmentToBezierCache = { },
      _join = Array.prototype.join,
      argsString;

  // Copied from Inkscape svgtopdf, thanks!
  function arcToSegments(x, y, rx, ry, large, sweep, rotateX, ox, oy) {
    argsString = _join.call(arguments);
    if (arcToSegmentsCache[argsString]) {
      return arcToSegmentsCache[argsString];
    }

    var th = rotateX * (Math.PI/180);
    var sin_th = Math.sin(th);
    var cos_th = Math.cos(th);
    rx = Math.abs(rx);
    ry = Math.abs(ry);
    var px = cos_th * (ox - x) * 0.5 + sin_th * (oy - y) * 0.5;
    var py = cos_th * (oy - y) * 0.5 - sin_th * (ox - x) * 0.5;
    var pl = (px*px) / (rx*rx) + (py*py) / (ry*ry);
    if (pl > 1) {
      pl = Math.sqrt(pl);
      rx *= pl;
      ry *= pl;
    }

    var a00 = cos_th / rx;
    var a01 = sin_th / rx;
    var a10 = (-sin_th) / ry;
    var a11 = (cos_th) / ry;
    var x0 = a00 * ox + a01 * oy;
    var y0 = a10 * ox + a11 * oy;
    var x1 = a00 * x + a01 * y;
    var y1 = a10 * x + a11 * y;

    var d = (x1-x0) * (x1-x0) + (y1-y0) * (y1-y0);
    var sfactor_sq = 1 / d - 0.25;
    if (sfactor_sq < 0) sfactor_sq = 0;
    var sfactor = Math.sqrt(sfactor_sq);
    if (sweep == large) sfactor = -sfactor;
    var xc = 0.5 * (x0 + x1) - sfactor * (y1-y0);
    var yc = 0.5 * (y0 + y1) + sfactor * (x1-x0);

    var th0 = Math.atan2(y0-yc, x0-xc);
    var th1 = Math.atan2(y1-yc, x1-xc);

    var th_arc = th1-th0;
    if (th_arc < 0 && sweep == 1){
      th_arc += 2*Math.PI;
    } else if (th_arc > 0 && sweep == 0) {
      th_arc -= 2 * Math.PI;
    }

    var segments = Math.ceil(Math.abs(th_arc / (Math.PI * 0.5 + 0.001)));
    var result = [];
    for (var i=0; i<segments; i++) {
      var th2 = th0 + i * th_arc / segments;
      var th3 = th0 + (i+1) * th_arc / segments;
      result[i] = [xc, yc, th2, th3, rx, ry, sin_th, cos_th];
    }

    return (arcToSegmentsCache[argsString] = result);
  }

  function segmentToBezier(cx, cy, th0, th1, rx, ry, sin_th, cos_th) {
    argsString = _join.call(arguments);
    if (segmentToBezierCache[argsString]) {
      return segmentToBezierCache[argsString];
    }

    var a00 = cos_th * rx;
    var a01 = -sin_th * ry;
    var a10 = sin_th * rx;
    var a11 = cos_th * ry;

    var th_half = 0.5 * (th1 - th0);
    var t = (8/3) * Math.sin(th_half * 0.5) * Math.sin(th_half * 0.5) / Math.sin(th_half);
    var x1 = cx + Math.cos(th0) - t * Math.sin(th0);
    var y1 = cy + Math.sin(th0) + t * Math.cos(th0);
    var x3 = cx + Math.cos(th1);
    var y3 = cy + Math.sin(th1);
    var x2 = x3 + t * Math.sin(th1);
    var y2 = y3 - t * Math.cos(th1);

    return (segmentToBezierCache[argsString] = [
      a00 * x1 + a01 * y1,      a10 * x1 + a11 * y1,
      a00 * x2 + a01 * y2,      a10 * x2 + a11 * y2,
      a00 * x3 + a01 * y3,      a10 * x3 + a11 * y3
    ]);
  }

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      extend = fabric.util.object.extend,
      _toString = Object.prototype.toString;

  if (fabric.Path) {
    fabric.warn('fabric.Path is already defined');
    return;
  }
  if (!fabric.Object) {
    fabric.warn('fabric.Path requires fabric.Object');
    return;
  }

  /**
   * @private
   */
  function getX(item) {
    if (item[0] === 'H') {
      return item[1];
    }
    return item[item.length - 2];
  }

  /**
   * @private
   */
  function getY(item) {
    if (item[0] === 'V') {
      return item[1];
    }
    return item[item.length - 1];
  }

  /**
   * @class Path
   * @extends fabric.Object
   */
  fabric.Path = fabric.util.createClass(fabric.Object, /** @scope fabric.Path.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'path',

    /**
     * Constructor
     * @method initialize
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     */
    initialize: function(path, options) {
      options = options || { };

      this.setOptions(options);

      if (!path) {
        throw Error('`path` argument is required');
      }

      var fromArray = _toString.call(path) === '[object Array]';

      this.path = fromArray
        ? path
        : path.match && path.match(/[a-zA-Z][^a-zA-Z]*/g);

      if (!this.path) return;

      // TODO (kangax): rewrite this idiocracy
      if (!fromArray) {
        this._initializeFromArray(options);
      }

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @method _initializeFromArray
     */
    _initializeFromArray: function(options) {
      var isWidthSet = 'width' in options,
          isHeightSet = 'height' in options;

      this.path = this._parsePath();

      if (!isWidthSet || !isHeightSet) {
        extend(this, this._parseDimensions());
        if (isWidthSet) {
          this.width = options.width;
        }
        if (isHeightSet) {
          this.height = options.height;
        }
      }
    },

    /**
     * @private
     * @method _render
     */
    _render: function(ctx) {
      var current, // current instruction
          x = 0, // current x
          y = 0, // current y
          controlX = 0, // current control point x
          controlY = 0, // current control point y
          tempX,
          tempY,
          l = -(this.width / 2),
          t = -(this.height / 2);

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            ctx.moveTo(x + l, y + t);
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            ctx.moveTo(x + l, y + t);
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            ctx.bezierCurveTo(
              x + current[1] + l, // x1
              y + current[2] + t, // y1
              controlX + l, // x2
              controlY + t, // y2
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            ctx.bezierCurveTo(
              current[1] + l,
              current[2] + t,
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];
            // calculate reflection of previous control points
            controlX = 2 * x - controlX;
            controlY = 2 * y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              x + current[1] + l,
              y + current[2] + t,
              tempX + l,
              tempY + t
            );
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be the reflection of the second control point on the previous command relative to the current point."
            controlX = x + current[1];
            controlY = y + current[2];

            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            // calculate reflection of previous control points
            controlX = 2*x - controlX;
            controlY = 2*y - controlY;
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;

            // set control point to 2nd one of this command
            // "... the first control point is assumed to be the reflection of the second control point on the previous command relative to the current point."
            controlX = current[1];
            controlY = current[2];

            break;

          case 'q': // quadraticCurveTo, relative
            x += current[3];
            y += current[4];
            ctx.quadraticCurveTo(
              current[1] + l,
              current[2] + t,
              x + l,
              y + t
            );
            break;

          case 'Q': // quadraticCurveTo, absolute
            x = current[3];
            y = current[4];
            controlX = current[1];
            controlY = current[2];
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 'T':
            tempX = x;
            tempY = y;
            x = current[1];
            y = current[2];
            // calculate reflection of previous control points
            controlX = -controlX + 2 * tempX;
            controlY = -controlY + 2 * tempY;
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 'a':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x + l,
              current[7] + y + t
            ]);
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + l,
              current[7] + t
            ]);
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            ctx.closePath();
            break;
        }
      }
    },

    /**
     * Renders path on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render path on
     * @param {Boolean} noTransform When true, context is not transformed
     */
    render: function(ctx, noTransform) {
      ctx.save();
      var m = this.transformMatrix;
      if (m) {
        ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      }
      if (!noTransform) {
        this.transform(ctx);
      }
      // ctx.globalCompositeOperation = this.fillRule;

      if (this.overlayFill) {
        ctx.fillStyle = this.overlayFill;
      }
      else if (this.fill) {
        ctx.fillStyle = this.fill;
      }

      if (this.stroke) {
        ctx.strokeStyle = this.stroke;
      }
      ctx.beginPath();

      this._render(ctx);

      if (this.fill) {
        ctx.fill();
      }
      if (this.stroke) {
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = ctx.lineJoin = 'round';
        ctx.stroke();
      }
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} string representation of an instance
     */
    toString: function() {
      return '#<fabric.Path (' + this.complexity() +
        '): { "top": ' + this.top + ', "left": ' + this.left + ' }>';
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object}
     */
    toObject: function() {
      var o = extend(this.callSuper('toObject'), {
        path: this.path
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      if (this.transformMatrix) {
        o.transformMatrix = this.transformMatrix;
      }
      return o;
    },

    /**
     * Returns dataless object representation of an instance
     * @method toDatalessObject
     * @return {Object}
     */
    toDatalessObject: function() {
      var o = this.toObject();
      if (this.sourcePath) {
        o.path = this.sourcePath;
      }
      delete o.sourcePath;
      return o;
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      var chunks = [];
      for (var i = 0, len = this.path.length; i < len; i++) {
        chunks.push(this.path[i].join(' '));
      }
      var path = chunks.join(' ');

      return [
        '<g transform="', this.getSvgTransform(), '">',
          '<path ',
            'width="', this.width, '" height="', this.height, '" ',
            'd="', path, '" ',
            'style="', this.getSvgStyles(), '" ',
            'transform="translate(', (-this.width / 2), ' ', (-this.height/2), ')" />',
        '</g>'
      ].join('');
    },

    /**
     * Returns number representation of an instance complexity
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.path.length;
    },

    /**
     * @private
     * @method _parsePath
     */
    _parsePath: function() {
      var result = [ ],
          currentPath,
          chunks,
          parsed;

      for (var i = 0, j, chunksParsed, len = this.path.length; i < len; i++) {
        currentPath = this.path[i];
        chunks = currentPath.slice(1).trim().replace(/(\d)-/g, '$1###-').split(/\s|,|###/);
        chunksParsed = [ currentPath.charAt(0) ];

        for (var j = 0, jlen = chunks.length; j < jlen; j++) {
          parsed = parseFloat(chunks[j]);
          if (!isNaN(parsed)) {
            chunksParsed.push(parsed);
          }
        }

        var command = chunksParsed[0].toLowerCase(),
            commandLength = commandLengths[command];

        if (chunksParsed.length - 1 > commandLength) {
          for (var k = 1, klen = chunksParsed.length; k < klen; k += commandLength) {
            result.push([ chunksParsed[0] ].concat(chunksParsed.slice(k, k + commandLength)));
          }
        }
        else {
          result.push(chunksParsed);
        }
      }

      return result;
    },

    /**
     * @method _parseDimensions
     */
    _parseDimensions: function() {
      var aX = [],
          aY = [],
          previousX,
          previousY,
          isLowerCase = false,
          x,
          y;

      this.path.forEach(function(item, i) {
        if (item[0] !== 'H') {
          previousX = (i === 0) ? getX(item) : getX(this.path[i-1]);
        }
        if (item[0] !== 'V') {
          previousY = (i === 0) ? getY(item) : getY(this.path[i-1]);
        }

        // lowercased letter denotes relative position;
        // transform to absolute
        if (item[0] === item[0].toLowerCase()) {
          isLowerCase = true;
        }

        // last 2 items in an array of coordinates are the actualy x/y (except H/V);
        // collect them

        // TODO (kangax): support relative h/v commands

        x = isLowerCase
          ? previousX + getX(item)
          : item[0] === 'V'
            ? previousX
            : getX(item);

        y = isLowerCase
          ? previousY + getY(item)
          : item[0] === 'H'
            ? previousY
            : getY(item);

        var val = parseInt(x, 10);
        if (!isNaN(val)) aX.push(val);

        val = parseInt(y, 10);
        if (!isNaN(val)) aY.push(val);

      }, this);

      var minX = min(aX),
          minY = min(aY),
          deltaX = 0,
          deltaY = 0;

      var o = {
        top: minY - deltaY,
        left: minX - deltaX,
        bottom: max(aY) - deltaY,
        right: max(aX) - deltaX
      };

      o.width = o.right - o.left;
      o.height = o.bottom - o.top;

      return o;
    }
  });

  /**
   * Creates an instance of fabric.Path from an object
   * @static
   * @method fabric.Path.fromObject
   * @return {fabric.Path} Instance of fabric.Path
   */
  fabric.Path.fromObject = function(object) {
    return new fabric.Path(object.path, object);
  };

  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Path.fromElement`)
   * @static
   * @see http://www.w3.org/TR/SVG/paths.html#PathElement
   */
  fabric.Path.ATTRIBUTE_NAMES = 'd fill fill-opacity opacity fill-rule stroke stroke-width transform'.split(' ');

  /**
   * Creates an instance of fabric.Path from an SVG <path> element
   * @static
   * @method fabric.Path.fromElement
   * @param {SVGElement} element to parse
   * @param {Object} options object
   * @return {fabric.Path} Instance of fabric.Path
   */
  fabric.Path.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
    return new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options));
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      invoke = fabric.util.array.invoke,
      parentSet = fabric.Object.prototype.set,
      parentToObject = fabric.Object.prototype.toObject,
      camelize = fabric.util.string.camelize,
      capitalize = fabric.util.string.capitalize;

  if (fabric.PathGroup) {
    fabric.warn('fabric.PathGroup is already defined');
    return;
  }

  /**
   * @class PathGroup
   * @extends fabric.Path
   */
  fabric.PathGroup = fabric.util.createClass(fabric.Path, /** @scope fabric.PathGroup.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'path-group',

    /**
     * @property
     * @type Boolean
     */
    forceFillOverwrite: false,

    /**
     * Constructor
     * @method initialize
     * @param {Array} paths
     * @param {Object} [options] Options object
     * @return {fabric.PathGroup} thisArg
     */
    initialize: function(paths, options) {

      options = options || { };
      this.paths = paths || [ ];

      for (var i = this.paths.length; i--; ) {
        this.paths[i].group = this;
      }

      this.setOptions(options);
      this.setCoords();

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @method _initProperties
     */
    // _initProperties: function() {
    //       this.stateProperties.forEach(function(prop) {
    //         if (prop === 'fill') {
    //           this.set(prop, this.options[prop]);
    //         }
    //         else if (prop === 'angle') {
    //           this.setAngle(this.options[prop]);
    //         }
    //         else {
    //           this[prop] = this.options[prop];
    //         }
    //       }, this);
    //     },

    /**
     * Renders this group on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx Context to render this instance on
     */
    render: function(ctx) {
      if (this.stub) {
        // fast-path, rendering image stub
        ctx.save();

        this.transform(ctx);
        this.stub.render(ctx, false /* no transform */);
        if (this.active) {
          this.drawBorders(ctx);
          this.drawCorners(ctx);
        }
        ctx.restore();
      }
      else {
        ctx.save();

        var m = this.transformMatrix;
        if (m) {
          ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }

        this.transform(ctx);
        for (var i = 0, l = this.paths.length; i < l; ++i) {
          this.paths[i].render(ctx, true);
        }
        if (this.active) {
          this.drawBorders(ctx);
          this.hideCorners || this.drawCorners(ctx);
        }
        ctx.restore();
      }
    },

    /**
     * Sets certain property to a certain value
     * @method set
     * @param {String} prop
     * @param {Any} value
     * @return {fabric.PathGroup} thisArg
     */
    set: function(prop, value) {
      if ((prop === 'fill' || prop === 'overlayFill') && this.isSameColor()) {
        this[prop] = value;
        var i = this.paths.length;
        while (i--) {
          this.paths[i].set(prop, value);
        }
      }
      else {
        // skipping parent "class" - fabric.Path
        parentSet.call(this, prop, value);
      }
      return this;
    },

    /**
     * Returns object representation of this path group
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(parentToObject.call(this), {
        paths: invoke(this.getObjects(), 'clone'),
        sourcePath: this.sourcePath
      });
    },

    /**
     * Returns dataless object representation of this path group
     * @method toDatalessObject
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject: function() {
      var o = this.toObject();
      if (this.sourcePath) {
        o.paths = this.sourcePath;
      }
      return o;
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      var objects = this.getObjects();
      var markup = [
        '<g ',
          'width="', this.width, '" ',
          'height="', this.height, '" ',
          'style="', this.getSvgStyles(), '" ',
          'transform="', this.getSvgTransform(), '" ',
        '>'
      ];

      for (var i = 0, len = objects.length; i < len; i++) {
        markup.push(objects[i].toSVG());
      }
      markup.push('</g>');

      return markup.join('');
    },

     /**
      * Returns a string representation of this path group
      * @method toString
      * @return {String} string representation of an object
      */
    toString: function() {
      return '#<fabric.PathGroup (' + this.complexity() +
        '): { top: ' + this.top + ', left: ' + this.left + ' }>';
    },

    /**
     * Returns true if all paths in this group are of same color
     * @method isSameColor
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor: function() {
      var firstPathFill = this.getObjects()[0].get('fill');
      return this.getObjects().every(function(path) {
        return path.get('fill') === firstPathFill;
      });
    },

    /**
      * Returns number representation of object's complexity
      * @method complexity
      * @return {Number} complexity
      */
    complexity: function() {
      return this.paths.reduce(function(total, path) {
        return total + ((path && path.complexity) ? path.complexity() : 0);
      }, 0);
    },

    /**
      * Makes path group grayscale
      * @method toGrayscale
      * @return {fabric.PathGroup} thisArg
      */
    toGrayscale: function() {
      var i = this.paths.length;
      while (i--) {
        this.paths[i].toGrayscale();
      }
      return this;
    },

    /**
     * Returns all paths in this path group
     * @method getObjects
     * @return {Array} array of path objects included in this path group
     */
    getObjects: function() {
      return this.paths;
    }
  });

  /**
   * @private
   * @method instantiatePaths
   */
  function instantiatePaths(paths) {
    for (var i = 0, len = paths.length; i < len; i++) {
      if (!(paths[i] instanceof fabric.Object)) {
        var klassName = camelize(capitalize(paths[i].type));
        paths[i] = fabric[klassName].fromObject(paths[i]);
      }
    }
    return paths;
  }

  /**
   * Creates fabric.Triangle instance from an object representation
   * @static
   * @method fabric.PathGroup.fromObject
   * @param {Object} object
   * @return {fabric.PathGroup}
   */
  fabric.PathGroup.fromObject = function(object) {
    var paths = instantiatePaths(object.paths);
    return new fabric.PathGroup(paths, object);
  };

})(typeof exports != 'undefined' ? exports : this);
(function(global){

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      invoke = fabric.util.array.invoke,
      removeFromArray = fabric.util.removeFromArray;

  if (fabric.Group) {
    return;
  }

  /**
   * @class Group
   * @extends fabric.Object
   */
  fabric.Group = fabric.util.createClass(fabric.Object, /** @scope fabric.Group.prototype */ {

    /**
     * @property
     * @type String
     */
    type: 'group',

    /**
     * Constructor
     * @method initialized
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(objects, options) {
      this.objects = objects || [];
      this.originalState = { };

      this.callSuper('initialize');

      this._calcBounds();
      this._updateObjectsCoords();

      if (options) {
        extend(this, options);
      }
      this._setOpacityIfSame();

      // group is active by default
      this.setCoords(true);
      this.saveCoords();

      //this.activateAllObjects();
    },

    /**
     * @private
     * @method _updateObjectsCoords
     */
    _updateObjectsCoords: function() {
      var groupDeltaX = this.left,
          groupDeltaY = this.top;

      this.forEachObject(function(object) {

        var objectLeft = object.get('left'),
            objectTop = object.get('top');

        object.set('originalLeft', objectLeft);
        object.set('originalTop', objectTop);

        object.set('left', objectLeft - groupDeltaX);
        object.set('top', objectTop - groupDeltaY);

        object.setCoords();

        // do not display corners of objects enclosed in a group
        object.hideCorners = true;
      }, this);
    },

    /**
     * Returns string represenation of a group
     * @method toString
     * @return {String}
     */
    toString: function() {
      return '#<fabric.Group: (' + this.complexity() + ')>';
    },

    /**
     * Returns an array of all objects in this group
     * @method getObjects
     * @return {Array} group objects
     */
    getObjects: function() {
      return this.objects;
    },

    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @method addWithUpdate
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate: function(object) {
      this._restoreObjectsState();
      this.objects.push(object);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @method removeWithUpdate
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    removeWithUpdate: function(object) {
      this._restoreObjectsState();
      removeFromArray(this.objects, object);
      object.setActive(false);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * Adds an object to a group
     * @method add
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    add: function(object) {
      this.objects.push(object);
      return this;
    },

    /**
     * Removes an object from a group
     * @method remove
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    remove: function(object) {
      removeFromArray(this.objects, object);
      return this;
    },

    /**
     * Returns a size of a group (i.e: length of an array containing its objects)
     * @return {Number} Group size
     */
    size: function() {
      return this.getObjects().length;
    },

    /**
     * Sets property to a given value
     * @method set
     * @param {String} name
     * @param {Object|Function} value
     * @return {fabric.Group} thisArg
     * @chainable
     */
    set: function(name, value) {
      if (typeof value == 'function') {
        // recurse
        this.set(name, value(this[name]));
      }
      else {
        if (name === 'fill' || name === 'opacity') {
          var i = this.objects.length;
          this[name] = value;
          while (i--) {
            this.objects[i].set(name, value);
          }
        }
        else {
          this[name] = value;
        }
      }
      return this;
    },

    /**
     * Returns true if a group contains an object
     * @method contains
     * @param {Object} object Object to check against
     * @return {Boolean} `true` if group contains an object
     */
    contains: function(object) {
      return this.objects.indexOf(object) > -1;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        objects: invoke(this.objects, 'clone')
      });
    },

    /**
     * Renders instance on a given context
     * @method render
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     */
    render: function(ctx, noTransform) {
      ctx.save();
      this.transform(ctx);

      var groupScaleFactor = Math.max(this.scaleX, this.scaleY);

      for (var i = 0, len = this.objects.length, object; object = this.objects[i]; i++) {
        var originalScaleFactor = object.borderScaleFactor;
        object.borderScaleFactor = groupScaleFactor;
        object.render(ctx);
        object.borderScaleFactor = originalScaleFactor;
      }
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
      this.setCoords();
    },

    /**
     * Returns object from the group at the specified index
     * @method item
     * @param index {Number} index of item to get
     * @return {fabric.Object}
     */
    item: function(index) {
      return this.getObjects()[index];
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.getObjects().reduce(function(total, object) {
        total += (typeof object.complexity == 'function') ? object.complexity() : 0;
        return total;
      }, 0);
    },

    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @private
     * @method _restoreObjectsState
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState: function() {
      this.objects.forEach(this._restoreObjectState, this);
      return this;
    },

    /**
     * Restores original state of a specified object in group
     * @private
     * @method _restoreObjectState
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _restoreObjectState: function(object) {

      var groupLeft = this.get('left'),
          groupTop = this.get('top'),
          groupAngle = this.getAngle() * (Math.PI / 180),
          objectLeft = object.get('originalLeft'),
          objectTop = object.get('originalTop'),
          rotatedTop = Math.cos(groupAngle) * object.get('top') + Math.sin(groupAngle) * object.get('left'),
          rotatedLeft = -Math.sin(groupAngle) * object.get('top') + Math.cos(groupAngle) * object.get('left');

      object.setAngle(object.getAngle() + this.getAngle());

      object.set('left', groupLeft + rotatedLeft * this.get('scaleX'));
      object.set('top', groupTop + rotatedTop * this.get('scaleY'));

      object.set('scaleX', object.get('scaleX') * this.get('scaleX'));
      object.set('scaleY', object.get('scaleY') * this.get('scaleY'));

      object.setCoords();
      object.hideCorners = false;
      object.setActive(false);
      object.setCoords();

      return this;
    },

    /**
     * Destroys a group (restoring state of its objects)
     * @method destroy
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy: function() {
      return this._restoreObjectsState();
    },

    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords: function() {
      this._originalLeft = this.get('left');
      this._originalTop = this.get('top');
      return this;
    },

    /**
     * Checks whether this group was moved (since `saveCoords` was called last)
     * @method hasMoved
     * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
     */
    hasMoved: function() {
      return this._originalLeft !== this.get('left') ||
             this._originalTop !== this.get('top');
    },

    /**
     * Sets coordinates of all group objects
     * @method setObjectsCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords: function() {
      this.forEachObject(function(object) {
        object.setCoords();
      });
      return this;
    },

    /**
     * Activates (makes active) all group objects
     * @method activateAllObjects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    activateAllObjects: function() {
      this.forEachObject(function(object) {
        object.setActive();
      });
      return this;
    },

    /**
     * Executes given function for each object in this group
     * @method forEachObject
     * @param {Function} callback
     *                   Callback invoked with current object as first argument,
     *                   index - as second and an array of all objects - as third.
     *                   Iteration happens in reverse order (for performance reasons).
     *                   Callback is invoked in a context of Global Object (e.g. `window`)
     *                   when no `context` argument is given
     *
     * @param {Object} context Context (aka thisObject)
     *
     * @return {fabric.Group} thisArg
     * @chainable
     */
    forEachObject: fabric.StaticCanvas.prototype.forEachObject,

    /**
     * @private
     * @method _setOpacityIfSame
     */
    _setOpacityIfSame: function() {
      var objects = this.getObjects(),
          firstValue = objects[0] ? objects[0].get('opacity') : 1;

      var isSameOpacity = objects.every(function(o) {
        return o.get('opacity') === firstValue;
      });

      if (isSameOpacity) {
        this.opacity = firstValue;
      }
    },

    /**
     * @private
     * @method _calcBounds
     */
    _calcBounds: function() {
      var aX = [],
          aY = [],
          minX, minY, maxX, maxY, o, width, height,
          i = 0,
          len = this.objects.length;

      for (; i < len; ++i) {
        o = this.objects[i];
        o.setCoords();
        for (var prop in o.oCoords) {
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      };

      minX = min(aX);
      maxX = max(aX);
      minY = min(aY);
      maxY = max(aY);

      width = (maxX - minX) || 0;
      height = (maxY - minY) || 0;

      this.width = width;
      this.height = height;

      this.left = (minX + width / 2) || 0;
      this.top = (minY + height / 2) || 0;
    },

    /**
     * Checks if point is contained within the group
     * @method containsPoint
     * @param {fabric.Point} point point with `x` and `y` properties
     * @return {Boolean} true if point is contained within group
     */
    containsPoint: function(point) {

      var halfWidth = this.get('width') / 2,
          halfHeight = this.get('height') / 2,
          centerX = this.get('left'),
          centerY = this.get('top');

      return  centerX - halfWidth < point.x &&
              centerX + halfWidth > point.x &&
              centerY - halfHeight < point.y &&
              centerY + halfHeight > point.y;
    },

    /**
     * Makes all of this group's objects grayscale (i.e. calling `toGrayscale` on them)
     * @method toGrayscale
     */
    toGrayscale: function() {
      var i = this.objects.length;
      while (i--) {
        this.objects[i].toGrayscale();
      }
    }
  });

  /**
   * Returns fabric.Group instance from an object representation
   * @static
   * @method fabric.Group.fromObject
   * @param object {Object} object to create a group from
   * @param options {Object} options object
   * @return {fabric.Group} an instance of fabric.Group
   */
  fabric.Group.fromObject = function(object, callback) {
    fabric.util.enlivenObjects(object.objects, function(enlivenedObjects) {
      delete object.objects;
      callback && callback(new fabric.Group(enlivenedObjects, object));
    });
  };

  fabric.Group.async = true;

})(typeof exports != 'undefined' ? exports : this);
(function(global) {

  "use strict";

  var extend = fabric.util.object.extend;

  if (!global.fabric) {
    global.fabric = { };
  }

  if (global.fabric.Image) {
    fabric.warn('fabric.Image is already defined.');
    return;
  };

  if (!fabric.Object) {
    fabric.warn('fabric.Object is required for fabric.Image initialization');
    return;
  }

  /**
   * @class Image
   * @extends fabric.Object
   */
  fabric.Image = fabric.util.createClass(fabric.Object, /** @scope fabric.Image.prototype */ {

    /**
     * @property
     * @type Boolean
     */
    active: false,

    /**
     * @property
     * @type Boolean
     */
    bordervisibility: false,

    /**
     * @property
     * @type Boolean
     */
    cornervisibility: false,

    /**
     * @property
     * @type String
     */
    type: 'image',

    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} options optional
     */
    initialize: function(element, options) {
      options || (options = { });

      this.callSuper('initialize', options);
      this._initElement(element);
      this._originalImage = this.getElement();
      this._initConfig(options);

      this.filters = [ ];

      if (options.filters) {
        this.filters = options.filters;
        this.applyFilters();
      }
    },

    /**
     * Returns image element which this instance if based on
     * @method getElement
     * @return {HTMLImageElement} image element
     */
    getElement: function() {
      return this._element;
    },

    /**
     * Sets image element for this instance to a specified one
     * @method setElement
     * @param {HTMLImageElement} element
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setElement: function(element) {
      this._element = element;
      this._initConfig();
      return this;
    },

    /**
     * Returns original size of an image
     * @method getOriginalSize
     * @return {Object} object with "width" and "height" properties
     */
    getOriginalSize: function() {
      var element = this.getElement();
      return {
        width: element.width,
        height: element.height
      };
    },

    /**
     * Sets border visibility
     * @method setBorderVisibility
     * @param {Boolean} visible When true, border is set to be visible
     */
    setBorderVisibility: function(visible) {
      this._resetWidthHeight();
      this._adjustWidthHeightToBorders(showBorder);
      this.setCoords();
    },

    /**
     * Sets corner visibility
     * @method setCornersVisibility
     * @param {Boolean} visible When true, corners are set to be visible
     */
    setCornersVisibility: function(visible) {
      this.cornervisibility = !!visible;
    },

    /**
     * Renders image on a specified context
     * @method render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    render: function(ctx, noTransform) {
      ctx.save();
      if (!noTransform) {
        this.transform(ctx);
      }
      this._render(ctx);
      if (this.active && !noTransform) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        src: this._originalImage.src || this._originalImage._src,
        filters: this.filters.concat()
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {
      return '<g transform="' + this.getSvgTransform() + '">'+
                '<image xlink:href="' + this.getSvgSrc() + '" '+
                  'style="' + this.getSvgStyles() + '" ' +
                  // we're essentially moving origin of transformation from top/left corner to the center of the shape
                  // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
                  // so that object's center aligns with container's left/top
                  'transform="translate('+ (-this.width/2) + ' ' + (-this.height/2) + ')" ' +
                  'width="' + this.width + '" ' +
                  'height="' + this.height + '"' + '/>'+
              '</g>';
    },

    /**
     * Returns source of an image
     * @method getSrc
     * @return {String} Source of an image
     */
    getSrc: function() {
      return this.getElement().src || this.getElement()._src;
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} String representation of an instance
     */
    toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },

    /**
     * Returns a clone of an instance
     * @mthod clone
     * @param {Function} callback Callback is invoked with a clone as a first argument
     */
    clone: function(callback) {
      this.constructor.fromObject(this.toObject(), callback);
    },

    /**
     * Applies filters assigned to this image (from "filters" array)
     * @mthod applyFilters
     * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
     */
    applyFilters: function(callback) {

      if (this.filters.length === 0) {
        this.setElement(this._originalImage);
        callback && callback();
        return;
      }

      var isLikelyNode = typeof Buffer !== 'undefined' && typeof window === 'undefined',
          imgEl = this._originalImage,
          canvasEl = fabric.document.createElement('canvas'),
          replacement = isLikelyNode ? new (require('canvas').Image) : fabric.document.createElement('img'),
          _this = this;

        if (!canvasEl.getContext && typeof G_vmlCanvasManager != 'undefined') {
          G_vmlCanvasManager.initElement(canvasEl);
        }

      canvasEl.width = imgEl.width;
      canvasEl.height = imgEl.height;

      canvasEl.getContext('2d').drawImage(imgEl, 0, 0);

      this.filters.forEach(function(filter) {
        filter && filter.applyTo(canvasEl);
      });

       /** @ignore */
      replacement.onload = function() {
        _this.setElement(replacement);
        callback && callback();
        replacement.onload = canvasEl = imgEl = null;
      };
      replacement.width = imgEl.width;
      replacement.height = imgEl.height;

      if (isLikelyNode) {
        var base64str = canvasEl.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
        replacement.src = new Buffer(base64str, 'base64');
        _this.setElement(replacement);

        // onload doesn't fire in node, so we invoke callback manually
        callback && callback();
      }
      else {
        replacement.src = canvasEl.toDataURL('image/png');
      }

      return this;
    },

    /**
     * @private
     */
    _render: function(ctx) {
      ctx.drawImage(
        this.getElement(),
        - this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      );
    },

    /**
     * @private
     */
    _adjustWidthHeightToBorders: function(showBorder) {
      if (showBorder) {
        this.currentBorder = this.borderwidth;
        this.width += (2 * this.currentBorder);
        this.height += (2 * this.currentBorder);
      }
      else {
        this.currentBorder = 0;
      }
    },

    /**
     * @private
     */
    _resetWidthHeight: function() {
      var element = this.getElement();

      this.set('width', element.width);
      this.set('height', element.height);
    },

    /**
     * The Image class's initialization method. This method is automatically
     * called by the constructor.
     * @method _initElement
     * @param {HTMLImageElement|String} el The element representing the image
     */
    _initElement: function(element) {
      this.setElement(fabric.util.getById(element));
      fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },

    /**
     * @method _initConfig
     * @param {Object} options Options object
     */
    _initConfig: function(options) {
      this.setOptions(options || { });
      this._setBorder();
      this._setWidthHeight();
    },

    /**
     * @method _initFilters
     * @param {Object} object Object with filters property
     */
    _initFilters: function(object) {
      if (object.filters && object.filters.length) {
        this.filters = object.filters.map(function(filterObj) {
          return filterObj && fabric.Image.filters[filterObj.type].fromObject(filterObj);
        });
      }
    },

    /**
     * @private
     */
    _setBorder: function() {
      if (this.bordervisibility) {
        this.currentBorder = this.borderwidth;
      }
      else {
        this.currentBorder = 0;
      }
    },

    /**
     * @private
     */
    _setWidthHeight: function() {
      var sidesBorderWidth = 2 * this.currentBorder;
      this.width = (this.getElement().width || 0) + sidesBorderWidth;
      this.height = (this.getElement().height || 0) + sidesBorderWidth;
    },

    /**
     * Returns complexity of an instance
     * @method complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Default CSS class name for canvas
   * @static
   * @type String
   */
  fabric.Image.CSS_CANVAS = "canvas-img";

  fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc;

  /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @method fromObject
   * @param object {Object}
   * @param callback {Function} optional
   */
  fabric.Image.fromObject = function(object, callback) {
    var img = fabric.document.createElement('img'),
        src = object.src;

    if (object.width) {
      img.width = object.width;
    }
    if (object.height) {
      img.height = object.height;
    }

    /** @ignore */
    img.onload = function() {
      fabric.Image.prototype._initFilters.call(object, object);

      var instance = new fabric.Image(img, object);
      callback && callback(instance);
      img = img.onload = null;
    };
    img.src = src;
  };

  /**
   * Creates an instance of fabric.Image from an URL string
   * @static
   * @method fromURL
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromURL = function(url, callback, imgOptions) {
    var img = fabric.document.createElement('img');

    /** @ignore */
    img.onload = function() {
      if (callback) {
        callback(new fabric.Image(img, imgOptions));
      }
      img = img.onload = null;
    };
    img.src = url;
  };

  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Image.fromElement})
   * @static
   * @see http://www.w3.org/TR/SVG/struct.html#ImageElement
   */
  fabric.Image.ATTRIBUTE_NAMES = 'x y width height fill fill-opacity opacity stroke stroke-width transform xlink:href'.split(' ');

  /**
   * Returns {@link fabric.Image} instance from an SVG element
   * @static
   * @method fabric.Image.fromElement
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   * @return {fabric.Image}
   */
  fabric.Image.fromElement = function(element, callback, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES);

    fabric.Image.fromURL(parsedAttributes['xlink:href'], callback, extend(parsedAttributes, options));
  };

  fabric.Image.async = true;

})(typeof exports != 'undefined' ? exports : this);

fabric.util.object.extend(fabric.Object.prototype, {

  /**
   * @method _getAngleValueForStraighten
   * @return {Number} angle value
   * @private
   */
  _getAngleValueForStraighten: function() {
    var angle = this.get('angle');

    // TODO (kangax): can this be simplified?

    if      (angle > -225 && angle <= -135) { return -180;  }
    else if (angle > -135 && angle <= -45)  { return  -90;  }
    else if (angle > -45  && angle <= 45)   { return    0;  }
    else if (angle > 45   && angle <= 135)  { return   90;  }
    else if (angle > 135  && angle <= 225 ) { return  180;  }
    else if (angle > 225  && angle <= 315)  { return  270;  }
    else if (angle > 315)                   { return  360;  }

    return 0;
  },

  /**
   * @method straighten
   * @return {fabric.Object} thisArg
   * @chainable
   */
  straighten: function() {
    var angle = this._getAngleValueForStraighten();
    this.setAngle(angle);
    return this;
  },

  /**
   * @method fxStraighten
   * @param {Object} callbacks
   *                  - onComplete: invoked on completion
   *                  - onChange: invoked on every step of animation
   *
   * @return {fabric.Object} thisArg
   * @chainable
   */
  fxStraighten: function(callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: this.get('angle'),
      endValue: this._getAngleValueForStraighten(),
      duration: this.FX_DURATION,
      onChange: function(value) {
        _this.setAngle(value);
        onChange();
      },
      onComplete: function() {
        _this.setCoords();
        onComplete();
      },
      onStart: function() {
        _this.setActive(false);
      }
    });

    return this;
  }
});

fabric.util.object.extend(fabric.StaticCanvas.prototype, {

  /**
   * Straightens object, then rerenders canvas
   * @method straightenObject
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  straightenObject: function (object) {
    object.straighten();
    this.renderAll();
    return this;
  },

  /**
   * Same as `fabric.Canvas#straightenObject`, but animated
   * @method fxStraightenObject
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxStraightenObject: function (object) {
    object.fxStraighten({
      onChange: this.renderAll.bind(this)
    });
    return this;
  }
});
/**
 * @namespace
 */
fabric.Image.filters = { };

/**
 * @class fabric.Image.filters.Grayscale
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Grayscale = fabric.util.createClass( /** @scope fabric.Image.filters.Grayscale.prototype */ {

  /**
   * @param {String} type
   */
  type: "Grayscale",

  /**
   * @method applyTo
   * @memberOf fabric.Image.filters.Grayscale.prototype
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        iLen = imageData.width,
        jLen = imageData.height,
        index, average, i, j;

     for (i = 0; i < iLen; i++) {
       for (j = 0; j < jLen; j++) {

         index = (i * 4) * jLen + (j * 4);
         average = (data[index] + data[index + 1] + data[index + 2]) / 3;

         data[index]     = average;
         data[index + 1] = average;
         data[index + 2] = average;
       }
     }

     context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return { type: this.type };
  }
});

fabric.Image.filters.Grayscale.fromObject = function() {
  return new fabric.Image.filters.Grayscale();
};

/**
 * @class fabric.Image.filters.RemoveWhite
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.RemoveWhite = fabric.util.createClass( /** @scope fabric.Image.filters.RemoveWhite.prototype */ {

  /**
   * @param {String} type
   */
  type: "RemoveWhite",

  /**
   * @memberOf fabric.Image.filters.RemoveWhite.prototype
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    options || (options = { });
    this.threshold = options.threshold || 30;
    this.distance = options.distance || 20;
  },

  /**
   * @method applyTo
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        threshold = this.threshold,
        distance = this.distance,
        limit = 255 - threshold,
        abs = Math.abs,
        r, g, b;

    for (var i = 0, len = data.length; i < len; i += 4) {

      r = data[i];
      g = data[i+1];
      b = data[i+2];

      if (r > limit &&
          g > limit &&
          b > limit &&
          abs(r-g) < distance &&
          abs(r-b) < distance &&
          abs(g-b) < distance) {

        data[i+3] = 1;
      }
    }

    context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return {
      type: this.type,
      threshold: this.threshold,
      distance: this.distance
    };
  }
});

fabric.Image.filters.RemoveWhite.fromObject = function(object) {
  return new fabric.Image.filters.RemoveWhite(object);
};

/**
 * @class fabric.Image.filters.Invert
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Invert = fabric.util.createClass( /** @scope fabric.Image.filters.Invert.prototype */ {

  /**
   * @param {String} type
   */
  type: "Invert",

  /**
   * @method applyTo
   * @memberOf fabric.Image.filters.Invert.prototype
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        iLen = data.length, i;

     for (i = 0; i < iLen; i+=4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
     }

     context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return { type: this.type };
  }
});

fabric.Image.filters.Invert.fromObject = function() {
  return new fabric.Image.filters.Invert();
};

/**
 * @class fabric.Image.filters.Sepia
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Sepia = fabric.util.createClass( /** @scope fabric.Image.filters.Sepia.prototype */ {

  /**
   * @param {String} type
   */
  type: "Sepia",

  /**
   * @method applyTo
   * @memberOf fabric.Image.filters.Sepia.prototype
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        iLen = data.length, i, avg;

     for (i = 0; i < iLen; i+=4) {
        avg = 0.3  * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = avg + 100;
        data[i + 1] = avg + 50;
        data[i + 2] = avg + 255;
     }

     context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return { type: this.type };
  }
});

fabric.Image.filters.Sepia.fromObject = function() {
  return new fabric.Image.filters.Sepia();
};

/**
 * @class fabric.Image.filters.Sepia2
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Sepia2 = fabric.util.createClass( /** @scope fabric.Image.filters.Sepia2.prototype */ {

  /**
   * @param {String} type
   */
  type: "Sepia2",

  /**
   * @method applyTo
   * @memberOf fabric.Image.filters.Sepia.prototype
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        iLen = data.length, i, r, g, b;

     for (i = 0; i < iLen; i+=4) {

        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        data[i] = (r * 0.393 + g * 0.769 + b * 0.189 ) / 1.351;
        data[i + 1] = (r * 0.349 + g * 0.686 + b * 0.168 ) / 1.203;
        data[i + 2] = (r * 0.272 + g * 0.534 + b * 0.131 ) / 2.140;
     }

     context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return { type: this.type };
  }
});

fabric.Image.filters.Sepia2.fromObject = function() {
  return new fabric.Image.filters.Sepia2();
};

/**
 * @class fabric.Image.filters.Brightness
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Brightness = fabric.util.createClass( /** @scope fabric.Image.filters.Brightness.prototype */ {

  /**
   * @param {String} type
   */
  type: "Brightness",

  /**
   * @memberOf fabric.Image.filters.Brightness.prototype
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    options || (options = { });
    this.brightness = options.brightness || 100;
  },

  /**
   * @method applyTo
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        brightness = this.brightness;

    for (var i = 0, len = data.length; i < len; i += 4) {
      data[i] += brightness;
      data[i + 1] += brightness;
      data[i + 2] += brightness;
    }

    context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return {
      type: this.type,
      brightness: this.brightness
    };
  }
});

fabric.Image.filters.Brightness.fromObject = function(object) {
  return new fabric.Image.filters.Brightness(object);
};

/**
 * @class fabric.Image.filters.Brightness
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.Noise = fabric.util.createClass( /** @scope fabric.Image.filters.Noise.prototype */ {

  /**
   * @param {String} type
   */
  type: "Noise",

  /**
   * @memberOf fabric.Image.filters.Brightness.prototype
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    options || (options = { });
    this.noise = options.noise || 100;
  },

  /**
   * @method applyTo
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        noise = this.noise, rand;

    for (var i = 0, len = data.length; i < len; i += 4) {

      rand = (0.5 - Math.random()) * noise;

      data[i] += rand;
      data[i + 1] += rand;
      data[i + 2] += rand;
    }

    context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return {
      type: this.type,
      noise: this.noise
    };
  }
});

fabric.Image.filters.Noise.fromObject = function(object) {
  return new fabric.Image.filters.Noise(object);
};

/**
 * @class fabric.Image.filters.Brightness
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.GradientTransparency = fabric.util.createClass( /** @scope fabric.Image.filters.GradientTransparency.prototype */ {

  /**
   * @param {String} type
   */
  type: "GradientTransparency",

  /**
   * @memberOf fabric.Image.filters.GradientTransparency.prototype
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    options || (options = { });
    this.threshold = options.threshold || 100;
  },

  /**
   * @method applyTo
   * @param {Object} canvasEl Canvas element to apply filter to
   */
  applyTo: function(canvasEl) {
    var context = canvasEl.getContext('2d'),
        imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
        data = imageData.data,
        threshold = this.threshold,
        total = data.length;

    for (var i = 0, len = data.length; i < len; i += 4) {
      data[i + 3] = threshold + 255 * (total - i) / total;
    }

    context.putImageData(imageData, 0, 0);
  },

  /**
   * @method toJSON
   * @return {String} json representation of filter
   */
  toJSON: function() {
    return {
      type: this.type,
      threshold: this.threshold
    };
  }
});

fabric.Image.filters.GradientTransparency.fromObject = function(object) {
  return new fabric.Image.filters.GradientTransparency(object);
};
(function(global) {

  "use strict";

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed;

  if (fabric.Text) {
    fabric.warn('fabric.Text is already defined');
    return;
  }
  if (!fabric.Object) {
    fabric.warn('fabric.Text requires fabric.Object');
    return;
  }

  /**
   * @class Text
   * @extends fabric.Object
   */
  fabric.Text = fabric.util.createClass(fabric.Object, /** @scope fabric.Text.prototype */ {

    /**
     * @property
     * @type Number
     */
    fontSize:         40,

    /**
     * @property
     * @type Number
     */
    fontWeight:       100,

    /**
     * @property
     * @type String
     */
    fontFamily:       'Times_New_Roman',

    /**
     * @property
     * @type String
     */
    textDecoration:   '',

    /**
     * @property
     * @type String | null
     */
    textShadow:       null,

    /**
     * Determines text alignment. Possible values: "left", "center", or "right".
     * @property
     * @type String
     */
    textAlign:        'left',

    /**
     * @property
     * @type String
     */
    fontStyle:        '',

    /**
     * @property
     * @type Number
     */
    lineHeight:       1.6,

    /**
     * @property
     * @type String
     */
    strokeStyle:      '',

    /**
     * @property
     * @type Number
     */
    strokeWidth:      1,

    /**
     * @property
     * @type String
     */
    backgroundColor:  '',


    /**
     * @property
     * @type String | null
     */
    path:             null,

    /**
     * @property
     * @type String
     */
    type:             'text',

    /**
     * Constructor
     * @method initialize
     * @param {String} text
     * @param {Object} [options]
     * @return {fabric.Text} thisArg
     */
    initialize: function(text, options) {
      this._initStateProperties();
      this.text = text;
      this.setOptions(options);
      this.theta = this.angle * Math.PI / 180;
      this.width = this.getWidth();
      this.setCoords();
    },

    /**
     * Creates `stateProperties` list on an instance, and adds `fabric.Text` -specific ones to it
     * (such as "fontFamily", "fontWeight", etc.)
     * @private
     * @method _initStateProperties
     */
    _initStateProperties: function() {
      this.stateProperties = this.stateProperties.concat();
      this.stateProperties.push(
        'fontFamily',
        'fontWeight',
        'fontSize',
        'path',
        'text',
        'textDecoration',
        'textShadow',
        'textAlign',
        'fontStyle',
        'lineHeight',
        'strokeStyle',
        'strokeWidth',
        'backgroundColor'
      );
      fabric.util.removeFromArray(this.stateProperties, 'width');
    },

    /**
     * Returns string representation of an instance
     * @method toString
     * @return {String} String representation of text object
     */
    toString: function() {
      return '#<fabric.Text (' + this.complexity() +
        '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },

    /**
     * @private
     * @method _render
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var o = Cufon.textOptions || (Cufon.textOptions = { });

      // export options to be used by cufon.js
      o.left = this.left;
      o.top = this.top;
      o.context = ctx;
      o.color = this.fill;

      var el = this._initDummyElement();

      // set "cursor" to top/left corner
      this.transform(ctx);

      // draw text
      Cufon.replaceElement(el, {
        engine: 'canvas',
        separate: 'none',
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
        textDecoration: this.textDecoration,
        textShadow: this.textShadow,
        textAlign: this.textAlign,
        fontStyle: this.fontStyle,
        lineHeight: this.lineHeight,
        strokeStyle: this.strokeStyle,
        strokeWidth: this.strokeWidth,
        backgroundColor: this.backgroundColor
      });

      // update width, height
      this.width = o.width;
      this.height = o.height;
      this._totalLineHeight = o.totalLineHeight;
      this._fontAscent = o.fontAscent;
      this._boundaries = o.boundaries;
      this._shadowOffsets = o.shadowOffsets;
      this._shadows = o.shadows || [ ];

      // need to set coords _after_ the width/height was retreived from Cufon
      this.setCoords();
    },

    // _render: function(context) {
    //       context.fillStyle = this.fill;
    //       context.font = this.fontSize + 'px ' + this.fontFamily;
    //       this.transform(context);
    //       this.width = context.measureText(this.text).width;
    //       this.height = this.fontSize;
    //       context.fillText(this.text, -this.width / 2, 0);
    //       this.setCoords();
    //     },

    /**
     * @private
     * @method _initDummyElement
     */
    _initDummyElement: function() {
      var el = fabric.document.createElement('pre'),
          container = fabric.document.createElement('div');

      // Cufon doesn't play nice with textDecoration=underline if element doesn't have a parent
      container.appendChild(el);

      if (typeof G_vmlCanvasManager == 'undefined') {
        el.innerHTML = this.text;
      }
      else {
        // IE 7 & 8 drop newlines and white space on text nodes
        // see: http://web.student.tuwien.ac.at/~e0226430/innerHtmlQuirk.html
        // see: http://www.w3schools.com/dom/dom_mozilla_vs_ie.asp
        el.innerText =  this.text.replace(/\r?\n/gi, '\r');
      }

      el.style.fontSize = this.fontSize + 'px';
      el.style.letterSpacing = 'normal';

      return el;
    },

    /**
     * Renders text instance on a specified context
     * @method render
     * @param ctx {CanvasRenderingContext2D} context to render on
     */
    render: function(ctx, noTransform) {
      ctx.save();
      this._render(ctx);
      if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.hideCorners || this.drawCorners(ctx);
      }
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @return {Object} Object representation of text object
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        text:           this.text,
        fontSize:       this.fontSize,
        fontWeight:     this.fontWeight,
        fontFamily:     this.fontFamily,
        fontStyle:      this.fontStyle,
        lineHeight:     this.lineHeight,
        textDecoration: this.textDecoration,
        textShadow:     this.textShadow,
        textAlign:      this.textAlign,
        path:           this.path,
        strokeStyle:    this.strokeStyle,
        strokeWidth:    this.strokeWidth,
        backgroundColor: this.backgroundColor
      });
    },

    /**
     * Returns svg representation of an instance
     * @method toSVG
     * @return {string} svg representation of an instance
     */
    toSVG: function() {

      var textLines = this.text.split(/\r?\n/),
          lineTopOffset = -this._fontAscent - ((this._fontAscent / 5) * this.lineHeight),

          textLeftOffset = -(this.width/2),
          textTopOffset = (this.height/2) - (textLines.length * this.fontSize) - this._totalLineHeight,

          textAndBg = this._getSVGTextAndBg(lineTopOffset, textLeftOffset, textLines),
          shadowSpans = this._getSVGShadows(lineTopOffset, textLines);

      // move top offset by an ascent
      textTopOffset += ((this._fontAscent / 5) * this.lineHeight);

      return [
        '<g transform="', this.getSvgTransform(), '">',
          textAndBg.textBgRects.join(''),
          '<text ',
            (this.fontFamily ? 'font-family="\'' + this.fontFamily + '\'" ': ''),
            (this.fontSize ? 'font-size="' + this.fontSize + '" ': ''),
            (this.fontStyle ? 'font-style="' + this.fontStyle + '" ': ''),
            (this.fontWeight ? 'font-weight="' + this.fontWeight + '" ': ''),
            (this.textDecoration ? 'text-decoration="' + this.textDecoration + '" ': ''),
            'style="', this.getSvgStyles(), '" ',
            /* svg starts from left/bottom corner so we normalize height */
            'transform="translate(', toFixed(textLeftOffset, 2), ' ', toFixed(textTopOffset, 2), ')">',
            shadowSpans.join(''),
            textAndBg.textSpans.join(''),
          '</text>',
        '</g>'
      ].join('');
    },

    _getSVGShadows: function(lineTopOffset, textLines) {
      var shadowSpans = [], j, i, jlen, ilen, lineTopOffsetMultiplier = 1;

      for (j = 0, jlen = this._shadows.length; j < jlen; j++) {
        for (i = 0, ilen = textLines.length; i < ilen; i++) {
          if (textLines[i] !== '') {
            var lineLeftOffset = (this._boundaries && this._boundaries[i]) ? this._boundaries[i].left : 0;
            shadowSpans.push(
              '<tspan x="',
              toFixed((lineLeftOffset + lineTopOffsetMultiplier) + this._shadowOffsets[j][0], 2),
              (i === 0 ? '" y' : '" dy'), '="',
              toFixed(lineTopOffset + (i === 0 ? this._shadowOffsets[j][1] : 0), 2),
              '" ',
              this._getFillAttributes(this._shadows[j].color), '>',
              fabric.util.string.escapeXml(textLines[i]),
            '</tspan>');
            lineTopOffsetMultiplier = 1;
          } else {
            // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
            // prevents empty tspans
            lineTopOffsetMultiplier++;
          }
        }
      }
      return shadowSpans;
    },

    _getSVGTextAndBg: function(lineTopOffset, textLeftOffset, textLines) {
      var textSpans = [ ], textBgRects = [ ], i, lineLeftOffset, len, lineTopOffsetMultiplier = 1;

      // text and background
      for (i = 0, len = textLines.length; i < len; i++) {
        if (textLines[i] !== '') {
          lineLeftOffset = (this._boundaries && this._boundaries[i]) ? toFixed(this._boundaries[i].left, 2) : 0;
          textSpans.push(
            '<tspan x="',
            lineLeftOffset, '" ',
            (i === 0 ? 'y' : 'dy'), '="',
            toFixed(lineTopOffset * lineTopOffsetMultiplier, 2) , '" ',
            // doing this on <tspan> elements since setting opacity on containing <text> one doesn't work in Illustrator
            this._getFillAttributes(this.fill), '>',
            fabric.util.string.escapeXml(textLines[i]),
            '</tspan>'
          );
          lineTopOffsetMultiplier = 1;
        } else {
          // in some environments (e.g. IE 7 & 8) empty tspans are completely ignored, using a lineTopOffsetMultiplier
          // prevents empty tspans
          lineTopOffsetMultiplier++;
        }

        if (!this.backgroundColor) continue;

        textBgRects.push(
          '<rect ',
            this._getFillAttributes(this.backgroundColor),
            ' x="',
            toFixed(textLeftOffset + this._boundaries[i].left, 2),
            '" y="',
            /* an offset that seems to straighten things out */
            toFixed((lineTopOffset * i) - this.height / 2, 2),
            '" width="',
            toFixed(this._boundaries[i].width, 2),
            '" height="',
            toFixed(this._boundaries[i].height, 2),
          '"></rect>');
      }
      return {
        textSpans: textSpans,
        textBgRects: textBgRects
      };
    },

    // Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
    // we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
    _getFillAttributes: function(value) {
      var fillColor = value ? new fabric.Color(value) : '';
      if (!fillColor || !fillColor.getSource() || fillColor.getAlpha() === 1) {
        return 'fill="' + value + '"';
      }
      return 'opacity="' + fillColor.getAlpha() + '" fill="' + fillColor.setAlpha(1).toRgb() + '"';
    },

    /**
     * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
     * @method setColor
     * @param {String} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setColor: function(value) {
      this.set('fill', value);
      return this;
    },

    /**
     * Sets fontSize of an instance and updates its coordinates
     * @method setFontsize
     * @param {Number} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setFontsize: function(value) {
      this.set('fontSize', value);
      this.setCoords();
      return this;
    },

    /**
     * Returns actual text value of an instance
     * @method getText
     * @return {String}
     */
    getText: function() {
      return this.text;
    },

    /**
     * Sets text of an instance, and updates its coordinates
     * @method setText
     * @param {String} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    setText: function(value) {
      this.set('text', value);
      this.setCoords();
      return this;
    },

    /**
     * Sets specified property to a specified value
     * @method set
     * @param {String} name
     * @param {Any} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    set: function(name, value) {
      if (typeof name == 'object') {
        for (var prop in name) {
          this.set(prop, name[prop]);
        }
      }
      else {
        this[name] = value;
        if (name === 'fontFamily' && this.path) {
          this.path = this.path.replace(/(.*?)([^\/]*)(\.font\.js)/, '$1' + value + '$3');
        }
      }
      return this;
    }
  });

  /**
   * Returns fabric.Text instance from an object representation
   * @static
   * @method fromObject
   * @param {Object} object to create an instance from
   * @return {fabric.Text} an instance
   */
  fabric.Text.fromObject = function(object) {
    return new fabric.Text(object.text, clone(object));
  };

  /**
   * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
   * @static
   * @method fabric.Text.fromElement
   * @return {fabric.Text} an instance
   */
  fabric.Text.fromElement = function(element) {
    // TODO (kangax): implement this
  };

  fabric.Text.async = true;

})(typeof exports != 'undefined' ? exports : this);
(function() {

  if (typeof document != 'undefined' && typeof window != 'undefined') {
    return;
  }

  var DOMParser = new require('xmldom').DOMParser,
      URL = require('url'),
      HTTP = require('http'),

      Canvas = require('canvas'),
      Image = require('canvas').Image;

  function request(url, encoding, callback) {
    var oURL = URL.parse(url),
        client = HTTP.createClient(oURL.port, oURL.hostname),
        request = client.request('GET', oURL.pathname, { 'host': oURL.hostname });

    client.addListener('error', function(err) {
      if (err.errno === process.ECONNREFUSED) {
        fabric.log('ECONNREFUSED: connection refused to ' + client.host + ':' + client.port);
      }
      else {
        fabric.log(err.message);
      }
    });

    request.end();
    request.on('response', function (response) {
      var body = "";
      if (encoding) {
        response.setEncoding(encoding);
      }
      response.on('end', function () {
        callback(body);
      });
      response.on('data', function (chunk) {
        if (response.statusCode == 200) {
          body += chunk;
        }
      });
    });
  }

  fabric.util.loadImage = function(url, callback) {
    request(url, 'binary', function(body) {
      var img = new Image();
      img.src = new Buffer(body, 'binary');
      // preserving original url, which seems to be lost in node-canvas
      img._src = url;
      callback(img);
    });
  };

  fabric.loadSVGFromURL = function(url, callback) {
    url = url.replace(/^\n\s*/, '').replace(/\?.*$/, '').trim();
    request(url, '', function(body) {
      var doc = new DOMParser().parseFromString(body);
      fabric.parseSVGDocument(doc.documentElement, function(results, options) {
        callback(results, options);
      });
    });
  };

  fabric.util.getScript = function(url, callback) {
    request(url, '', function(body) {
      eval(body);
      callback && callback();
    });
  };

  fabric.Image.fromObject = function(object, callback) {
    fabric.util.loadImage(object.src, function(img) {
      var oImg = new fabric.Image(img);

      oImg._initConfig(object);
      oImg._initFilters(object);
      callback(oImg);
    });
  };

  fabric.createCanvasForNode = function(width, height) {

    var canvasEl = fabric.document.createElement('canvas'),
        nodeCanvas = new Canvas(width || 600, height || 600);

    // jsdom doesn't create style on canvas element, so here be temp. workaround
    canvasEl.style = { };

    canvasEl.width = nodeCanvas.width;
    canvasEl.height = nodeCanvas.height;

    var canvas = fabric.Canvas || fabric.StaticCanvas;
    var fabricCanvas = new canvas(canvasEl);
    fabricCanvas.contextContainer = nodeCanvas.getContext('2d');
    fabricCanvas.nodeCanvas = nodeCanvas;

    return fabricCanvas;
  };

  fabric.StaticCanvas.prototype.createPNGStream = function() {
    return this.nodeCanvas.createPNGStream();
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.createPNGStream
  }

  var origSetWidth = fabric.StaticCanvas.prototype.setWidth;
  fabric.StaticCanvas.prototype.setWidth = function(width) {
    origSetWidth.call(this);
    this.nodeCanvas.width = width;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setWidth = fabric.StaticCanvas.prototype.setWidth;
  }

  var origSetHeight = fabric.StaticCanvas.prototype.setHeight;
  fabric.StaticCanvas.prototype.setHeight = function(height) {
    origSetHeight.call(this);
    this.nodeCanvas.height = height;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setHeight = fabric.StaticCanvas.prototype.setHeight;
  }

})();
var DEBUG = true;
(function(G){
  G.rgb2hex = function(rgb) {
    if (!rgb) {
        return '#FFFFFF'; //default color
    }
    var hex_rgb = toString(rgb).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
    if (hex_rgb) {
        return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
    } else {
        return rgb;
    }
  }

  G.hexLuminance = function(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
    }
    return rgb;
  }
    
})(this);
//    Dunder.js 0.0.1
//    Written by Popovine Anton
//    Dunder.js is distributed under the MIT license

(function(root) {

  var __ = {};

  root.__ = __;

  __.log = function(what) {
    if (window.console === undefined) return;
    var d = new Date();
    console.log("UTC " + d.getUTCHours() + ":" + 
                d.getUTCMinutes() + ":" +
                d.getUTCSeconds() + "." + 
                d.getUTCMilliseconds() + " > " + what);
  }

  __.loadImg = function(url, fun) {
    var img = new Image();
    img.onload = function() {
      if (typeof fun === 'function') fun(img);
    }
    img.src = url;
  }

  __.loadAudio = function(url, fun) {
    var snd = typeof Audio !== 'undefined' ? new Audio() : null;
    var onDone = function() {
      if (typeof fun === 'function') fun(snd);
    }
    if (snd === null) {
      onDone();
    } else {
      snd.addEventListener('canplay', onDone, false);
      snd.onerror = onDone;
      snd.onstalled = onDone;
      snd.onsuspend = onDone;
      snd.src = url
    }
  }

  __.loaderAsync = function(urls, fun) {
    var nTotal = urls.length;
    var nLoaded = 0;
    var oneLoaded = function(item) {
      nLoaded++;
      if (nLoaded === nTotal) {
        if (typeof fun === 'function') fun();
      }
    }
    var loadMe = function() {
      if (this.match(/(\.ogg|\.mp3|\.wav|\.acc)$/gi)) {
        // audio preloading unreliable (in chrome!)
        __.loadAudio(this)
        oneLoaded()
      } else {
        __.loadImg(this, oneLoaded)
      }
    }
    $(urls).each(loadMe)
  }

  __.loaderSync = function(urls, fun) {
    var u = urls.slice();
    var nTotal = u.length;
    if (u.length > 0) {
      var loadThis = u.pop();
      if (loadThis.match(/(\.ogg|\.mp3|\.wav|\.acc)$/gi)) {
        // audio preloading unreliable !
        __.loadAudio(loadThis)
        __.loaderSync(u, fun)
      } else {
        __.loadImg(loadThis, function(){ __.loaderSync(u, fun) });
      }
    } else {
      if (typeof fun === 'function') fun();
    }
  }

})(this);
/**
 * Initializes Table Designer Data
 * Creates global object m3.dd
 * Written by Popovine Anton (c) M3 Projects Ltd.
 */

(function(G){
  var DD = {};

  DD.bgPresets = {
    'wooden floor': 'http://static.taably.s3.amazonaws.com/resources/backgrounds/floor_render.png',
    'dark wood': 'http://fc08.deviantart.net/fs70/i/2011/127/b/d/black_wood_background_by_egosumpotens-d3fst0k.jpg',
    'blue tiles': 'http://www.featurepics.com/FI/Thumb300/20061229/Grey-Slate-Tiles-Background-176869.jpg',
    'green grass': 'http://image.shutterstock.com/display_pic_with_logo/111031/111031,1279263404,1/stock-photo-green-felt-background-57238999.jpg',
    getDefault: function(){
      return {name: 'wooden floor', url: this['wooden floor']}
    }
  }

  DD.table = {};

  DD.table['new_3d'] = {
    css : 'btn-new-3d-table-png',
    name : 'new_3d',
    img : "http://static.taably.s3.amazonaws.com/resources/tables/new_3d_table.png",
    width : 1070,
    height : 670,
    ellipse_rx : 315,
    ellipse_ry : 140,
    ellipse_cx : 535,
    ellipse_cy : 184,
    color : "#30580f",
    logo_url : "http://www.deucescracked.com/images/logo.png",
    logo_width : 342,
    logo_height : 82
  };
  DD.table['old_3d'] = {
    css : 'btn-old-3d-table-png',
    name : 'old_3d',
    img : "http://static.taably.s3.amazonaws.com/resources/tables/old_3d_table.png",
    width : 800,
    height : 468,
    ellipse_rx : 312,
    ellipse_ry : 150,
    ellipse_cx : 398,
    ellipse_cy : 172,
    color : "#30580f"
  };
  DD.table['old_thin'] = {
    css : 'btn-thin-2d-table-png',
    name : 'old_thin',
    img : "http://static.taably.s3.amazonaws.com/resources/tables/old_thin_table.png",
    width : 800,
    height : 477,
    rect_x : 56,
    rect_y : 25,
    rect_width : 678,
    rect_height : 330,
    rect_r : 168,
    color : "#30580f"
  };
  DD.table['old_std'] = {
    css : 'btn-old-2d-table-png',
    name : 'old_std',
    img : "http://static.taably.s3.amazonaws.com/resources/tables/old_std_table.png",
    width : 800,
    height : 477,
    rect_x : 47,
    rect_y : 18,
    rect_width : 704,
    rect_height : 346,
    rect_r : 180,
    color : "#30580f"
  };

  if(!G.m3) G.m3 = {};
  G.m3.dd = DD;
})(this);
/**
 * Table Designer
 * requires TableDesignerData.js
 * requires Dunder.js, jQuery and fabric.js
 * Written by Popovine Anton (c) M3 Projects Ltd.
 */

(function(root){
  if (!fabric) return;

  fabric.Canvas.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
  }

  fabric.Canvas.prototype.findTarget = (function(originalFn) {
    return function() {
      var target = originalFn.apply(this, arguments);
      if (target) {
        if (this._hoveredTarget !== target) {
          this.fire('object:over', { target: target });
          if (this._hoveredTarget) {
            this.fire('object:out', { target: this._hoveredTarget });
          }
          this._hoveredTarget = target;
        }
      }
      else if (this._hoveredTarget) {
        this.fire('object:out', { target: this._hoveredTarget });
        this._hoveredTarget = null;
      }
      return target;
    };
  })(fabric.Canvas.prototype.findTarget);
    
  /**
   * TableDesigner constructor
   * @param id: id of the canvas element (string without #)
   * @param jsonData: string repr. of json data of the layout
   * */
  var TD = function(id, jsonData, callback) {
    var objects, ctx, tableData, bgData;
    var that = this;

    this._initialize = function(id, jsonData, reload) {
      if (typeof jsonData !== 'undefined') {
        var jsonObj = JSON.parse(jsonData);
        $(document).trigger("tabledesigner:jsonParsed", jsonObj);
        if (reload && ctx) {
          ctx.setWidth(jsonObj.tableDesignerMeta.width);
          ctx.setHeight(jsonObj.tableDesignerMeta.height);
        }
        this.$el.attr('width', jsonObj.tableDesignerMeta.width);
        this.$el.attr('height', jsonObj.tableDesignerMeta.height);

        if (reload) {
          objects.clear()
          ctx.clear();
          delete tableData, bgData;
          ctx.loadFromJSON(jsonData, onContextReady);
        } else {
          ctx = new fabric.Canvas(id, {selection: false, renderOnAddition: false});
          ctx.backgroundColor = "#222";
        }

        var onContextReady = function() {
          _.each(jsonObj.tableDesignerObjects, function(o,i){
            objects.set(o, ctx.getObjects()[i]);
          })
          tableData = jsonObj.tableDesignerMeta.tableData;

          objects.table.lockRotation = objects.table.lockMovementX = true;
          objects.table.selectable = false;
          objects.felt.lockRotation = objects.felt.lockMovementX = true;
          objects.feltDragger.lockRotation = objects.feltDragger.lockMovementX = true;
          objects.feltDragger.set({
            borderColor: '#ccc',
            cornerColor: '#ccc',
            cornersize: 7
          });

          bgData = jsonObj.tableDesignerMeta.bgData;
          switch (bgData.type) {
            case 'gradient':
              that.setBackgroundGrad(bgData.options);
              break;
            case 'radient':
              that.setBackgroundRad(bgData.options);
              break;
            default:
          }
          if (!reload) setObserve();
          if (typeof callback === 'function') callback.call();
        } //onContextReady

        preloadImgs = [];
        _.each(jsonObj.objects, function(o){ if (o.type === 'image') preloadImgs.push(o.src)})
        __.loaderAsync(preloadImgs, function(){ ctx.loadFromJSON(jsonData, onContextReady) })

      } else {
        ctx = new fabric.Canvas(id, {selection: false, renderOnAddition: false});
        ctx.backgroundColor = "#222";
        // TODO: check docs how to set hover cursor in new Fabric.js version
        ctx.HOVER_CURSOR = 'pointer';
        objects.set('bgRect', new fabric.Rect({fill: "#111",left: ctx.getCenter().left, top: ctx.getCenter().top, width: ctx.width, height: ctx.height}));
        bgData = {type: 'color', 'options': {'color': "#111"}}
        objects.bgRect.selectable = false;
        ctx.add(objects.bgRect);
        setObserve();
        if (typeof callback === 'function') callback();
      }
    }

    // tableDesigner objects
    // We'll be using this object to load from/to JSON
    objects = {
      set: function(key, obj) {
        obj.tableDesignerType = key;
        this[key] = obj;
      },
      clear: function(key) {
        // remove klass object from canvas
        ctx.remove(this[key]);
        // delete value
        delete this[key];
      }
    }

    var onFeltLoaded = function(img) {
      if (objects.table) ctx.remove(objects.table)
      if (objects.felt) ctx.remove(objects.felt);
      if (objects.feltDragger) ctx.remove(objects.feltDragger)

      if (tableData.ellipse_rx) {
        feltOptions = {
          left: parseInt(ctx.width/2),
          top: (parseInt(ctx.height/2)),
          'rx': tableData.ellipse_rx,
          'ry': tableData.ellipse_ry,
          'fill': tableData.color,
        }
        objects.set('felt', new fabric.Ellipse(feltOptions));
        objects.set('feltDragger', new fabric.Ellipse(feltOptions).setOpacity(0));
        objects.set('table', img.set({left: parseInt(ctx.width/2), top: parseInt(ctx.height/2 +tableData.height/2 - tableData.ellipse_cy)}));
      } else if (tableData.rect_y) {
        feltOptions = {
          left: parseInt(ctx.width/2),
          top: (parseInt(ctx.height/2)),
          'width': tableData.rect_width,
          'height': tableData.rect_height,
          'rx': tableData.rect_r,
          'ry': tableData.rect_r,
          'fill': tableData.color,
        }
        objects.set('felt', new fabric.Rect(feltOptions));
        objects.set('feltDragger', new fabric.Rect(feltOptions).setOpacity(0));
        objects.set('table', img.set({
          left: parseInt(ctx.width/2), 
          top: parseInt(ctx.height/2 +tableData.height/2 - tableData.rect_y - tableData.rect_height/2)
        }));
      }
      objects.table.lockRotation = objects.table.lockMovementX = true;
      objects.table.selectable = false;
      objects.felt.lockRotation = objects.felt.lockMovementX = true;
      objects.feltDragger.lockRotation = objects.feltDragger.lockMovementX = true;

      objects.feltDragger.set({
        borderColor: '#ccc',
        cornerColor: '#ccc',
        cornersize: 7
      });

      ctx.add(objects.felt);
      objects.felt.setOpacity(1);
      objects.felt.set(feltOptions);
      ctx.add(objects.table);
      ctx.add(objects.feltDragger);
      if (objects.logo) {
        ctx.bringToFront(objects.logo);
        ctx.bringToFront(objects.feltDragger);
        objects.logo.set({top: objects.felt.get('top'), left: objects.felt.get('left')});
      }
      ctx.renderAll();
    } // onFeltLoaded

    this.loadFromJSON = function(data) {
      this._initialize(id, data, true);
    }

    this.toJSON = function(){ 
      var json = ctx.toJSON();
      json.tableDesignerObjects = [];
      _.each(ctx.getObjects(), function(o) { 
        json.tableDesignerObjects.push(o.tableDesignerType);
      })
      // check if there's equal number of Fabric and tableDesigner objects
      if (json.tableDesignerObjects.length !== ctx.getObjects().length) {
        __.log("Serialization aborted. Object numbers don't match.");
        return;
      }
      json.tableDesignerMeta = {
        // TODO: add bgData (solid/grad/rad+colors)
        'width': ctx.width,
        'height': ctx.height,
        'tableData': tableData,
        'bgData': bgData
      }
      return json;
    }

    this.setTable = function(data,onDone) {
      tableData = data;
      fabric.Image.fromURL(tableData.img, function(img) {
        onFeltLoaded(img);
        onDone && onDone();
      });
    } // setTable

    var setObserve = function() {
      ctx.observe({
        'object:over': function(e) {
          if (e.target.tableDesignerType && e.target.tableDesignerType === 'feltDragger') {
            objects.feltDragger.setActive(true);
            ctx.renderAll();
          }
        },
        'object:out': function(e) {
          if (e.target.isActive()) {
            objects.feltDragger.setActive(false);
            ctx.renderAll();
          }
        },
        'object:moving': function(e) {
          var dx = e.target.get('top');
          if (objects.felt.type === 'ellipse') {
            objects.table.setTop(dx + objects.table.get('scaleY')*parseInt(objects.table.height/2 - tableData.ellipse_cy));
          } else if (objects.felt.type === 'rect') {
            objects.table.setTop(dx + objects.table.get('scaleY')*parseInt(objects.table.height/2 - tableData.rect_y - tableData.rect_height/2));
          }
          objects.felt.setTop(dx);
          if (objects.logo) objects.logo.setTop(dx);
        },
        'object:scaling': function(e) {
          obj = e.target;
          objects.felt.set('scaleX',obj.scaleX);
          objects.felt.set('scaleY',obj.scaleY);
          objects.table.set('scaleX',obj.scaleX);
          objects.table.set('scaleY',obj.scaleY);
          if (objects.felt.type === 'ellipse') {
            var ttop = objects.felt.get('top') + obj.scaleY*parseInt(objects.table.height/2 - tableData.ellipse_cy);
          } else if (objects.felt.type === 'rect') {
            var ttop = objects.felt.get('top') + obj.scaleY*parseInt(objects.table.height/2 - tableData.rect_y - tableData.rect_height/2);
          }
          objects.table.set('top', ttop);
        },
        'object:modified': function(e) {
        }
      }); //ctx.observe
    } // setObserve

    this.setFeltColor = function(color) {
      if (objects.felt) {
        objects.felt.set("fill",color);
        ctx.renderAll();
      }
    }
    this.setBackgroundImg = function(url) {
      bgData = {type: 'image', 'options': {'url': url}}
      var onBgLoaded = function(img) {
        objects.clear('bgRad');
        img.set({left: parseInt(ctx.width/2), top: parseInt(ctx.height/2)});
        img.set('scaleX', ctx.width/img.width);
        img.set('scaleY', ctx.height/img.height);
        if (objects.bgImg) {
          ctx.remove(objects.bgImg);
          objects.set('bgImg', img);
          ctx.insertAt(objects.bgImg,1);
        } else {
          objects.set('bgImg', img);
          ctx.insertAt(objects.bgImg,1);
        }
        objects.bgImg.selectable = false;
        ctx.renderAll();
      } // onBgLoaded
      fabric.Image.fromURL(url, onBgLoaded);
    }
    this.setBackgroundColor = function(color) {
      bgData = {type: 'color', 'options': {'color': color}}
      objects.clear('bgRad');
      objects.bgRect.set("fill",color);
      objects.clear('bgImg');
      ctx.renderAll();
    } //setBackgroundColor

    this.setBackgroundGrad = function(data) {
      bgData = {type: 'gradient', 'options': data}
      objects.clear('bgRad');
      var c1 = data.color1;
      var c2 = data.color2;
      var options = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: '100%',
        colorStops: {
          0: c1,
          1: c2
        }
      }
      objects.bgRect.setGradientFill(ctx.getContext(), options);
      objects.clear('bgImg');
      ctx.renderAll();
    } // setBackgroundGrad

    this.setBackgroundRad = function(data) {
      bgData = {type: 'radient', 'options': data}
      if (!objects.bgRad) {
        objects.set('bgRad', new fabric.Rect({left: ctx.getCenter().left, top: ctx.getCenter().top, width: ctx.width, height: ctx.height}));
        objects.bgRad.selectable = false;
        ctx.insertAt(objects.bgRad,1);
      }
      var c1 = data.color1;
      var c2 = data.color2;
      var grad = ctx.getContext().createRadialGradient(0, 0, 0, 0, 0, ctx.height/2);
      grad.addColorStop(0, c1);
      grad.addColorStop(1, c2);
      objects.bgRect.set("fill",c2);
      objects.bgRad.fill = grad;
      objects.bgRad.set('scaleY',0.8);
      objects.bgRad.set('scaleX',2.0);
      objects.clear('bgImg');
      ctx.renderAll();
    } // setBackgroundRad

    var onLogoLoaded = function(img) {
      objects.set('logo', img);
      objects.logo.set({left: parseInt(ctx.width/2), top: parseInt(ctx.height/2)});
      objects.logo.selectable = false;
      ctx.add(objects.logo);
      ctx.bringToFront(objects.logo);
      ctx.bringToFront(objects.feltDragger);
      ctx.renderAll();
    }
    this.setLogo = function(logoUrl) {
      fabric.Image.fromURL(logoUrl, onLogoLoaded);
    }
    this.removeLogo = function() {
      objects.clear('logo');
      ctx.renderAll();
    }
    this.setLogoOpacity = function(val) {
      var sval = val;
      if (val < 0.0) sval = 0.0;
      if (val > 1.0) sval = 1.0;
      if (objects.logo) objects.logo.set('opacity', sval);
      ctx.renderAll();
    }
    this.setLogoScale = function(val) {
      var sval = val;
      if (val < 0.0) sval = 0.0;
      if (objects.logo) objects.logo.scale(sval);
      ctx.renderAll();
    }
    this.getLogoOpacity = function() {
      return objects.logo && objects.logo.get('opacity');
    }
    this.getLogoScale = function() {
      return objects.logo && objects.logo.get('scaleX');
    }
    this.getTop = function() {
      return objects.felt && objects.felt.get('top')
    }
    this.setTop = function(y) {
      if (objects.felt.type === 'ellipse') {
        objects.table.set('top',
                  parseInt(y+objects.table.height/2 - tableData.ellipse_cy));
      } else if (objects.felt.type === 'rect') {
        objects.table.set('top',
                  parseInt(y+objects.table.height/2 - tableData.rect_y - tableData.rect_height/2));
      }
      objects.felt.set('top',y);
      objects.logo && objects.logo.set('top',y);
      objects.feltDragger.set('top',y);
    }
    this.setSize = function(width, height) {
      ctx.setHeight(height);
      ctx.setWidth(width);
      middleX = parseInt(ctx.width/2);
      middleY = parseInt(ctx.height/2);

      cObj = {'top': middleY, 'left': middleX, 'width': width, 'height': height};
      objects.bgRect && objects.bgRect.set(cObj);
      if (typeof objects.bgRad !== 'undefined') {
        objects.bgRad.set(cObj);
        var grad = ctx.getContext().createRadialGradient(0, 0, 0, 0, 0, ctx.height/2);
        grad.addColorStop(0, bgData.options.color1);
        grad.addColorStop(1, bgData.options.color2);
        objects.bgRad.fill = grad;
        objects.bgRad.set('scaleY',0.8);
        objects.bgRad.set('scaleX',2.0);
      }
      if (typeof objects.bgImg !== 'undefined') {
        objects.bgImg.set({'top': middleY, 'left': middleX});
        objects.bgImg.set({'scaleX': width/objects.bgImg.width});
        objects.bgImg.set({'scaleY': height/objects.bgImg.height});
      }

      objects.table && objects.table.set('left', middleX);
      objects.felt && objects.felt.set('left', middleX);
      objects.logo && objects.logo.set('left', middleX);
      objects.feltDragger && objects.feltDragger.set('left', middleX);
      ctx.renderAll();
    }
    this.setOverlay = function(url, callback) {
      ctx.setOverlayImage(url, function(){
        ctx.renderAll();
        if (typeof callback === 'function')
          callback();
      });
    }
    this.clearOverlay = function() {
      if (ctx.overlayImage) {
        delete ctx.overlayImage;
        ctx.renderAll();
      }
    }
    // check presence of canvas element and initialize
    this.$el = $("#"+id);
    if (typeof this.$el === 'undefined' || this.$el.length === 0) { 
      __.log("Canvas element not found. (id="+id+")");
      return;
    } else {
      this._initialize(id, jsonData);
    }

  } // TD
  root.TableDesigner = function(id, options, callback){return new TD(id, options, callback)};
})(this);
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,o){var f={},j=f.lib={},k=j.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;b&&c.mixIn(b);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),i=j.WordArray=k.extend({init:function(a,b){a=
this.words=a||[];this.sigBytes=b!=o?b:4*a.length},toString:function(a){return(a||p).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var e=0;e<a;e++)b[d+e>>>2]|=(c[e>>>2]>>>24-8*(e%4)&255)<<24-8*((d+e)%4);else if(65535<c.length)for(e=0;e<a;e+=4)b[d+e>>>2]=c[e>>>2];else b.push.apply(b,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=
k.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],c=0;c<a;c+=4)b.push(4294967296*h.random()|0);return i.create(b,a)}}),l=f.enc={},p=l.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var e=b[d>>>2]>>>24-8*(d%4)&255;c.push((e>>>4).toString(16));c.push((e&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return i.create(c,b/2)}},n=l.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return i.create(c,b)}},q=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},m=j.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=i.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=q.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,e=this.blockSize,f=d/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0),a=f*e,d=h.min(4*a,d);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(c,g);g=c.splice(0,a);b.sigBytes-=d}return i.create(g,d)},clone:function(){var a=k.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=m.extend({init:function(){this.reset()},
reset:function(){m.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=m.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return r.HMAC.create(a,c).finalize(b)}}});var r=f.algo={};return f}(Math);
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var h=CryptoJS,i=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();for(var b=[],a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var b=b.replace(/\s/g,""),e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));
for(var c=[],a=0,d=0;d<e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return i.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
/**
 * Bing Image Search Displayer
 * requires jQuery and http://code.google.com/p/crypto-js/ (base64 and core)
 * Written by Popovine Anton (c) M3 Projects Ltd.
 */
(function(G){
var searcher = function(wrapperId) {
  var container = $("#"+wrapperId);
  if (!container) {
    __.log("ImageSearcher error : container element not found : "+wrapperId);
    return;
  }

  var accountKey = "TdKrIK+1PbXYwsTDjzvfNV4dASgUnejA+2My7gQ6PEY=";
  var results = []; // array holds the image results
  var showOffset = 0; // which 4 results to display
  var numShown = 4;
  var _this = this;

  var AddImageResult = function(thumb_url, url, num) {
    var on_thumb_loaded = function(img) {
      cCont = $("div.canvas-container");

      if ($("#search-cont").length === 0) {
        cCont.append('<div class="search-results" id="search-cont"><div id="close-search">&times;</div><div class="btn-arrow-left-png btn-search-nav-left"></div><div class="btn-arrow-right-png btn-search-nav-right"></div></div>');
        $("#close-search").click(function(){$("#search-cont").remove()});
        $(".btn-search-nav-right").click(function(){_this.showNext()});
        $(".btn-search-nav-left").click(function(){_this.showPrev()});
      }

      sCont = $("#search-cont");

      if ($("#search-cont").children().filter(".search-result").length >= 4) {
        $($("#search-cont").children().filter(".search-result")[0]).remove();
      }

      sCont.append('<div class="search-result" target_url="'+url+'"></div>');

      $('[target_url="'+url+'"]').css("background-image","url("+thumb_url+")");

      $('[target_url="'+url+'"]').click(function(){
        var url = $(this).attr("target_url");
        __.log("Clicked on result : " + url);
        showLoader();
        var on_bg_url_loaded = function(){
          $(document).trigger("table_bg:update", url);
        }
        __.loadImg($(this).attr("target_url"), on_bg_url_loaded);
      });

    } //on_thumb_loaded
    __.loadImg(thumb_url, on_thumb_loaded);
  } //AddImageResult

  this.ImageSearch = function(what,offset) {
    var numResults = 40;
    var offset = offset || 0;
    if(!what) return;

    var azureStr = "https://api.datamarket.azure.com/Data.ashx/Bing/Search/v1/Image?Query=%27"+what+"%27&Market=%27en-US%27&Adult=%27Off%27&$top="+numResults+"&$skip="+offset+"&$format=JSON"
    $.ajax( {
      url : azureStr,
      dataType : 'json',
      beforeSend : function(xhr) {
        var words  = CryptoJS.enc.Latin1.parse("ignored:" + accountKey);
        var base64 = CryptoJS.enc.Base64.stringify(words);
        xhr.setRequestHeader("Authorization", "Basic " + base64);
      },
      error : function(xhr, ajaxOptions, thrownError) {
        __.log("Image search API ERROR : " + thrownError);
      },
      success : function(model) {
        hideLoader();
        res = model.d.results;
        length = res.length;
        results.length = 0;
        showOffset = 0;
        for (var i = 0; i < length; i++) {
          if (i < 4) {
            AddImageResult(res[i].Thumbnail.MediaUrl, res[i].MediaUrl, i);
          }
          results.push({
            'thumb_url': res[i].Thumbnail.MediaUrl,
            'url': res[i].MediaUrl,
            'index': i
          })
        }
      }
    });
  } //ImageSearch

  this.showNext = function() {
    if (showOffset + 8 <= results.length) {
      for (var i = 0; i < numShown; i++) {
        r = results[showOffset+numShown+i];
        AddImageResult(r.thumb_url, r.url, r.index);
      }
      showOffset += numShown;
    }
  }

  this.showPrev = function() {
    if (showOffset - numShown >= 0) {
      for (var i = 0; i < numShown; i++) {
        r = results[showOffset-numShown+i];
        AddImageResult(r.thumb_url, r.url, r.index);
      }
      showOffset -= numShown;
    }
  }

  DisplayResults = function(response) {
    var results = response.SearchResponse.Image.Results;
    var offset = response.SearchResponse.Image.Offset;
    var num = results.length;
    var total = response.SearchResponse.Image.Total;
    var what = response.SearchResponse.Query.SearchTerms;

    __.log("Search Completed. Grabbing " + (offset + 1) +
        " to " + (offset + num) +
        " of " + total + " total results.");

    // Display the Image results.
    //var resultsListItem = null;
    for (var i = 0; i < results.length; ++i)
    {
      if (i < 4) M3.AddImageResult(results[i].Thumbnail.Url, results[i].MediaUrl, i);
      /*
      resultsListItem = document.createElement("li");
      resultsList.appendChild(resultsListItem);
      resultsListItem.innerHTML = "<a href=\""
          + results[i].MediaUrl
          + "\"><img src=\""
          + results[i].Thumbnail.Url
          + "\"></a><br /><a href=\""
          + results[i].Url
          + "\">"
          + results[i].Title
          + "</a><br />Dimensions: "
          + results[i].Width
          + "x"
          + results[i].Height
          + "<br /><br />";
          */
    }
  }

} //searcher
G.ImageSearcher = searcher;
}(this));
/*
 * helper functions
 * * * * * * * * * * */

showLoader = function() {
  $(".loader").show();
}
hideLoader = function() {
  $(".loader").hide();
}

$.fn.getHexBackgroundColor = function() {
    var rgb = $(this).css('background-color');
    if (!rgb) {
        return '#FFFFFF'; //default color
    }
    var hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
    if (hex_rgb) {
        return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
    } else {
        return rgb; //ie8 returns background-color in hex format then it will make                 compatible, you can improve it checking if format is in hexadecimal
    }
}

/*
 * constant literals
 * * * * * * * * * * */
//TODO: watch out when using dot (.) in events as jQuery treats them
// as namespaces so you might get unexpected results. Better use columns (:)
var TABLE_DRAG_EVENT = 'tabledrag';
var CHANGE_FELT_COLOR = 'taably.felt.color';
var CHANGE_BG_COLOR = 'taably.bg.color';
var TABLE_RESIZE_EVENT = 'tableresize';

var CLASS_ROOM_SELECTOR = '.room-selector';
var CLASS_BG_SELECTOR = '.bg-selector';
var CLASS_TABLE_SELECTOR = '.table-selector';
var ID_TABLE_SEL_GROUP = '#table-selector-group';
var ID_BG_URL_TOGGLE = '#background-url-toggle';
var ID_BG_URL = '#background-url';
var ID_LOGO_URL_TOGGLE = '#logo-url-toggle';
var ID_LOGO_URL = '#logo-url';
var ID_TABLE_COLOR_PICKER = '#table-color-picker';
var ID_BG_COLOR_PICKER_I = '#bg-color-picker-1';
var ID_BG_COLOR_PICKER_II = '#bg-color-picker-2';
var CLASS_BG_COLOR_PRESET = '.bg-color-preset';
var CLASS_TABLE_COLOR_PRESET = '.table-color-preset';
var ID_SVG_CANVAS_WRAPPER = '#canvas-wrapper';
var ID_CANVAS_HIDDEN = 'hidden-canvas';
var ID_SVG_CANVAS = '#svg-canvas';
var ID_DOWNLOAD_LAYOUT_BTN = '#download-layout';
var ID_IMG_SEARCH_BTN = '#img-search-btn';
var ID_IMG_SEARCH_INPUT = '#img-search-input';
var TAG_SEARCH_ITEM = 'search-item';
var ID_BG_PRESET_SEL = "#bg-preset-select";

window.onload = function () {
  var imgSearcher = new ImageSearcher;

  $(document).on(CHANGE_FELT_COLOR, function(e, data){
    if(designer) designer.setFeltColor(data.color);
    return false;
  });

  var on_table_color_preset_click = function() {
    var selColor = $(this).getHexBackgroundColor();
    //$(document).trigger(CHANGE_FELT_COLOR, { color:  selColor} );
    $(ID_TABLE_COLOR_PICKER).miniColors('value', selColor);
  }

  $(CLASS_TABLE_COLOR_PRESET).click(on_table_color_preset_click);

  var on_bg_color_preset_click = function() {
    //TODO: check background selection and adjust coloring logic accordingly
    var selColor = $(this).getHexBackgroundColor();
    $(ID_BG_COLOR_PICKER_I).miniColors('value', selColor);
    $(ID_BG_COLOR_PICKER_II).miniColors('value', hexLuminance(selColor, -0.70));
    $(document).trigger(CHANGE_BG_COLOR, { } );
  }
  $(CLASS_BG_COLOR_PRESET).click(on_bg_color_preset_click);

  var on_bg_color_change = function(e, data) {
    var color1 = $(ID_BG_COLOR_PICKER_I).val();
    var color2 = $(ID_BG_COLOR_PICKER_II).val();

    var val = $(CLASS_BG_SELECTOR).filter(".active").attr("value");
    switch (val) {
      case "color":
        if(designer) designer.setBackgroundColor(color1);
        break;
      case "radient":
        if(designer) designer.setBackgroundRad({color1: color1, color2: color2});
        break;
      case "gradient":
        if(designer) designer.setBackgroundGrad({color2 : color2, color1 : color1});
        break;
    }


  }
  $(document).on(CHANGE_BG_COLOR, on_bg_color_change);

  $(ID_BG_COLOR_PICKER_I).miniColors({
    change: function(hex,rgb){
              $(document).trigger(CHANGE_BG_COLOR);
            }
  });

  $(ID_BG_COLOR_PICKER_II).miniColors({
    change: function(hex,rgb){
              $(document).trigger(CHANGE_BG_COLOR);
            }
  });

  $(ID_TABLE_COLOR_PICKER).miniColors({
    change: function(hex,rgb){
              context = { color: hex };
              $(document).trigger(CHANGE_FELT_COLOR, context);
            }
  });

  var on_bg_selector = function() {
    hideLoader();
    var value = $(this).attr("value");
    $(CLASS_BG_SELECTOR).removeClass('active');
    $(this).addClass('active');
    var color1 = $(ID_BG_COLOR_PICKER_I).val();
    var color2 = $(ID_BG_COLOR_PICKER_II).val();
    switch(value) {
      case "color":
        designer.setBackgroundColor(color1);
        break;
      case "gradient":
        designer.setBackgroundGrad({color1: color1, color2: color2});
        break;
      case "radient":
        if(designer) designer.setBackgroundRad({color1: color1, color2: color2});
        break;
      case "image":
        var sel = $(ID_BG_PRESET_SEL).children(":selected");
        var url = sel.attr("url");
        designer && designer.setBackgroundImg(url);
        break;
      default:
        __.log("on_bg_selector default value = " + value);
        break;
    }
  }
  $(CLASS_BG_SELECTOR).click(on_bg_selector);


  var on_bg_url_loaded = function(img) {
    hideLoader();
    $(CLASS_BG_SELECTOR).removeClass('active');
    $(CLASS_BG_SELECTOR).filter('[value="image"]').addClass('active');
    designer.setBackgroundImg(img.src);
  }

  var on_bg_loaded = function(e, data){
    on_bg_url_loaded({'src': data});
  }
  $(document).on("table_bg:update", on_bg_loaded);

  var on_bg_url_toggle = function() {
    if (!$(ID_BG_URL).val()) return;
    var icon = $(this).children("i");
    if ( icon.attr('class') === "icon-ok" ) {
      icon.attr('class','icon-remove');
      var url = $(ID_BG_URL).val();
      showLoader();
      __.loadImg(url, on_bg_url_loaded);
    } else {
      icon.attr('class','icon-ok');
      $(this).prev().val("");
      var color_btn = $(CLASS_BG_SELECTOR).filter(function(index){
        return index == 0;
      });
      on_bg_selector.call(color_btn);
    }
  }
  $(ID_BG_URL_TOGGLE).click(on_bg_url_toggle);

  var on_logo_url_loaded = function(img) {
    hideLoader();
    if (designer) designer.setLogo(img.src);
  }
  var on_logo_url_toggle = function() {
    if (!$(ID_LOGO_URL).val()) return;
    var icon = $(this).children("i");
    if ( icon.attr('class') === "icon-ok" ) {
      icon.attr('class','icon-remove');
      var url = $(ID_LOGO_URL).val();
      showLoader();
      __.loadImg(url, on_logo_url_loaded);
    } else {
      icon.attr('class','icon-ok');
      $(this).prev().val("");
      designer.removeLogo();
    }
  }
  $(ID_LOGO_URL_TOGGLE).click(on_logo_url_toggle);

  var on_table_selector_click = function(){
    $(CLASS_TABLE_SELECTOR).removeClass('active');
    $(this).addClass('active');
    showLoader();
    var that = this;
    var on_table_loaded = function() {
      var oldTop = designer.getTop();
      var onSet = function () {
        oldTop && designer.setTop(oldTop);
        designer.setFeltColor($(ID_TABLE_COLOR_PICKER).val())
      }
      designer && designer.setTable(m3.dd.table[$(that).attr('name')],onSet)
      hideLoader();
    }
    __.loadImg(m3.dd.table[$(this).attr('name')].img, on_table_loaded);
  }

  $('#opacity-minus').click(function(){
    var opacity = designer.getLogoOpacity() - 0.05;
    if (opacity < 0) { opacity = 0.0 }
    designer.setLogoOpacity(opacity);
    $('#opacity-label').text('opacity ' + (Math.floor(opacity * 100)).toString() + '%');
  });

  $('#opacity-plus').click(function(){
    var opacity = designer.getLogoOpacity() + 0.05;
    if (opacity > 1) { opacity = 1.0 }
    designer.setLogoOpacity(opacity);
    $('#opacity-label').text('opacity ' + (Math.floor(opacity * 100)).toString() + '%');
  });

  $('#scale-minus').click(function(){
    var scale = designer.getLogoScale() - 0.02;
    if (scale < 0) { opacity = 0.0 }
    designer.setLogoScale(scale);
    $('#scale-label').text('scale ' + (Math.floor(scale * 100)).toString() + '%');
  });

  $('#scale-plus').click(function(){
    var scale = designer.getLogoScale() + 0.02;
    designer.setLogoScale(scale);
    $('#scale-label').text('scale ' + (Math.floor(scale * 100)).toString() + '%');
  });

  $(ID_IMG_SEARCH_BTN).click(function(){
    showLoader();
    var str = $(ID_IMG_SEARCH_INPUT).val();
    if (typeof String.prototype.trim === 'function') str = str.trim();
    imgSearcher.ImageSearch(str);
  });

  var table_select = $(ID_TABLE_SEL_GROUP);
  for (item in m3.dd.table) {
    if (m3.dd.table.hasOwnProperty(item)){
      table_select.append('<div class="btn table-selector style-selector" name="'+item+'"><div class="' + m3.dd.table[item].css + '"></div></div>');
    }
  }
  $(CLASS_TABLE_SELECTOR).click(on_table_selector_click);

  var bg_select = $(ID_BG_PRESET_SEL);
  _.each(m3.dd.bgPresets, function(url,key) {
    if (typeof url === 'string')
      bg_select.append('<option url="' + url + '">' + key + '</option>');
  })

  bg_select.change(function(){
    var sel = $(this).children(":selected");
    var url = sel.attr("url");
    if (!url) return;
    showLoader();
    __.loadImg(url, on_bg_url_loaded);
  });

  // When TableDesigner confirms valid JSON data pre-poplute the controls
  $(document).on("tabledesigner:jsonParsed", function(e, jsonData) {
    var feltColor = jsonData.objects[_.indexOf(jsonData.tableDesignerObjects, 'felt')].fill
    $(ID_TABLE_COLOR_PICKER).miniColors('value', feltColor);
    var tableName = jsonData.tableDesignerMeta.tableData.name;
    $(CLASS_TABLE_SELECTOR).filter(function(index){
      $(this).removeClass("active");
      if ($(this).attr("name") === tableName) $(this).addClass("active");
    })

    var bgType = jsonData.tableDesignerMeta.bgData.type;
    var color1 = color2 = '#222';
    $(CLASS_BG_SELECTOR).filter(function(index){
      $(this).removeClass("active");
      if ($(this).attr("value") === bgType) $(this).addClass("active");
    })

    switch(bgType) {
      case 'color':
        color1 = color2 = 
          jsonData.objects[_.indexOf(jsonData.tableDesignerObjects, 'bgRect')].fill
        break;
      case 'gradient':
        color1 = jsonData.tableDesignerMeta.bgData.options.color1;
        color2 = jsonData.tableDesignerMeta.bgData.options.color2;
        break;
      case 'radient':
        color1 = jsonData.tableDesignerMeta.bgData.options.color1;
        color2 = jsonData.tableDesignerMeta.bgData.options.color2;
        break;
      case 'image':
        color1 = color2 = 
          jsonData.objects[_.indexOf(jsonData.tableDesignerObjects, 'bgRect')].fill
        break;
      default:
        break;
    }
    $(ID_BG_COLOR_PICKER_I).miniColors('value', color1);
    $(ID_BG_COLOR_PICKER_II).miniColors('value', color2);

    var logoIndex = _.indexOf(jsonData.tableDesignerObjects, 'logo');
    if (logoIndex !== -1) {
      $(ID_LOGO_URL).val(jsonData.objects[logoIndex].src);
      var icon = $(ID_LOGO_URL_TOGGLE).children("i");
      icon.attr('class','icon-remove');
      var logoScale = parseFloat(jsonData.objects[logoIndex].scaleX);
      var logoOpacity = parseFloat(jsonData.objects[logoIndex].opacity);
      $('#opacity-label').text('opacity ' + (Math.floor(logoOpacity * 100)).toString() + '%');
      $('#scale-label').text('scale ' + (Math.floor(logoScale * 100)).toString() + '%');
    }
  })

  $(CLASS_ROOM_SELECTOR).click(function() {
    $(CLASS_ROOM_SELECTOR).removeClass('active');
    $(this).addClass('active');
    designer && designer.setSize(parseInt($(this).data('width')), parseInt($(this).data('height')));
    showLoader();
    designer.setOverlay(window.STATIC_URL + 'img/overlay/' + $(this).attr('data-room') + '_overlay.png', hideLoader);
  });

  $(CLASS_ROOM_SELECTOR).hover(function(){
    if ($(this).hasClass('active')) {
      showLoader();
      designer && designer.setOverlay(window.STATIC_URL + 'img/overlay/' + $(this).attr('data-room') + '_overlay.png', hideLoader);
    }
  }, function() {
    if ($(this).hasClass('active'))
      designer && designer.clearOverlay();
  });

  showLoader();
  
  var designer;
  var _loadLayout = function(data) {
    designer = TableDesigner("designer-canvas", data, hideLoader);
    $(".canvas-container").append('<div class="loader"><img src="'+window.STATIC_URL+'img/blue_spinner.gif"/></div>');
    
  } // _loadLayout

  if (typeof window.layout !== 'undefined' && typeof window.layout.data === 'string') {
    $("#share-layout-name").val(window.layout.name);
    _loadLayout(window.layout.data);
  } else {
    $.getJSON('/api/v0/layout/get/default/', function(response) {
      _loadLayout(response.data);
      $("#share-layout-name").val(response.name);
      window.layout = response;
    }) 
  }

  $("#share-layout-btn").click(function(){
    var layoutName = $("#share-layout-name").val();
    var onSuccess = function(response) {
      window.history.pushState({'layoutUrl': response.url, 'data': JSON.stringify(designer)}, 
                               "Taably - "+response.name, response.url);
    }
    $.post('/api/v0/layout/add/', 
           JSON.stringify({'data': JSON.stringify(designer), 'name': layoutName}), 
           onSuccess, 'json');
  }) // share-layout-btn click

  // when user navigates back/forward after saving layouts
  $(window).on('popstate', function(e) {
    if (e.originalEvent.state && typeof e.originalEvent.state.data === 'string') {
      $("#share-layout-name").val(e.originalEvent.state.name);
      designer.loadFromJSON(e.originalEvent.state.data);
    }
  })

  $(ID_DOWNLOAD_LAYOUT_BTN).click(function() {
    if ($(CLASS_ROOM_SELECTOR+".active").length === 1) {
      var selRoom = $(CLASS_ROOM_SELECTOR+".active").attr('data-room');
    } else {
      // render for ipoker if no room selected or somehow multiple
      var selRoom = "ipoker";
    }
    $('<form action="/api/v0/layout/render/" method="POST">' + 
    '<input type="hidden" name="data" value="' + escape(JSON.stringify(designer)) + '">' +
    '<input type="hidden" name="name" value="' + escape(window.layout.name) + '">' +
    '<input type="hidden" name="room" value="' + escape(selRoom) + '">' +
    '</form>').appendTo('body').submit().remove();
  }); // on download click

}; // onload

