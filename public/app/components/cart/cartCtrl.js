angular.module('partySupply')
    .controller('cartCtrl', function($scope, cartService, productService, cart, $state) {

        $scope.cart = cart;

        $scope.total = cartService.getTotal(cart);
        // var getTotal = function(cart) {
        //     if (cart) {
        //         cart.forEach(function(item) {
        //                 var subtotal = item.price * item.qty;
        //                 $scope.total += subtotal;
        //                 //not included:  SHipping and Tax
        //         })
        //     }
        // }
        // getTotal(cart);

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
