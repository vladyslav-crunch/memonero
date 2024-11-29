import { doc, getDoc, setDoc, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { User } from "firebase/auth";

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
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const getUserInfoFromDB = async (userAuth: User) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.exists() ? userSnapshot.data() : null;
};
