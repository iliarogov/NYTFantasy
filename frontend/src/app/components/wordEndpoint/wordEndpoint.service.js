(function() {
  'use strict';

  angular
      .module('nytfantasy')
      .service('wordEndpoint', wordEndpoint);

  /** @ngInject */
  function wordEndpoint($http) {
      return function(){
        var url = '/data/scores';
        return $http.get(url).then(function (response) {
          return response.data;
        });
    }
  }
})();
