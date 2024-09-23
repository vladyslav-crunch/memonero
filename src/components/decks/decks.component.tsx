import Deck from "../deck/deck.component";
import { useEffect, useState } from "react";
import { FC } from "react";
import { useUserContext } from "../../contexts/user.context";
import {
  DecksContainer,
  DecksWrapper,
  DecksHeader,
} from "./decks.styles.component";
import {
  createDeckDocument,
  getDecksFromDB,
} from "../../utils/firebase/firebase.utils";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";
import { ReactComponent as FilterIcon } from "../../assets/icons/fliter-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-icon.svg";
import Spinner from "../ui/spinner/spinner.component";

type decksProps = {
  searchValue: string;
};

const Decks: FC<decksProps> = ({ searchValue }) => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [filteredDecks, setFilteredDecks] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserContext();

  useEffect(() => {
    const getAndSetDecks = async () => {
      setDecks(await getDecksFromDB(user!));
      setIsLoading(false);
    };
    getAndSetDecks();
  }, []);

  useEffect(() => {
    const newFilteredDecks = decks.filter((deck) => {
      return deck.deckName.toLowerCase().includes(searchValue);
    });
    setFilteredDecks(newFilteredDecks);
  }, [decks, searchValue]);

  const createNewDeckHandler = async () => {
    setIsLoading(true);
    const deck: DeckType = {
      deckName: "NewDeck",
    };

    try {
      await createDeckDocument(user!, deck);
      setDecks(await getDecksFromDB(user!));
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DecksWrapper>
        <DecksHeader>
          <div>
            <h2>My decks</h2>
          </div>
          <div>
            <FilterIcon />
            <AddIcon onClick={createNewDeckHandler} />
          </div>
        </DecksHeader>
        <DecksContainer>
          {isLoading ? (
            <Spinner />
          ) : (
            filteredDecks.map((deck, index) => {
              return <Deck deck={deck} key={index} />;
            })
          )}
        </DecksContainer>
      </DecksWrapper>
    </>
  );
};

export default Decks;
