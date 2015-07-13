'use strict';

/**
 * @ngdoc function
 * @name instagarmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the instagarmApp
 */
angular.module('instagram')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
