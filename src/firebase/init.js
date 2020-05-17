/*import firebase from "firebase/app";
import firestore from "firebase/firestore";*/
import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAc9t-N30owy2iAHGq9HqhX2GDTtR8hhBM",
  authDomain: "vuechatapp-82314.firebaseapp.com",
  databaseURL: "https://vuechatapp-82314.firebaseio.com",
  projectId: "vuechatapp-82314",
  storageBucket: "vuechatapp-82314.appspot.com",
  messagingSenderId: "302389795875",
  appId: "1:302389795875:web:cf61695553fb65e3a72596",
  measurementId: "G-GDFJNE351L"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firestore snapshots settings
firebaseApp.firestore().settings({});
export default firebaseApp.firestore();
