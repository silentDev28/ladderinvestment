import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB1aI47mi9wSmox0GnQb6hMykywMC-5QzI",
  authDomain: "ladder-investment-66d06.firebaseapp.com",
  databaseURL: "https://ladder-investment-66d06.firebaseio.com",
  projectId: "ladder-investment-66d06",
  storageBucket: "ladder-investment-66d06.appspot.com",
  messagingSenderId: "323624126751",
  appId: "1:323624126751:web:2bc314015f9ba32f82482a",
  measurementId: "G-VE3V4QVMK0",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
export const firestore = firebase.firestore();
export const Auth = firebase.auth();
export const Storage = firebase.storage();
