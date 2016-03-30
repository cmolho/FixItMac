/**
 * Created by codymolho on 2/23/16. And made spectacular by Rae, Minju, and Ana!
 */

/*
 Printers four properties: id, name, location, status (true if working/false if not working)
 */

angular.module('starter.services', ['ngResource'])

  //.factory('Printers', function() {
  //  var printers = [{
  //    printerID: 0,
  //    printerName: "Dupre",
  //    printerLocation: "Dupre Hall 253",
  //    locationCategoryID: 0,
  //    inkStatus: true,
  //    paperStatus: false,
  //    jamStatus: true,
  //    otherStatus: false,
  //    printerStatus: 0
  //  }, {
  //    printerID: 1,
  //    printerName: "Luke",
  //    printerLocation: "Neil Hall 015",
  //    locationCategoryID: 3,
  //    inkStatus: true,
  //    paperStatus: true,
  //    jamStatus: true,
  //    otherStatus: true,
  //    printerStatus: 1
  //  }, {
  //    printerID: 2,
  //    printerName: "SORC",
  //    printerLocation: "Campus Center 2nd Floor",
  //    locationCategoryID: 1,
  //    inkStatus: true,
  //    paperStatus: true,
  //    jamStatus: true,
  //    otherStatus: true,
  //    printerStatus: 1
  //  },{
  //    printerID: 3,
  //    printerName: "Kirk 1",
  //    printerLocation: "Kirk Hall 012",
  //    locationCategoryID: 0,
  //    inkStatus: true,
  //    paperStatus: true,
  //    jamStatus: true,
  //    otherStatus: true,
  //    printerStatus: 1
  //  }, {
  //    printerID: 4,
  //    printerName: "Kirk 2",
  //    printerLocation: "Kirk Hall 012",
  //    locationCategoryID: 0,
  //    inkStatus: true,
  //    paperStatus: false,
  //    jamStatus: true,
  //    otherStatus: true,
  //    printerStatus: 0
  //  //  }, {
  //  //    printerID: 5,
  //  //    printerName: "Doty",
  //  //    printerLocation: "Doty Hall 004",
  //  //    locationCategoryID: 0,
  //  //    inkStatus: true,
  //  //    paperStatus: true,
  //  //    jamStatus: true,
  //  //    otherStatus: false,
  //  //    printerStatus: 0
  //  //}];
  //
  //  return {
  //    all: function() {
  //      return printers;
  //    },
  //    get: function(id) {
  //      for (var i = 0; i < printers.length; i++) {
  //        if (printers[i].printerID === parseInt(id)) {
  //          return printers[i];
  //        }
  //      }
  //      return null;
  //    }
  //  };
  //})
  //
  //.factory('LocationCategories',function(){
  //  var locationCategories=[{
  //    locationCategoryID:0,
  //    locationCategoryName:"Dorms"
  //  },{
  //    locationCategoryID:1,
  //    locationCategoryName:"Public Spaces"
  //  },{
  //    locationCategoryID:2,
  //    locationCategoryName:"Olin Rice"
  //  },{
  //    locationCategoryID:3,
  //    locationCategoryName:"Neil Hall"
  //  }];
  //
  //  return {
  //    all: function() {
  //      return locationCategories;
  //    },
  //    get: function(locationCategoryID) {
  //      for (var i = 0; i < locationCategories.length; i++) {
  //        if (locationCategories[i].id === parseInt(locationCategoryID)) {
  //          return locationCategories[i];
  //        }
  //      }
  //      return null;
  //    }
  //}
  //})



  //// TODO Server Code

  .factory('Printers', function($resource){
    return $resource('http://localhost:8080/api/printers/:id',
      {id:'@id'},
      {'get':    {method:'GET', isArray:false}}
    );
  })


  .factory('LocationCategories',function($resource){
    return $resource('http://localhost:8080/api/locations');
  })

  .factory('Email',function($resource){
    return $resource('http://localhost:8080/api/email');
  })
;
