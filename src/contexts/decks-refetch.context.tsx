import React, { createContext, useState, ReactNode, useContext } from "react";

interface DecksRefetchContextType {
  shouldRefetchDecks: boolean;
  triggerRefetchDecks: () => void;
}

const DecksRefetchContext = createContext<DecksRefetchContextType>({
  shouldRefetchDecks: false,
  triggerRefetchDecks: () => {},
});

interface DataRefetchProviderProps {
  children: ReactNode; // ReactNode allows any valid React children
}

export const DecksRefetchProvider: React.FC<DataRefetchProviderProps> = ({
  children,
}) => {
  const [shouldRefetchDecks, setShouldRefetch] = useState(false);

  const triggerRefetchDecks = () => setShouldRefetch((prev) => !prev);

  return (
    <DecksRefetchContext.Provider
      value={{ shouldRefetchDecks, triggerRefetchDecks }}
    >
      {children}
    </DecksRefetchContext.Provider>
  );
};

export const useDecksRefetchContext = () => useContext(DecksRefetchContext);
