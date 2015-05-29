'use strict';

/* App Module */

var phonecatApp = angular.module('starWarsApp', [
  'ngRoute',
  'starWarsControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/board', {
        templateUrl: 'partials/board.html',
        controller: 'starWarsControllers'
      }).
      when('/board/:nameID', {
        templateUrl: 'partials/nameDetail.html',
        controller: 'nameDetailCtrl'
      }).
      otherwise({
        redirectTo: '/board'
      });
  }]);

