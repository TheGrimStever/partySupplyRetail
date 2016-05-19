angular.module('partySupply')
  .controller('homeCtrl', function ($scope, productService) {

    $scope.getProduct = function () {
      $scope.products = productService.getProduct();
    }

    $scope.getProduct();

    //function to call my getCategory
    $scope.fillCategory = function (id) {
      // productService.getCategory(id).then(function (response) {
      //   $scope.products = response;
      // })

      productService.getCategoryById(id) { //Not implemented yet

      }
    }

  //end of controller
  });
