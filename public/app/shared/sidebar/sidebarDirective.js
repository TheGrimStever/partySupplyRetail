angular.module('partySupply')
  .directive('sidebar', function () {
    return {
      restrict: 'AE',
      templateUrl: 'app/shared/sidebar/sidebar.html'
    }
  })
