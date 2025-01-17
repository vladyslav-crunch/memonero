import { FC, useState } from "react";
import { Deck as DeckType } from "../../../utils/firebase/deck";
import { DeckContainer } from "./deck.styles";
import DeckMenuModal from "../deck-modals/deck-menu-modal/deck-menu.modal.component";

type DeckProps = {
  deck: DeckType;
};

const Deck: FC<DeckProps> = ({ deck }) => {
  const [isShowMenuModalWindow, setIsShowMenuModalWindow] =
    useState<boolean>(false);
  const handlerOnClick = () => {
    setIsShowMenuModalWindow(!isShowMenuModalWindow);
  };

  return (
    <>
      <DeckContainer onClick={handlerOnClick}>
        <p>{deck.numberOfCards} cards</p>
        <h3>{deck.deckName}</h3>
        {deck.numberOfCardsToRepeat ? (
          <span>{deck.numberOfCardsToRepeat}</span>
        ) : (
          ""
        )}
      </DeckContainer>
      {isShowMenuModalWindow && (
        <DeckMenuModal onClose={handlerOnClick} deck={deck} />
      )}
    </>
  );
};

export default Deck;
