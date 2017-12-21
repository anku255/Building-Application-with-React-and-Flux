$ = jQuery = require("jquery");

const React = require("react");
const Home = require("../src/components/homePage");
const About = require("../src/components/about/aboutPage");

const App = React.createClass({
  render() {
    let Child;

    switch (this.props.route) {
      case "about":
        Child = About;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Child />
      </div>
    );
  }
});

function render() {
  const route = window.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById("app"));
}

window.addEventListener("hashchange", render);
render();
