'use strict';

angular.module('sne2App')
  .service('NoteService', function ($log, uuid4, $q, Restangular) {
    this.notes = { };

    this.saveNote = function (note) {
      var defered = $q.defer();

      $log.debug('add note', note);

      if (note.id === undefined) {
        note.id = uuid4.generate();
      }

      this.notes[note.id] = note;


      return defered.promise;
    };

    this.getNotes = function () {
      var defered = $q.defer();

      defered.resolve(this.notes);

      return defered.promise;
    };
  });
