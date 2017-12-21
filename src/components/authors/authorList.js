"use strict";

const React = require("react");

const AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  render() {
    const createAuthorRow = author => {
      return (
        <tr key={author.id}>
          <td>
            <a href={"/#authors" + author.id}>{author.id}</a>
            <td>
              {author.firstName} {author.lastName}
            </td>
          </td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>{this.props.authors.map(createAuthorRow, this)};</tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
