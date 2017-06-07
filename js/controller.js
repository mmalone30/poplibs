var app = angular.module('app', ['ngAnimate']);

app.controller('appCtrl', function ($scope, $timeout) {



  var libs = [1, 2, 3, 4, 5, 6];

  var lib = libs[Math.floor(Math.random()*libs.length)];

  $scope.poplib = 0;

  $scope.randomLib = function(){
    // var lib = libs[Math.floor(Math.random()*libs.length)];
    // console.log(lib);
    // $scope.poplib = lib;
    //$scope.show = !$scope.show;
    //debugger;
    lib = lib + 1;
    lib = lib % libs.length;
    $scope.poplib = libs[lib];
    console.log(libs[lib]);
  }

  $scope.newLib = function(){
    $scope.doAnother = !$scope.doAnother;
    $scope.show = !$scope.show;
    document.body.scrollTop = 0;

    $timeout(function(){

      lib = lib + 1;
      lib = lib % libs.length;
      $scope.poplib = libs[lib];
      $scope.name1 = '';
      $scope.number = '';
      $scope.name2 = '';
      $scope.relative = '';
      $scope.nickname = '';
      $scope.death = '';
      $scope.noun = '';
      $scope.codeName = '';
      $scope.codeName2 = '';
      $scope.thingToSteal = '';
      $scope.company = '';
      $scope.town = '';
      $scope.adjective = '';
      $scope.adjective2 = '';
      $scope.mission = '';
      $scope.place = '';
      $scope.job = '';
      $scope.people = '';
      $scope.animal = '';
      $scope.monster = '';
      $scope.adjective3 = '';
    },650);




    //debugger;
  }

  $scope.redoLib = function(){
    $scope.show = !$scope.show;
    $scope.name1 = '';
    $scope.number = '';
    $scope.name2 = '';
    $scope.relative = '';
    $scope.nickname = '';
    $scope.death = '';
    $scope.noun = '';
    $scope.codeName = '';
    $scope.codeName2 = '';
    $scope.thingToSteal = '';
    $scope.company = '';
    $scope.town = '';
    $scope.adjective = '';
    $scope.adjective2 = '';
    $scope.mission = '';
    $scope.place = '';
    $scope.job = '';
    $scope.people = '';
    $scope.animal = '';
    $scope.monster = '';
    $scope.adjective3 = '';
    document.body.scrollTop = 0;

    //debugger;
  }

  $scope.read = function(story) {
    story.show = !story.show;
  }

});
