import React, {Component} from 'react';
import profileImage from './Assets/profile_image.png';

const profile = {
	backgroundSize: "cover",
	position: "relative",
	textAlign: "center",
	color: "white",
};

const introText = {
	position: "absolute",
	top: "30%",
	left: "25%",
	width: "40%",
	transform: "translate(-50%, -50%)",
	textAlign: "left",
};

const rolesText = {
	position: "absolute",
	paddingTop: "100px",
	top: "37%",
	left: "25%",
	transform: "translate(-50%, -50%)",
	textAlign: "left",
};

class Home extends Component {
	render() {
		return (
		<div>
			<div style={profile}>
				<img style={ {width: "100%"} } src={profileImage} alt=""/>
				<h1 style={introText}>Hello! My name is Connor Svrcek. Let's build something great together.</h1>
				<h2 style={rolesText}>iOS | Web | Software Development</h2>
				<h2 style={rolesText}>TODO: change to a gradient background and centered circular image?</h2>
			</div>

		</div>
		)
	}
}

export default Home;