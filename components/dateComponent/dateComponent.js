angular.module('kisanApp').
            component('dateComponent',{
                templateUrl:'components/dateComponent/dateComponent.html',
                controller:function($scope,$rootScope){
                    $scope.show=true;
                    var taarikh = new Date(Date.now());
                   // var dateFormat=(taarikh.getMonth()<9?'0':'')+(taarikh.getMonth()+1)+"-"+(taarikh.getDate()<10?'0':'')+taarikh.getDate()+"-"+taarikh.getFullYear();

                    $scope.datecomp=(taarikh.getMonth()<9?'0':'')+(taarikh.getMonth()+1)+"-"+(taarikh.getDate()<10?'0':'')+taarikh.getDate()+"-"+taarikh.getFullYear();
                    //date picker
                    $('#datepicker').datepicker({autoclose:true});
                    
                    $scope.onchange=function()
                    { 
                                console.log("changed");
                                $scope.show=!$scope.show;
                                $scope.date=$scope.datecomp;//(new Date($scope.datecomp)).toLocaleDateString('en-IN');
                                $rootScope.watch=true;
                                $rootScope.onwatch();
                       
                    }

                    console.log("date component controller");
                    
                }
            });