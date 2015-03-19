myApp=angular.module('flapperNews')
myApp.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
  Auth.currentUser().then(function (user){
    $scope.user = user;
  });
  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

  $scope.$on('auth:account-update-success', function(ev) {
    alert("Your account has been successfully updated!");
  });

  $scope.$on('auth:account-update-error', function(ev, reason) {
    alert("Registration failed: " + reason.errors[0]);
  });
}]);