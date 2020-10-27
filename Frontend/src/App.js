import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Issue from "./containers/Issue";
import IssueList from "./containers/IssueList";
import Login from "./containers/Login";
import Layout from "./hocs/Layout";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Issue" component={Issue} />
        <Route exact path="/IssuelIst" component={IssueList} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
