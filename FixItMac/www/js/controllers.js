/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $state, $stateParams, Printers) {
  $scope.printers = Printers.all()
})

.controller('ProfileCtrl', function($scope, $stateParams, Printers, $ionicPopup) {
  $scope.printer = Printers.get($stateParams.id),
    $scope.showConfirm = function() {

    var confirmPopup = $ionicPopup.confirm({
      title: 'Are you sure?',
      template: 'An automatic email will be generated to ITS if you report.'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('Sure!');
      } else {
        console.log('Not sure!');
      }
    });

  };
});
