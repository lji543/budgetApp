import fire from 'firebase';

const config = {
  apiKey: "AIzaSyCfc3HVcF9joRdxBR3Thq5e6_IbKdMq8ns",
  authDomain: "personalbudgetwebapp.firebaseapp.com",
  databaseURL: "https://personalbudgetwebapp.firebaseio.com",
  projectId: "personalbudgetwebapp",
  storageBucket: "",
  messagingSenderId: "747392590521"
};
const firebase = fire.initializeApp(config);
export default firebase;
