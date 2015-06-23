;(function (){

  'use strict';

  angular.module('likeModule', [])

  .controller('likeController', ['$scope',
    function ($scope) {

    $scope.likes = 0;

    $scope.likeClick = function() {

        $scope.likes++;

        if ($scope.likes === 1) {
          $('.likes').html('LIKE');
        } else {
          $('.likes').html('LIKES');
        }
      };


  }]);

}());