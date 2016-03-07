/**
 * Created by codymolho on 2/23/16. And made spectacular by Rae, Minju, and Ana!
 */

/*
Printers four properties: id, name, location, status (true if working/false if not working)
 */
angular.module('starter.services', [])

.factory('Printers', function() {
  var printers = [{
    id: 0,
    name: "Dupre",
    location: "Dupre Hall 253",
    locationCategory: "Dorms",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 1,
    name: "Neil Hall",
    location: "Neil Hall 015",
    locationCategory: "Neil Hall",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: true
  }, {
    id: 2,
    name: "Campus Center",
    location: "Campus Center 2nd Floor",
    locationCategory: "Public Spaces",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: true
  },{
    id: 3,
    name: "Kirk 1",
    location: "Kirk Hall 012",
    locationCategory: "Dorms",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 4,
    name: "Kirk 2",
    location: "Kirk Hall 012",
    locationCategory: "Dorms",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 5,
    name: "Doty",
    location: "Doty Hall 004",
    locationCategory: "Dorms",
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: true
  }];

  return {
    all: function() {
      return printers;
    },
    get: function(printerID) {
      for (var i = 0; i < printers.length; i++) {
        if (printers[i].id === parseInt(printerID)) {
          return printers[i];
        }
      }
      return null;
    }
  };

});
