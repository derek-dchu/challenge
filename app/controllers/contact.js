'use strict';

var express = require('express'),
    fs = require('fs');

var router = express.Router();

var json = fs.readFileSync(__dirname + '/content.json').toString(),
    page = JSON.parse(json).pages.contact;

module.exports = function (app) {
  app.use('/contact', router);
};

router.get('/', function (req, res, next) {
  res.render('contact', page);
});