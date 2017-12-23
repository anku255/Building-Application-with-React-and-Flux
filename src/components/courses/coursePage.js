"use strict";

const React = require("react");
const CourseStore = require("../../stores/courseStore");
const CourseList = require("./courseList");

const CoursePage = React.createClass({
  getInitialState() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  componentWillMount() {
    CourseStore.addChangeListener(this._onChange);
  },

  // Clean up when this component is unmounted
  componentWillUnmount() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ courses: CourseStore.getAllCourses() });
  },

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
});

module.exports = CoursePage;
