myApp=angular.module('flapperNews')
myApp.controller('UserListCtrl', [
'$scope',
'users',
function($scope, users){
  $scope.users = users.users;
}]);
myApp.controller('UserCtrl', [
'$scope',
'user',
function($scope,user){
  $scope.user = user;
}]);
myApp.controller('UserUpdateCtrl', [
'$scope',
'$state',
'users',
'user',
function($scope, $state,users ,user){
  $scope.user = user;
  $scope.updateUser = function(user){
      users.update(user);
  };
}]);