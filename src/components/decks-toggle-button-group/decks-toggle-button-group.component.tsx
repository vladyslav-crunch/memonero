import React from "react";
import ToggleButton from "../ui/toggle-button/toggle-button.component";
import { Deck } from "../../utils/firebase/firebase.utils";

type DecksToggleButtonGroupComponentProps = {
  deck: Deck;
  setDeck: React.Dispatch<React.SetStateAction<Deck>>;
};

const DecksToggleButtonGroup = ({
  deck,
  setDeck,
}: DecksToggleButtonGroupComponentProps) => {
  const handleToggle = (
    event: React.MouseEvent<HTMLButtonElement>,
    type: string,
  ) => {
    event.preventDefault();
    setDeck((prevDeck) => {
      const { deckType } = prevDeck;
      if (deckType.includes(type)) {
        if (deckType.length > 1) {
          return {
            ...prevDeck,
            deckType: deckType.filter((t) => t !== type),
          };
        }
        return prevDeck;
      }
      return {
        ...prevDeck,
        deckType: [...deckType, type],
      };
    });
  };

  return (
    <div className="toggle-buttons">
      <ToggleButton
        label={"Normal"}
        onClick={(event) => handleToggle(event, "normal")}
        isToggled={deck.deckType.includes("normal")}
      />
      <ToggleButton
        label={"Reversed"}
        onClick={(event) => handleToggle(event, "reversed")}
        isToggled={deck.deckType.includes("reversed")}
      />
      <ToggleButton
        label={"Typing"}
        onClick={(event) => handleToggle(event, "typing")}
        isToggled={deck.deckType.includes("typing")}
      />
    </div>
  );
};

export default DecksToggleButtonGroup;
