angular.module('partySupply')
  .controller('checkoutCtrl', function ($scope, cartService) {

    $scope.finalCart = cartService.getCart();
    $scope.finalTotal = cartService.getTotal($scope.finalCart);

//end of controller
  });
