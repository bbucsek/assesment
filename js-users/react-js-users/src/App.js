import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Router>
          <Sidebar />
          <Route path="/">
            <List />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
