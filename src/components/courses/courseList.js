"use strict";

const React = require("react");

const CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  render() {
    const createCourseRow = course => {
      console.log("createCourseRow");
      return (
        <tr key={course.id}>
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
