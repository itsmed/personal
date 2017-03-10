import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDyLAYmkg6DPCKDyjAPo6LbZe1j81qMGhg",
  authDomain: "lunch-rush-5c8d2.firebaseapp.com",
  databaseURL: "https://lunch-rush-5c8d2.firebaseio.com",
  storageBucket: "lunch-rush-5c8d2.appspot.com",
  messagingSenderId: "444200460907"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
