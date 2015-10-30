(function() {
  'use strict';

  angular
    .module('nytfantasy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
