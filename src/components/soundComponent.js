import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FileDownload from 'js-file-download';

const downloadButtonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  textDecoration: 'none',
  padding: 12,
  borderRadius: 5,
  border: 'none',
  cursor: 'pointer',
};

const SoundComponent = () => {
  const data = useStaticQuery(graphql`
    query SoundQuery {
      sound(title: { eq: "testopname" }) {
        title
        mp3
        WAV
      }
    }
  `);

  const downloadSound = async () => {
    try {
      const response = await fetch(data.sound.WAV);
      const blob = await response.blob();
      const filename = `${data.sound.title}.WAV`;
      FileDownload(blob, filename);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>{data.sound.title}</h1>
      <audio controls>
        <source src={data.sound.mp3} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <br />
      <br />
      <div>
        <button
          data-testid="btn"
          style={downloadButtonStyle}
          onClick={downloadSound}
        >
          Download the high quality WAV
        </button>
      </div>
    </div>
  );
};

export default SoundComponent;
