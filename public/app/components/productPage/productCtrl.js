angular.module('partySupply')
  .controller('productCtrl', function ($scope, cartService, productData) {
    //this productData comes from the Resolve in our routes
    $scope.product = productData;

    $scope.addToCart = function (product) {
      console.log('add to cart button pressed');
      cartService.addToCart(product);
    }



//end of controller
  });
