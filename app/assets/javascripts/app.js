myApp=angular.module('flapperNews', ['ui.router', 'ng-token-auth', 'templates', 'Devise'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    });

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'users/_index.html',
      controller: 'UserListCtrl',
      resolve: {
        userPromise: ['users', function(users){
          return users.getAll();
        }]
      }
    });

  $stateProvider  
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    });
  
  $stateProvider  
    .state('user', {
      url: '/users/{id}',
      templateUrl: 'users/_profile.html',
      controller: 'UserCtrl',
      resolve: {
        user: ['$stateParams', 'users', function($stateParams, users) {
          return users.get($stateParams.id);
        }]
      }
    });
  
  $stateProvider  
    .state('update', {
      url: '/users/{id}/edit',
      templateUrl: 'users/_edit.html',
      controller: 'UserUpdateCtrl',
      resolve: {
        user: ['$stateParams', 'users', function($stateParams, users) {
          return users.edit($stateParams.id);
        }]
      }
    });
  
  $stateProvider   
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
  $stateProvider   
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });

  $urlRouterProvider.otherwise('home');
}])