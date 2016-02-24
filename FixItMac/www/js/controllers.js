/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $state, $stateParams, Printers) {
  $scope.printers = Printers.all()
})

.controller('ProfileCtrl', function($scope, $stateParams, Printers) {
  $scope.printer = Printers.get($stateParams.id)
});
