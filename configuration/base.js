
angular.module('kisanApp').config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise('/index/login');
    $ocLazyLoadProvider.config({
        modules:[
        {
            name:'indexController',
            files:['../controllers/indexController.js']
        },
        {
            name:'loginController',
            files:['../controllers/loginController.js']
        },
        {
            name:'signupController',
            files:['../controllers/signupController.js']
        },
        {
            name:'appController',
            files:['../controllers/appController.js']
        },
        {
            name:'addStockController',
            files:['../controllers/addStockController.js']
        },
        {
            name:'inventoryController',
            files:['../controllers/inventoryController.js']
        },
        {
            name:'weatherController',
            files:['../controllers/weatherController.js']
        },
        {
            name:'forecastController',
            files:['../controllers/forecastController.js']
        },
        {
            name:'logoutController',
            files:['../controllers/logoutController.js']
        },
        {
            name:'LoginService',
            files:['../services/LoginService.js']
        },
        {
            name:'RegisterService',
            files:['../services/RegisterService.js']
        },
        {
            name:'WeatherService',
            files:['../services/WeatherService.js']
        },
        {
            name:'WindDirectionService',
            files:['../services/WindDegree.js']
        },
        {
            name:'WeatherFactory',
            files:['../factories/WeatherFactory.js']
        },
        {
            name:'ForecastFactory',
            files:['../factories/ForecastFactory.js']
        },
        {
            name:'NavDirective',
            files:['../directives/navigation.js']
        }
        
    ],
        debug:true
    });
    $stateProvider
                .state('index',{
                    url:'/index',
                    templateUrl:'templates/forms.html',
                    controller:'indexController',
                    resolve:{
                        loadIndexCtrl:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load('indexController');
                        }]
                    }
                })
                .state('login',{
                    parent:'index',
                    url:'/login',
                    views:{
                        'forms':{
                            templateUrl:'templates/login.html',
                            controller:'loginController',
                            
                        }, 
                    },
                    resolve:{
                        loadLoginCtrl:['loadIndexCtrl','$ocLazyLoad',function(loadIndexCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load(['loginController','LoginService']);
                        }]

                    }

                })
                .state('signup',{
                    parent:'index',
                    url:'/signup',
                    views:{
                        'forms':{
                            templateUrl:'templates/signup.html',
                            controller:'signupController'
                        }  
                    },
                    resolve:{
                        loadSignupCtrl:['loadIndexCtrl','$ocLazyLoad',function(loadIndexCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load(['signupController','RegisterService']);
                        }]

                    }
                })
                .state('app',{
                    url:'/app',
                    templateUrl:'templates/app.html',
                    controller:'appController',
                    resolve:{
                        loadAppCtrl:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load(['appController','NavDirective']);
                        }]
                    }
                })
                .state('produce',{
                    parent:'app',
                    url:'/produce',
                    views:{
                        navigation:{
                            templateUrl:'templates/navigation.html'
                        },
                        leftWindow:{
                            templateUrl:'templates/addStock.html',
                            controller:'addStockController'
                        },
                        rightWindow:{
                            templateUrl:'templates/inventory.html',
                            controller:'inventoryController'
                        }
                    },
                    resolve:{
                        loadAddStockCtrl:['loadAppCtrl','$ocLazyLoad',function(loadAppCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load('addStockController');
                        }],
                        loadInventoryCtrl:['loadAppCtrl','$ocLazyLoad',function(loadAppCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load('inventoryController');
                        }]

                    }
                })
                .state('weather',{
                    parent:'app',
                    url:'/weather',
                    views:{
                        navigation:{
                            templateUrl:'templates/navigation.html'
                        },
                        leftWindow:{
                            templateUrl:'templates/todayWeather.html',
                            controller:'weatherController'
                        },
                        rightWindow:{
                            templateUrl:'templates/forecast.html',
                            controller:'forecastController'
                        }
                    },
                    resolve:{
                        loadWeatherCtrl:['loadAppCtrl','$ocLazyLoad',function(loadAppCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load(['weatherController','WeatherFactory','WeatherService','WindDirectionService']);
                        }],
                        loadForecastCtrl:['loadAppCtrl','$ocLazyLoad',function(loadAppCtrl,$ocLazyLoad){
                            return $ocLazyLoad.load(['forecastController','ForecastFactory','WeatherService','WindDirectionService']);
                        }]

                    }

                })
                .state('logout',{
                    url:'/logout',
                    controller:'logoutController',
                    resolve:{
                        loadlogoutCtrl:['$ocLazyLoad',function($ocLazyLoad){
                            return $ocLazyLoad.load(['logoutController','LoginService']);
                        }]
                    }
                })

    })