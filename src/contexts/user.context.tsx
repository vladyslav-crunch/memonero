import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User } from "firebase/auth";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

type UserContextType = {
  user: User | null;
  setUser?: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: undefined,
  loading: true,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
