$ = jQuery = require("jquery");

const React = require("react");
const Home = require("../src/components/homePage");
const Authors = require("../src/components/authors/authorPage");
const About = require("../src/components/about/aboutPage");
const Header = require("../src/components/common/header");

const App = React.createClass({
  render() {
    let Child;

    switch (this.props.route) {
      case "about":
        Child = About;
        break;
      case "authors":
        Child = Authors;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header />
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
