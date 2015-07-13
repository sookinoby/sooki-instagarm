'use strict';

/**
 * @ngdoc function
 * @name instagarmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the instagarmApp
 */
angular.module('instagram')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
