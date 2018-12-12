import fire from 'firebase';

const config = {
  apiKey: "AIzaSyAQyj7KooOboRGAOFDsQbV5FbEXcSeisEM",
  authDomain: "ads-hungry-games.firebaseapp.com",
  databaseURL: "https://ads-hungry-games.firebaseio.com",
  projectId: "ads-hungry-games",
  storageBucket: "ads-hungry-games.appspot.com",
  messagingSenderId: "723138714103"
};
const firebase = fire.initializeApp(config);
export default firebase;
