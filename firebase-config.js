import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-j4abUwng25lyPducyH7jTSntOCEbR8g",
    authDomain: "trafix-d277f.firebaseapp.com",
    projectId: "trafix-d277f",
    storageBucket: "trafix-d277f.appspot.com",
    messagingSenderId: "176953695108",
    appId: "1:176953695108:web:f44761cf246fbf9f1a5bd1",
    measurementId: "G-99CNHPH6PC"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
