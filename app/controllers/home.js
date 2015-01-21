'use strict';

var express = require('express'),
    fs = require('fs'),
    Image = require('../models/image');

var router = express.Router();

var json = fs.readFileSync(__dirname + '/content.json').toString(),
    page = JSON.parse(json).pages.index;

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

    res.render('index', {
      title: page.title
    });
});
