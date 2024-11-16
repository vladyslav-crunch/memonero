import Spinner from "../ui/spinner/spinner.component";
import Deck from "../deck/deck.component";
import { DecksContainer } from "../decks/decks.styles.component";
import useDecks from "../decks/useDecks";

type Props = {
  shouldRefetchDecksTrigger: boolean;
};

export default function DecksList({ shouldRefetchDecksTrigger }: Props) {
  const { filteredDecks, isDecksLoading } = useDecks(shouldRefetchDecksTrigger);

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
