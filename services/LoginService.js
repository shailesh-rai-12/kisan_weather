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
}