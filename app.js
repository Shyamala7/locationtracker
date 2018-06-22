var app = angular.module('locator-tracker', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/location-tracker');
    
    $stateProvider
        
        .state('location-tracker', {
            url: '/location-tracker',
            templateUrl: 'location-tracker.html'
        })

        });