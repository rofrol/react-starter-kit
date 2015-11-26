"use strict";

import React from 'react';

var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},

	onNameInput: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
	},
	onEmailInput: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
	},
	onDescriptionInput: function(e) {
		this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
	},
	onSubmit: function(e) {
		e.preventDefault();
		this.props.onSubmit();
	},

	render: function () {
		var errors = this.props.value.errors || {};
		return (
			React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
				React.createElement('input', {
					className: errors.name && 'ContactForm-error',
					type: 'text',
					placeholder: 'Name (required)',
					value: this.props.value.name,
					onChange: this.onNameInput
				}),
				React.createElement('input', {
					className: errors.email && 'ContactForm-error',
					type: 'email',
					placeholder: 'Email (required)',
					value: this.props.value.email,
					onChange: this.onEmailInput
				}),
				React.createElement('textarea', {
					className: 'ContactForm-description',
					placeholder: 'Description',
					value: this.props.value.description,
					onChange: this.onDescriptionInput
				}),
				React.createElement('button', {
					className: 'ContactForm-submit',
					type: 'submit'
				}, 'Add Contact')
			)
		);
	}
});

export default ContactForm;
