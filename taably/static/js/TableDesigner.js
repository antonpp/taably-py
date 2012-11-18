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
