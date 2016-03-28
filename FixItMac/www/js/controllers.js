/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])


  .controller('MainCtrl', function($scope, $state, $stateParams, Printers, LocationCategories) {
    //TODO SERVER-BASED CODE
    Printers.query().$promise.then(function(data) {
        console.log($scope);
        $scope.printers = data;
    });
    console.log($scope.printers);

    LocationCategories.query().$promise.then(function(data) {
      console.log($scope);
      $scope.locationCategories = data;
    });
    console.log($scope.locationCategories);

    //OLD CODE
    //$scope.printers = Printers.all(); //Old test data
    //$scope.locationCategories = LocationCategories.all();
  })

  .controller('ProfileCtrl', function($scope, $stateParams, Printers, $ionicPopup) {
    //TODO SERVER-BASED CODE
    Printers.get({id:$stateParams.id}).$promise.then(function(data) {
      console.log($scope);
      $scope.printer = data;
    });
    console.log($scope.printer);

    //OLD CODE
    //$scope.printer = Printers.get($stateParams.id);

    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Are you sure?',
        template: 'An automatic email will be generated to ITS if you report.',
        cancelText:'Cancel',
        okText: 'Yes'
      });

      confirmPopup.then(function(result) {
        if(result) {
          document.location.href = "#/reward/";
        }
      });
      };
  })

  .controller('RewardCtrl', function($scope, $state, $stateParams) {});
