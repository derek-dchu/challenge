'use strict';

var express = require('express'),
    fs = require('fs'),
    Image = require('../models/image'),
    api = require('../../lib/500px-api').photos;

var router = express.Router();

var json = fs.readFileSync(__dirname + '/content.json').toString(),
    page = JSON.parse(json).pages.index;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  // Get photos
  var images = [];
  var response = {
    title: page.title
  };
  api.getPopular( {'rpp': 20, 'image_size': 2}, function(err, data) {
    if (err) {
      response.error = err;
    } else {
      data.photos.forEach(function( elem, index, arr ) {
        images.push( new Image(elem) );
      });

      response.images = images;
    }

    res.render('index', response);
  });
});
