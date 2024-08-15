import { FC } from "react";
import { DeckType } from "../decks/decks.component";

type DeckProps = {
  deck: DeckType;
};

const Deck: FC<DeckProps> = ({ deck }) => {
  return (
    <div>
      <h4>{deck.name}</h4>
      <h5>{deck.cards.length} cards</h5>
    </div>
  );
};

export default Deck;
