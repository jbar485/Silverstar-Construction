import React from "react";
import "./App.css";
import Error404 from "./Error404";
import Landing from "./Landing";
import HomeList from "./HomeList";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/homes" component={HomeList} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
