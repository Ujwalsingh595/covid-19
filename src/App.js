import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Corona  from "./Corona";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/"component={Home}/>
    <Route exact path="/corona"component={Corona}/>
    <Redirect to="/"/>
    </Switch>
    </div>
  );
}

export default App;
    

