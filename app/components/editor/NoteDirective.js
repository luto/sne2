'use strict';

angular.module('sne2App')
  .directive('note', function () {
    return {
      restrict: 'E',
      scope: {
        mode: '@mode',
        isFactory: '@?',
        note: '=?'
      },
      controller: function ($scope, betterLogger, NoteService) {
        betterLogger.setContext('NoteDirective');

        function reset() {
          betterLogger.debug('reset');
          $scope.note = {
            type: 'text'
          };
        }

        if(!$scope.note) {
          reset();
        }

        $scope.setMode = function (mode) {
          betterLogger.debug('set mode', mode);
          $scope.mode = mode;
        };

        $scope.setNote = function (note) {
          $scope.note = note;
        };

        $scope.save = function () {
          betterLogger.debug('save');
          NoteService.saveNote($scope.note).then(
            function () {
              if($scope.isFactory) {
                reset();
              } else {
                $scope.setMode('view');
              }
            }
          );
        };
      },
      templateUrl: 'components/editor/views/note.html'
    };
  });
