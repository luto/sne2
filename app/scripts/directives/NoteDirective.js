'use strict';

angular.module('sne2App')
  .directive('note', function () {
    return {
      restrict: 'E',
      scope: {
        mode: '=mode',
        note: '=?',
        saveasdf: '='
      },
      controller: function ($scope) {

        function reset() {
          $scope.note = {
            type: 'text'
          };
        }

        reset();

        $scope.setMode = function (mode) {
          $scope.mode = mode;
          console.log(mode);
        };

        $scope.setNote = function (note) {
          $scope.note = note;
        };

        $scope.save = function () {
          $scope.saveasdf($scope.note);
          reset();
        };
      },
      templateUrl: 'views/note.html'
    };
  });
