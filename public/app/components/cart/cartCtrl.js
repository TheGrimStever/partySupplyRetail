angular.module('partySupply')
  .controller('cartCtrl', function ($scope, cartService, productService, cart) {

    $scope.cart = cart;

    //function to add all totals on page load
    // $scope.getTotal = function (cart) {
    //   //clear out $scope.total
    //   $scope.total = 0;
    //   //run logic to tally all the prices
    // }

    $scope.total = 0;
    var getTotal = function(cart) {
      console.log(cart);
      cart.forEach(function(item) {
        var subtotal = item.price * item.qty;
        $scope.total += subtotal;
        //not included:  SHipping and Tax
      })
    }
    getTotal(cart);

    //when user updates Qty in cart, pass getTotal as call back.
    // cartService.upatetqyincart;
    // getTotal();
  });
