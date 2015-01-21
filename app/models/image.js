'use strict';

var api = require('../../lib/500px-api').photos;

function Image (params) {
  if (!params) {
    params = {};
  }
  this.id = params.id || null;
  this.name = params.name || '';
  this.description = params.description || '';
  this.url = params.image_url || '';
  this.width = params.width || null;
  this.height = params.height || null;
}

Image.getPopular = function(cb) {
  var images = [];
  api.getPopular( {'rpp': 20, 'image_size': 3}, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      data.photos.forEach(function( elem, index, arr ) {
        images.push( new Image(elem) );
      });

      cb(null, {images: images});
    }
  });
};

Image.searchByTag = function(tag, cb) {
  var images = [];
  api.searchByTag(tag, {'rpp': 20, 'image_size': 3}, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      data.photos.forEach(function( elem, index, arr ) {
        images.push( new Image(elem) );
      });

      cb(null, {images: images});
    }
  });
};

module.exports = Image;

