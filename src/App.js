import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contactus" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
