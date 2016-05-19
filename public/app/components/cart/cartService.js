angular.module('partySupply')
  .service('cartService', function ($http) {

    this.addToCart = function (id) {
      console.log('added ' + id + 'to cart');
      cart.push(id);
      console.log(cart);
    }

    this.getCart = function () {
      console.log('the cart has been fetched');
      return cart;
    }

    var cart = [];

  });
