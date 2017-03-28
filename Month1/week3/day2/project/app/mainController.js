angular.module('quotesDisplay').controller("mainController", function ($scope, mainService) {

    //$scope.thisAppIsBroken = "This angular app is working";

    $scope.getQuotes = function () {
        $scope.quotes = mainService.getQuotes();
    }

    $scope.getQuotes();

    $scope.deleteMe = function (textToDelete) {
        dataService.removeData(textToDelete);
    }

    $scope.addQuote = function () {
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        }
        if (mainService.addData(newQuote)) {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    }
});