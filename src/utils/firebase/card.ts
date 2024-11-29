import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { User } from "firebase/auth";
import { Deck } from "./deck";

export type Card = {
  front: string;
  back: string;
  context?: string;
  createdAt: Date;
  nextRepetitionTime: Date;
  intervalStrength: number;
};

export const createCardDocument = async (
  userAuth: User,
  deck: Deck,
  card: Card,
) => {
  if (!userAuth || !deck.id) return;
  const cardDocRef = await addDoc(
    collection(db, "users", userAuth.uid, "decks", deck.id, "cards"),
    card,
  );
  return await getDoc(cardDocRef);
};
