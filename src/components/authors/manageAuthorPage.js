"use strict";

const React = require("react");
const Router = require("react-router");
const toastr = require("toastr");
const AuthorForm = require("./authorForm");
const AuthorApi = require("../../api/authorApi");

const ManageAuthorPage = React.createClass({
  mixins: [Router.Navigation],

  getInitialState() {
    return {
      author: { id: "", firstName: "", lastName: "" },
      errors: {}
    };
  },

  setAuthorState(event) {
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  authorFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear any previous errors.

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = "First name must be at least 3 characters.";
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = "Last name must be at least 3 characters.";
      formIsValid = false;
    }
    this.setState({ errors: this.state.errors });
    return formIsValid;
  },

  saveAuthor(event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    AuthorApi.saveAuthor(this.state.author);
    toastr.success("Author Saved!");
    this.transitionTo("authors");
  },

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}
      />
    );
  }
});

module.exports = ManageAuthorPage;
