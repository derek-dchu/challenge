'use strict';

var express = require('express'),
  fs = require('fs');

var router = express.Router();

var json = fs.readFileSync(__dirname + '/content.json').toString(),
  page = JSON.parse(json).pages.about;

module.exports = function (app) {
  app.use('/about', router);
};

router.get('/', function (req, res, next) {
  res.render('about', page);
});
