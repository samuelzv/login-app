(function(angular, app) {
   app.factory('authService',['$http', function($http) {
      return {
        login: function(username, password) {
          return $http({
            method: 'POST',
            url: '/login',
            data: {username:username, password:password},
            headers: {'Content-Type': 'application/json'}
          })
        }
      }
    }])
})(angular, loginApp);