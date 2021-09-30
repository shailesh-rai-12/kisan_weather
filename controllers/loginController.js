export default function($scope,$log,LoginService,$rootScope,$state){
    $scope.head="Login";
    $log.info('login Controller');
    $scope.tryLogin=function(user)
    {
        LoginService.login(user)
            .then(function(res){
                console.log(res);
    
                if(res.data.flag==1)
                {
                    console.log("Logged In");
                    sessionStorage.setItem("user",user.email);
                    sessionStorage.setItem("status",true);
                    $state.go('produce');
                }else{
                    $scope.alert="alert-danger";
                    $scope.message="Wrong Credentials";
                   
                    
                }
         }).catch(function(err){
                    console.log(err);
         })
    }
}