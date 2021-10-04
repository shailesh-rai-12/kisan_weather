import baseConfig from './configuration/base.js'
import indexCtrl from './controllers/indexController.js'
import loginCtrl from './controllers/loginController.js'
import signupCtrl from './controllers/signupController.js'
import appCtrl from './controllers/appController.js'
import weatherCtrl from './controllers/weatherController.js'
import weatherFactory from './factories/WeatherFactory.js'
import directionService from './services/WindDegree.js'
import forecastFactory from './factories/ForecastFactory.js'
import forecastController from './controllers/forecastController.js'
import WeatherService from './services/WeatherService.js'
import addStockController from './controllers/addStockController.js'
import inventoryController from './controllers/inventoryController.js'
import RegisterService from './services/RegisterService.js'
import LoginService from './services/LoginService.js'
import logoutCtrl from './controllers/logoutController.js'
import GoogleSign from './services/GoogleSignin.js'
import navDirective from './directives/navigation.js'



var kisanApp=angular.module('kisanApp',['ui.router']);

//configuration
kisanApp.config(baseConfig);

//directives
kisanApp.directive("navBar",navDirective);

//controller
kisanApp.controller('indexController',indexCtrl);
kisanApp.controller('loginController',loginCtrl);
kisanApp.controller('signupController',signupCtrl);
kisanApp.controller('appController',appCtrl);
kisanApp.controller('weatherController',weatherCtrl);
kisanApp.controller('logoutController',logoutCtrl);
kisanApp.controller('forecastController',forecastController);
kisanApp.controller('addStockController',addStockController);
kisanApp.controller('inventoryController',inventoryController);

//factory
kisanApp.factory('WeatherFactory',weatherFactory);
kisanApp.factory('ForecastFactory',forecastFactory);

//services
kisanApp.service('WeatherService',WeatherService);
kisanApp.service('RegisterService',RegisterService);
kisanApp.service('LoginService',LoginService);
kisanApp.service('DirectionService',directionService);
kisanApp.service("GoogleSign",GoogleSign);
