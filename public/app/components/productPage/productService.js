angular.module('partySupply')
    .service('productService', function($http) {

        this.getTest = function() {
            return data;
        };

        this.getProducts = function() {
            return $http({
                method: 'GET',
                url: '/api/products'
            }).then(function(response) {
                return response.data;
            })
        };

        this.getProductById = function(id) {
            return $http({
                method: 'GET',
                url: '/api/products/' + id
            }).then(function(response) {
                return response.data;
            })
        }
/////category products
        this.getBirthdayProducts = function() {
          return $http({
              method: 'GET',
              url: '/api/products/birthday'
          }).then(function(response) {
              return response.data;
          })
        }


//End of Service
    });
