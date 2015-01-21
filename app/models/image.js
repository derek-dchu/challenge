'use strict';

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

module.exports = Image;

