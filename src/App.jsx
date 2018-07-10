import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Home';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';
import Projects from './Projects';
import ContactForm from './ContactForm';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

fontawesome.library.add(brands, faAngleDown, faAngleRight)

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <Home/>
            <AboutMe/>
            <Resume/>
            <Projects/>
          </div>
        </Router>
        <Footer/>
        
      </div>
    )
  }
}


export default App;