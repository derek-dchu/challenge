'use strict';

var expect = require('chai').expect,
    api = require('../lib/500px-api');

var photos = api.photos;

describe('search by tag', function() {
  it('should return a json contains photos', function(done) {
    photos.searchByTag('dog', {'rpp': 5}, function(err, result) {
      console.log(err);
      expect(err).to.not.be.exist();
      expect(result).to.be.exist();
      expect(result).to.have.property('photos');
      expect(result.photos).to.have.length(5);

      done();
    });
  });
});
