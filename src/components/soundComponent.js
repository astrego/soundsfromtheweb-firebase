import React from 'react';
import { useStaticQuery, gatsby, graphql } from 'gatsby';
import soundMp3 from '../sounds/testopname.mp3';

const downloadLinkStyle = {
  backgroundColor: 'blue',
  color: 'white',
  textDecoration: 'none',
  padding: 12,
  borderRadius: 5,
};

const SoundComponent = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(
        publicURL: {
          eq: "/static/dfe0312a9e62d182bd5c2a320ae37016/testopname.WAV"
        }
      ) {
        publicURL
      }
    }
  `);

  return (
    <div>
      <h1>Sound Component</h1>
      <audio controls>
        <source src={soundMp3} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <br />
      <br />
      <div>
        <a style={downloadLinkStyle} href={data.file.publicURL} download>
          Download the high quality WAV
        </a>
      </div>
    </div>
  );
};

export default SoundComponent;
