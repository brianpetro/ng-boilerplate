angular.module( 'ngBoilerplate.about2', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about2', {
    url: '/about2',
    views: {
      "main": {
        controller: 'About2Ctrl',
        templateUrl: 'about2/about2.tpl.html'
      }
    }
  });
})

.controller( 'About2Ctrl', function About2Ctrl( $scope, titleService ) {
  titleService.setTitle( 'About2 Title' );


})

;
