export default function($scope,$log,$rootScope,$state){
    $log.info('Index Controller');
    if(sessionStorage.getItem("status")!="true")
        {
            $state.go('login');
        }else{
            $state.go('produce');
        }
}