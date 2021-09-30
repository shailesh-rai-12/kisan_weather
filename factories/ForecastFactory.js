export default function($http){
    var obj={};
    obj.getForecast= function(city){

        
      return  $http({
            method:"GET",
            url:'https://api.openweathermap.org/data/2.5/forecast',
            params:{
                q:city,
                appid:'36ae345fc4122c7387830f07678d3ef6'
            }
        });
        
    }

    return obj;
}