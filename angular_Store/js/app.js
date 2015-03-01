(function () {
  "use strict";


  //defining module with the name storeApp, with the dependency ngRoute
  angular.module('storeApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {   //configuring routing
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'

      })
      .when('/admin/listView', {              // Different route needed for admin??
        templateUrl: 'views/admin/listView.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin/addproduct', {
      templateUrl: 'views/admin/addNewItem.html',
      controller: 'MainController as mainCtrl'
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html'
      })
      
      //add user views




      .otherwise({
        redirectTo:'/not-found'
      });


  });

}) ();
