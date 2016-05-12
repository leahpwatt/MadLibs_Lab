var app = angular.module("madLib");

app.controller('wordsController', function($scope, madLibService, $location) {
	var word = "";
	var word2 = "";
	var word3 = "";
	var word4 = "";
	var word5 = "";
	var word6 = "";
	var word7 = "";
	$scope.addWord = function addWord(wordModel, wordModel2, wordModel3, wordModel4, wordModel5, wordModel6, wordModel7){
		word += wordModel;
		word2 += wordModel2;
		word3 += wordModel3;
		word4 += wordModel4;
		word5 += wordModel5;
		word6 += wordModel6;
		word7 += wordModel7;
		madLibService.saveData(word, word2, word3, word4, word5, word6, word7);
		$location.path("/results");
	};
});