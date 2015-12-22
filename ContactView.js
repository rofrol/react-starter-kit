import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

var ContactView = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			!this.props.contact
				? React.createElement('h1', {}, 'Not found')
				: React.createElement('div', {},
					React.createElement('h1', {className: 'title'}, 'Edit contact'),
					React.createElement(ContactForm, {
						value: this.props.contact,
						onChange: function () {
						},
						onSubmit: function () {
						}
					})
				)
		);
	}
});

export default ContactView;
