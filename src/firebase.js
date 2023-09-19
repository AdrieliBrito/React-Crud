import * as firebase from "firebase";

var firebaseConfig = {
 apiKey: "AIzaSyCwFSb9JS_73e_s7EyGJs6xNjV9CjQc0dc",
  authDomain: "react-crud-e13ae.firebaseapp.com",
  databaseURL: "https://react-crud-e13ae-default-rtdb.firebaseio.com",
  projectId: "react-crud-e13ae",
  storageBucket: "react-crud-e13ae.appspot.com",
  messagingSenderId: "770687686624",
  appId: "1:770687686624:web:dce79c100e33bd23bd3d85"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();