// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "first-fuze-393610.firebaseapp.com",
  projectId: "first-fuze-393610",
  storageBucket: "first-fuze-393610.appspot.com",
  messagingSenderId: "929670584882",
  appId: "1:929670584882:web:5744e6c927abc780707a2b",
  measurementId: "G-QG8TJ9H8XQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  app,
};
