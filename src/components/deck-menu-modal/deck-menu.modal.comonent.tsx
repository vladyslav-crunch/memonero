import React, { FC, useState } from "react";
import Modal from "../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../ui/button/button.component";
import { Deck } from "../../utils/firebase/firebase.utils";
import rocketIcon from "../../assets/icons/rocket-icon.svg";
import addIcon from "../../assets/icons/plus-icon.svg";
import listIcon from "../../assets/icons/list-icon.svg";
import editIcon from "../../assets/icons/pencil-icon.svg";
import exportIcon from "../../assets/icons/export-icon.svg";
import importIcon from "../../assets/icons/import-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import CardAddModal from "../card-add-modal/card-add-modal.component";
type DeckMenuProps = {
  onClose: () => void;
  deck: Deck;
};

const DeckMenuModal: FC<DeckMenuProps> = ({ onClose, deck }) => {
  const [isShowCardAddModal, setIsShowCardAddModal] = useState(false);
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
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={listIcon}>
          Card list
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={editIcon}>
          Edit deck
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={importIcon}>
          Import cards
        </Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.menu} icon={exportIcon}>
          Export cards
        </Button>
      </Modal>
      {isShowCardAddModal && <CardAddModal onClose={onClose} deck={deck} />}
    </>
  );
};

export default DeckMenuModal;
