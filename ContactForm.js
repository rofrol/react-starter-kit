import React from 'react';

var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
	},

	render: function () {
		var oldContact = this.props.value;
		var onChange = this.props.onChange;
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {
					className: 'ContactForm-name',
					type: 'text',
					placeholder: 'Name (required)',
					value: this.props.value.name,
					onChange: function(e) {
						onChange(Object.assign({}, oldContact, {name: e.target.value}));
					}
				}),
				React.createElement('input', {
					className: 'ContactForm-email',
					type: 'email',
					placeholder: 'Email (required)',
					value: this.props.value.email,
					onChange: function(e) {
						onChange(Object.assign({}, oldContact, {email: e.target.value}));
					}
				}),
				React.createElement('textarea', {
					className: 'ContactForm-description',
					placeholder: 'Description',
					value: this.props.value.description,
					onChange: function(e) {
						onChange(Object.assign({}, oldContact, {description: e.target.value}));
					}
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
