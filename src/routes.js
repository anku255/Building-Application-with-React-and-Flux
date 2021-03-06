"use strict";

const React = require("react");
const Router = require("react-router");

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const routes = (
  <Route name="app" path="/" handler={require("./components/app")}>
    <DefaultRoute handler={require("./components/homePage")} />
    <Route
      name="authors"
      handler={require("./components/authors/authorPage")}
    />
    <Route
      name="addAuthor"
      path="author"
      handler={require("./components/authors/manageAuthorPage")}
    />
    <Route
      name="manageAuthor"
      path="author/:id"
      handler={require("./components/authors/manageAuthorPage")}
    />
    <Route
      name="courses"
      handler={require("./components/courses/coursePage")}
    />
    <Route
      name="addCourse"
      handler={require("./components/courses/manageCoursePage")}
    />
    <Route
      name="manageCourse"
      path="course/:id"
      handler={require("./components/courses/manageCoursePage")}
    />
    <Route name="about" handler={require("./components/about/aboutPage")} />
    <NotFoundRoute handler={require("./components/notFoundPage")} />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
