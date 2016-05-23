angular.module('partySupply')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: 'app/components/home/homeView.html'
      })

      .state('product', {
        url: '/product/:id',
        controller: 'productCtrl',
        templateUrl: '/app/components/productPage/productView.html',
        resolve: {
            productData: function (productService, $stateParams) {
              return productService.getProductById($stateParams.id);
            }
        }
      })
      
      // .state('birthday', {
      //   url: '/birthday',
      //   templateUrl: '/app/compnents/category/birthdayView.html',
      //   controller: 'categoryCtrl'
      // });

      // .state('category', {
      //   url: '/category/:id',
      //   controller: 'productCtrl',
      //   resolve: {
      //       productData: function (productService, $stateParams) {
      //         return productService.getPageById($stateParams.id);
      //       }
      //   }
      // })

      .state('cart', {
        url: '/cart',
        controller: 'cartCtrl',
        templateUrl: 'app/components/cart/cartView.html',
        resolve: {
          cart: function (cartService) {
            return cartService.getCart();
          }
        }
      })

      .state('checkout', {
        url: '/checkout/',
        controller: 'checkoutCtrl',
        templateUrl: 'app/components/checkout/checkoutView.html'
      })
  })
