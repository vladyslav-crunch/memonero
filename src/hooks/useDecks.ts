import { useEffect, useMemo, useState } from "react";
import {
  Deck as DeckType,
  getDecksFromDB,
} from "../utils/firebase/firebase.utils";
import { useUserContext } from "../contexts/user.context";
import { useOutletContext } from "react-router-dom";
import { useDecksRefetchContext } from "../contexts/decks-refetch.context";

export default function useDecks() {
  const searchValue: string = useOutletContext();
  const { user } = useUserContext();
  const { shouldRefetchDecks } = useDecksRefetchContext();
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [isDecksLoading, setIsDecksLoading] = useState(false);

  useEffect(() => {
    const getAndSetDecks = async () => {
      setIsDecksLoading(true);
      try {
        setDecks(await getDecksFromDB(user!));
      } catch (e) {
      } finally {
        setIsDecksLoading(false);
      }
    };
    getAndSetDecks();
  }, [shouldRefetchDecks, user]);

  const filteredDecks = useMemo(() => {
    return decks.filter((deck) => {
      return deck.deckName.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [decks, searchValue]);

  return { filteredDecks, isDecksLoading };
}
