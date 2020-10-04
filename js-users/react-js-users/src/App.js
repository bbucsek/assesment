import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import List from "./Components/List/List";
import Create from "./Components/Create/Create";
import Edit from "./Components/Edit/Edit";
import Footer from "./Components/Footer/Footer"
import { ProjectProvider } from "./Context/ProjectContext";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Router>
          <ProjectProvider>
            <Navbar />
            <Route exact path="/new" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/" component={List} />
            <Footer />
          </ProjectProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
