import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShowSelectionPage from "./pages/showselectionpage/showselectionpage.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path={"/country/:name"} component={ShowSelectionPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
