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

describe('/category/:tag endpoint', function() {
  it('should return a page related to a tag', function (done) {
    request(app)
      .get('/category/dogs-and-cats')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.text.indexOf('<title>dogs and cats</title>') > 0).to.be.true();
        done();
      });
  });

  it('should return a page contains images', function (done) {
    request(app)
      .get('/category/dogs-and-cats')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.text).to.string('<img src=');
        done();
      });
  });
});

describe('/contact endpoint', function() {
  it('should return contact page', function (done) {
    request(app)
      .get('/contact')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.text.indexOf('<title>Contact</title>') > 0).to.be.true();
        done();
      });
  });
});

describe('/about endpoint', function() {
  it('should return contact page', function (done) {
    request(app)
      .get('/about')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.text.indexOf('<title>About</title>') > 0).to.be.true();
        done();
      });
  });
});

