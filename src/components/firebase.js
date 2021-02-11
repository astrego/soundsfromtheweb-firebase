import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default new Proxy(
  {
    get database() {
      return firebase.firestore();
    },
    get auth() {
      return firebase.auth();
    },
    providers: {
      get google() {
        return new firebase.auth.GoogleAuthProvider();
      },
    },
  },
  {
    get: function (target, name) {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: process.env.GATSBY_API_KEY,
          authDomain: process.env.GATSBY_AUTH_DOMAIN,
          projectId: process.env.GATSBY_PROJECT_ID,
          storageBucket: process.env.GATSBY_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_ID,
          // apiKey: 'AIzaSyBRR3qAYJ5vPimEvMHGd92GvtLO4wRkH6Y',
          // authDomain: 'soundsfromtheweb.firebaseapp.com',
          // projectId: 'soundsfromtheweb',
          // storageBucket: 'soundsfromtheweb.appspot.com',
          // messagingSenderId: '782788461532',
          // appId: '1:782788461532:web:cd13c98ee5b8ec61144519',
          // measurementId: 'G-198TXLY3YE',
        });
      }

      return target[name];
    },
  }
);

// const firebaseConfig = {
// apiKey: 'AIzaSyBRR3qAYJ5vPimEvMHGd92GvtLO4wRkH6Y',
// authDomain: 'soundsfromtheweb.firebaseapp.com',
// projectId: 'soundsfromtheweb',
// storageBucket: 'soundsfromtheweb.appspot.com',
// messagingSenderId: '782788461532',
// appId: '1:782788461532:web:cd13c98ee5b8ec61144519',
// measurementId: 'G-198TXLY3YE',
//   apiKey: process.env.GATSBY_API_KEY,
//   authDomain: process.env.GATSBY_AUTH_DOMAIN,
//   projectId: process.env.GATSBY_PROJECT_ID,
//   storageBucket: process.env.GATSBY_STORAGE_BUCKET,
//   messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
//   appId: process.env.GATSBY_APP_ID,
//   measurementId: process.env.GATSBY_MEASUREMENT_ID,
// };

// console.log(process.env);
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// export default firebase;
