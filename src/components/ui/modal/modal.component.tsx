import { FC } from "react";
import { ModalWindowOverlay, MotionModalWindowWrapper } from "./modal.styles";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose: () => void;
  version?: string;
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ onClose, children, version }) => {
  return ReactDOM.createPortal(
    <>
      <ModalWindowOverlay onClick={onClose} version={version}>
        {" "}
      </ModalWindowOverlay>
      <MotionModalWindowWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        version={version}
      >
        {children}
      </MotionModalWindowWrapper>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
