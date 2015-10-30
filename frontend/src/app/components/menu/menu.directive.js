(function() {
  'use strict';

  angular
    .module('nytfantasy')
    .directive('nytMenu', nytMenu);

  /** @ngInject */
  function nytMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      scope: {
          creationDate: '='
      },
      controller: MenuController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MenuController(moment) {
      var vm = this;
    }
  }

})();
