export default function($rootScope,$scope){
    console.log("inventory controller");
    $scope.sortColumn='date';
    $scope.reverseSort=false;
    
    //sorting data
    $scope.sortData=function(column)
    {
        if($scope.sortColumn==column){
            $scope.reverseSort=!$scope.reverseSort;
        }else{
           
            $scope.reverseSort=false;
        }

        $scope.sortColumn=column;
    }

    //descending/ascending icon
    $scope.getClass=function(column)
    {
        if($scope.sortColumn==column){
            if($scope.reverseSort)
                    return 'fa-arrow-up'
                else
                    return 'fa-arrow-down'
        }
    }

    //storing data
    $scope.produces=$rootScope.dataItems;
   
    $rootScope.deleteItem=function(item)
    {
        console.log(item);
        //console.log($rootScope.dataItems[0].hashKey())
        //console.log(item.produceInfo.$$hashkey);
        //console.log($rootScope.dataItems)
     $rootScope.dataItems.splice(item.produceInfo.id,1);
    }

    
       
    
    
    


}