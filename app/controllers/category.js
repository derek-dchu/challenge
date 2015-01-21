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

  Image.searchByTag(tag, function(err, data) {
    response.error = err;
    response.images = data.images;
    res.render('category', response);
  });
});
