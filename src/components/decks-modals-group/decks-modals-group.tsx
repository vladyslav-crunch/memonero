import DeckCreateModal from "../deck-create-modal/deck-create-modal.component";
import CardAddModal from "../card-add-modal/card-add-modal.component";
import React, { useState } from "react";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";

type Props = {
  isShowDeckCreateModalWindow: boolean,
  setIsShowDeckCreateModalWindow: React.Dispatch<React.SetStateAction<boolean>>
  setShouldRefetchDecksTrigger: React.Dispatch<React.SetStateAction<boolean>>
};

export default function DecksModalsGroup({
 setShouldRefetchDecksTrigger,
 isShowDeckCreateModalWindow,
 setIsShowDeckCreateModalWindow
}: Props) {
  const [isShowCardAddModalWindow, setIsShowCardAddModalWindow] = useState<boolean>(false);
  const [deckForCards, setDeckForCards] = useState<DeckType>();

  const creatingNewDeckStateHandler = (newDeck?: DeckType) => {
    setShouldRefetchDecksTrigger(prevState => !prevState);
    if (newDeck) {
      setDeckForCards(newDeck); // Set the newly created deck for CardAddModal
      setIsShowCardAddModalWindow(true); // Show CardAddModal immediately
    }
  };

  return (
    <>
      {isShowDeckCreateModalWindow && (
        <DeckCreateModal
          onClose={() => setIsShowDeckCreateModalWindow(prevState => !prevState)}
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