(function() {
  'use strict';

  angular
      .module('nytfantasy')
      .service('wordEndpoint', wordEndpoint);

  /** @ngInject */
  function wordEndpoint($http) {
      return function(){
        var url = '/scores';
        return $http.get(url);
    }
  }
})();
