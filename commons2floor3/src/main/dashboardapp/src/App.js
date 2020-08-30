import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';

//Components
import ReactNav from "./components/nav/reactNav";
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Teams from "./components/teams/teams"
import TeamDisplay from './components/teamDisplay/teamDisplay'


import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/normalize.css";



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
          <Switch className="p-0">
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/teams" component={Teams} />
            <Route exact={true} path="/dashboard" component={Dashboard}/>
            <Route 
                  exact={true} 
                  path="/teams/RA" 
                  render={ () => (
                    <TeamDisplay teamName="RA"/>
                  ) }
            />
            <Route 
                  exact={true} 
                  path="/teams/RS" 
                  render={ () => (
                    <TeamDisplay teamName="RS"/>
                  ) }
            />
            <Route 
                  exact={true} 
                  path="/teams/CGL" 
                  render={ () => (
                    <TeamDisplay teamName="CGL"/>
                  ) }
            />
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
