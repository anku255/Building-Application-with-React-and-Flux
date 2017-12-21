"use strict";

const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

const Home = React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Adminitration</h1>
        <p>React, React Router, and Flux</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
});

module.exports = Home;
