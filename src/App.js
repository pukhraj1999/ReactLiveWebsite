import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./WebPages/Navbar/Navbar.jsx";
import Home from "./WebPages/Home/Home.jsx";
import Contact from "./WebPages/Contact/Contact.jsx";
import About from "./WebPages/About/About.jsx";
import Service from "./WebPages/Service/Service.jsx";
import Footer from "./WebPages/Footer/Footer.jsx";
import UnderConstruction from "./WebPages/UnderConstruction/UnderConstruction.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/underconstruction" component={UnderConstruction} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
