import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import Input from "../ui/input/input.component";
import { Card, createCardDocument } from "../../utils/firebase/firebase.utils";
import { useUserContext } from "../../contexts/user.context";
import { Deck } from "../../utils/firebase/firebase.utils";

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

const CardAddModal: FC<DeckCreateModalProps> = ({ onClose, deck }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [card, setCard] = useState<Card>(defaultCardFields);
  const { front, back, context } = card;
  const { user } = useUserContext();
  const resetFormFields = () => setCard(defaultCardFields);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (user) {
      setIsLoading(true);
      try {
        await createCardDocument(user!, deck, card);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        resetFormFields();
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  return (
    <Modal onClose={onClose}>
      <div className="modalHeader">
        <h2>Add new card to {deck.deckName}</h2>
        <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
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
              placeholder={"\n" + "スゴイ量だね！\n"}
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
