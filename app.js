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





var kisanApp=angular.module('kisanApp',['ui.router']);

kisanApp.config(baseConfig);
kisanApp.controller('indexController',indexCtrl);
kisanApp.controller('loginController',loginCtrl);
kisanApp.controller('signupController',signupCtrl);
kisanApp.controller('appController',appCtrl);
kisanApp.controller('weatherController',weatherCtrl);
kisanApp.factory('WeatherFactory',weatherFactory);
kisanApp.service('DirectionService',directionService);
kisanApp.factory('ForecastFactory',forecastFactory);
kisanApp.controller('forecastController',forecastController);
kisanApp.service('WeatherService',WeatherService);
kisanApp.controller('addStockController',addStockController);
kisanApp.controller('inventoryController',inventoryController);
