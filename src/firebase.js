import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_IuINyaSX3i5kDvX1cloWUu07OuG5Ur0",
  authDomain: "clone-a50e8.firebaseapp.com",
  projectId: "clone-a50e8",
  storageBucket: "clone-a50e8.appspot.com",
  messagingSenderId: "577731810927",
  appId: "1:577731810927:web:d57bb3b1b48916b3e55f9a",
  measurementId: "G-78ER98KX0X",
};

// Initialize the app on firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initializing the data base
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
