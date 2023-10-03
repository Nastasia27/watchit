
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtK3QC5VgrHRCklBgV_wYmYejdSaZ9M3A",
  authDomain: "watchit-e18da.firebaseapp.com",
  projectId: "watchit-e18da",
  storageBucket: "watchit-e18da.appspot.com",
  messagingSenderId: "499343371312",
  appId: "1:499343371312:web:be89e1cbc2933729b051f5",
  measurementId: "G-ZR69EZ2BXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);