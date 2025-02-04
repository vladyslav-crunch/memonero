import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/user.context";
import { Card, getCardsFromDB } from "../../utils/firebase/card";
import { CardListTableContainer, CardListTopSection } from "./card-list.style";
import Checkbox from "../../components/ui/checkbox/checkbox.component";
import DecksDropdown from "../../components/decks/decks-dropdown/decks-dropdown.component";
import { Deck, getDecksFromDB } from "../../utils/firebase/deck";

const CardList = () => {
  const { user } = useUserContext();
  let { deckId } = useParams();
  const [cards, setCards] = useState<Card[]>([]);
  const [decks, setDecks] = useState<Deck[]>([]);

  const setDecksHandler = async () => {
    setDecks(await getDecksFromDB(user!));
  };

  const setCardsHandler = async () => {
    setCards(await getCardsFromDB(user!, deckId!));
  };

  useEffect(() => {
    setCardsHandler();
    setDecksHandler();
  }, [deckId]);

  return (
    <>
      <CardListTopSection>
        <DecksDropdown decks={decks!} />
      </CardListTopSection>
      <CardListTableContainer>
        <table>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th>Front side</th>
              <th>Back side</th>
              <th>Context</th>
              <th>Interval</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {cards &&
              cards.map((card, index) => (
                <tr key={index}>
                  <td>
                    <Checkbox />
                  </td>
                  <td>{card.front}</td>
                  <td>{card.back}</td>
                  <td>{card.context}</td>
                  <td>{card.intervalStrength}</td>
                  <td>{card.intervalStrength}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </CardListTableContainer>
    </>
  );
};

export default CardList;

//TODO: Change intervalStrength to level when will be created
