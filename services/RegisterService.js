export default function($http){
    this.registerUser=function(User)
    {
        return $http({
            method:"POST",
            url:'http://localhost:3000/register',
            params:{
                name:User.name,
                email:User.email,
                password:User.password
            }
        })
    }
}