import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewPlaces from "./places/pages/NewPlaces";
import MainNav from "./shared/components/Navigation/MainNav";
import Users from "./users/pages/Users";

const App = () => {
  return (
    <Router>
      <MainNav />
      <main>
        <Switch>
          <Route path="/" component={Users} exact />
          <Route path="/places/new" component={NewPlaces} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
