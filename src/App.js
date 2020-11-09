import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "./App/Registration";
import ComingSoonComp from "./App/ComingSoon";

const ComingSoon = ({ location }) => (
  <div style={{ textAlign: "center", color: "#319788", fontSize: "1em" }}>
    <ComingSoonComp />
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={Registration}
          path={["/home", "/", "/register"]}
          exact
        />
        <Route component={ComingSoon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
