import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import Input from "../ui/input/input.component";
import { Card, createCardDocument } from "../../utils/firebase/card";
import { useUserContext } from "../../contexts/user.context";
import { Deck } from "../../utils/firebase/deck";
import { useDecksRefetchContext } from "../../contexts/decks-refetch.context";
import { useToasterContext } from "../../contexts/toaster.context";
import { toasterTypes } from "../ui/toaster/toaster.component";

type DeckCreateModalProps = {
  onClose: () => void;
  deck: Deck;
};

const defaultCardFields: Card = {
  front: "",
  back: "",
  context: "",
  createdAt: new Date(),
  nextRepetitionTime: new Date(),
  intervalStrength: 0,
};

let cardCounter = 0;

const CardAddModal: FC<DeckCreateModalProps> = ({ onClose, deck }) => {
  const { triggerRefetchDecks } = useDecksRefetchContext();
  const { showToast } = useToasterContext();
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState<Card>(defaultCardFields);
  const { front, back, context } = card;
  const { user } = useUserContext();
  const resetFormFields = () => setCard({ ...defaultCardFields });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (user) {
      setIsLoading(true);
      try {
        await createCardDocument(user!, deck, card);
        showToast("Card was added successfully", toasterTypes.success);
      } catch (err) {
        console.log(err);
        showToast("Something went wrong", toasterTypes.error);
      } finally {
        cardCounter += 1;
        console.log(cardCounter);
        setIsLoading(false);
        resetFormFields();
      }
    }
  };

  const onCloseHandler = () => {
    console.log(cardCounter);
    cardCounter && triggerRefetchDecks();
    cardCounter = 0;
    onClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  return (
    <Modal onClose={onCloseHandler}>
      <div className="modalHeader">
        <h2>Add new card to {deck.deckName}</h2>
        <CloseIcon onClick={onCloseHandler} style={{ cursor: "pointer" }} />
      </div>
      <div className="modalBody">
        <form onSubmit={handleSubmit}>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Front
            </label>
            <Input
              value={front}
              name={"front"}
              placeholder={"スゴイ"}
              onChange={handleChange}
            />
          </div>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              Back
            </label>
            <Input
              value={back}
              name={"back"}
              placeholder={"Wonderful"}
              onChange={handleChange}
            />
          </div>
          <div className="modalFormItem">
            <label htmlFor="name" className="form-label">
              In context (optional)
            </label>
            <Input
              value={context}
              name={"context"}
              placeholder={"スゴイ量だね！"}
              onChange={handleChange}
            />
          </div>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.orange}
            type={"submit"}
            isLoading={isLoading}
          >
            Add
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default CardAddModal;
