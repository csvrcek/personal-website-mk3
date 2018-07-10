import React, { Component } from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Resume from './Resume';
import Projects from './Projects';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

fontawesome.library.add(brands, faAngleDown, faAngleRight)

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <AboutMe/>
        <Resume/>
        <Projects/>
        <Footer/>
      </div>
    )
  }
}


export default App;