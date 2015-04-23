darkMenace.controller('PlayersCtrl', function PlayersCtrl($scope, playersFactory) {
  $scope.players = PlayersFactory.players;

  $scope.addPlayer = function() {
    var name = $scope.playerName;
    PlayersFactory.addPlayer(name);
    $scope.playerName = null;
  };

  $scope.addHealth = function(item) {
    PlayersFactory.addHealth(item);
  };

  $scope.deleteHealth = function(item) {
    PlayersFactory.deleteHealth(item);
  };

});
