angular.module('partySupply')
    .service('cartService', function($http, $window) {

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
                console.log(cartObj.products);
                //use the helper function to find dupes
                if (!getProductInCartById(cartObj.products, product.id)) {
                  //push item to product array if item not found
                  cartObj['products'].push(product);
                  $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
                } else {
                  alert('You already have this item in your shopping cart');
                }

            }

            console.log('in the Cart Service, making carts');
        }


        this.getCart = function() {
            if (!$window.localStorage.getItem('cart')) {
              alert("nothing in cart");
            } else {
              var cartObj = $window.localStorage.getItem('cart');
              cartObj = JSON.parse(cartObj);
              console.log(cartObj.products);
              return cartObj.products;
            }

        }
        //Helper Function
        function getProductInCartById(cartArr, id) {
          console.log(cartArr);
          console.log(id);
            for (var i = 0; i < cartArr.length; i++) {
              if (cartArr[i].id === id) {
                return cartArr[i];
              }
            }
            return false;
        }

        var cart = [];

    });
