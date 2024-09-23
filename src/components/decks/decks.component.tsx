import Deck from "../deck/deck.component";
import { useEffect, useState } from "react";
import { FC } from "react";
import { useUserContext } from "../../contexts/user.context";
import { DecksContainer } from "./decks.styles.component";
import {
  createDeckDocument,
  getDecksFromDB,
} from "../../utils/firebase/firebase.utils";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";

const Decks: FC = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    const getAndSetDecks = async () => {
      setDecks(await getDecksFromDB(user!));
    };
    getAndSetDecks();
  }, []);

  const createNewDeckHandler = async () => {
    const deck: DeckType = {
      deckName: "deck1",
    };

    try {
      const deckFromDB = await createDeckDocument(user!, deck);
      console.log(deckFromDB?.id);
    } catch (e) {
      console.log(e);
    }

    console.log("Something needs to be created");
  };

  const showAllDecks = async () => {
    setDecks(await getDecksFromDB(user!));
  };

  return (
    <>
      <DecksContainer>
        <h2>My decks</h2>
        <p>{user?.displayName}</p>
        {decks.map((deck, index) => {
          return <Deck deck={deck} key={index} />;
        })}
        <button onClick={createNewDeckHandler}>Create New Deck</button>
        <button onClick={showAllDecks}>Show all decks</button>
      </DecksContainer>
    </>
  );
};

export default Decks;
