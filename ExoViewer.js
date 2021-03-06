"use strict";
var app = angular.module('Exoplanet', []);

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


function ExoCtrl($scope){
    // Initilize
    $scope.systems = [{'planet': 'mars'}];
    $scope.dataURI = 'data.json';
    data = 

    $scope.getData = function(url){
        $http.get(url).success($scope.handleData);
    }

    $scope.handleData = function(data){
        alert(data['test']);
    }
}



