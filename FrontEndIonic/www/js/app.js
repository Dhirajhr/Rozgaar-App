// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('phnum',function(){
  var phn=0;
  function set(data){
      phn=data;
  }
  function get(){
      return phn;
  }
    return {
        set: set,
        get: get
    }
})

.factory('fieldService',function(){
  var field="";
  function set(data){
      field=data;
  }
  function get(){
      return field;
  }
    return {
        set: set,
        get: get
    }
})

.factory('prof',function(){
    var profile=[];
    function set(data){
        profile = data;
    }
    function get(){
        return profile;
    }
    return {
        set: set,
        get: get
    }
})


.factory('job',function(){
    var job=[];
    function set(data){
        job = data;
    }
    function get(){
        return job;
    }
    return {
        set: set,
        get: get
    }
})


.factory('workhire',function(){
  var wh=0;
  function set(data){
      wh=data;
  }
  function get(){
      return wh;
  }
    return {
        set: set,
        get: get
    }
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
          controller: 'SignupController'
      }
    }
  })
.state('app.category', {
      url: '/category',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html',
          controller: 'category'
        }
      }
    })
  .state('app.maps', {
      url: '/maps',
      views: {
        'menuContent': {
          templateUrl: 'templates/maps.html'
          //controller: 'category'
        }
      }
    })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
            controller: 'jobctrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.playlist', {
    url: '/playlist',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  
  .state('app.joblists', {
    url: '/joblists',
    views: {
      'menuContent': {
        templateUrl: 'templates/joblists.html',
        controller: 'JoblistsCtrl'
      }
    }
  })
  
  
  .state('app.joblist', {
    url: '/joblist',
    views: {
      'menuContent': {
        templateUrl: 'templates/joblist.html',
        controller: 'JoblistCtrl'
      }
    }
  })
 
  
    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'myctrl3'
      }
    }
  })
    .state('app.choose', {
    url: '/choose',
    views: {
      'menuContent': {
        templateUrl: 'templates/choose.html',
        controller: 'ExampleController'
        }
    }
  })


.state('app.otp', {
    url: '/otp',
    views: {
      'menuContent': {
        templateUrl: 'templates/otp.html',
        controller: 'myctrl4'
      }
    }
  })

      .state('app.playlists2', {
    url: '/playlists2',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists2.html',
          controller: 'jobsearch'
      }
    }
  })
  
  
  
  .state('app.rating', {
    url: '/rating',
    views: {
      'menuContent': {
        templateUrl: 'templates/rating.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
