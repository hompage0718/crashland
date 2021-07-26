import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/views/Navbar";
import Footer from "./components/views/Footer";
import Home from "./components/views/Home";
import AboutUs from "./components/about/AboutUs";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
