import React from "react";
import HomePage from "./components/HomePage.js";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile.js";
import Projects from "./components/Projects.js";
import PrivateRoute from "./utils/PrivateRoute";
import ViewProject from "./components/ViewProject";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/viewproject" component={ViewProject} />
      </Switch>
    </div>
  );
};

export default App;
