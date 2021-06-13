import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDpBrif-QlzR6hstY3YuH3p6K2_LXMcw_U",
  authDomain: "slack-8c2be.firebaseapp.com",
  projectId: "slack-8c2be",
  storageBucket: "slack-8c2be.appspot.com",
  messagingSenderId: "256564174313",
  appId: "1:256564174313:web:7f5423a383b7c664a0ff78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
