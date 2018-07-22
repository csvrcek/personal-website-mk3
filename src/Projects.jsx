import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/fontawesome-free-solid";
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
	render() {
		return (
			<div className="viewportCover">
				<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
					<h1 style={{paddingLeft: "10px"}}>Projects</h1>
				</ScrollAnimation>

				<div id="allCards">

					{/* Michigan Hackers */}
					<div className = "higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'apple']} size="3x"/>
									<h2>Michigan Hackers</h2>
									<p>An iOS application to display the events and calendar of Michigan Hackers 
									as well as some resources for students to get involved.</p>
									<br/>
									<a href="https://github.com/michiganhackers/MichiganHackersiOSApp" style={{transition: "0.3s"}}>
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x" 
										color="black" style={{transition: "0.3s"}}/> 
										Github Repository
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>

					{/* Personal Website */}
					<div className="higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" delay="500">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'react']} size="3x"/>
									<h2>Personal Website</h2>
									<p>I created this website to showcase my interests and skills, 
									built with ReactJS, NodeJS and CSS.</p>
									<br/>
									<br/>
									<a href="https://github.com/csvrcek/personal-website-mk3" style={{transition: "0.3s"}}>
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x" 
										color="black" style={{transition: "0.3s"}}/> 
										Github Repository
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>


					{/* Muse */}
					<div className = "higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'apple']} size="3x"/>
									<h2>Muse</h2>
									<p>An iOS proof of concept app designed to show the user news
									about their favorite artists and suggest new music to listen to.</p>
									<br/>
									<a href="https://github.com/csvrcek/Muse" style={{transition: "0.3s"}}>
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x" 
										color="black"/> 
										Github Repository
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>

					{/* Magic8 */}
					<div className="higherCard">
						<ScrollAnimation animateIn = "fadeInUp" animateOnce = "true" delay="500">
							<div className="card">
								<div className="container">
									<FontAwesomeIcon icon={['fab', 'apple']} size="3x"/>
									<h2>Magic8</h2>
									<p>This iOS app was made for the purpose of emulating a magic 8 ball
									(my first app ever!).</p>
									<br/>
									<br/>
									<a href="https://github.com/csvrcek/Magic8" style={{transition: "0.3s"}}>
										<FontAwesomeIcon icon={Icons.faAngleRight} size="1x" 
										color="black"/> 
										Github Repository
									</a>
								</div>
							</div>
						</ScrollAnimation>
					</div>
				</div>

				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

			</div>
		)
	}
}

export default Projects;