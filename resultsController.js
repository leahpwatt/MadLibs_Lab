var app = angular.module("madLib");

app.controller('resultsController', function($scope, madLibService) {
  var dataOnPage = madLibService.getData();
  $scope.string = dataOnPage.string;
  $scope.string2 = dataOnPage.string2;
  $scope.string3 = dataOnPage.string3;
  $scope.string4 = dataOnPage.string4;
  $scope.string5 = dataOnPage.string5;
  $scope.string6 = dataOnPage.string6;
  $scope.string7 = dataOnPage.string7;
});



