(function(){
  'use strict'
  angular.module('app').controller('mainCtrl', function($scope, mainSrv){
    var pageNum = 0;
    $scope.nextPage = nextPage;
    $scope.prevPage = prevPage;
    init();

    function init(){
      getQuestions(pageNum)
    }

    function getQuestions(pageNum){
      mainSrv.getQuestions(pageNum).then(function(response){
        console.log(response.data)
        $scope.questions = response.data
      })
    };

    function nextPage(){
      pageNum++
      console.log(pageNum)
      getQuestions(pageNum)
    };

    function prevPage(){
      if(pageNum > 0) {
        console.log(pageNum)
        pageNum-- 
        getQuestions(pageNum)
      }
    }

    $scope.selectAnswer = function(key, answer){
        console.log(answer);
        console.log(key);

        if(key == answer){
            console.log("correct!")
        } else{
            console.log("incorrect!")
        }
    }

    $scope.chooseColor= function(key, answer){
        if(key == answer){
            return {background: 'green'};
        } else {
            return {background: 'red'};
        }
    }



  })
})(); //IIFE 