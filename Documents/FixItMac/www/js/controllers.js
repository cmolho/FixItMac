/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $state, Printers) {
  $scope.printers = Printers.all()

})
