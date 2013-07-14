angular.module( 'ngBoilerplate.example', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'example', {
    url: '/example',
    views: {
      "main": {
        controller: 'ExampleCtrl',
        templateUrl: 'example/example.tpl.html'
      }
    }
  });
})

.controller( 'ExampleCtrl', function ExampleCtrl( $scope, titleService ) {
  titleService.setTitle( 'Example Title' );

})

;
