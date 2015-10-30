(function() {
  'use strict';

  describe('service wordEndpoint', function() {
    var wordEndpoint;

    beforeEach(module('nytfantasy'));
    beforeEach(inject(function(_wordEndpoint_) {
      wordEndpoint = _wordEndpoint_;
    }));

    it('should be registered', function() {
      expect(wordEndpoint).not.toEqual(null);
    });

    describe('getToday function', function() {
      it('should exist', function() {
        expect(wordEndpoint.getToday).not.toEqual(null);
      });
    });
  });
})();
