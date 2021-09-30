export default function($state,$log,$rootScope){
                $log.info('app controller');
               if(sessionStorage.getItem("status")!="true")
               {
                    $state.go('login');
               }
                

}