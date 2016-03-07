/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state, $stateParams, Printers, LocationCategories) {
    $scope.printers = Printers.all()
    $scope.locationCategories=LocationCategories.all()
  })

  .controller('ProfileCtrl', function($scope, $stateParams, Printers, $ionicPopup) {
    $scope.printer = Printers.get($stateParams.id),
      $scope.showConfirm = function() {

        var confirmPopup = $ionicPopup.confirm({
          title: 'Are you sure?',
          template: 'An automatic email will be generated to ITS if you report.',
          cancelText:'Cancel',
          okText: 'Yes, send the report!'
        });

        confirmPopup.then(function(result) {
          if(result) {
            document.location.href = "#/reward/{{printer.id}}";
          }
        });
      };
  })

  .controller('RewardCtrl', function($scope, $state, $stateParams, Printers) {
    $scope.printer = Printers.get($stateParams.id);
  });

