"use strict";

const React = require("react");
const Input = require("../common/textInput");

const CourseForm = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <form>
        <h1>Manage Course</h1>
        <Input name="title" label="Title" onChange={this.props.onChange} />
        <br />
        <label htmlFor="author">Author</label>
        <select
          name="author"
          id="author"
          className="form-control"
          onChange={this.props.onChange}
        >
          {this.props.authors.map(author => {
            return (
              <option value={author.firstName + " " + author.lastName}>
                {author.firstName} {author.lastName}
              </option>
            );
          })}
        </select>
        <br />
        <Input
          name="category"
          label="Category"
          onChange={this.props.onChange}
        />
        <br />
        <Input name="length" label="Length" onChange={this.props.onChange} />
        <br />
        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    );
  }
});

module.exports = CourseForm;
