import React, { FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { Deck, deleteDeckFromDB } from "../../utils/firebase/deck";
import { useUserContext } from "../../contexts/user.context";
import { toasterTypes } from "../ui/toaster/toaster.component";
import { useToasterContext } from "../../contexts/toaster.context";
import { useDecksRefetchContext } from "../../contexts/decks-refetch.context";

type ActionConfirmModalProps = {
  deck?: Deck;
  onClose: () => void;
};

const ActionConfirmModal: FC<ActionConfirmModalProps> = ({ deck, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserContext();
  const { showToast } = useToasterContext();
  const { triggerRefetchDecks } = useDecksRefetchContext();

  const handleSubmit = () => {};

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();

    if (user) {
      setIsLoading(true);
      try {
        await deleteDeckFromDB(user, deck!);
        showToast("Deck was deleted successfully", toasterTypes.success);
        triggerRefetchDecks();
      } catch (err) {
        console.log(err);
        showToast("Something went wrong", toasterTypes.error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Modal onClose={onClose} version={"confirm"}>
      <div className="modalBody">
        <p>
          Are you sure you want to delete <b>"{deck?.deckName}"</b> deck?
        </p>
        <form onSubmit={handleSubmit}>
          <div className="modalFooter">
            <Button
              onClick={onClose}
              buttonType={BUTTON_TYPE_CLASSES.base}
              type={"submit"}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              buttonType={BUTTON_TYPE_CLASSES.red}
              isLoading={isLoading}
            >
              Delete
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ActionConfirmModal;
