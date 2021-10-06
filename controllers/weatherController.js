angular.module('kisanApp').controller('weatherController',function($scope,$rootScope,$log,WeatherFactory,WeatherService){
    $log.info('weather controller');
    $scope.cityname="Chandigarh"
    $scope.searchCity=function(){
        WeatherFactory.getWeather($scope.cityname)
        .then(function(response){
                
                $scope.weather=WeatherService.getWeatherObject(response.data,response.data.name);
                $log.info($scope.weather);
               $rootScope.getForecast($scope.cityname);
                
                
        }).catch(function(err){
            console.log(err);
        })
    }
    $scope.searchCity();
    
})