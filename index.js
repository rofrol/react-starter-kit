// https://www.reddit.com/r/javascript/comments/332v73/is_anyone_using_es6_in_a_large_project_hows_it/cqh2u7i
import hex from 'hex-rgb';

const rgb = str => hex(str).map(x => x / 255);

import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from './components/BaseComponent';

// Class Property Declarations is stage 1 proposal currently https://github.com/eslint/eslint/issues/4683#issuecomment-164217757
// http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
// http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
// http://stackoverflow.com/questions/34244888/how-do-i-configure-eslint-to-allow-fat-arrow-class-methods/34254000#34254000
class NoLink extends BaseComponent {
  state = {
    message: '#abde13',
    someStyle: {
      color: 'white',
      backgroundColor: '#C594C5',
    },
  };

  handleChange = event => {
    this.setState(
      {
        message: event.target.value,
        someStyle: { color: 'white', backgroundColor: event.target.value },
      }
    );
  }

  render() {
    const message = this.state.message;
    return (
      <div>
        <input style={this.state.someStyle} type="text" value={message}
          onChange={this.handleChange}
        />
        <input type="text" value={rgb(message)} readOnly />
      </div>
    );
  }
}

ReactDOM.render(
  <NoLink txt="some text" />,
  document.getElementById('app')
);
