export default function($stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/index/login');
$stateProvider
            .state('index',{
                url:'/index',
                templateUrl:'templates/forms.html',
                controller:'indexController'
            })
            .state('login',{
                parent:'index',
                url:'/login',
                views:{
                    'forms':{
                        templateUrl:'templates/login.html',
                        controller:'loginController'
                    }  
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
                }
            })
            .state('app',{
                url:'/app',
                templateUrl:'templates/app.html',
                controller:'appController'
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
                }

            })
            .state('logout',{
                url:'/logout',
                controller:'logoutController'
            })

}