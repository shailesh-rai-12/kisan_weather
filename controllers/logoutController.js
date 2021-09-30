export default function($state)
{
    console.log("logout controller");
    sessionStorage.setItem("user",null);
    sessionStorage.setItem("status",false);
    $state.go('login');

}