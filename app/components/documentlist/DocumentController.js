'use strict';

angular.module('sne2App')
  .controller('DocumentController', function ($scope, $modal, $route, DocumentService, documents) {
    $scope.documents = documents;

    $scope.createNewDocument = function () {
      $scope.createDocument({});
    };

    $scope.createDocument = function (doc) {
      var modalInstance = $modal.open({
        templateUrl: '../views/documentDialog.html',
        controller: 'DocumentDialogController',
        resolve: {
          document: function () {
            return doc;
          }
        }
      });

      modalInstance.result.then($route.reload);
    };
  })
  .controller('DocumentDialogController', function ($scope, $modalInstance, DocumentService, document) {
    $scope.document = angular.copy(document);
    $scope.errors = {};

    $scope.closeAlert = function(attr) {
      delete $scope.errors[attr];
    };

    $scope.ok = function () {
      DocumentService.addDocument($scope.document)
        .then(
          $modalInstance.close,
          function (status) {
            $scope.errors = status.data.errors;
          }
        );
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
