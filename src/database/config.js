import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBnC7-4vQ-AtFzyOHAfbL3WOIsbCkFlEdU",
  authDomain: "photowall-f19de.firebaseapp.com",
  databaseURL: "https://photowall-f19de.firebaseio.com",
  projectId: "photowall-f19de",
  storageBucket: "photowall-f19de.appspot.com",
  messagingSenderId: "102277049570"
};
firebase.initializeApp(config);

const database = firebase.database();

export { database };
export default firebase;
