"use strict";

const React = require("react");
const Input = require("../common/textInput");

const AuthorFrom = React.createClass({
  propTypes = {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          placeholder="First Name"
          error={this.props.errors.firstName}
        />
        <br />

        <Input
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          placeholder="Last Name"
          error={this.props.errors.lastName}
        />
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

module.exports = AuthorFrom;
