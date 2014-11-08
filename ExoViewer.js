"use strict";
var app = angular.module('ExoViewer', []);

var removeExtraSpaces = function(str){
	// Turns multiple spaces to one space using regex. 'hi  there   !' = 'hi there !'
	return str.replace(/ +/g, " ");
};

var removeCommas = function(str) {
	// Removes all commas from string.
	return str.replace(',','');
};

var isNumber = function(input){
	return !isNaN(Number(input));
};

var capitalizeFirstLetter = function(string){
	if (string === '') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
};

var rounded = function(num, numDecimalPlaces){
	if(typeof numDecimalPlaces === "undefined") numDecimalPlaces = 2;
	var temp = Math.pow(10, numDecimalPlaces);
	return Math.round(num * temp) / temp;
};


function mainController($scope, $http){
	// Initilize
	$scope.url = 'data.json';
	$scope.query = '';

	$scope.getData = function(url){
		$http.get(url).success($scope.handleData);
	};

	$scope.queryChanged	= function() {
		var parsed = parsedQuery($scope.query);
		var messageObj;

		if (parsed.success) {
			messageObj = makeMessage(parsed.baseStr, parsed.targetStr, parsed.amt);
		} else {
			messageObj = parsed;
		}

		$scope.queryStatus = messageObj;

	};

	$scope.$watch('query', $scope.queryChanged);
	

}



