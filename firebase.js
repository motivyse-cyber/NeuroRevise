import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPoDscRawhdQKQYyv_x78c79-eygtgr2k",
  authDomain: "neurorevise-23193.firebaseapp.com",
  projectId: "neurorevise-23193",
  storageBucket: "neurorevise-23193.firebasestorage.app",
  messagingSenderId: "540365952465",
  appId: "1:540365952465:web:49320045eeb12820a2fcf0",
  measurementId: "G-4GF7CP9J47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
