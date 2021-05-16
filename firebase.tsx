import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDC6taAQ6mDBqVLE0ps9aDXnly8bGwcOnU",
    authDomain: "poc-nestjs-assignment.firebaseapp.com",
    projectId: "poc-nestjs-assignment",
    storageBucket: "poc-nestjs-assignment.appspot.com",
    messagingSenderId: "241914436406",
    appId: "1:241914436406:web:947f461fbfcd4a27983197"
  };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


