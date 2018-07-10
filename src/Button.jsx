import React, {Component} from 'react';
import PropTypes from 'prop-types';

{/* Stolen from https://github.com/kelsonic/simple-contact-form-tutorial */}


class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};
		this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
	}

	logFormDataToConsole(event) {
		console.log('FORM VALUES ', this.props.formValues);
		this.setState({isClicked:true})
	}

	render() {

		return(
			<button
				disabled={this.state.isClicked}
				onClick={this.logFormDataToConsole}
			>
				Send
			</button>
		);
	}
}

// Info on PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html
Button.propTypes = {
	email: PropTypes.string.isRequired,
	formValues: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}).isRequired,
};

export default Button;