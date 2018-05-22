import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li><Link to="aboutme">About Me</Link></li>
          <li><Link to="resume">Resume</Link></li>
          <li><Link to="projects">Projects</Link></li>

          <li style={{textAlign: "right"}}> <a href="https://github.com/csvrcek" target="_blank">github</a> </li>
          <li style={{textAlign: "right"}}><Link to="resume">Resume</Link></li>
        </ul>
      </header>
    )
  }
}


export default NavBar;