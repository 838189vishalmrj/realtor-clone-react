// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLVKI_1yaT8-WdRIGgw3_nWB-5MJca14",
  authDomain: "realtor-clone-react-cc692.firebaseapp.com",
  projectId: "realtor-clone-react-cc692",
  storageBucket: "realtor-clone-react-cc692.appspot.com",
  messagingSenderId: "159349291455",
  appId: "1:159349291455:web:c4ce1e45c89de6a650090a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()