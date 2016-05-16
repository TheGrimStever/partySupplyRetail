angular.module('partySupply')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/homeView.html'
      })

      .state('product', {
        url: '/product',
        templateUrl: '/app/components/product/productView.html'
      })

      .state('cart', {
        url: '/cart',
        templateUrl: 'app/components/cart/cartView.html'
      })

      .state('checkout', {
        url: '/checkout',
        templateUrl: 'app/components/checkout/checkoutView.html'
      })
  })
