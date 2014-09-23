var app = angular.module('mytabs', ['ngRoute']);
var viewHeight;

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
      when('/team', {templateUrl: 'templates/team.htm',   controller: TeamCtrl }).
      when('/home', {templateUrl: 'templates/home.htm', controller: HomeCtrl}).
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
	viewHeight = $('#view').height();
	checkScroll();
}
function HomeCtrl($scope) {
	viewHeight = $('#view').height();
	checkScroll();
}