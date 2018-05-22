import React, {Component} from 'react';
import profileImage from './Assets/profile_image.png';

const profile = {
	position: "relative",
	width: "100%",
};

const image = {
	width: "100%",
	height: "100%",
	paddingLeft: "0px",
	paddingRight: "0px",
	paddingTop: "0px",
};

const introText = {
	width: "42%",
	paddingLeft: "3em",
	paddingTop: "5em",
	color: 'white',
};

const roles = {
	width: "42%",
	textAlign: 'center',
	paddingLeft: "3em",
	color: 'white',
};

class Home extends Component {
	render() {
		return (
		<div>
			<div style={profile}>
				<img style={image} src={profileImage} alt=""/>
				<h1 style={introText}> Hello! My name is Connor Svrcek. Let's build something great together.</h1>
				<h2 style={roles}>iOS | Web | Software Development</h2>
			</div>

		</div>
		)
	}
}

export default Home;