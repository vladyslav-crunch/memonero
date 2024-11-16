import Deck from "../deck/deck.component";
import { useEffect, useMemo, useState } from "react";
import { FC } from "react";
import { useUserContext } from "../../contexts/user.context";
import {
  DecksContainer,
  DecksWrapper,
  DecksHeader,
} from "./decks.styles.component";
import { getDecksFromDB } from "../../utils/firebase/firebase.utils";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";
import { ReactComponent as FilterIcon } from "../../assets/icons/fliter-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-icon.svg";
import Spinner from "../ui/spinner/spinner.component";
import DeckCreateModal from "../deck-create-modal/deck-create-modal.component";
import CardAddModal from "../card-add-modal/card-add-modal.component";

type decksProps = {
  searchValue: string;
};

const Decks: FC<decksProps> = ({ searchValue }) => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingNewDeck, setIsCreatingNewDeck] = useState<boolean>(false);
  const [isShowCreateModalWindow, setIsShowCreateModalWindow] =
    useState<boolean>(false);
  const [isShowCardAddModalWindow, setIsShowCardAddModalWindow] =
    useState(false);
  const [deckForCards, setDeckForCards] = useState<DeckType>();
  const { user } = useUserContext();

  const creatingNewDeckStateHandler = (newDeck?: DeckType) => {
    setIsCreatingNewDeck(!isCreatingNewDeck);
    if (newDeck) {
      setDeckForCards(newDeck); // Set the newly created deck for CardAddModal
      setIsShowCardAddModalWindow(true); // Show CardAddModal immediately
    }
  };

  useEffect(() => {
    const getAndSetDecks = async () => {
      setIsLoading(true);
      try {
        setDecks(await getDecksFromDB(user!));
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    getAndSetDecks();
  }, [isCreatingNewDeck]);

  const filterDecks = useMemo(() => {
    return decks.filter((deck) => {
      return deck.deckName.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [decks, searchValue]);

  const showCreateModalDeckHandler = () => {
    setIsShowCreateModalWindow(!isShowCreateModalWindow);
  };

  return (
    <>
      <DecksWrapper>
        <DecksHeader>
          <div>
            <h2>My decks</h2>
          </div>
          <div style={{ display: "flex" }}>
            <FilterIcon />
            <AddIcon onClick={showCreateModalDeckHandler} />
          </div>
        </DecksHeader>
        <DecksContainer>
          {isLoading ? (
            <Spinner />
          ) : (
            filterDecks.map((deck, index) => <Deck deck={deck} key={index} />)
          )}
        </DecksContainer>
      </DecksWrapper>
      {isShowCreateModalWindow && (
        <DeckCreateModal
          onClose={showCreateModalDeckHandler}
          onSubmit={creatingNewDeckStateHandler}
        />
      )}
      {isShowCardAddModalWindow && (
        <CardAddModal
          onClose={() => setIsShowCardAddModalWindow(false)}
          deck={deckForCards!}
        />
      )}
    </>
  );
};

export default Decks;
