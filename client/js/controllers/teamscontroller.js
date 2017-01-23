myAppModule.controller('TeamsController', ['$scope', 'teamFactory', '$location', '$routeParams', function ($scope, teamFactory, $location, $routeParams){
    console.log('teamctrl');
  $scope.teams = [];

  teamFactory.index(function(teams){
    $scope.teams = teams;
  })

  $scope.addTeam = function(){
    teamFactory.addTeam($scope.newTeam)
    $scope.newTeam = {}; // Reset newTeam form
    console.log(newTeam, "New Team from TeamsController");
  }

  $scope.removeTeam = function($index){
    teamFactory.removeTeam($index);
  }

}])
