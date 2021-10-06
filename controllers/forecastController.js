angular.module('kisanApp').controller('forecastController',function($scope,$rootScope,$log,ForecastFactory,WeatherService){
            $log.info('forecast controller');

           $rootScope.getForecast=function(cityname){

            ForecastFactory.getForecast(cityname)
            .then(function(response){
                $log.info(response.data);
                let index=[0,8,16,24,32],
                    weatherList=[];

                index.forEach((e)=>{ 
                   weatherList.push(WeatherService.getWeatherObject(response.data.list[e],response.data.city.name));   
                });

            $scope.forecast=weatherList;
            })
            .catch(function(err){
                $log.info(err);
            })
           }
            

})