angular.module('partySupply')
  .service('mainService', function () {

    this.getTest = function () {
      return data;
    };

    this.getProduct = function () {
      return productData;
    }

    var data = "I'm a string, making sure this works!";

    var productData = [
      {
        title: 'batman',
        price: 25,
        description: 'Lorem Ipsum set dolor consecutor'
      },
      {
        title: 'spider-man',
        price: 52,
        description: 'Ut enim ad minim veniam, quis nostrud'
      },
      {
        title: 'Iron Man',
        price: 25,
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
      }
    ]

  });
