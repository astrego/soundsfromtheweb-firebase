import React from 'react';
import renderer from 'react-test-renderer';
import SoundComponent from '../soundComponent';
import * as Gatsby from 'gatsby';

describe('testComponent', () => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    file: {
      publicURL: '/static/dfe0312a9e62d182bd5c2a320ae37016/testopname.WAV',
    },
  }));

  it('renders correctly', () => {
    const tree = renderer.create(<SoundComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
