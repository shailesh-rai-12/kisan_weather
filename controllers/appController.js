angular.module('kisanApp').controller('appController',function($state,$log,$rootScope){
                $log.info('app controller');
               if(sessionStorage.getItem("status")!="true")
               {
                    $state.go('login');
               }
                

})