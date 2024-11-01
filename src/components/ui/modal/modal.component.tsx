import { FC } from "react";
import { ModalWindowOverlay, MotionModalWindowWrapper } from "./modal.styles";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalWindowOverlay onClick={onClose}> </ModalWindowOverlay>
      <MotionModalWindowWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </MotionModalWindowWrapper>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
