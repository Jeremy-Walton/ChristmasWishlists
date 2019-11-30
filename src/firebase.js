import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAP9f2_UiLvxBV-Gehe7ymphvWW6Q5w518",
  authDomain: "christmas-wishlists.firebaseapp.com",
  databaseURL: "https://christmas-wishlists.firebaseio.com",
  projectId: "christmas-wishlists",
  storageBucket: "christmas-wishlists.appspot.com",
  messagingSenderId: "692666356872",
  appId: "1:692666356872:web:4b863c40a4b77ac9b97b3d",
  measurementId: "G-F80YRR2RBJ"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
