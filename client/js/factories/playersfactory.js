var myAppModule = angular.module('myApp', ['ngRoute']);
myAppModule.factory('playerFactory', function(){
  console.log('PlayerFactory started');
  var players = [
    {name: 'Ken', team: ''},
    {name: 'Jenny', team: ''},
    {name: 'Farrah', team: ''},
    {name: 'Lena', team: ''},
    {name: 'Tim', team: ''}
  ];

  var factory = {};

  factory.index = function(callback){
    console.log(callback, "Index Callback! -------factory");
    callback(players);
  }

  factory.addPlayer = function(player){
    player.team = "";
    // console.log(player, "Player in add player! -------factory");
    players.push(player);
  }

  factory.removePlayer = function($index){
    console.log($index, "Removed player! -------factory");
    players.splice($index, 1);
  }

  factory.addPlayerToTeam = function(data){
    console.log(data, "<===== This is DATA from add Player to Team -------factory");
    console.log(data.team, "<===== This is DATA.TEAM from add Player to Team -------factory");
    players[data.playerIdx].team = data.team;
    console.log(players[data.playerIdx].team, "<===== This is players[data.playerIdx].team");
    console.log(data.team, "<===== This is the MYSTERIOUS DATA.TEAM STUFF!!!!!");
    // left side is a setter
    // data is being passed from the association controller (from newAssoc which is being passed from the select form in the frontend)
    // Setting team of a specific p
  }

  factory.removePlayerFromTeam = function($index){
    players[$index].team = "";
    console.log($index, "This is add Player to Team -------factory");
  }

  return factory;

});
