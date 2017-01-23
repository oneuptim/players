myAppModule.controller('PlayersController', ['$scope', 'playerFactory', '$location', '$routeParams', function ($scope, playerFactory, $location, $routeParams) {
  console.log('playerctrl');
  $scope.players = [];

  playerFactory.index(function(players){
    $scope.players = players;
  })

  $scope.addPlayer = function(){
    playerFactory.addPlayer ($scope.newPlayer);
    $scope.newPlayer = {}; // Reset newPlayer form
    $location.url('/players')
  }

  $scope.removePlayer = function($index){
    playerFactory.removePlayer($index);
  }

}])
