"use strict";

const React = require("react");
const Router = require("react-router");
const toastr = require("toastr");
const CourseForm = require("./courseForm");
const AuthorStore = require("../../stores/authorStore");
const CourseActions = require("../../actions/courseActions");
const CourseStore = require("../../stores/courseStore");

const ManageCoursePage = React.createClass({
  mixins: [Router.Navigation],

  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors(),
      course: { title: "", author: {}, category: "", length: "" }
    };
  },

  componentWillMount() {
    const courseId = this.props.params.id;

    if (courseId) {
      this.setState({ course: CourseStore.getCourseById(courseId) });
    }
  },

  setCourseState(event) {
    const field = event.target.name;
    const value = event.target.value;
    if (field === "author") {
      this.state.course.author.name = value;
    } else {
      this.state.course[field] = value;
    }
    return this.setState({ course: this.state.course });
  },

  saveCourse(event) {
    event.preventDefault();

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }

    toastr.success("Course Saved!");
    this.transitionTo("courses");
  },

  render() {
    return (
      <CourseForm
        authors={this.state.authors}
        course={this.state.course}
        onChange={this.setCourseState}
        onSave={this.saveCourse}
      />
    );
  }
});

module.exports = ManageCoursePage;
