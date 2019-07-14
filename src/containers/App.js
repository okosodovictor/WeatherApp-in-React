import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
import "../components/Gallery.css";

import Weather from "../components/Weather";
import gallery from "../components/Gallery";
import ImageDetail from "../components/ImageDetail";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/weather/:city" component={Weather} />
            <Route exact path="/gallery" component={gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery/:id" component={ImageDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
