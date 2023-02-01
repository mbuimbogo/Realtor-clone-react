// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdm6-vEfxBqiaBSB9YABqPQwVQldLKldI",
  authDomain: "realtor-clone-react-7b724.firebaseapp.com",
  projectId: "realtor-clone-react-7b724",
  storageBucket: "realtor-clone-react-7b724.appspot.com",
  messagingSenderId: "419052327053",
  appId: "1:419052327053:web:2f90afb5ac65bed6aa12c4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()