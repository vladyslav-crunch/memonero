import DeckCreateModal from "../deck-create-modal/deck-create-modal.component";
import CardAddModal from "../card-add-modal/card-add-modal.component";
import React, { useState } from "react";
import { Deck as DeckType } from "../../utils/firebase/deck";
import { useDecksRefetchContext } from "../../contexts/decks-refetch.context";

type Props = {
  isShowDeckCreateModalWindow: boolean;
  setIsShowDeckCreateModalWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DecksModalsGroupComponent({
  isShowDeckCreateModalWindow,
  setIsShowDeckCreateModalWindow,
}: Props) {
  const [isShowCardAddModalWindow, setIsShowCardAddModalWindow] =
    useState<boolean>(false);
  const [deckForCards, setDeckForCards] = useState<DeckType>();
  const { triggerRefetchDecks } = useDecksRefetchContext();

  const creatingNewDeckStateHandler = (newDeck?: DeckType) => {
    triggerRefetchDecks();
    if (newDeck) {
      setDeckForCards(newDeck);
      setIsShowCardAddModalWindow(true);
    }
  };
  const closeCardAddModalWindow = () => {
    setIsShowCardAddModalWindow(false);
  };

  return (
    <>
      {isShowDeckCreateModalWindow && (
        <DeckCreateModal
          onClose={() =>
            setIsShowDeckCreateModalWindow((prevState) => !prevState)
          }
          onSubmit={creatingNewDeckStateHandler}
        />
      )}
      {isShowCardAddModalWindow && (
        <CardAddModal onClose={closeCardAddModalWindow} deck={deckForCards!} />
      )}
    </>
  );
}
