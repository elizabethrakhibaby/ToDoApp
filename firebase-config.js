// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYAB4EE07_DV6dIx_YuV8Rt0ymqprHRwk",
    authDomain: "todoapp-a5e37.firebaseapp.com",
    databaseURL: "https://todoapp-a5e37-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todoapp-a5e37",
    storageBucket: "todoapp-a5e37.appspot.com",
    messagingSenderId: "10687679315",
    appId: "1:10687679315:web:b25ea5f447e93b4fceafa6",
    measurementId: "G-48VD0W89XH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
//We can now read and write to our realtime database with the db reference!
