"use strict";
var app = angular.module('ExoPlanet', []);

function exoCtrl($scope, $http){
    // Initilize
    $scope.systems = [{'planet': 'mars'}];
    //alert('HEY I GOT HERE, Next im going to try reading from the data file!');
    $scope.url = 'data.json';

    $scope.getData = function(url){
        $http.get(url).success($scope.handleData);
    };

    $scope.handleData = function(data){
        console.log(data['test']);
        return data;
    };


    $scope.planetData = $scope.getData($scope.url);
    console.log(planetData);
    alert($scope.planetData['test']);
};



