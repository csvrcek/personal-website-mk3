import React, {Component} from 'react';
import profileImage from './Assets/profile_image.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

class Home extends Component {
	scrollAVH() {
		window.scroll({
			top: window.innerHeight,
			left: 0, 
  			behavior: 'smooth'
		});
	}

	render() {
		return (
			<div className="viewportCover">
				<div className="profile">
					<h1 id="first" className="animated fadeInUp">Hello! My name is Connor Svrcek.</h1>
					<h1 id="second" className="animated fadeInUp">Let's build something great together.</h1>
					<img id="profileImage" className="animated bounceIn" src={profileImage} style={{height:"300px", borderRadius:"50%", border:"3px solid white"}} alt="Connor Svrcek"/>
					<h2 id="jobs" className="animated fadeInUp">iOS | Web | Software Development</h2>
					<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" offset = "0" delay = "2000" duration = "0.5">
						<span style={{cursor:"pointer"}} onClick={this.scrollAVH}><FontAwesomeIcon icon="angle-down" className="pulse" size="3x"/></span>
					</ScrollAnimation>
				</div>
			</div>
		)
	}
};

export default Home;