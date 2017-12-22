"use strict";

const React = require("react");
const Router = require("react-router");
const AuthorForm = require("./authorForm");
const AuthorApi = require("../../api/authorApi");

const ManageAuthorPage = React.createClass({
  mixins: [Router.Navigation],

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

  saveAuthor(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    this.transitionTo("authors");
  },

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
      />
    );
  }
});

module.exports = ManageAuthorPage;
