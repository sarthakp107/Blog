import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBWf_96YvpfnHizzjRJtkRnQzBWzPinXOQ",
    authDomain: "devdiaries-8605f.firebaseapp.com",
    projectId: "devdiaries-8605f",
    storageBucket: "devdiaries-8605f.firebasestorage.app",
    messagingSenderId: "378757966965",
    appId: "1:378757966965:web:88ddff2f2fb4ab77419c3c"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //initialize firestore service
  const projectFirestore = firebase.firestore();

  //initialize auth
  const projectAuth = firebase.auth();

  //timestamp
  const timestamp = firebase.firestore.Timestamp;

  export {projectFirestore, projectAuth, timestamp}