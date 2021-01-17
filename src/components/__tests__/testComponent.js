import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../testComponent';
describe('testComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TestComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
