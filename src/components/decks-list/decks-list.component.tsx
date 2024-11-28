import Spinner from "../ui/spinner/spinner.component";
import Deck from "../deck/deck.component";
import { DecksContainer } from "../decks/decks.styles.component";
import useDecks from "../../hooks/useDecks";

export default function DecksList() {
  const { filteredDecks, isDecksLoading } = useDecks();

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
