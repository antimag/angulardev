myApp=angular.module('flapperNews')
myApp.factory('users', [
'$http',
function($http){
  var o = {
    users: []
  };
  o.getAll = function() {
    return $http.get('/users.json').success(function(data){
      angular.copy(data, o.users);
    });
  };

  o.update = function(user) {
    return $http.put('/users.json',user).success(function(res){
      return res.data;
    });
  };

  o.edit = function(user) {
    return $http.get('/users/' + user+ '/edit.json').then(function(res){
      return res.data;
    });
  };

  o.get = function(id) {
    return $http.get('/users/' + id+'.json').then(function(res){
      return res.data;
    });
  };
  return o;
}])