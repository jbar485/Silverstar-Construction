import React from "react";
import "./App.css";
import Error404 from "./Error404";
import Landing from "./Landing";
import MasterHomeList from "./MasterHomeList";
import HomeList from "./HomeList";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterHomeList: MasterHomeList
    };
  }

  render(){
    return (
      <div className="">
        <Header className="header"/>
        <Switch className="content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/homes" render={()=><HomeList homeList={this.state.masterHomeList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
