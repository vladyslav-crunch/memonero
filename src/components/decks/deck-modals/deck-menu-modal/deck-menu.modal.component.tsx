import React, { FC, useState } from "react";
import Modal from "../../../ui/modal/modal.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../../ui/button/button.component";
import { Deck } from "../../../../utils/firebase/deck";
import rocketIcon from "../../../../assets/icons/rocket-icon.svg";
import addIcon from "../../../../assets/icons/plus-icon.svg";
import listIcon from "../../../../assets/icons/list-icon.svg";
import editIcon from "../../../../assets/icons/pencil-icon.svg";
import exportIcon from "../../../../assets/icons/export-icon.svg";
import importIcon from "../../../../assets/icons/import-icon.svg";
import CardAddModal from "../card-add-modal/card-add-modal.component";
import DeckEditModal from "../deck-edit-modal/deck-edit-modal.component";
import { useNavigate } from "react-router-dom";

type DeckMenuProps = {
  onClose: () => void;
  deck: Deck;
};

const DeckMenuModal: FC<DeckMenuProps> = ({ onClose, deck }) => {
  const [isShowCardAddModal, setIsShowCardAddModal] = useState(false);
  const [isShowDeckEditModal, setIsShowDeckEditModal] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/cardlist/" + deck.id;
    navigate(path);
  };
  return (
    <>
      <Modal onClose={onClose} version={"menu"}>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={rocketIcon}>
          Start learning
        </Button>
        <Button
          onClick={() => setIsShowCardAddModal(true)}
          buttonType={BUTTON_TYPE_CLASSES.menu}
          icon={addIcon}
        >
          Add new card
        </Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.menu}
          icon={listIcon}
          onClick={routeChange}
        >
          Card list
        </Button>
        <Button
          onClick={() => setIsShowDeckEditModal(true)}
          buttonType={BUTTON_TYPE_CLASSES.menu}
          icon={editIcon}
        >
          Edit deck
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={importIcon}>
          Import cards
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={exportIcon}>
          Export cards
        </Button>
      </Modal>
      {isShowCardAddModal && (
        <CardAddModal
          onClose={() => setIsShowCardAddModal(false)}
          deck={deck}
        />
      )}
      {isShowDeckEditModal && (
        <DeckEditModal
          onClose={() => setIsShowDeckEditModal(false)}
          deck={deck}
        />
      )}
    </>
  );
};

export default DeckMenuModal;
