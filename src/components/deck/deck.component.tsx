import { FC } from "react";
import {
  Card,
  createCardDocument,
  Deck as DeckType,
} from "../../utils/firebase/firebase.utils";
import { useUserContext } from "../../contexts/user.context";
import { DeckContainer } from "./deck.styles";

type DeckProps = {
  deck: DeckType;
};

const Deck: FC<DeckProps> = ({ deck }) => {
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
  return (
    <>
      <DeckContainer
        onClick={() => {
          alert("Here will be menu");
        }}
      >
        <p>{deck.numberOfCards} cards</p>
        <h3>{deck.deckName}</h3>
        {/*<button onClick={createCardHandler}>Create card</button>*/}
        <span>{deck.numberOfCardsToRepeat}</span>
      </DeckContainer>
    </>
  );
};

export default Deck;
