'use strict';

angular.module('sne2App')
  .controller('EditorController', function ($scope, NoteService) {

    NoteService.getNotes().then(function (notes) {
      $scope.notes = notes;
    });
  });
