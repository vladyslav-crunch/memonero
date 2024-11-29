import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN1Lotyh9O9gzuYiW6pWdWY8UD4GXa_zQ",
  authDomain: "memonero-4fb1b.firebaseapp.com",
  projectId: "memonero-4fb1b",
  storageBucket: "memonero-4fb1b.appspot.com",
  messagingSenderId: "80154479439",
  appId: "1:80154479439:web:851a757d9fa88c0d4bd33a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
