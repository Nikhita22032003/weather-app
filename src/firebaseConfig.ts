// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCQ2R3Vt-BcCoE2_HRcVDOOIHmJJr5kUVQ",
  authDomain: "billsplitter-6f44e.firebaseapp.com",
  projectId: "billsplitter-6f44e",
  storageBucket: "billsplitter-6f44e.firebasestorage.app",
  messagingSenderId: "992863368475",
  appId: "1:992863368475:web:3a936732aaa84e72bb0fbe",
  measurementId: "G-T4Z85J9BGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics (works only in browser, not Node.js)
const analytics = getAnalytics(app);

export { app, analytics };
