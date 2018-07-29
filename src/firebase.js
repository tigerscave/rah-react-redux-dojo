import * as firebase from 'firebase'; 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALZ6XkMdKZ19bN2li-rh2f6Xr-lF6s858",
    authDomain: "diary-f30a4.firebaseapp.com",
    databaseURL: "https://diary-f30a4.firebaseio.com",
    projectId: "diary-f30a4",
    storageBucket: "diary-f30a4.appspot.com",
    messagingSenderId: "340450714096"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes'); 
  