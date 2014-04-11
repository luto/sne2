'use strict';

angular.module('sne2App')
  .controller('EditorController', function ($scope, NoteService, notes) {

    $scope.saveNote = NoteService.saveNote;
    $scope.notes = NoteService.getNotes();
  });
