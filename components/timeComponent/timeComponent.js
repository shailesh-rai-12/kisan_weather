angular.module('kisanApp')
        .component('timeComponent',{
            templateUrl:'components/timeComponent/timeComponent.html',
            controller:function($scope,$rootScope,$timeout){
                
                console.log("time controller");
                $('#clockpicker').clockpicker({
                    autoclose: true,
                    placement: 'top',
                    align: 'right'
                });
                $scope.show=false;
                $scope.time='';
        
            $scope.onchange=function(){
                $scope.show=!$scope.show;
            }

            $rootScope.onwatch = function(){
                console.log("wtf");
                $scope.show=$rootScope.watch;
                Promise.resolve("success").then(function(data){
                    console.log("promised");
                    $("#clockpicker").click();
                    $("#clockpicker").focus();
                });
                
            }



            }

        })