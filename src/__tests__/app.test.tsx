import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('App should mount properly', () => {
  const appComponent = renderer.create(<App />);

  const tree = appComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
