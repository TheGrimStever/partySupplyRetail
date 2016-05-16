angular.module('partySupply')
  .controller('homeCtrl', function ($scope, mainService) {

    $scope.getTest = function () {
      $scope.getTest = mainService.getTest();
    }

    $scope.getTest();

    $scope.getProduct = function () {
      $scope.products = mainService.getProduct();
    }

    $scope.getProduct();

  });
