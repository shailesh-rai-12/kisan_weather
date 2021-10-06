import baseConfig from './configuration/base.js'
import weatherFactory from './factories/WeatherFactory.js'
import directionService from './services/WindDegree.js'
import forecastFactory from './factories/ForecastFactory.js'
import WeatherService from './services/WeatherService.js'
import RegisterService from './services/RegisterService.js'
import LoginService from './services/LoginService.js'
// import GoogleSign from './services/GoogleSignin.js'
import navDirective from './directives/navigation.js'



var kisanApp=angular.module('kisanApp',['ui.router','oc.lazyLoad']);

//configuration
kisanApp.config(baseConfig);

//directives
kisanApp.directive("navBar",navDirective);


//factory
kisanApp.factory('WeatherFactory',weatherFactory);
kisanApp.factory('ForecastFactory',forecastFactory);

//services
kisanApp.service('WeatherService',WeatherService);
kisanApp.service('RegisterService',RegisterService);
kisanApp.service('LoginService',LoginService);
kisanApp.service('DirectionService',directionService);
// kisanApp.service("GoogleSign",GoogleSign);
