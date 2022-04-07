import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('App should match the previous snapshot.', () => {
  const appComponent = renderer.create(<App />);

  const tree = appComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
