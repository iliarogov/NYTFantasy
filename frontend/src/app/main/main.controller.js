(function() {
  'use strict';

  angular
    .module('nytfantasy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, wordEndpoint) {
    var vm = this;
    vm.creationDate = 1446216417264;
    showtodaycount();
    
    function showtodaycount() {
      getTodayCount();
    }
    
    function getTodayCount(){
        wordEndpoint().then(function(data){
            
        angular.forEach(data, function(todaysWord) {
            if(todaysWord.score > 500){
                todaysWord.rank = 'success';
            }else if(todaysWord.score > 100 && todaysWord.score <= 500){
                todaysWord.rank = 'info';
            }else{
                todaysWord.rank = 'danger';
            }
        });
        })
    }
    
  }
})();
