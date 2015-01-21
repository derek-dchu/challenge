'use strict';

function Image (opts) {
  if (!opts) {
    opts = {};
  }
  this.id = opts.id || null;
  this.name = opts.name || '';
  this.description = opts.description || '';
  this.url = opts.url || '';
  this.width = opts.width || null;
  this.height = opts.height || null;
}

module.exports = Image;

