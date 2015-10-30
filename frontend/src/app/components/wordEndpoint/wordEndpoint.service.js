(function() {
  'use strict';

  angular
      .module('nytfantasy')
      .service('wordEndpoint', wordEndpoint);

  /** @ngInject */
  function wordEndpoint() {
    var todayData = [
      {
        'word': 'AngularJS',
        'score': '10'
      },
      {
        'word': 'BrowserSync',
        'score': '2'
      },
      {
        'word': 'GulpJS',
        'score': '100'
      },
      {
        'word': 'Jasmine',
        'score': '0'
      },
      {
        'word': 'Karma',
        'score': '1'
      }
    ];

    this.getToday = getToday;

    function getToday() {
      return todayData;
    }
  }

})();
