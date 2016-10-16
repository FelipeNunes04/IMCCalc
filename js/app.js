var app = angular.module('calculoImc', ['ngRoute']);

app.config(function($routeProvider)
{  
   $routeProvider
 
   
   .when('/', {
      templateUrl : 'pages/home.html',
      controller     : 'HomeCtrl',
   })
 
   .when('/calculo', {
      templateUrl : 'pages/calculo.html',
      controller  : 'CalculoCtrl',
   })
 
   .when('/dados', {
      templateUrl : 'pages/dados.html',
      controller  : 'DadosCtrl',
   })
 
   .otherwise ({ redirectTo: '/' });
});


app.factory('Scopes', function ($rootScope) {
    var mem = {};

    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
});