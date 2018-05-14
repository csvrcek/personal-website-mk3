import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="aboutme">About Me</Link></li>
          <li className="navButton"><Link to="">Resume</Link></li>
        </ul>
      </header>
    )
  }
}


export default NavBar;