import React from 'react';

import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
// npm install react-test-renderer -D

describe('My component', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List name="list" />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

});


