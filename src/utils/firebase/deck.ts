import {
  collection,
  addDoc,
  getDocs,
  getCountFromServer,
  query,
  where,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { User } from "firebase/auth";

export type Deck = {
  deckName: string;
  deckType: string[];
  id?: string;
  numberOfCards?: number;
  numberOfCardsToRepeat?: number;
};

export const createDeckDocument = async (userAuth: User, deck: Deck) => {
  if (!userAuth) return;
  const deckDocRef = await addDoc(
    collection(db, "users", userAuth.uid, "decks"),
    deck,
  );
  return await getDoc(deckDocRef);
};

export const editDeckDocument = async (userAuth: User, deck: Deck) => {
  if (!userAuth?.uid || !deck?.id) throw new Error("Problem with User or Deck");
  const deckDocRef = doc(db, "users", userAuth.uid, "decks", deck.id);
  await setDoc(deckDocRef, deck);
  return await getDoc(deckDocRef);
};

//#TODO Store the numberOfCards and numberOfCardsToRepeat as fields directly in each deck document in the future

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

        return {
          id: doc.id,
          deckName: data?.deckName,
          deckType: data?.deckType,
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

export const deleteDeckFromDB = async (userAuth: User, deck: Deck) => {
  if (!userAuth?.uid || !deck?.id) throw new Error("Problem with User or Deck");
  await deleteDoc(doc(db, "users", userAuth.uid, "decks", deck.id));
};
