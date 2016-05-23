angular.module('partySupply')
    .service('cartService', function($http, $window, $state) {

        this.addToCart = function(product) {
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
                if (getProductInCartById(cartObj.products, product._id) === -1) {
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
                return;
            } else {
                var cartObj = $window.localStorage.getItem('cart');
                cartObj = JSON.parse(cartObj);
                return cartObj.products;
            }

        }

        this.updateQty = function(qty, id) {
            if (qty) {
                var cartObj = $window.localStorage.getItem('cart');
                cartObj = JSON.parse(cartObj);
                cartObj.products.forEach(function(product) {
                    if (product._id === id) {
                        product.qty = qty;
                        $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
                    }
                })
            }
        }

        this.removeItemFromCart = function(id) {
            //Get the cart from Local Storage, and make it a JSON object.
            var cartObj = $window.localStorage.getItem('cart');
            cartObj = JSON.parse(cartObj);
            //Use Helper function to cut the target ID out of array, then store
            //new array back into local storage
            cartObj.products.splice(getProductInCartById(cartObj.products, id), 1);
            $window.localStorage.setItem('cart', $window.JSON.stringify(cartObj));
        }

        this.getTotal = function(cart) {
            if (cart) {
                var total = 0;
                cart.forEach(function(item) {
                    var subtotal = item.price * item.qty;
                    total += subtotal;
                    //not included:  SHipping and Tax
                })
                return total;
            }
        }

        //Helper Function
        function getProductInCartById(cartArr, id) {
            for (var i = 0; i < cartArr.length; i++) {
                if (cartArr[i]._id === id) {
                    return i;
                }
            }
            return -1;
        }
        //End of Service
    });
