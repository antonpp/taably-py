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
    designer.setOverlay(window.STATIC_URL + 'img/overlay/' + $(this).attr('data-room') + '_overlay.png');
  });

  $(CLASS_ROOM_SELECTOR).hover(function(){
    if ($(this).hasClass('active'))
      designer && designer.setOverlay(window.STATIC_URL + 'img/overlay/' + $(this).attr('data-room') + '_overlay.png');
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

