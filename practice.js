angular.module('session',[])
.config([ '$provide', function($provide) {

    $provide.decorator('TestService', [
      '$delegate',
      function TestServiceDecorator($delegate) {
  
  
        function talking() {
        
          return "talking in progress...";
        }
  
        $delegate.talk = talking;
        return $delegate;
      }
    ]);
  }])
.service('TestService',function(){
    this.speech=function()
    {
        return "Speech in process..";
    }
})
.controller('serviceController',function($scope,TestService){
    $scope.msg=TestService.speech();
    $scope.msg2=TestService.talk();
})
.controller('ExampleController',function($scope) {
    $scope.user = { name: 'Baka', data: '' };
  
  })
  .directive('pane', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: { title:'@' },
      template: '<div style="border: 1px solid black;">' +
                  '<div style="background-color: gray">{{title}}</div>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>'
    };
})
.controller('PaneController', function($scope) {
  $scope.title = 'Tatya Bichoo';
  $scope.text = 'Om bhatt swaha..';
})
