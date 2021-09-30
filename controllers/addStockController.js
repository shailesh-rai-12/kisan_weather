export default function($scope,$rootScope){

    console.log('addStock controller');
    console.log($rootScope.loggedUser);
    $rootScope.dataItems=[]
    $rootScope.getProduce = function()
    { 
        var produce={};
        produce['name']=$scope.produceName;
        produce['quantity']=$scope.quantity;
        produce['datetime']=(new Date($scope.datetime)).toLocaleDateString('en-IN');
        $rootScope.dataItems.push(produce);
       // $rootScope.putData(produce);
    }
    

}