// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5pBaFwTp9V7R_wpO6_tHVNaiaGdPf6iw",
    authDomain: "pet-guide-f67fb.firebaseapp.com",
    projectId: "pet-guide-f67fb",
    storageBucket: "pet-guide-f67fb.firebasestorage.app",
    messagingSenderId: "454902208921",
    appId: "1:454902208921:web:f8515aee84eb1be5411b08",
    measurementId: "G-0J0RFB6X51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }