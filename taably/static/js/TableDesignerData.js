/**
 * Initializes Table Designer Data
 * Creates global object m3.dd
 * Written by Popovine Anton (c) M3 Projects Ltd.
 */

(function(G){
  var DD = {};

  DD.bgPresets = {
    'wooden floor': 'http://static.taably.s3.amazonaws.com/resources/backgrounds/floor_render.png',
    'light wood': 'http://www.deviantart.com/download/71941528/Vista_Ultimate_Wood_No_Glass_by_Mosqu1t0.jpg',
    'dark wood': 'http://fc08.deviantart.net/fs70/i/2011/127/b/d/black_wood_background_by_egosumpotens-d3fst0k.jpg',
    'blue tiles': 'http://www.featurepics.com/FI/Thumb300/20061229/Grey-Slate-Tiles-Background-176869.jpg',
    'green grass': 'http://image.shutterstock.com/display_pic_with_logo/111031/111031,1279263404,1/stock-photo-green-felt-background-57238999.jpg',
    getDefault: function(){
      return {name: 'wooden floor', url: this['wooden floor']}
    }
  }

  DD.table = {};

  DD.table['new_3d'] = {
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
    name : 'old_thin',
    img : "http://static.taably.s3.amazonaws.com/resources/tables/old_thin_table.png",
    width : 800,
    height : 477,
    rect_x : 56,
    rect_y : 25,
    rect_width : 688,
    rect_height : 330,
    rect_r : 168,
    color : "#30580f"
  };
  DD.table['old_std'] = {
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
