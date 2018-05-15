import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Home/>
            <NavBar/>
            <Route name="aboutme" exact path="/aboutme" component={AboutMe} />
            <Route name="resume" exact path="/resume" component={Resume} />
          </div>
        </Router>

        <Footer/>
      </div>
    )
  }
}


export default App;