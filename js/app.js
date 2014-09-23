var app = angular.module('mytabs', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
      when('/team', {templateUrl: 'templates/team.htm',   controller: TeamCtrl }).
      when('/home', {templateUrl: 'templates/home.htm', controller: HomeCtrl}).
      when('/project', {templateUrl: 'templates/project.htm', controller: ProjectCtrl}).
      when('/parts', {templateUrl: 'templates/parts.htm', controller: PartsCtrl}).
      when('/modeling', {templateUrl: 'templates/modeling.htm', controller: ModelingCtrl}).
      when('/notebook', {templateUrl: 'templates/notebook.htm', controller: NotebookCtrl}).
      when('/safety', {templateUrl: 'templates/safety.htm', controller: SafetyCtrl}).
      when('/attributions', {templateUrl: 'templates/attributions.htm', controller: AttributionsCtrl}).
      otherwise({redirectTo: '/home'});
}]);

function TabsCtrl($scope, $location) {
  $scope.tabs = [
      { link : '#/team', label : 'Jobs' },
    ]; 
    
  $scope.selectedTab = $scope.tabs[0];    
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };
  
  $scope.tabClass = function(tab) {
    if ($scope.selectedTab == tab) {
      return "active";
    } else {
      return "";
    }
  };
}

function TeamCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function HomeCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function ProjectCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function PartsCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function ModelingCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function NotebookCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function SafetyCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}
function AttributionsCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
}