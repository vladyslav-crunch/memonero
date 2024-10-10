import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  query,
  where,
  getCountFromServer,
  collection,
  DocumentReference,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";

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

export const signInWithGooglePopup = async () => {
  const { user } = await signInWithPopup(auth, provider);
  return user;
};

export const db = getFirestore();

export type AdditionInformation = {
  displayName?: string;
};

export type UserData = {
  createAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User | undefined,
  additionInformation = {} as AdditionInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      });
    } catch (error) {}
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const getUserInfoFromDB = async (userAuth: User) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (userSnapshot.exists()) {
    return userSnapshot.data();
  }
};

export const sendPasswordResetLinkToEmail = async (email: string) => {
  if (!email) return;
  return await sendPasswordResetEmail(auth, email);
};

export type Deck = {
  deckName: string;
  id?: string;
  numberOfCards?: number;
  numberOfCardsToRepeat?: number;
};

export type Card = {
  front: string;
  back: string;
  context?: string;
  createdAt: Date;
  nextRepetitionTime: Date;
  intervalStrength: number;
};

export const createDeckDocument = async (userAuth: User, deck: Deck) => {
  if (!userAuth) {
    return;
  }
  const deckDocRef = await addDoc(
    collection(db, "users", userAuth.uid, "decks"),
    deck,
  );
  const deckSnapshot = await getDoc(deckDocRef);

  return deckSnapshot;
};

export const createCardDocument = async (
  userAuth: User,
  deck: Deck,
  card: Card,
) => {
  if (!userAuth) {
    return;
  }
  if (!deck.id) {
    return;
  }
  const cardDocRef = await addDoc(
    collection(db, "users", userAuth.uid, "decks", deck.id, "cards"),
    card,
  );
  const cardSnapshot = await getDoc(cardDocRef);

  return cardSnapshot;
};

export const getDecksFromDB = async (userAuth: User): Promise<Deck[]> => {
  try {
    const decksSnapshot = await getDocs(
      collection(db, "users", userAuth.uid, "decks"),
    );

    const decks: Deck[] = await Promise.all(
      decksSnapshot.docs.map(async (doc) => {
        const data = doc.data();

        const cardsCollection = collection(
          db,
          "users",
          userAuth.uid,
          "decks",
          doc.id,
          "cards",
        );

        const cardsCollectionSnapshot =
          await getCountFromServer(cardsCollection);

        const q = query(
          cardsCollection,
          where("nextRepetitionTime", "<", new Date()),
        );
        const cardsToRepeatSnapshot = await getCountFromServer(q);
        console.log("count: ", cardsToRepeatSnapshot.data().count);

        return {
          id: doc.id,
          deckName: data?.deckName || "Untitled Deck",
          numberOfCards: cardsCollectionSnapshot.data().count,
          numberOfCardsToRepeat: cardsToRepeatSnapshot.data().count,
        };
      }),
    );

    return decks;
  } catch (error) {
    console.error("Error fetching decks:", error);
    return [];
  }
};

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
