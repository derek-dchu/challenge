'use strict';

var express = require('express'),
    slug = require('slug'),
    Image = require('../models/image'),
    api = require('../../lib/500px-api').photos;

var router = express.Router();

module.exports = function (app) {
  app.use('/category', router);
};

router.post('/', function (req, res, next) {
  var form = req.body;
  res.redirect('/category/' + slug(form.tag));
});

router.get('/:tag', function (req, res, next) {
  var images = [];
  var tag = req.params.tag.replace(/\-/g, ' ');
  var response = {
    title: tag
  };

  api.searchByTag(tag, {'rpp': 20, 'image_size': 2}, function(err, data) {
    if (err) {
      response.error = err;
    } else {
      data.photos.forEach(function (elem, index, arr) {
        images.push(new Image(elem));
      });

      response.images = images;
    }

    res.render('category', response);
  });
});
