'use strict';

var express = require('express'),
    slug = require('slug');

var router = express.Router();

module.exports = function (app) {
  app.use('/category', router);
};

router.post('/', function (req, res, next) {
  var form = req.body;
  res.redirect('/category/' + slug(form.tag));
});
