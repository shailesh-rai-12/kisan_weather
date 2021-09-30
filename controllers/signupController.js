export default function($scope,$log,RegisterService){
    $scope.head="SignUp";
    $scope.registration=true;
    $scope.message='';
    $log.info('signUp Controller');
    $scope.registerUser=function(user){
        $scope.registration=true;
        RegisterService.registerUser(user)
            .then(function(res){
                console.log(res);
               
                if(res.data.flag==1)
                {
                    console.log("Registered");
                    $scope.alert="alert-success"
                    $scope.message="Registered! Log in to Enter";
                    
                    
                }else{
                    console.log("Already Exist");
                    $scope.alert="alert-danger"
                    $scope.message="Email Already Exist";
                   
                }
            })
    }
}