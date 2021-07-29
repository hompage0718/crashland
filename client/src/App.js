import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/views/Navbar";
import Footer from "./components/views/Footer";
import Home from "./components/views/Home";
import AboutUs from "./components/about/AboutUs";
import Clients from "./components/clients/Clients";
import Topics from "./components/topics/Topics";
import ContactUs from "./components/contact/ContactUs";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/contactus" component={ContactUs} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
