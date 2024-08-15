import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      //TODO: Зробити вивід помилок на сторінці, а не тільки в консолі
      console.log("error creating the user", error);
    }
  }
  return userDocRef;
};
