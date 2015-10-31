(function () {
  'use strict';

  angular
    .module('nytfantasy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, wordEndpoint) {
    var vm = this;
    vm.creationDate = 1446216417264;

    wordEndpoint().then(function (data) {

      $scope.todaysWords = data;

      _.each($scope.todaysWords, function (word) {
        if (word.score > 500) {
          word.rank = 'success';
        } else if (word.score > 100 && word.score <= 500) {
          word.rank = 'info';
        } else {
          word.rank = 'danger';
        }
      });
    })

  }
})();
