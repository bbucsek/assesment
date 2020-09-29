import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";
import New from "./Components/New";
import Edit from "./Components/Edit";


function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Router>
          <Sidebar />
          <Route exact path="/new" component={New}/>
          <Route exact path="/edit" component={Edit}/>
          <Route exact path="/" component={List}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
