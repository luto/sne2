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
      controller: function ($scope, NoteService) {

        function reset() {
          $scope.note = {
            type: 'text'
          };
        }

        console.log($scope.modeFrozen)

        if(!$scope.note) {
          reset();
        }

        $scope.setMode = function (mode) {
          $scope.mode = mode;
        };

        $scope.setNote = function (note) {
          $scope.note = note;
        };

        $scope.save = function () {
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
