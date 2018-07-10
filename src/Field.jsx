import React from 'react';
import PropTypes from 'prop-types';

{/* Stolen from https://github.com/kelsonic/simple-contact-form-tutorial */}

const Field = (props) => (
	<div>
		<label>{props.label}</label>
		<input 
			onChange={props.onChange}
			type={props.textarea ? 'textarea' : 'text'} 
			value={props.value}
		/> 
	</div>

);


// Making sure we are expecting certain props
Field.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
  	textarea: PropTypes.bool.isRequired,
  	value: PropTypes.string.isRequired,
};

Field.defaultProps = {
	textarea: false,
};

export default Field;