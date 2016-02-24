/**
 * Created by codymolho on 2/23/16.
 */

angular.module('starter.services', [])

.factory('Printers', function() {
  var printers = [{
    id: 0,
    name: "Dupre",
    location: "Dupre"
  },{
    id: 1,
    name: "Lib",
    location: "Lib"
  }];

  return {
    all: function() {
      return printers;
    }
  };

});
