angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/')

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: "homeCtrl",

        })

        .state('roster', {
            url: "/roster",
            templateUrl: 'roster/roster.html',
            controller: 'rosterCtrl',
            
        })

        .state('player', {
            url: "/player/:id",
            templateUrl: 'player/player.html',
            controller: 'playerCtrl',
        })

});