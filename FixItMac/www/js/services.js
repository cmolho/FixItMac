/**
 * Created by codymolho on 2/23/16. And made spectacular by Rae, Minju, and Ana!
 */

/*
Returns an ngResource for each resource on our server (printers, locations,
statuses getting and setting, and email sending)
 */

angular.module('starter.services', ['ngResource'])

  .factory('Printers', function($resource){
    return $resource('https://fixitmac.herokuapp.com/printers/:id',
      {id:'@id'},
      {'get':    {method:'GET', isArray:false}}
    );
  })

  .factory('Status',function($resource){
    return $resource('https://fixitmac.herokuapp.com/statuses/:id',
      {id:'@id'}
    );
  })

  .factory('LocationCategories',function($resource){
    return $resource('https://fixitmac.herokuapp.com/locations');
  })

  .factory('SetIssue',function($resource){
    return $resource('https://fixitmac.herokuapp.com/printers/:id/setissue/:issue',
      {id:'@id', issue: '@issue'},
      {post:    {method:'POST'}}
    );
  })

  .factory('Email',function($resource){
    return $resource('https://fixitmac.herokuapp.com/email/:text',
      {text:'@text'},
      {send:    {method:'GET'}});
  })
;
