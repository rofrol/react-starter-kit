// https://www.reddit.com/r/javascript/comments/332v73/is_anyone_using_es6_in_a_large_project_hows_it/cqh2u7i
import hex from 'hex-rgb'

console.log(hex('#abde13').map(function(x) { return x/255} ))

import React from 'react'

// https://facebook.github.io/react/docs/two-way-binding-helpers.html
var NoLink = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  render: function() {
    var message = this.state.message;
    return (
    	<div>
	    	<h3>{this.state.message}</h3>
	    	<input type="text" value={message} onChange={this.handleChange} />
    	</div>
    )
  }
});

 React.render(
	<NoLink txt="some text" />,
	document.getElementById('app')
);