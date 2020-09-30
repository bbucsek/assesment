import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import New from "./Components/New";
import Edit from "./Components/Edit";
import { ProjectProvider } from "./Context/ProjectContext";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Router>
          <ProjectProvider>
            <Navbar />
            <Route exact path="/new" component={New} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/" component={List} />
          </ProjectProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
