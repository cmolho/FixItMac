/**
 * Created by codymolho on 2/23/16. And made spectacular by Rae, Minju, and Ana!
 */

angular.module('starter.services', [])

.factory('Printers', function() {
  var printers = [{
    id: 0,
    name: "Dupre",
    location: "Dupre Hall 253"
  }, {
    id: 2,
    name: "Campus Center",
    location: "Campus Center 2nd Floor"
  }, {
    id: 3,
    name: "Kirk 1",
    location: "Kirk Hall 012"
  }, {
    id: 4,
    name: "Kirk 2",
    location: "Kirk Hall 012"
  }, {
    id: 5,
    name: "Doty",
    location: "Doty Hall 004"
  }];

  return {
    all: function() {
      return printers;
    }
  };

});
