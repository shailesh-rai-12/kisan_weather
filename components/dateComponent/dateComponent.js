angular.module('kisanApp').
            component('dateComponent',{
                templateUrl:'components/dateComponent/dateComponent.html',
                controller:function($scope,$rootScope){
                    $scope.show=true;
                    $scope.date='';
                    //date picker
                    $('#datepicker').datepicker({autoclose:true});
                    
                    $scope.onchange=function()
                    {
                        console.log("YOLO");
                        $scope.show=!$scope.show;
                        $scope.date="Date : "+(new Date($scope.datecomp)).toLocaleDateString('en-IN');
                        $rootScope.watch=true;
                        $rootScope.onwatch();
                    }
                    console.log("date component controller");
                    
                }
            });