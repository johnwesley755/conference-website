// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXo7aSXmcoatQS8S3Y0KUF6VFbRwclJK8",
  authDomain: "conference-49839.firebaseapp.com",
  projectId: "conference-49839",
  storageBucket: "conference-49839.firebasestorage.app",
  messagingSenderId: "539484630234",
  appId: "1:539484630234:web:f729d5bf3a4fa3841049e3",
  measurementId: "G-BT5945N7MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);