import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/user.context";
import { Card, getCardsFromDB } from "../../utils/firebase/card";

const CardList = () => {
  const { user } = useUserContext();
  const { deckId } = useParams();
  const [cards, setCards] = useState<Card[]>();

  const setCardsHandler = async () => {
    setCards(await getCardsFromDB(user!, deckId!));
  };

  useEffect(() => {
    setCardsHandler();
  }, []);

  return (
    <div>
      {cards &&
        cards.map((card: Card, index) => (
          <div key={index}>
            <p>Front: {card.front}</p>
            <p>Back: {card.back}</p>
            <p>Context: {card.context}</p>
          </div>
        ))}
    </div>
  );
};

export default CardList;
