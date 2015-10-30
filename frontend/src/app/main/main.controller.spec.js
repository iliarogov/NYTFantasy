(function() {
  'use strict';

  describe('controllers', function(){
    beforeEach(module('nytfantasy'));
    beforeEach(inject(function(_$controller_,_wordEndpoint_) {
      spyOn(_wordEndpoint_, 'getToday').and.returnValue([{}, {}, {}, {}, {}]);
    }));
  });
})();
