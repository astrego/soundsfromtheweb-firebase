import * as React from 'react';
import SoundComponent from '../components/soundComponent';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Sounds from the Web</title>
      <h1 style={headingStyles}>
        Welcome
        <br />
        <span style={headingAccentStyles}>— to Sounds From The Web! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <SoundComponent />
      <br />
      <p style={paragraphStyles}>Version: fri 5 feb 2021, 15:59</p>
    </main>
  );
};

export default IndexPage;
