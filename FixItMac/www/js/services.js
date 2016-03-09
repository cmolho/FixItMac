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
    locationCategory: 0,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 1,
    name: "Neil Hall",
    location: "Neil Hall 015",
    locationCategory: 3,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: true
  }, {
    id: 2,
    name: "Campus Center",
    location: "Campus Center 2nd Floor",
    locationCategory: 1,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: true
  },{
    id: 3,
    name: "Kirk 1",
    location: "Kirk Hall 012",
    locationCategory: 0,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 4,
    name: "Kirk 2",
    location: "Kirk Hall 012",
    locationCategory: 0,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: true,
    status: false
  }, {
    id: 5,
    name: "Doty",
    location: "Doty Hall 004",
    locationCategory: 0,
    inkStatus: true,
    paperStatus: true,
    jamStatus: true,
    otherStatus: false,
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
})


.factory('LocationCategories',function(){
  var locationCategories=[{
    id:0,
    name:"Dorms"
  },{
    id:1,
    name:"Public Spaces"
  },{
    id:2,
    name:"Olin Rice"
  },{
    id:3,
    name:"Neil Hall"
  }];

  return {
    all: function() {
      return locationCategories;
    },
    get: function(locationCategoryID) {
      for (var i = 0; i < locationCategories.length; i++) {
        if (locationCategories[i].id === parseInt(locationCategoryID)) {
          return locationCategories[i];
        }
      }
      return null;
    }
}
});
