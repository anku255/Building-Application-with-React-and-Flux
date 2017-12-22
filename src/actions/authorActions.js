"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const AuthorApi = require("../api/authorApi");
const ActionTypes = require("../constants/actionTypes");

const AuthorActions = {
  createAuthor(author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
