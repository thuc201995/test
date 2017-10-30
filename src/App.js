import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from "./container/LoginContainer";
import MainContainer from "./container/MainContainer";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact  path="/" component={MainContainer}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
