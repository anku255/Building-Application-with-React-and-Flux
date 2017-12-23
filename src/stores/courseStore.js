"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const ActionTypes = require("../constants/actionTypes");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");
const _ = require("lodash");
const CHANGE_EVENT = "change";

let _courses = [];

const CourseStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getAllCourses() {
    return _courses;
  },

  getCourseById(id) {
    return _.find(_courses, { id: id });
  }
});

Dispatcher.register(action => {
  switch (action.ActionType) {
    case ActionTypes.INITIALIZE:
      _courses = action.initialData.courses;
      CourseStore.emitChange();
      break;

    case ActionTypes.CREATE_COURSE:
      _courses.push(action.course);
      CourseStore.emitChange();
      break;

    case ActionTypes.UPDATE_COURSE:
      const oldCourse = _.find(_courses, { id: action.course.id });
      const oldCourseIndex = _.indexOf(_courses, oldCourse);
      _courses.splice(oldCourseIndex, 1, action.course);
      CourseStore.emitChange();
      break;

    case ActionTypes.DELETE_COURSE:
      _.remove(_courses, course => {
        return action.id === course.id;
      });
      CourseStore.emitChange();
      break;
  }
});

module.exports = CourseStore;
