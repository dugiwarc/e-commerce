import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats'page {props.match.params.fuck}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
