'use strict';
var foogleApp = angular.module('foogleApp', ['ui.router','uiRouterStyles']);

foogleApp.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider.
			state('home',{
				url : '/home',
				templateUrl : '/partials/home.html',
				data: {
         		 	css: '/assets/stylesheets/home.css'
        		}
			});
	}
]);