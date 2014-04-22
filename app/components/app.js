'use strict';

angular.module('sne2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'uuid4',
  'better-log',
  'restangular',
  'sne2app.config'
])
  .config(function ($routeProvider, $locationProvider, RestangularProvider, betterLogProvider, APIRURL) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/documentlist/views/documents.html',
        controller: 'DocumentController',
        resolve: {
          documents: function (DocumentService) {
            return DocumentService.getDocuments();
          }
        }
      })
      .when('/doc/:id', {
        templateUrl: 'components/editor/views/editor.html',
        controller: 'EditorController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    RestangularProvider.setBaseUrl(APIRURL);

    betterLogProvider.setPrependees(['time', 'context']);
  });