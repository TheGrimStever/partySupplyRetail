angular.module('partySupply')
    .controller('cartCtrl', function($scope, cartService, productService, cart, $state) {

        $scope.cart = cart;

        $scope.total = cartService.getTotal(cart);

        //when user updates Qty in cart, pass getTotal as call back.
        $scope.updateQtyAndTotal = function(qty, id) {
                cartService.updateQty(qty, id);
                $scope.total = cartService.getTotal(cart);
                $state.reload();
            }

        $scope.removeItemFromCart = function (id) {
              cartService.removeItemFromCart(id);
              $state.reload();
        }

  // End of Controller
    });
