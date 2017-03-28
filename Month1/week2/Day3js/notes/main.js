angular.module('app',[]);

angular.module('app').controller("mainCtrl", function($scope){
    $scope.test = "Hello World";

    $scope.updateTest = function(){
        $scope.test = $scope.test + "1";
    }

    $scope.two = 'start value';

    $scope.toppings = [
        'sauce',
        'cheese',
        'more cheese',
        'pineapple',
        'pepperoni',
        'anchovies'
    ];

    $scope.addTopping = function(){
        $scope.topping.push($scope.newTopping);
        $scope.newTopping = "";

    }

})