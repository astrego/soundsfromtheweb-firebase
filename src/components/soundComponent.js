import React, { useState, useEffect } from 'react';
import firebase from './firebase';
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
  const [data, setData] = useState(null);

  useEffect(() => {
    firebase.database
      .collection('sounds')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setData(doc.data());
        });
      });
  }, []);

  const downloadSound = async () => {
    try {
      const response = await fetch(data.WAV);
      const blob = await response.blob();
      const filename = `${data.title}.WAV`;
      FileDownload(blob, filename);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <audio controls>
            <source src={data.mp3} type="audio/mpeg" />
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
      )}
    </div>
  );
};

export default SoundComponent;
