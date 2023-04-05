import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcMC2p5rRLbX01M3VZjk9g0v-E928VnNU",
    authDomain: "warcomms-b86ca.firebaseapp.com",
    projectId: "warcomms-b86ca",
    storageBucket: "warcomms-b86ca.appspot.com",
    messagingSenderId: "186756051699",
    appId: "1:186756051699:web:ac3421f35def017af63d86"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };