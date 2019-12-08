import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDBa4QH0jhqg_vroer6LNKuWoFWPy8O71Y",
    authDomain: "doppleganger-66304.firebaseapp.com",
    databaseURL: "https://doppleganger-66304.firebaseio.com",
    projectId: "doppleganger-66304",
    storageBucket: "doppleganger-66304.appspot.com",
    messagingSenderId: "1081037684146",
    appId: "1:1081037684146:web:faefc4a1e94f07230438ab",
    measurementId: "G-JBNZ5T5QYC"
  };

firebase.initializeApp(config);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });