import React from 'react';
import './App.css';
import { Route, Redirect, Switch} from 'react-router-dom';
import Cover from './component/Mycover';
import 'bootstrap/dist/css/bootstrap.css';
import Details from "./component/cvdetails"
import { Component } from 'react';
import LoginForm from './component/loginForm'

class App extends Component {
  render() {
    return (
      <div className="bag-cover">
        <Switch>
          <Route path="/loginForm" component={LoginForm}></Route>
          <Route path="/myCover" component={Cover}></Route>
          <Route path="/cvdetails" component={Details}></Route>
          <Redirect from="/" exact to="/myCover" />
          <Redirect to="/not-found" />
        </Switch>
        
      </div>
    )
   
  }
 
  
}

export default App;
