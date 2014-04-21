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
  .config(function ($routeProvider, $locationProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/editor/views/documents.html',
        controller: 'DocumentController',
        resolve: {
          documents: function (DocumentService) {
            return DocumentService.getDocuments();
          }
        }
      })
      .when('/doc/:id', {
        templateUrl: 'components/documentlist/views/editor.html',
        controller: 'EditorController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    RestangularProvider.setBaseUrl('http://localhost:2403/');
  });