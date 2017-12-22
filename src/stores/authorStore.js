"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const ActionTypes = require("../constants/actionTypes");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");
const _ = require("lodash");
const CHANGE_EVENT = "change";

let _authors = [];

const AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors() {
    return _authors;
  },

  getAuthorbyId(id) {
    return _.find(_authors, { id: id });
  }
});

Dispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
  }
});

module.exports = AuthorStore;
