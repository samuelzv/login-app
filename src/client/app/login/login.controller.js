(function (angular, app) {
  app.controller('LoginController',['$scope','authService', function($scope,authService) {
      $scope.username = '';
      $scope.password = '';
      $scope.hasError = false;
      $scope.statusMessage = '';

      $scope.authenticate = function(username, password) {
        authService.login(username, password)
          .then(function (response) {
            if(response.status == 200) {
              $scope.hasError = false;
              $scope.statusMessage = 'You have been successfully logged in.';
              console.log(response);
            }
          })
          .catch(function (error) {
            //status 500
            $scope.hasError = true;
            $scope.statusMessage = 'Wrong credentials, please try again.';
          });
      }
    }]);
})(angular, loginApp);


