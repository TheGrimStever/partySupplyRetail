angular.module('partySupply')
  .controller('productCtrl', function ($scope, cartService, productData) {
    //this productData comes from the Resolve in our routes
    $scope.product = productData;

    $scope.addToCart = function (product) {
      cartService.addToCart(product);
    }



//end of controller
  });
