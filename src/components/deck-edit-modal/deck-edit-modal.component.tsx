import React, { ChangeEvent, FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import Input from "../ui/input/input.component";
import { Deck, editDeckDocument } from "../../utils/firebase/deck";
import { useUserContext } from "../../contexts/user.context";
import { useToasterContext } from "../../contexts/toaster.context";
import DecksToggleButtonGroup from "../decks-toggle-button-group/decks-toggle-button-group.component";
import { toasterTypes } from "../ui/toaster/toaster.component";
import { useDecksRefetchContext } from "../../contexts/decks-refetch.context";
import { ReactComponent as BinIcon } from "../../assets/icons/bin-icon.svg";
import ActionConfirmModal from "../action-confirm-modal/action-confirm-modal.component";

type DeckEditModalProps = {
  onClose: () => void;
  deck: Deck;
};

const DeckEditModal: FC<DeckEditModalProps> = ({ onClose, deck }) => {
  const { user } = useUserContext();
  const { triggerRefetchDecks } = useDecksRefetchContext();
  const { showToast } = useToasterContext();
  const [editedDeck, setEditedDeck] = useState<Deck>(deck);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (user) {
      setIsLoading(true);
      try {
        await editDeckDocument(user, editedDeck);
        showToast("Deck was edited successfully", toasterTypes.success);
      } catch (err) {
        console.log(err);
        showToast("Something went wrong", toasterTypes.error);
      } finally {
        setIsLoading(false);
        triggerRefetchDecks();
      }
      onClose();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditedDeck((prevDeck) => ({ ...prevDeck, deckName: value }));
  };

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsShowConfirmModal(true);
    // if (user) {
    //   try {
    //     await deleteDeckFromDB(user, editedDeck);
    //     showToast("Deck was deleted successfully", toasterTypes.success);
    //     triggerRefetchDecks();
    //   } catch (err) {
    //     console.log(err);
    //     showToast("Something went wrong", toasterTypes.error);
    //   }
    // }
  };

  return (
    <>
      <Modal onClose={onClose}>
        <div className="modalHeader">
          <h2>Edit "{deck.deckName}" deck</h2>
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
                value={editedDeck.deckName}
              />
            </div>
            <div className="modalFormItem">
              <label htmlFor="name" className="form-label">
                Deck type
              </label>
              <DecksToggleButtonGroup
                deck={editedDeck}
                setDeck={setEditedDeck}
              />
            </div>
            <div className="modalFooter">
              <Button
                buttonType={BUTTON_TYPE_CLASSES.orange}
                type={"submit"}
                isLoading={isLoading}
              >
                Edit
              </Button>
              <Button
                onClick={handleDelete}
                style={{ width: "100px", marginLeft: "15px" }}
                buttonType={BUTTON_TYPE_CLASSES.red}
              >
                <BinIcon />
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      {isShowConfirmModal && (
        <ActionConfirmModal
          deck={editedDeck}
          onClose={() => setIsShowConfirmModal(false)}
        />
      )}
    </>
  );
};

export default DeckEditModal;
