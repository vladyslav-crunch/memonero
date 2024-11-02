import { FC, useState } from "react";
import {
  Card,
  createCardDocument,
  Deck as DeckType,
} from "../../utils/firebase/firebase.utils";
import { useUserContext } from "../../contexts/user.context";
import { DeckContainer } from "./deck.styles";
import DeckMenuModal from "../deck-menu-modal/deck-menu.modal.comonent";

type DeckProps = {
  deck: DeckType;
};

const Deck: FC<DeckProps> = ({ deck }) => {
  const [isShowMenuModalWindow, setIsShowMenuModalWindow] =
    useState<boolean>(false);
  const { user } = useUserContext();
  const card: Card = {
    front: "Front test",
    back: "Back test",
    context: "Front and Back test",
    createdAt: new Date(),
    nextRepetitionTime: new Date(),
    intervalStrength: 0,
  };
  const createCardHandler = async () => {
    await createCardDocument(user!, deck, card);
  };

  const handlerOnClick = () => {
    setIsShowMenuModalWindow(!isShowMenuModalWindow);
  };

  return (
    <>
      <DeckContainer onClick={handlerOnClick}>
        <p>{deck.numberOfCards} cards</p>
        <h3>{deck.deckName}</h3>
        {/*<button onClick={createCardHandler}>Create card</button>*/}
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
