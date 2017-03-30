'use strict';

angular.module('appleClone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './views/home.html'
  });
});