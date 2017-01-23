var myAppModule = angular.module('myApp', ['ngRoute']);
myAppModule.factory('teamFactory', function(){
  console.log("Team Factory Started");
  var teams = [
    {name: 'Team A'},
    {name: 'Team B'},
    {name: 'Team C'},
    {name: 'Team D'},
    {name: 'Team E'}
  ];

  var factory = {};

  factory.index = function(callback){
    callback(teams);
  }

  factory.addTeam = function(team){
    teams.push(team);
  }

  factory.removeTeam = function($index){
    teams.splice(teams.indexOf($index), 1);
  }

  return factory;

});
