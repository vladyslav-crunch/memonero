import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import Input from "../ui/input/input.component";
import { createDeckDocument } from "../../utils/firebase/firebase.utils";
import { useUserContext } from "../../contexts/user.context";
import { Deck } from "../../utils/firebase/firebase.utils";
import DecksToggleButtonGroup from "../decks-toggle-button-group/decks-toggle-button-group.component";

type DeckCreateModalProps = {
  onClose: () => void;
  onSubmit: (createdDeck: Deck) => void;
};

const DeckCreateModal: FC<DeckCreateModalProps> = ({ onClose, onSubmit }) => {
  const { user } = useUserContext();
  const [deck, setDeck] = useState<Deck>({
    deckName: "Unnamed deck",
    deckType: ["normal"],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let newDeck;
    if (user) {
      setIsLoading(true);
      try {
        newDeck = await createDeckDocument(user, deck);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
      let updatedDeck: Deck;
      if (newDeck) {
        updatedDeck = { ...deck, id: newDeck.id };
        onSubmit(updatedDeck);
      }
      onClose();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDeck((prevDeck) => ({ ...prevDeck, deckName: value }));
  };

  return (
    <Modal onClose={onClose}>
      <div className="modalHeader">
        <h2>Add new deck</h2>
        <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
      </div>
      <div className="modalBody">
        <form onSubmit={handleSubmit}>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Deck name
            </label>
            <Input
              placeholder={"English, History, etc."}
              onChange={handleChange}
              maxLength={40}
            />
          </div>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Deck type
            </label>
            <DecksToggleButtonGroup deck={deck} setDeck={setDeck} />
          </div>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.orange}
            type={"submit"}
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
