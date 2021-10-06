angular.module('kisanApp').service('WeatherService',function(DirectionService)
{
    this.getWeatherObject=function(object,name){
            var weatherObj ={};
            weatherObj['date']=(new Date(object.dt * 1000)).toLocaleDateString('en-IN');
            weatherObj['name']=name;
            weatherObj['weather']=object.weather[0].main;
            weatherObj['temperature']=Math.round(object.main.temp - 273.15)+String.fromCharCode(176)+'C';
            weatherObj['wind']={};
            weatherObj['wind']['speed']=object.wind.speed;
            weatherObj['wind']['deg'] =DirectionService.direction(object.wind.deg);

            return weatherObj;
    }
})