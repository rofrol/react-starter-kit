import React from 'react';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

var ContactView = React.createClass({
	propTypes: {
		contacts: React.PropTypes.array.isRequired,
		newContact: React.PropTypes.object.isRequired,
		onNewContactChange: React.PropTypes.func.isRequired,
		onNewContactSubmit: React.PropTypes.func.isRequired
	},
	render: function () {
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Contacts'),
				React.createElement('ul', {className: 'ContactList'}, this.props.contacts.reduce(function (accumulator, contact) {
					if (contact.email) accumulator.push(React.createElement(ContactItem, contact));
					return accumulator;
				}, [])),
				React.createElement(ContactForm, {
					value: this.props.newContact,
					onChange: this.props.onNewContactChange,
					onSubmit: this.props.onNewContactSubmit
				})
			)
		)
	}
});

export default ContactView;
