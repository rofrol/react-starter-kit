"use strict";

// https://www.reddit.com/r/javascript/comments/332v73/is_anyone_using_es6_in_a_large_project_hows_it/cqh2u7i
import hex from 'hex-rgb';

const rgb = (str) => hex(str).map(x => x / 255);

import React from 'react';
import ReactDOM from 'react-dom';

// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
// stopgap until ES7 allows property initializers
// https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
class BaseComponent extends React.Component {
	_bind(...methods) {
		methods.forEach((method) => this[method] = this[method].bind(this));
	}
}

// https://facebook.github.io/react/docs/two-way-binding-helpers.html
class NoLink extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			message: '#abde13',
			someStyle: {
				color: 'white',
				backgroundColor: '#C594C5'
			}
		};
		this._bind('handleChange');
	}

	handleChange(event) {
		this.setState({message: event.target.value, someStyle: {color: 'white', backgroundColor: event.target.value}});
	}

	render() {
		var message = this.state.message;
		return (
			<div>
				<input style={this.state.someStyle} type="text" value={message} onChange={this.handleChange}/>
				<input type="text" value={rgb(message)} readOnly/>
			</div>
		)
	}
}

ReactDOM.render(
	<NoLink txt="some text"/>,
	document.getElementById('app')
);

var contacts = [
	{key: 1, name: 'John Doe', email: 'john.doe@example.com', description: 'Some guy'},
	{key: 2, name: 'Joe Pesci', email: 'joe.pesci@example.com'},
	{key: 3, name: 'Bigfoot Silva'}
];

var newContact = {name: '', email: '', description: ''};

var ContactItem = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		email: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},
	render: function () {
		return (
			React.createElement('li', {},
				React.createElement('h2', {}, this.props.name),
				React.createElement('a', {href: 'mailto:' + this.props.email}, this.props.email),
				React.createElement('div', {}, this.props.description)
			)
		);
	}
});

var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.object.isRequired
	},

	render: function () {
		return (
			React.createElement('form', {},
				React.createElement('input', {
					type: 'text',
					placeholder: 'Name (required)',
					value: this.props.contact.name
				}),
				React.createElement('input', {
					type: 'email',
					placeholder: 'Email (required)',
					value: this.props.contact.email
				}),
				React.createElement('textarea', {
					placeholder: 'Description',
					value: this.props.contact.description
				}),
				React.createElement('button', {type: 'submit'}, 'Add Contact')
			)
		);
	}
});

var ContactView = React.createClass({
	propTypes: {
		contacts: React.PropTypes.array.isRequired,
		newContact: React.PropTypes.object.isRequired
	},
	render: function () {
		return (
			React.createElement('div',
				React.createElement('h1', {}, 'Contacts'),
				React.createElement('ul', {}, this.props.contacts.reduce(function (accumulator, contact) {
					if (contact.email) accumulator.push(React.createElement(ContactItem, contact));
					return accumulator;
				}, [])),
				React.createElement(ContactForm, {contact: newContact})
			)
		)
	}
});

var rootElement = React.createElement(ContactView, {contacts: contacts, newContact: newContact});

ReactDOM.render(rootElement, document.querySelector('#raw-reactjs'));
