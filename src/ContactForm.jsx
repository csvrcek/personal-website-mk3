import React, {Component} from 'react';
import Field from './Field';
import Button from './Button';

{/* Stolen from https://github.com/kelsonic/simple-contact-form-tutorial */}

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
		// Makes sure that 'this' inside updateField refers to ContactForm and not Field
		this.updateField = this.updateField.bind(this);
	}

	updateField(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return(
			<div>

				<h1>Contact Me</h1>

				{/* Name */}
				<Field
					label="Name"
					onChange={(event) => this.updateField('name', event.target.value)}
					value={this.state.name}
				/>

				{/* Email */}
				<Field
					label="Email"
					onChange={(event) => this.updateField('email', event.target.value)}
					value={this.state.email}
				/>

				{/* Message */}
				<Field
					label="Message"
					onChange={(event) => this.updateField('message', event.target.value)} 
					textarea={true}
					value={this.state.message}
				/>

				<Button 
					email="csvrcek@umich.edu"
					formValues={this.state}
				/>
			</div>
		);
	}
}

export default ContactForm;