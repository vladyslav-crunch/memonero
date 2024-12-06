import { createContext, FC, ReactNode, useContext, useState } from "react";
import {
  ToasterType,
  toasterTypes,
} from "../components/ui/toaster/toaster.component";
import { v4 as uuidv4 } from "uuid";
import ToasterComponent from "../components/ui/toaster/toaster.component";
import { ToasterContainer } from "../components/ui/toaster/toaster.styles";
import { AnimatePresence } from "framer-motion";
type toasterContextType = {
  showToast: (message: string, type: toasterTypes) => void;
};

const ToasterContext = createContext<toasterContextType>({
  showToast: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const ToasterProvider: FC<UserProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToasterType[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showToast = (message: string, type: toasterTypes): void => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { type: type, text: message, id: id }]);
    setTimeout(() => removeToast(id), 3000);
  };

  console.log(toasts);
  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <ToasterContainer>
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToasterComponent
              key={toast.id}
              type={toast.type}
              text={toast.text}
              id={toast.id}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </ToasterContainer>
    </ToasterContext.Provider>
  );
};

export const useToasterContext = () => useContext(ToasterContext);
