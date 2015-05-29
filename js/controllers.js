'use strict';

/* Controllers */

var starWarsApp = angular.module('starWarsApp', []);

starWarsApp.controller('starWars', ['$scope', '$http', function($scope, $http) {
  $http.get('http://swapi.co/api/people/').success(function(data) {
    $scope.peoples = data.results;
  });

  $scope.orderProp = 'name';
}]);