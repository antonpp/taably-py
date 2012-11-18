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
