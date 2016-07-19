(function(angular, app) {
  app.directive('login', function () {
    return {
      restrict : 'E',
      templateUrl: 'app/login/login.tpl.html',
      controller: 'LoginController'
    }
  })
})(angular, loginApp);