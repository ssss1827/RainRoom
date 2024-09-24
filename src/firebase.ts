// npm install firebase후 해당 코드를 firebase.ts페이지를 만들어 붙혀놓기 해야함.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu3gZkhMva55ACi1sdh1PFUBLwyN-4BOA",
  authDomain: "rainroom-2cbc4.firebaseapp.com",
  projectId: "rainroom-2cbc4",
  storageBucket: "rainroom-2cbc4.appspot.com",
  messagingSenderId: "608026642040",
  appId: "1:608026642040:web:34eafa2be2ab6ad5750f8d",
  measurementId: "G-KVC8M13M7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
