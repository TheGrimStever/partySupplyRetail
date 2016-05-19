angular.module('partySupply')
  .controller('cartCtrl', function ($scope, cartService, productService, cart) {

    $scope.cart = cart;


  });
