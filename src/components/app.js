/*eslint-disable strict*/

$ = jQuery = require("jquery");
const React = require("react");
const Header = require("./common/header");
const RouteHandler = require("react-router").RouteHandler;
const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
