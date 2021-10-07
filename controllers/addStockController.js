angular.module('kisanApp').controller('addStockController',function($scope,$rootScope){

    console.log('addStock controller');
    console.log($rootScope.loggedUser); 

    //$scope.datecomp=$rootScope.datecomp;
    $rootScope.visible=false;

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

    }

    $rootScope.editItem = function(item){
        $scope.mode=false;
        itemId=item.produceInfo.id;
        $scope.produceName=item.produceInfo.name;
        $scope.quantity=item.produceInfo.quantity;
        let date=item.produceInfo.date.split("/");
        $scope.date=new Date(date[1]+'/'+date[0]+'/'+date[2]);
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
     
    

})


