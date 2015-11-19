import React from 'react';

var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement('form', {className: 'ContactForm'},
				React.createElement('input', {
					className: 'ContactForm-name',
					type: 'text',
					placeholder: 'Name (required)',
					value: this.props.contact.name
				}),
				React.createElement('input', {
					className: 'ContactForm-email',
					type: 'email',
					placeholder: 'Email (required)',
					value: this.props.contact.email
				}),
				React.createElement('textarea', {
					className: 'ContactForm-description',
					placeholder: 'Description',
					value: this.props.contact.description
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
