// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-G5qzbfsdougfSdP9tK8nw1LfTyklZuQ",
  authDomain: "car-ecommerce-79abb.firebaseapp.com",
  projectId: "car-ecommerce-79abb",
  storageBucket: "car-ecommerce-79abb.appspot.com",
  messagingSenderId: "294951461688",
  appId: "1:294951461688:web:38d4d54fa247a7d19e97cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth