import Spinner from "../ui/spinner/spinner.component";
import Deck from "../deck/deck.component";
import { DecksContainer } from "../decks/decks.styles.component";
import useDecks from "../decks/useDecks";

type Props = {
  isCreatingNewDeck: boolean;
};

export default function DecksList({ isCreatingNewDeck }: Props) {
  const { filteredDecks, isDecksLoading } = useDecks(isCreatingNewDeck);

  return (
    <DecksContainer>
      {isDecksLoading ? (
        <Spinner />
      ) : (
        filteredDecks.map((deck, index) => <Deck deck={deck} key={index} />)
      )}
    </DecksContainer>
  );
}
