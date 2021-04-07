import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./WebPages/Navbar/Navbar.jsx";
import Home from "./WebPages/Home/Home.jsx";
import Contact from "./WebPages/Contact/Contact.jsx";
import About from "./WebPages/About/About.jsx";
import Blogs from "./WebPages/Blogs/Blogs.jsx";
import BlogPage from "./WebPages/Blogs/BlogPage.jsx";
import Footer from "./WebPages/Footer/Footer.jsx";
import UnderConstruction from "./WebPages/UnderConstruction/UnderConstruction.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/ReactLiveWebsite" component={Home} />
        <Route exact path="/ReactLiveWebsite/about" component={About} />
        <Route exact path="/ReactLiveWebsite/contact" component={Contact} />
        <Route exact path="/ReactLiveWebsite/blogs" component={Blogs} />
        <Route
          exact
          path="/ReactLiveWebsite/blogpage/:blogId"
          component={BlogPage}
        />
        <Route
          exact
          path="/ReactLiveWebsite/underconstruction"
          component={UnderConstruction}
        />
        <Redirect to="/ReactLiveWebsite/ReactLiveWebsite" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
