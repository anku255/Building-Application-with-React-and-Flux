"use strict";

const React = require("react");
const AuthorForm = require("./authorForm");

const ManageAuthorPage = React.createClass({
  getInitialState() {
    return {
      author: { id: "", firstName: "", lastName: "" }
    };
  },

  setAuthorState(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  render() {
    return (
      <AuthorForm author={this.state.author} onChange={this.setAuthorState} />
    );
  }
});

module.exports = ManageAuthorPage;
