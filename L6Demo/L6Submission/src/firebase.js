import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAA3yVFKAm6ppaP4xZaN3620kBWM1ElceM",
  authDomain: "democpp-12579.firebaseapp.com",
  projectId: "democpp-12579",
  storageBucket: "democpp-12579.appspot.com",
  messagingSenderId: "775288010209",
  appId: "1:775288010209:web:bd775280883048d7d6cea0",
//   measurementId: "G-BG35DRTZ8P"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;