'use strict';

angular.module('sne2App')
  .service('DocumentService', function ($log, Restangular) {
    var documents = Restangular.all('documents');

    this.getDocuments = function () {
      return documents.getList();
    };

    this.addDocument = function (doc) {
      return documents.post(doc);
    };

    this.getDocument = function (id) {
      return documents.one();
    };
  });
