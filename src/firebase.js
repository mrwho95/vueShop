import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwTJEmFihkAcfjnG8ZUQW3eC-iusqgRxY",
  authDomain: "vue-shop-45fb5.firebaseapp.com",
  databaseURL: "https://vue-shop-45fb5.firebaseio.com",
  projectId: "vue-shop-45fb5",
  storageBucket: "vue-shop-45fb5.appspot.com",
  messagingSenderId: "517993667640",
  appId: "1:517993667640:web:f73e1e907828439f0adacd",
  measurementId: "G-HC80MFK88E",
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
