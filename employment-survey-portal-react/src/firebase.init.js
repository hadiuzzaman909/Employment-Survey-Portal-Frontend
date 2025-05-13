// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrt_LXiJSyv15g3MdNEcryrr9KYURUaA",
  authDomain: "employment-survey-app.firebaseapp.com",
  projectId: "employment-survey-app",
  storageBucket: "employment-survey-app.appspot.com",
  messagingSenderId: "1016462744908",
  appId: "1:1016462744908:web:8d4076674f0e87456283e9"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;