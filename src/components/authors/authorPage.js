"use strict";

const React = require("react");
const Link = require("react-router").Link;
const AuthorStore = require("../../stores/authorStore");
const AuthorActions = require("../../actions/authorActions");
const AuthorList = require("./authorList");

const AuthorPage = React.createClass({
  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  },

  // Clean up when this component is unmounted
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">
          Add Author
        </Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;
