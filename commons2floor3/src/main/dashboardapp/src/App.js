import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';

//Components
import ReactNav from "./components/nav/reactNav";
import Home from './components/home/home';
import PostForm from "./components/postForm/postForm";
import Post from "./components/post/post";
import Dashboard from './components/dashboard/dashboard';


import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/normalize.css";
import "./css/style.css";
import Switch from 'react-bootstrap/esm/Switch';



class App extends Component {

  constructor(props) {
    super();
    this.state = {
        
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* nav bar */}
          <ReactNav />
          {/* main content */}
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
