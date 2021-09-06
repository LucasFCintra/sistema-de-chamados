// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmOkIZmDIGDjo-brykRBt6AFGoRAhHEFI",
  authDomain: "sistema-de-chamados-4a4be.firebaseapp.com",
  projectId: "sistema-de-chamados-4a4be",
  storageBucket: "sistema-de-chamados-4a4be.appspot.com",
  messagingSenderId: "903331595962",
  appId: "1:903331595962:web:a4d7460bd3f4cc619c2483",
  measurementId: "G-DSPD3VLTVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default initializeApp;