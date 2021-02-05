import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import SoundComponent from '../soundComponent';

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

describe('button and h1', () => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    sound: {
      title: 'testopname',
      mp3:
        'https://firebasestorage.googleapis.com/v0/b/soundsfromtheweb.appspot.com/o/testopname.mp3?alt=media&token=2a1047a4-c112-4687-8d99-5d1f81a84e08',
      WAV:
        'https://firebasestorage.googleapis.com/v0/b/soundsfromtheweb.appspot.com/o/testopname.WAV?alt=media&token=93d2eff7-542d-4e38-9a1b-77466fa8f521',
    },
  }));

  it('expect to contain a button and a h1 with text testopname', () => {
    const { getByTestId } = render(<SoundComponent />);

    const button = getByTestId('btn');
    expect(button).toBeEnabled();

    expect(screen.getByText('testopname')).toBeInTheDocument();
  });

  // it('expects to start a download', () => {
  //   const downloadSound = jest.fn();
  //   const { getByText } = render(<SoundComponent />);

  //   fireEvent.click(getByText('Download the high quality WAV'));
  //   expect(downloadSound).toHaveBeenCalled();
  // });
});
