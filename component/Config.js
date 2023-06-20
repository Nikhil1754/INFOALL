// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNfQWrQyvI1eYPkExvzJPUbV4znDT7mRA",
  authDomain: "auth-d3543.firebaseapp.com",
  projectId: "auth-d3543",
  storageBucket: "auth-d3543.appspot.com",
  messagingSenderId: "623134649368",
  appId: "1:623134649368:web:f3b75baf88ab6134f3a76d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app);