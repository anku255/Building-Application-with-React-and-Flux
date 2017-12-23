"use strict";

const React = require("react");
const CourseActions = require("../../actions/courseActions");
const toastr = require("toastr");

const CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  deleteCourse(id, event) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success("Course Deleted!");
  },

  render() {
    const createCourseRow = course => {
      console.log("createCourseRow");
      return (
        <tr key={course.id}>
          <td>
            <a href="#" onClick={this.deleteCourse.bind(this, course.id)}>
              Delete
            </a>
          </td>
          <td>
            <a href={course.watchHref}>Watch</a>
          </td>
          <td>{course.title}</td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th />
            <th />
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </thead>
          <tbody>{this.props.courses.map(createCourseRow, this)}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = CourseList;
