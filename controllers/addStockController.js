export default function($scope,$rootScope){

    console.log('addStock controller');
    console.log($rootScope.loggedUser);
    $rootScope.mode=true;
    $rootScope.dataItems=[]
    var itemId;
    $scope.getProduce = function()
    { 
        var produce={};
        produce['id']=$rootScope.dataItems.length;
        produce['name']=$scope.produceName;
        produce['quantity']=$scope.quantity;
        produce['date']=(new Date($scope.date)).toLocaleDateString('en-IN');
        $rootScope.dataItems.push(produce);
        $scope.cancel();

       // $rootScope.putData(produce);
    }

    $rootScope.editItem = function(item){
        $scope.mode=false;
        //console.log($scope);
        itemId=item.produceInfo.id;
        $scope.produceName=item.produceInfo.name;
        $scope.quantity=item.produceInfo.quantity;
        $scope.date=(new Date(item.produceInfo.date)).toLocaleDateString('en-IN');
    }


    $scope.updateItem = function(){
            $rootScope.dataItems[itemId].name=$scope.produceName;
            $rootScope.dataItems[itemId].quantity=$scope.quantity;
            $rootScope.dataItems[itemId].date=(new Date($scope.date)).toLocaleDateString('en-IN');
            $scope.cancel();
            $scope.mode=true;

    }

    //clearing
    $scope.cancel=function() {
        $scope.produceName='';
        $scope.quantity='';
        $scope.date='';
    }
     
    

}


