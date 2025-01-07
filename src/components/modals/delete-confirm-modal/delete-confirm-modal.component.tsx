import React, { FC, useState } from "react";
import Modal from "../../ui/modal/modal.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../ui/button/button.component";

type DeleteConfirmModalProps = {
  message: string;
  onSubmit: () => void;
  onClose: () => void;
};

const DeleteConfirmModal: FC<DeleteConfirmModalProps> = ({
  onClose,
  onSubmit,
  message,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      onSubmit();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={onClose} version={"confirm"}>
      <div className="modalBody">
        <p>{message}</p>
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
              onClick={handleSubmit}
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

export default DeleteConfirmModal;
