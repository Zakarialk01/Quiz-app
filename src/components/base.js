import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD8IFJp8_0W5tRM-C5uslVMfCxu8tIC59w",
  authDomain: "quiz-803b4.firebaseapp.com",
  projectId: "quiz-803b4",
  storageBucket: "quiz-803b4.appspot.com",
  messagingSenderId: "614045680406",
  appId: "1:614045680406:web:bca8cb125d0b587fdf8637",
  measurementId: "G-H8EVWBSFGB",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
