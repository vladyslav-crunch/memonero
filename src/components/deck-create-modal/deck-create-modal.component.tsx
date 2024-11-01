import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import Input from "../ui/input/input.component";
import { createDeckDocument } from "../../utils/firebase/firebase.utils";
import ToggleButton from "../ui/toggle-button/toggle-button.component";
import { useUserContext } from "../../contexts/user.context";
import { Deck } from "../../utils/firebase/firebase.utils";

type DeckCreateModalProps = {
  onClose: () => void;
  onSubmit: () => void;
};

const DeckCreateModal: FC<DeckCreateModalProps> = ({ onClose, onSubmit }) => {
  const [deck, setDeck] = useState<Deck>({
    deckName: "Unnamed deck",
    deckType: ["normal"],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserContext();

  const handleSubmit = async () => {
    if (user) {
      setIsLoading(true);
      try {
        await createDeckDocument(user, deck);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
      onSubmit();
      onClose();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDeck((prevDeck) => ({ ...prevDeck, deckName: value }));
  };

  const handleToggle = (type: string) => {
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
    <Modal onClose={onClose}>
      <div className="modalHeader">
        <h2>Add new deck</h2>
        <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
      </div>
      <div className="modalBody">
        <form>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Deck name
            </label>
            <Input
              placeholder={"English, History, etc."}
              onChange={handleChange}
            />
          </div>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Deck type
            </label>
            <div className="toggle-buttons">
              <ToggleButton
                label={"Normal"}
                onClick={() => handleToggle("normal")}
                isToggled={deck.deckType.includes("normal")}
              />
              <ToggleButton
                label={"Reversed"}
                onClick={() => handleToggle("reversed")}
                isToggled={deck.deckType.includes("reversed")}
              />
              <ToggleButton
                label={"Typing"}
                onClick={() => handleToggle("typing")}
                isToggled={deck.deckType.includes("typing")}
              />
            </div>
          </div>
          <Button
            type={"button"}
            buttonType={BUTTON_TYPE_CLASSES.orange}
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Create
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default DeckCreateModal;
