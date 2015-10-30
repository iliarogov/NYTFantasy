(function() {
  'use strict';

  angular
    .module('nytfantasy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(wordEndpoint) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1446216417264;
    showtodaycount();
    
    function showtodaycount() {
      getTodayCount();
    }
    
    function getTodayCount(){
        vm.todaysWords = wordEndpoint.getToday();
    }
    
  }
})();
