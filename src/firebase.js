import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWooBZkbSsci5-cf6zXzkNCUg-MvDzccQ",
  authDomain: "netflix-clone-34df4.firebaseapp.com",
  projectId: "netflix-clone-34df4",
  storageBucket: "netflix-clone-34df4.appspot.com",
  messagingSenderId: "891243230281",
  appId: "1:891243230281:web:f2aaa2d115e830a11b3b98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;