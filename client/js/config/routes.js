var myAppModule = angular.module('myApp', ['ngRoute']);
myAppModule.config(function ($routeProvider) {
  $routeProvider
    .when('/players',{
        templateUrl: 'static/partials/players.html',
    })
    .when('/teams',{
        templateUrl: 'static/partials/teams.html'
    })
    .when('/associations',{
        templateUrl: 'static/partials/associations.html'
    })
    .otherwise({
      redirectTo: '/associations'
    });
});
