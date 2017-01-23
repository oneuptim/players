myAppModule.controller('AssociationsController', ['$scope', 'teamFactory', 'playerFactory', '$location', '$routeParams', function ($scope, teamFactory, playerFactory, $location, $routeParams){
  console.log('asscctrl');
  $scope.players = [];
  console.log($scope.players, "This is in AssociationsController, (Players)");
  $scope.teams = [];
  console.log($scope.teams, "This is in AssociationsController, (Teams)");

  playerFactory.index(function(players){
    $scope.players = players; // Getting players
  })

  teamFactory.index(function(teams){
    $scope.teams = teams; // Getting teams
  })

  $scope.addPlayerToTeam = function(){
    playerFactory.addPlayerToTeam($scope.newAssoc);
    // newAssoc is a variable name we give to the data from the select form!
    console.log($scope.newAssoc, "New Association in add player to team method");
  }

  $scope.removePlayerFromTeam = function($index){
    playerFactory.removePlayerFromTeam($index);
  }

}]);
