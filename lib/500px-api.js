'use strict';

var fs = require('fs'),
    API500px = require('500px'),
    env = process.env.NODE_ENV || 'development';

var consumerKey = env !== 'production' ? fs.readFileSync(__dirname + '/consumer_key.txt').toString() : process.env['500PX_CONSUMER_KEY'];

module.exports = new API500px(consumerKey);


