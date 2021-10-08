angular.module('kisanApp')
        .component('timeComponent',{
            templateUrl:'components/timeComponent/timeComponent.html',
            controller:function($scope,$rootScope){
                
                console.log("time controller");
                var samay=new Date(Date.now());
                $scope.timecomp=(samay.getHours()<10?'0':'')+samay.getHours()+":"+(samay.getMinutes()<10?'0':'')+samay.getMinutes();
                console.log($scope.time);
                $('#clockpicker').clockpicker({
                    autoclose: true,
                    placement: 'top',
                    align: 'right'
                });
                $scope.show=false;
               
        
            $scope.onchange=function(){
                $scope.show=false;
                $scope.time=$scope.timecomp;
            }

            $rootScope.onwatch = function(){
                console.log("wtaching");
                $scope.show=$rootScope.watch;
                Promise.resolve("success").then(function(data){
                    console.log(data);
                    $("#clockpicker").click();
                    $("#clockpicker").focus();
                });
                
            }



            }

        })