import { FC } from "react";
import { Deck as DeckType } from "../../utils/firebase/firebase.utils";

type DeckProps = {
  deck: DeckType;
};

const Deck: FC<DeckProps> = ({ deck }) => {
  return (
    <>
      <h3>Deck name: {deck.deckName}</h3>
      <h4>Deck id: {deck.id}</h4>
    </>
  );
};

export default Deck;
