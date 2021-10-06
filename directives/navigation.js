angular.module('kisanApp').directive('navBar',function () {

    return {
        restrict:'E',
        templateUrl:'templates/navigation.html',
        scope:{
            color:'@color'
        }
    }
    
})