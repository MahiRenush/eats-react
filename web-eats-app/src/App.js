import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainContainer } from './Containers/MainContainer';
import {Route, Switch, BrowserRouter as Router}from 'react-router-dom';
import Order from './Containers/Menus/Order';
import Information from './Containers/Menus/Information';
import Eat from './Containers/Menus/Eat';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MainContainer></MainContainer>
        <Router>
          <Switch>
            <Route path="/" component={Order}/>
            <Route path="/info" component={Information}/>
            <Route path="/eat" component={Eat}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
