angular.module('kisanApp').controller('logoutController',function($state,LoginService,GoogleSign)
{
    console.log("logout controller");
    if(sessionStorage.getItem("source")=="google"){
        GoogleSign.googleLogOut();
    }
    LoginService.destroySession();
    $state.go('login');

})