'use strict';

var express = require('express'),
    config = require('../config/config');

var app = express();

require('../config/express')(app, config);

var request = require('supertest'),
    expect = require('chai').expect;


describe('/ endpoint', function () {
  it('should return index page', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.text.indexOf('<title>500px-grid</title>') > 0).to.be.true();
        done();
      });
  });
});

describe('/category endpoint', function () {
  it('should redirect target page', function (done) {
    request(app)
      .post('/category')
      .send({tag: 'dogs and cats  '})
      .expect(302)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.header.location).to.equal('/category/dogs-and-cats');
        done();
      });
  });
});


