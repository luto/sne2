'use strict';

angular.module('sne2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'uuid4',
  'restangular'
])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/documents.html',
        controller: 'DocumentController',
        resolve: {
          documents: function (DocumentService) {
            return DocumentService.getDocuments();
          }
        }
      })
      .when('/doc/:id', {
        templateUrl: '../views/editor.html',
        controller: 'EditorController'
      })
      .otherwise({
        redirectTo: '/'
      });

    RestangularProvider.setBaseUrl('http://localhost:2403/');
  });