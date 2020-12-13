import React from 'react';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAM2Aogb5O82AvJeaXttxr8LkhLXmtCBI",
    authDomain: "webapp-25689.firebaseapp.com",
    databaseURL: "https://webapp-25689.firebaseio.com",
    projectId: "webapp-25689",
    storageBucket: "webapp-25689.appspot.com",
    messagingSenderId: "430089539926",
    appId: "1:430089539926:web:ca8eac6683904a9b60c6f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;