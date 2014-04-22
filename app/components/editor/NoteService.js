'use strict';

angular.module('sne2App')
  .service('NoteService', function (betterLogger, uuid4, $q, Restangular) {
    betterLogger.setContext('NoteService');
    this.notes = { };

    this.saveNote = function (note) {
      var defered = $q.defer();

      if (note.id === undefined) {
        note.id = uuid4.generate();
      }

      betterLogger.debug('add note', note);

      this.notes[note.id] = note;
      defered.resolve(note);

      return defered.promise;
    };

    this.getNotes = function () {
      var defered = $q.defer();

      defered.resolve(this.notes);

      return defered.promise;
    };
  });
