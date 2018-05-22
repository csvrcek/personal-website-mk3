import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NavBar from './NavBar';
import Home from './Home';
import Home2 from './Home2';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';
import Projects from './Projects';


class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Home2/>
            <NavBar/>
            <Route name="aboutme" exact path="/aboutme" component={AboutMe} />
            <Route name="resume" exact path="/resume" component={Resume} />
            <Route name="projects" exact path="/projects" component={Projects} />
          </div>
        </Router>
        <Footer/>
      </div>
    )
  }
}


export default App;