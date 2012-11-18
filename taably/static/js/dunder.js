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

})(this)
