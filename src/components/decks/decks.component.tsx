import { useState } from "react";
import { DecksWrapper, DecksHeader } from "./decks.styles.component";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";
import { ReactComponent as FilterIcon } from "../../assets/icons/fliter-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-icon.svg";
import DeckCreateModal from "../deck-create-modal/deck-create-modal.component";
import CardAddModal from "../card-add-modal/card-add-modal.component";
import DecksList from "../decks-list/decksList.component";

const Decks = () => {
  const [isCreatingNewDeck, setIsCreatingNewDeck] = useState<boolean>(false);
  const [isShowCreateModalWindow, setIsShowCreateModalWindow] = useState<boolean>(false);
  const [isShowCardAddModalWindow, setIsShowCardAddModalWindow] = useState<boolean>(false);
  const [deckForCards, setDeckForCards] = useState<DeckType>();
  const creatingNewDeckStateHandler = (newDeck?: DeckType) => {
    setIsCreatingNewDeck(!isCreatingNewDeck);
    if (newDeck) {
      setDeckForCards(newDeck); // Set the newly created deck for CardAddModal
      setIsShowCardAddModalWindow(true); // Show CardAddModal immediately
    }
  };

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
        <DecksList isCreatingNewDeck={isCreatingNewDeck} />
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
