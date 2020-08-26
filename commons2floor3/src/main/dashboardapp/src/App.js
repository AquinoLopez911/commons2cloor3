import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';

//Components
import ReactNav from "./components/nav/reactNav";
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Teams from "./components/teams/teams"
import TeamList from './components/teamList/teamList'


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
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/teams" component={Teams} />
            <Route exact={true} path="/dashboard" component={Dashboard}/>
            <Route 
                  exact={true} 
                  path="/teams/RA" 
                  render={ () => (
                    <TeamList teamName="RA"/>
                  ) }
            />
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
