export default function($http){

    this.login=function(User)
    {
        return $http({
            method:"POST",
            url:'http://localhost:3000/login',
            params:{
            email:User.email,
            password:User.password
            }
        })
    }

    this.createSession=function(email,status,source){
        sessionStorage.setItem("user",email);
        sessionStorage.setItem("status",status);
        sessionStorage.setItem("source",source);
    }

    this.destroySession=function () {
        sessionStorage.setItem("user",null);
        sessionStorage.setItem("status",false);
        sessionStorage.setItem("source",null);
    }
}