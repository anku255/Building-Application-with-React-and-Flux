"use strict";

const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand">
            <img src="images/pluralsight-logo.png" alt="Pluragsight" />
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="app">Home</Link>
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
