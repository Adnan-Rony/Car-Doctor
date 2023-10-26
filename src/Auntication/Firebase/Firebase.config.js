// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmNEgen3uEtActn_n7eKcMKVfSCp45Ce4",
  authDomain: "car-doctor-38e6a.firebaseapp.com",
  projectId: "car-doctor-38e6a",
  storageBucket: "car-doctor-38e6a.appspot.com",
  messagingSenderId: "389168487082",
  appId: "1:389168487082:web:a4e7f22c079b3cfa1c4ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth