import React from 'react';
import './App.css';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route component={Error404}/>
      </Switch>

    </div>
  );
}

export default App;
