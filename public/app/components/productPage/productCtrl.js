angular.module('partySupply')
  .controller('productCtrl', function ($scope, cartService, productData) {
    //this productData comes from the Resolve in our routes
    $scope.product = productData;

    $scope.addToCart = function (id) {
      cartService.addToCart(id);
    }



//end of controller
  });
