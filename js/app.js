var app = angular.module('mytabs', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  	  when('/home', {templateUrl: 'templates/home.htm', controller: HomeCtrl}).
      when('/team', {templateUrl: 'templates/team.htm',   controller: TeamCtrl }).
      when('/project', {templateUrl: 'templates/project.htm', controller: ProjectCtrl}).
      when('/parts', {templateUrl: 'templates/parts.htm', controller: PartsCtrl}).
      when('/modeling', {templateUrl: 'templates/modeling.htm', controller: ModelingCtrl}).
      when('/notebook', {templateUrl: 'templates/notebook.htm', controller: NotebookCtrl}).
      when('/safety', {templateUrl: 'templates/safety.htm', controller: SafetyCtrl}).
      when('/attributions', {templateUrl: 'templates/attributions.htm', controller: AttributionsCtrl}).
      otherwise({redirectTo: '/home'});
}]);

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
      	console.log('stuff?');
        $("body").animate({scrollTop: $elm.offset().top + 5}, "slow");
        console.log($(window).scrollTop());
        checkScroll();
        //pushScrollToTop();
        //$('window').scrollTop(topDist.top);
      });
    }
  };
});

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

function HomeCtrl($scope, $timeout) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#home').addClass('active');
	//$(window).scrollTop(topDist.top);
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
		//break;
	}
	//var maxScroll = $(window).height() - $navHeight;
	$('#main-inner').css({'top':'0px'});
	
	/*$scope.$on('$routeChangeSuccess', function() {
	    $timeout(function() { // wait for DOM, then restore scroll position
	        console.log("!!! changed tab");
	        $(window).scrollTop(topDist.top);
	        console.log($(window).scrollTop());
	        //$(window).scrollTop($scope.scrollPos[$location.path()] ? $scope.scrollPos[$location.path()] : 0);
	        //$scope.okSaveScroll = true;
	    }, 0);
	});*/
}
function TeamCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#team').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function ProjectCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#project').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function PartsCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#parts').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function ModelingCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#modeling').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function NotebookCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#notebook').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function SafetyCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#safety').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}
function AttributionsCtrl($scope) {
	viewHeight = $('#view').height() + $('#footer').height();
	checkScroll();
	clearActive();
	$('#attributions').addClass('active');
	if (scroll > topDist.top){
		//$location.hash('navbar');
		//$anchorScroll();
	}
}

function clearActive(){
	$('nav ul li').each(function(){
		$(this).removeClass('active');
	});
}
