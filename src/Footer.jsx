import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div class="footerContent">
        {/* TODO: make footer flush with sides of screen */}
        	<div style={{paddingTop:"30px"}}>
          		Made with ❤️ by Connor Svrcek
          	</div>

	        <div>
	        	{/* Github */}
	        	<a href="https://github.com/csvrcek">
	         		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'github']} size="2x"/>
	         	</a>

	         	{/* Linkedin */}
	         	<a href="https://www.linkedin.com/in/connor-svrcek">
	         		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'linkedin']} size="2x"/>
	         	</a>

	         	{/* Facebook */}
	         	<a href="https://www.facebook.com/connor.svrcek">
	          		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'facebook']} size="2x"/>
	          	</a>

	          	{/* Instagram */}
	          	<a href="https://www.instagram.com/cdids/">
	          		<FontAwesomeIcon style={{padding:"20px", transition: "0.3s"}} icon={['fab', 'instagram']} size="2x"/>
	          	</a>
	        </div>
        </div>
      </div>
    )
  }
}


export default Footer;