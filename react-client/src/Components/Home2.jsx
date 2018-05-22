import React, {Component} from 'react';
import profileImage from './Assets/profile_image.png';

const gradient = {
	backgroundSize: "cover",
	width: "100%",
	minHeight: "700px",
};

const profile = {
	textAlign: "center",
	color: "white",
	paddingTop: "100px",
};

class Home2 extends Component {
	render() {
		return (
			<div style={gradient}>
				<div style={profile}>
					<h1>Hello! My name is Connor Svrcek.</h1>
					<h1>Let's build something great together.</h1>
					<img src={profileImage} style={{borderRadius:"50%", border:"3px solid white"}}/> 
				</div>
			</div>
		)
	}
}

export default Home2;