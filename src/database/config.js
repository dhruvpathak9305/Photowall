import * as firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyCRDdw8wNIjbw2v_D7TgBascGz0SAvgbKA",
    authDomain: "photowa-8d0e4.firebaseapp.com",
    databaseURL: "https://photowa-8d0e4.firebaseio.com",
    projectId: "photowa-8d0e4",
    storageBucket: "photowa-8d0e4.appspot.com",
    messagingSenderId: "531254974244",
    appId: "1:531254974244:web:5e55a77208d300964cc5b1",
    measurementId: "G-MWPRJW7JM6"
  };
  firebase.initializeApp(firebaseConfig);

  const database=firebase.database()

  export {database}