angular.module('partySupply')
    .controller('cartCtrl', function($scope, cartService, productService, cart, $state) {

        $scope.cart = cart;

        $scope.total = 0;
        var getTotal = function(cart) {
            if (cart) {
                // $scope.total = 0;
                console.log("getTotal method: " + cart);
                cart.forEach(function(item) {
                        var subtotal = item.price * item.qty;
                        $scope.total += subtotal;
                        //not included:  SHipping and Tax
                })
            }
        }
        getTotal(cart);

        //when user updates Qty in cart, pass getTotal as call back.
        $scope.updateQtyAndTotal = function(qty, id) {
                cartService.updateQty(qty, id);
                console.log("I'm updating the CART! " + id);
                getTotal(cart);
                $state.reload();
            }
    });
