"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const CourseApi = require("../api/courseApi");
const ActionTypes = require("../constants/actionTypes");

const CourseActions = {
  createCourse(course) {
    const newCourse = CourseApi.saveCourse(course);

    // Hey dispatcher, go tell the stores that a course was just created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },

  updateCourse(course) {
    const updatedCourse = CourseApi.saveCourse(course);

    // Hey dispatcher, go tell all the stores that a course was just created.
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  },

  deleteCourse(id) {
    CourseApi.deleteCourse(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
