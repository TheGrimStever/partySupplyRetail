angular.module('partySupply')
  .controller('categoryCtrl', function ($scope, productService) {

    $scope.getBirthdayProducts = function () {
      productService.getBirthdayProducts().then(function (response) {
        $scope.products = response;
      });
    }

    $scope.getBirthdayProducts();


  //end of controller
  });
