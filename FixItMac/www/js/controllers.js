/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state, $stateParams, Printers) {
    $scope.printers = Printers.all()
  })

  .controller('ProfileCtrl', function($scope, $stateParams, Printers, $ionicPopup, $state) {
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
            //href="#/reward/{{printer.id}}"
            //$state.go('#/reward/{{printer.id}}');
            $state.go('reward.html');

          }
          // else {
          //  //href="#/profile/{{printer.id}}"
          //  $state.go('#/profile/{{printer.id}}');
          //}
        });

      };
  })
  .controller('RewardCtrl', function($scope, $state, $stateParams, Printers) {
    $scope.printer = Printers.get($stateParams.id)
  });

