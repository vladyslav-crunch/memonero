import Deck from "../deck/deck.component";
import { useState } from "react";
import { FC } from "react";

export type CardType = {
  question: string;
  answer: string;
};

export type DeckType = {
  name: string;
  cards: CardType[];
};

const Decks: FC = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);

  const CreateDeck = (): void => {
    // Define a new deck
    const newDeck: DeckType = {
      name: "New Deck", // Example deck name
      cards: [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
      ], // Example cards
    };

    // Add the new deck to the existing array of decks
    setDecks((prevState) => [...prevState, newDeck]);
  };
  return (
    <>
      <h3>All Decks</h3>
      {decks.map((deck, index) => {
        return <Deck deck={deck} key={index} />;
      })}
      <button onClick={CreateDeck}>Create New Deck</button>
    </>
  );
};

export default Decks;
