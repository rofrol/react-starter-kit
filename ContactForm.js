import React from 'react';

var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
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

	render: function () {
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {
					className: 'ContactForm-name',
					type: 'text',
					placeholder: 'Name (required)',
					value: this.props.value.name,
					onChange: this.onNameInput
				}),
				React.createElement('input', {
					className: 'ContactForm-email',
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
