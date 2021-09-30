export default function($scope,$rootScope,$log,WeatherFactory,WeatherService){
    $log.info('weather controller');
    $scope.searchCity=function(){
        WeatherFactory.getWeather($scope.cityname)
        .then(function(response){
                
                $scope.weather=WeatherService.getWeatherObject(response.data,response.data.name);
                $log.info($scope.weather);
               let fun=$rootScope.getForecast;
                fun($scope.cityname);
                
        }).catch(function(err){
            console.log(err);
        })
    }
    
}