// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl',
        cache: false
      })

      .state('profile', {
        url: '/profile/:id',
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl',
        cache: false
      })

      .state('rewardDog', {
        url:'/rewardDog/',
        templateUrl: 'templates/rewardDog.html',
        controller: 'RewardCtrl'
      })

      .state('rewardCat', {
        url:'/rewardCat/',
        templateUrl: 'templates/rewardCat.html',
        controller: 'RewardCtrl'
      })

      .state('rewardSquirrel', {
        url:'/rewardSquirrel/',
        templateUrl: 'templates/rewardSquirrel.html',
        controller: 'RewardCtrl'
      })

      .state('rewardTonerJoke', {
        url:'/rewardTonerJoke/',
        templateUrl: 'templates/rewardTonerJoke.html',
        controller: 'RewardCtrl'
      })

      .state('rewardCopierJoke', {
        url:'/rewardCopierJoke/',
        templateUrl: 'templates/rewardCopierJoke.html',
        controller: 'RewardCtrl'
      })

      .state('rewardPrinterJoke', {
        url:'/rewardPrinterJoke/',
        templateUrl: 'templates/rewardPrinterJoke.html',
        controller: 'RewardCtrl'
      })

      .state('info', {
        url: '/info/',
        templateUrl: 'templates/info.html',
        controller: 'InfoCtrl'
      });

    $urlRouterProvider.otherwise('/main');
  });
