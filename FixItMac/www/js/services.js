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
  }, {
    id: 2,
    name: "Campus Center",
    location: "Campus Center"
  }, {
    id: 3,
    name: "Kirk1",
    location: "Kirk"
  }, {
    id: 4,
    name: "Kirk2",
    location: "Kirk"
  }, {
    id: 4,
    name: "Doty",
    location: "Doty"
  }];

  return {
    all: function() {
      return printers;
    }
  };

});
