import React from 'react';
import ReactDOM from 'react-dom';
import AwardBar from './AwardBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AwardBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
