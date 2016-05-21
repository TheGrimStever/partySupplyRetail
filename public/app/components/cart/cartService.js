angular.module('partySupply')
    .service('cartService', function($http, $window, $state) {

        this.addToCart = function(product) {
            //TODO: check for dupes
            var cartObj;
            if (!$window.localStorage.getItem('cart')) { //check if cart exists already
                //cart doesn't exist, add the first item
                cartObj = {
                    products: [product]
                };
                $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
            } else {
                //cart exists, check for dupes and if unique product, add
                cartObj = $window.localStorage.getItem('cart');
                cartObj = JSON.parse(cartObj);
                //use the helper function to find dupes
                if (!getProductInCartById(cartObj.products, product.id)) {
                  //push item to product array if item not found
                  cartObj['products'].push(product);
                  $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
                } else {
                  alert('You already have this item in your shopping cart');
                }

            }
        }


        this.getCart = function() {
            if (!$window.localStorage.getItem('cart')) {
              return ;
            } else {
              var cartObj = $window.localStorage.getItem('cart');
              cartObj = JSON.parse(cartObj);
              return cartObj.products;
            }

        }

        this.updateQty = function (qty, id) {
          var cartObj = $window.localStorage.getItem('cart');
          cartObj = JSON.parse(cartObj);
          cartObj.products.forEach(function (product) {
            if (product.id === id) {
              product.qty = qty;
              $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
            }
          })
        }
        //TODO: finish this
        this.removeItemFromCart = function (id) {
          var cartObj = $window.localStorage.getItem('cart');
          //can i use my helper function here?
          cartObj.products.forEach(function (product) {
            if (product.id === id) {
              // product.qty = 0;

            }
          })
        }

        //Helper Function
        function getProductInCartById(cartArr, id) {
            for (var i = 0; i < cartArr.length; i++) {
              if (cartArr[i].id === id) {
                return cartArr[i];
              }
            }
            return false;
        }

        var cart = [];

    });
