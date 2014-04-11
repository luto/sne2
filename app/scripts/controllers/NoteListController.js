'use strict';

angular.module('sne2App')
  .controller('NoteListController', function ($scope, NoteService) {
    $scope.notes = NoteService.getNotes();
  });
