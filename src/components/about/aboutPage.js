"use strict";

const React = require("react");

const About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
