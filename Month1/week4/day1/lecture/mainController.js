angular.module('app').controller('mainCtrl', function($scope, playerSvc){
    $scope.players = playerSvc.getPlayers;
})