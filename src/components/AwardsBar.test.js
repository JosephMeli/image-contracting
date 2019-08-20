import React from 'react';
import ReactDOM from 'react-dom';
import AwardsBar from './AwardsBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AwardsBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
