(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * Test should check if MomentJS have been called
   */
  describe('directive menu', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('nytfantasy'));
    beforeEach(inject(function($compile, $rootScope) {
      el = angular.element('<nyt-menu></nyt-menu>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instantiate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
    });
  });
})();
