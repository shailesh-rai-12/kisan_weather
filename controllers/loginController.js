export default function($scope,$log,LoginService,$rootScope,$state,GoogleSign){
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
                    LoginService.createSession(user.email,true,"local");
                    $state.go('produce');
                }else{
                    $scope.alert="alert-danger";
                    $scope.message="Wrong Credentials";
                   
                    
                }
         }).catch(function(err){
                    console.log(err);
         })
    }

     $scope.googleSignIn= function()
    {
        GoogleSign.googleSignIn()
            .then(function(res){
                console.log(res);

                    console.log("Logged In");
                    LoginService.createSession(res.user.email,true,"google");
                     $state.go('produce');
                    //$scope.message="Wrong Credentials";
                   
                    
                
            }).catch(function(err){
                console.log(err);
            })
    }

}